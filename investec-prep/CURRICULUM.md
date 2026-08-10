# Angular Interview Prep — Investec Senior Full-Stack (Frontend-heavy)

Interactive tutorial: each lesson adds real code to this project, then you get
quizzed. You answer in your own words; then you get the model "senior-level"
answer to compare against.

## Roadmap

### Part A — Angular (the priority)

- [ ] **Lesson 1 — Foundations, modernised**: bootstrapping, standalone
      components, component anatomy, templates & new control flow
      (`@if`/`@for`/`@switch`), signals vs plain fields.
- [ ] **Lesson 2 — Component communication**: `input()`/`output()` signal APIs,
      `model()` two-way binding, content projection, smart vs presentational
      components.
- [ ] **Lesson 3 — Dependency injection deep dive**: `inject()`, providers,
      injection tokens, hierarchical injectors, `providedIn: 'root'` vs
      component providers — classic senior interview territory.
- [ ] **Lesson 4 — Signals in depth & change detection**: `computed`, `effect`,
      `linkedSignal`, zone.js vs zoneless, `OnPush`, how CD actually works —
      the #1 senior differentiator topic.
- [ ] **Lesson 5 — RxJS & HttpClient**: observables vs signals (when to use
      which), `switchMap`/`mergeMap`/`concatMap`/`exhaustMap`, `toSignal`/
      `toObservable`, HTTP interceptors (auth, retry, error handling).
- [ ] **Lesson 6 — Routing at scale**: lazy loading, functional guards &
      resolvers, route-level providers, preloading strategies.
- [ ] **Lesson 7 — Forms**: reactive forms, typed forms, custom validators,
      async validators, `ControlValueAccessor`, dynamic form arrays — directly
      relevant to a business onboarding app.
- [ ] **Lesson 8 — State management & architecture**: signal stores, service
      layer patterns, facade pattern, NgRx concepts, feature folder structure.
- [ ] **Lesson 9 — Performance & production readiness**: `@defer`, hydration &
      SSR concepts, bundle budgets, `trackBy`/`track`, memoisation, profiling.
- [ ] **Lesson 10 — Testing**: TestBed, component harnesses, testing signals,
      HttpTestingController, marble tests basics.

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
