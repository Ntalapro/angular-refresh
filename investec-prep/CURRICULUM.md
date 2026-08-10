# Angular Interview Prep — Investec Senior Full-Stack (Frontend-heavy)

Target stack: **Angular 16** (Investec runs 14/16), so the tutorial is built on
the classic NgModule + RxJS + zone.js stack, with notes on what changed in
newer versions (signals shipped in 16 as developer preview — great "I know
where the framework is going" material).

Interactive format: each lesson adds real code to this project, then you get
quizzed. You answer in your own words; then you get the model "senior-level"
answer to compare against.

## Roadmap

### Part A — Angular (the priority)

- [ ] **Lesson 1 — Foundations**: NgModules, bootstrapping, component anatomy,
      template syntax (`*ngIf`/`*ngFor`/`ngSwitch`, bindings, `trackBy`),
      getters vs methods in templates.
- [ ] **Lesson 2 — Component communication**: `@Input`/`@Output`,
      `EventEmitter`, two-way binding, content projection (`ng-content`),
      smart vs presentational components, `ViewChild`.
- [ ] **Lesson 3 — Dependency injection deep dive**: providers, injection
      tokens, hierarchical injectors, `providedIn: 'root'` vs component
      providers, `inject()` (new in 14+) — classic senior interview territory.
- [ ] **Lesson 4 — Change detection**: zone.js, `Default` vs `OnPush`, why
      immutability matters, `ChangeDetectorRef`, common performance bugs —
      the #1 senior differentiator topic. Plus: signals (v16 dev preview) and
      where the framework is heading.
- [ ] **Lesson 5 — RxJS & HttpClient**: observables, subjects,
      `switchMap`/`mergeMap`/`concatMap`/`exhaustMap`, subscription
      management (`takeUntil`, `async` pipe), HTTP interceptors (auth, retry,
      error handling).
- [ ] **Lesson 6 — Routing at scale**: lazy-loaded modules, guards,
      resolvers, preloading strategies, route params as observables.
- [ ] **Lesson 7 — Forms**: reactive forms, typed forms (v14+), custom
      validators, async validators, `ControlValueAccessor`, dynamic
      `FormArray` — directly relevant to a business onboarding app.
- [ ] **Lesson 8 — State management & architecture**: service-with-subject
      pattern, facades, NgRx concepts, feature/shared/core module structure.
- [ ] **Lesson 9 — Performance & production readiness**: lazy loading, bundle
      budgets, `trackBy`, pure pipes vs methods, memoisation, profiling,
      `OnPush` at scale.
- [ ] **Lesson 10 — Testing**: TestBed, Karma/Jasmine, component interaction
      tests, `HttpClientTestingModule`, testing observables.

### Part B — Interview storytelling

- [ ] **The Absa story**: framing your Business Onboarding Application
      improvements in STAR format with the right senior vocabulary
      (performance, DX, architecture, delivery impact).

### Part C — Java / Spring Boot back end (after Angular is solid)

- [ ] REST design, controllers/services/repositories, Spring DI vs Angular DI
      (great compare-contrast interview answer), JPA pitfalls, transactions,
      security (JWT), testing.

## How each lesson works

1. We write/modify real code in this project together.
2. You get 3–5 questions — answer in your own words first.
3. You get the model answers with the senior-level framing an interviewer
   wants to hear, plus common traps.
