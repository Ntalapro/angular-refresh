# Investec Interview Crib Sheet — Angular (framed around the Absa Business Onboarding App)

## 1. RxJS & Observables

**Observable vs Promise:** lazy (nothing until subscribe), zero-to-many values,
cancellable (unsubscribe aborts HTTP), composable via operators.

**Subjects:** `Subject` = hot event bus. `BehaviorSubject` = holds current
value, new subscribers get it immediately — backbone of service-based state.

### The big four flattening operators (answer with use cases)

| Operator | Behaviour | Onboarding app example |
|---|---|---|
| `switchMap` | cancel previous | company-name typeahead — stale search responses cancelled |
| `mergeMap` | run in parallel | uploading multiple KYC documents |
| `concatMap` | queue in order | saving wizard steps sequentially |
| `exhaustMap` | ignore new until done | Submit button — double-clicks can't duplicate applications |

```ts
searchResults$ = this.searchTerm$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.searchCompanies(term)),
);
```

**Absa line:** "We had race conditions where a slower earlier response
overwrote a newer one. I replaced nested subscribes with switchMap pipelines
and used exhaustMap on submission to stop duplicate applications."

**Subscriptions:** prefer `async` pipe (auto subscribe/unsubscribe/CD).
Manual: `takeUntil(destroy$)` or `takeUntilDestroyed()` (v16).

**Caching/errors:** `shareReplay(1)` for reference data; `catchError` inside
the inner observable of long-lived streams (or the whole stream dies);
`retry({ count: 2, delay: 1000 })`.

## 2. Calling APIs

- Components never touch HttpClient — typed API services do.
- **Interceptors**: bearer token, correlation IDs, global error → toast,
  loading indicator. One chain, cross-cutting.
- `forkJoin({ a, b })` for parallel one-shot loads (wizard reference data);
  `combineLatest` for ongoing streams.

## 3. Forms (onboarding = forms)

**Reactive over template-driven:** model in the class, synchronous, testable
without DOM, dynamic structures natural.

- **FormArray** for directors/shareholders — dynamic add/remove rows.
- **Custom validator**: pure function `(control) => null | { key: true }` —
  e.g. SA company reg format `YYYY/NNNNNN/NN`.
- **Async validator**: duplicate reg-number check against API; status PENDING.
- **valueChanges + RxJS**: `debounceTime(500) → switchMap(saveDraft)` = autosave.
- **Typed forms** (v14+): `form.value` properly typed.
- **ControlValueAccessor**: adapter letting a custom component plug into
  `formControlName` like a native input.
- Wizard: FormGroup per step, service/store holds accumulated draft, guards
  prevent skipping ahead.

## 4. NgRx

**One-liner:** Redux for Angular — single immutable store, unidirectional
flow: components dispatch **Actions**, pure **Reducers** compute new state,
memoised **Selectors** read it, **Effects** handle side effects (HTTP).

Submit flow: `submitApplication` action → effect (`exhaustMap` → API →
`submitSuccess`/`submitFailure`) → reducer updates → selectors update UI.

**Senior nuance:** NgRx is not the default. Local state stays in components;
BehaviorSubject service for simple shared state. Wizard justified it: state
shared across steps/screens, survives navigation, complex async orchestration,
DevTools time-travel debugging.

Bonus: facade pattern, @ngrx/entity, action hygiene (events not commands).

## 5. Frontend optimisation (three layers)

1. **Load less:** lazy-loaded modules + preloading strategy, bundle budgets in
   angular.json, source-map-explorer, AOT/tree-shaking, CDN/image compression.
2. **Render less:** OnPush (checked only on input reference change / own
   events / async pipe) — requires immutable updates; `trackBy` on every
   `*ngFor`; no heavy getters in templates (pure pipes / precomputed);
   CDK virtual scrolling for long lists.
3. **Perceived:** debounce, optimistic updates, skeletons, shareReplay cache.

**Measure first:** Lighthouse, DevTools Performance, Web Vitals (LCP/INP).

## 6. 60-second Absa STAR story

- **S:** Onboarding app grown organically — wizard state scattered, long
  input chains, duplicated racing API calls, async defects in production.
- **T:** Senior FE dev owning stability and maintainability.
- **A:** NgRx for wizard state (single source of truth, effects for API
  orchestration); smart/presentational refactor; switchMap for searches,
  exhaustMap on submit, shareReplay for reference data, interceptors for
  auth/errors; trackBy + OnPush on lists.
- **R:** Race-condition defects effectively gone, faster screens, new steps
  cheaper to build, time-travel debugging sped up defect investigation.

## 7. Rapid-fire one-liners

- Observable vs Promise → lazy, multi-value, cancellable, composable.
- switchMap vs mergeMap → cancel-previous vs parallel; typeahead vs uploads.
- Memory leaks → async pipe first; takeUntil / takeUntilDestroyed.
- OnPush → input ref change, own events, async pipe; needs immutability.
- NgRx → Action / Reducer / Selector (memoised) / Effect; unidirectional.
- Not NgRx when → local or simple shared state (BehaviorSubject service).
- Reactive forms → model in class, sync, testable, FormArray dynamics.
- Interceptors → auth, errors, correlation IDs, loading.
- Perf first move → measure, then lazy-load, OnPush, trackBy, budgets.
- Signals (16+) → fine-grained reactivity, memoised computed, path to
  zoneless; dev preview in 16.
