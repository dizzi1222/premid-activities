// Setup

/**
 * Discord Application ID: Diego's Exercism app (1574465540955701381).
 * If you ever switch apps, just replace the string below.
 */
const presence = new Presence({
  clientId: '1574465540955701381',
})

enum ActivityAssets {
  Logo = 'https://assets.exercism.org/meta/android-chrome-512x512.png',
  Writing = 'https://cdn.rcd.gg/PreMiD/resources/writing.png',
  Reading = 'https://cdn.rcd.gg/PreMiD/resources/reading.png',
  Search = 'https://cdn.rcd.gg/PreMiD/resources/search.png',
  Viewing = 'https://cdn.rcd.gg/PreMiD/resources/viewing.png',
}

const SITE_URL = 'https://exercism.org'

/** Locale prefix of translated pages, e.g. `/es-ES/tracks` or `/pt-BR`. */
const LOCALE_PREFIX = /^\/[a-z]{2}(?:-[a-z]{2,4})?(?=\/|$)/i

/** Order matches the `lang` setting values in metadata.json. */
const LANGS = ['en', 'es'] as const

/** Track slugs whose title is not just the slug in Title Case. */
const TRACK_NAMES: Readonly<Record<string, string>> = {
  'abap': 'ABAP',
  'arm64-assembly': 'ARM64 Assembly',
  'awk': 'AWK',
  'batch': 'Batch Script',
  'cfml': 'CFML',
  'cobol': 'COBOL',
  'coffeescript': 'CoffeeScript',
  'cpp': 'C++',
  'csharp': 'C#',
  'delphi': 'Delphi Pascal',
  'fsharp': 'F#',
  'gdscript': 'GDScript',
  'javascript': 'JavaScript',
  'jq': 'jq',
  'lfe': 'Lisp Flavoured Erlang',
  'mips': 'MIPS Assembly',
  'moonscript': 'MoonScript',
  'objective-c': 'Objective-C',
  'ocaml': 'OCaml',
  'perl5': 'Perl',
  'pharo-smalltalk': 'Pharo',
  'php': 'PHP',
  'powershell': 'PowerShell',
  'purescript': 'PureScript',
  'reasonml': 'ReasonML',
  'rescript': 'ReScript',
  'sml': 'Standard ML',
  'sqlite': 'SQLite',
  'typescript': 'TypeScript',
  'vbnet': 'Visual Basic',
  'vimscript': 'Vim script',
  'vlang': 'V',
  'wasm': 'WebAssembly',
  'x86-64-assembly': 'x86-64 Assembly',
  'yamlscript': 'YAMLScript',
}

// Strings

const EN = {
  browsing: 'Browsing Exercism',
  home: 'Viewing the home page',
  dashboard: 'Viewing the dashboard',
  tracks: 'Browsing tracks',
  tracksState: 'Choosing a language',
  track: 'Viewing a track',
  trackState: '{0} track',
  exercises: 'Browsing exercises',
  exercise: 'Viewing {0}',
  exercisePrivate: 'Viewing an exercise',
  solving: 'Solving {0}',
  solvingPrivate: 'Solving an exercise',
  iterations: 'Reviewing iterations of {0}',
  iterationsPrivate: 'Reviewing iterations',
  solutions: 'Community solutions: {0}',
  solutionsPrivate: 'Browsing community solutions',
  digDeeper: 'Digging deeper into {0}',
  digDeeperPrivate: 'Digging deeper into an exercise',
  mentorSession: 'Getting mentored on {0}',
  mentorSessionPrivate: 'Getting mentored',
  concepts: 'Browsing concepts',
  concept: 'Learning {0}',
  conceptPrivate: 'Learning a concept',
  mentoring: 'Mentoring',
  mentoringInbox: 'Checking the inbox',
  mentoringQueue: 'Browsing the queue',
  mentoringDiscussion: 'Mentoring a student',
  mentoringRequest: 'Reviewing a request',
  profile: 'Viewing a profile',
  journey: 'Reviewing their journey',
  community: 'Exploring the community',
  blog: 'Browsing the blog',
  blogPost: 'Reading a blog post',
  docs: 'Reading the docs',
  contributing: 'Contributing to Exercism',
  maintaining: 'Maintaining tracks',
  settings: 'Adjusting settings',
  notifications: 'Checking notifications',
  challenge: 'Taking on a challenge',
  insiders: 'Checking out Insiders',
  donate: 'Supporting Exercism',
  about: 'Learning about Exercism',
  buttonExercise: 'View Exercise',
  buttonTrack: 'View Track',
  buttonProfile: 'View Profile',
  buttonPost: 'Read Post',
}

/** Every translatable text key (English is the reference set). */
type StringKey = keyof typeof EN

const ES: Readonly<Record<StringKey, string>> = {
  browsing: 'Navegando por Exercism',
  home: 'En la página de inicio',
  dashboard: 'Viendo el panel',
  tracks: 'Explorando tracks',
  tracksState: 'Eligiendo un lenguaje',
  track: 'Viendo un track',
  trackState: 'Track de {0}',
  exercises: 'Explorando ejercicios',
  exercise: 'Viendo {0}',
  exercisePrivate: 'Viendo un ejercicio',
  solving: 'Resolviendo {0}',
  solvingPrivate: 'Resolviendo un ejercicio',
  iterations: 'Revisando iteraciones de {0}',
  iterationsPrivate: 'Revisando iteraciones',
  solutions: 'Soluciones de la comunidad: {0}',
  solutionsPrivate: 'Viendo soluciones de la comunidad',
  digDeeper: 'Profundizando en {0}',
  digDeeperPrivate: 'Profundizando en un ejercicio',
  mentorSession: 'Recibiendo mentoría en {0}',
  mentorSessionPrivate: 'Recibiendo mentoría',
  concepts: 'Explorando conceptos',
  concept: 'Aprendiendo {0}',
  conceptPrivate: 'Aprendiendo un concepto',
  mentoring: 'Dando mentoría',
  mentoringInbox: 'Revisando la bandeja',
  mentoringQueue: 'Explorando la cola',
  mentoringDiscussion: 'Mentorizando a un estudiante',
  mentoringRequest: 'Revisando una solicitud',
  profile: 'Viendo un perfil',
  journey: 'Revisando su progreso',
  community: 'Explorando la comunidad',
  blog: 'Explorando el blog',
  blogPost: 'Leyendo un artículo del blog',
  docs: 'Leyendo la documentación',
  contributing: 'Contribuyendo a Exercism',
  maintaining: 'Manteniendo tracks',
  settings: 'Ajustando la configuración',
  notifications: 'Revisando notificaciones',
  challenge: 'Aceptando un reto',
  insiders: 'Viendo Insiders',
  donate: 'Apoyando a Exercism',
  about: 'Conociendo Exercism',
  buttonExercise: 'Ver ejercicio',
  buttonTrack: 'Ver track',
  buttonProfile: 'Ver perfil',
  buttonPost: 'Leer artículo',
}

const STRINGS: Readonly<Record<Lang, Readonly<Record<StringKey, string>>>> = { en: EN, es: ES }

// Types

/** Language of the activity texts. */
type Lang = typeof LANGS[number]

/** Translates a key, replacing `{0}`, `{1}`... with the extra arguments. */
type Translator = (key: StringKey, ...args: string[]) => string

/** A track or an exercise: URL slug plus display title. */
interface INamedSlug {
  slug: string
  title: string
}

/** A presence button (Discord shows at most two). */
interface IButton {
  label: string
  url: string
}

/** What the current page means for the presence. */
interface IRoute {
  /** Top line with specific info (exercise, concept...). */
  details: string
  /** Top line for privacy mode: no names at all. */
  privateDetails: string
  /** Bottom line; hidden in privacy mode. */
  state?: string
  /** Small image when no track icon applies. */
  icon: ActivityAssets
  /** Track of the page, if any (drives the small track icon). */
  track?: INamedSlug
  buttons?: IButton[]
  /** Pages sharing a key share the elapsed timer (exercise page + editor). */
  timerKey: string
}

/** Input of every route matcher. */
interface IRouteContext {
  /** Path segments without locale, e.g. `['tracks', 'rust', 'exercises', 'hello-world', 'edit']`. */
  segments: string[]
  t: Translator
}

/** Returns the route when it recognizes the page, `null` otherwise. */
type RouteMatcher = (ctx: IRouteContext) => IRoute | null

/** Input of {@link matchExercise}. */
interface IExerciseContext {
  t: Translator
  track: INamedSlug
  trackButton: IButton
  exercise: INamedSlug
  /** Sub-page after the exercise slug: `edit`, `iterations`, `solutions`... */
  action?: string
}

// Helpers

/**
 * Builds a translator for one language.
 * @param lang Language of the returned texts.
 * @returns Function that resolves a key and fills its `{n}` placeholders.
 */
function createTranslator(lang: Lang): Translator {
  return (key, ...args) => STRINGS[lang][key].replace(/\{(\d+)\}/g, (_, index: string) => args[Number(index)] ?? '')
}

/**
 * Converts a kebab/snake-case slug into Title Case.
 * @param slug e.g. `hello-world`.
 * @returns e.g. `Hello World`.
 */
function titleCase(slug: string): string {
  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Normalized text of the first element matching a selector.
 * @param selector CSS selector.
 * @returns Trimmed text, or `undefined` when missing/empty.
 */
function textOf(selector: string): string | undefined {
  return document.querySelector(selector)?.textContent?.replace(/\s+/g, ' ').trim() || undefined
}

/**
 * Text of an element's own text nodes, skipping nested tags (concept headings
 * render as `Strings <small>in</small> <img>`).
 * @param selector CSS selector.
 * @returns Trimmed text, or `undefined` when missing/empty.
 */
function ownTextOf(selector: string): string | undefined {
  const text = Array.from(document.querySelector(selector)?.childNodes ?? [])
    .filter(node => node.nodeType === Node.TEXT_NODE)
    .map(node => node.textContent ?? '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text || undefined
}

/**
 * Track slug to display name: editor header, known names, then Title Case.
 * @param slug e.g. `cpp`.
 * @returns e.g. `{ slug: 'cpp', title: 'C++' }`.
 */
function resolveTrack(slug: string): INamedSlug {
  return {
    slug,
    title: textOf('.c-react-wrapper-editor .title .track') ?? TRACK_NAMES[slug] ?? titleCase(slug),
  }
}

/**
 * Exercise slug to display title: editor header, exercise page heading, then Title Case.
 * @param slug e.g. `hello-world`.
 * @param isExercisePage Whether the page is the exercise itself (its `<h1>` is the title).
 * @returns Slug plus title as shown by the site (it may be translated).
 */
function resolveExercise(slug: string, isExercisePage: boolean): INamedSlug {
  return {
    slug,
    title: textOf('.c-react-wrapper-editor .title .exercise')
      ?? (isExercisePage ? textOf('h1') : undefined)
      ?? titleCase(slug),
  }
}

/**
 * PNG version of a track icon. Exercism serves SVG, which Discord can't render,
 * so it goes through the wsrv.nl image proxy (512×512, transparent).
 * @param slug Track slug.
 * @returns Image URL usable as `smallImageKey`.
 */
function trackIconUrl(slug: string): string {
  return `https://wsrv.nl/?url=assets.exercism.org/tracks/${encodeURIComponent(slug)}.svg&w=512&h=512&fit=contain&output=png`
}

// Routes

/** Exercise sub-pages: [details key, privacy key, icon]. Unknown ones count as the exercise page. */
const EXERCISE_ACTIONS: Readonly<Record<string, readonly [StringKey, StringKey, ActivityAssets]>> = {
  edit: ['solving', 'solvingPrivate', ActivityAssets.Writing],
  iterations: ['iterations', 'iterationsPrivate', ActivityAssets.Viewing],
  solutions: ['solutions', 'solutionsPrivate', ActivityAssets.Reading],
  dig_deeper: ['digDeeper', 'digDeeperPrivate', ActivityAssets.Reading],
  approaches: ['digDeeper', 'digDeeperPrivate', ActivityAssets.Reading],
  articles: ['digDeeper', 'digDeeperPrivate', ActivityAssets.Reading],
  mentor_discussions: ['mentorSession', 'mentorSessionPrivate', ActivityAssets.Reading],
  mentor_request: ['mentorSession', 'mentorSessionPrivate', ActivityAssets.Reading],
}

const EXERCISE_PAGE: readonly [StringKey, StringKey, ActivityAssets] = ['exercise', 'exercisePrivate', ActivityAssets.Viewing]

/** Mentoring sub-pages: state key. Student names are never shown. */
const MENTORING_STATES: Readonly<Record<string, StringKey>> = {
  inbox: 'mentoringInbox',
  queue: 'mentoringQueue',
  discussions: 'mentoringDiscussion',
  requests: 'mentoringRequest',
}

/** Sections that only depend on the first segment: [details key, icon, show `<h1>` on sub-pages]. */
const SECTIONS: Readonly<Record<string, readonly [StringKey, ActivityAssets, boolean]>> = {
  '': ['home', ActivityAssets.Viewing, false],
  'dashboard': ['dashboard', ActivityAssets.Viewing, false],
  'journey': ['journey', ActivityAssets.Viewing, false],
  'community': ['community', ActivityAssets.Viewing, false],
  'docs': ['docs', ActivityAssets.Reading, true],
  'contributing': ['contributing', ActivityAssets.Viewing, false],
  'maintaining': ['maintaining', ActivityAssets.Viewing, false],
  'settings': ['settings', ActivityAssets.Viewing, false],
  'notifications': ['notifications', ActivityAssets.Viewing, false],
  'challenges': ['challenge', ActivityAssets.Viewing, true],
  'insiders': ['insiders', ActivityAssets.Viewing, false],
  'donate': ['donate', ActivityAssets.Viewing, false],
  'about': ['about', ActivityAssets.Reading, false],
}

/**
 * Exercise page and its sub-pages (editor, iterations, community solutions...).
 * @param ctx Resolved track/exercise plus the sub-page.
 * @param ctx.t Translator for the chosen language.
 * @param ctx.track Track of the exercise.
 * @param ctx.trackButton "View Track" button, reused as second button.
 * @param ctx.exercise Exercise slug and title.
 * @param ctx.action Sub-page after the exercise slug (`edit`, `iterations`...).
 * @returns Route with exercise + track buttons and a per-exercise timer.
 */
function matchExercise({ t, track, trackButton, exercise, action }: IExerciseContext): IRoute {
  const [detailsKey, privateKey, icon] = (action && EXERCISE_ACTIONS[action]) || EXERCISE_PAGE
  return {
    details: t(detailsKey, exercise.title),
    privateDetails: t(privateKey),
    state: t('trackState', track.title),
    icon,
    track,
    buttons: [
      { label: t('buttonExercise'), url: `${SITE_URL}/tracks/${track.slug}/exercises/${exercise.slug}` },
      trackButton,
    ],
    timerKey: `exercise:${track.slug}/${exercise.slug}`,
  }
}

/** Everything under /tracks: track list, track, exercises, editor, concepts. */
const matchTracks: RouteMatcher = ({ segments, t }) => {
  const [section, trackSlug, area, itemSlug, action] = segments
  if (section !== 'tracks')
    return null
  if (!trackSlug)
    return { details: t('tracks'), privateDetails: t('tracks'), state: t('tracksState'), icon: ActivityAssets.Search, timerKey: 'tracks' }

  const track = resolveTrack(trackSlug)
  const trackButton: IButton = { label: t('buttonTrack'), url: `${SITE_URL}/tracks/${track.slug}` }
  const inTrack = { track, state: t('trackState', track.title), buttons: [trackButton], timerKey: `track:${track.slug}` }

  if (area === 'exercises' && itemSlug)
    return matchExercise({ t, track, trackButton, exercise: resolveExercise(itemSlug, !action), action })
  if (area === 'exercises')
    return { ...inTrack, details: t('exercises'), privateDetails: t('exercises'), icon: ActivityAssets.Search }
  if (area === 'concepts' && itemSlug)
    return { ...inTrack, details: t('concept', ownTextOf('h1') ?? titleCase(itemSlug)), privateDetails: t('conceptPrivate'), icon: ActivityAssets.Reading }
  if (area === 'concepts')
    return { ...inTrack, details: t('concepts'), privateDetails: t('concepts'), icon: ActivityAssets.Search }
  return { ...inTrack, details: t('track'), privateDetails: t('track'), icon: ActivityAssets.Viewing }
}

/** Mentoring area: inbox, queue, discussions, requests. */
const matchMentoring: RouteMatcher = ({ segments: [section, area], t }) => {
  if (section !== 'mentoring')
    return null
  const stateKey = area ? MENTORING_STATES[area] : undefined
  return { details: t('mentoring'), privateDetails: t('mentoring'), state: stateKey && t(stateKey), icon: ActivityAssets.Reading, timerKey: 'mentoring' }
}

/** Public profiles: /profiles/:handle. */
const matchProfile: RouteMatcher = ({ segments: [section, handle], t }) => {
  if (section !== 'profiles' || !handle)
    return null
  return {
    details: t('profile'),
    privateDetails: t('profile'),
    state: `@${handle}`,
    icon: ActivityAssets.Viewing,
    buttons: [{ label: t('buttonProfile'), url: `${SITE_URL}/profiles/${handle}` }],
    timerKey: 'site',
  }
}

/** Blog index and posts. */
const matchBlog: RouteMatcher = ({ segments: [section, post], t }) => {
  if (section !== 'blog')
    return null
  if (!post)
    return { details: t('blog'), privateDetails: t('blog'), icon: ActivityAssets.Search, timerKey: 'site' }
  return {
    details: t('blogPost'),
    privateDetails: t('blogPost'),
    state: textOf('h1'),
    icon: ActivityAssets.Reading,
    buttons: [{ label: t('buttonPost'), url: `${SITE_URL}/blog/${post}` }],
    timerKey: 'site',
  }
}

/** Static sections from {@link SECTIONS}; sub-pages may show their heading. */
const matchSection: RouteMatcher = ({ segments, t }) => {
  const entry = SECTIONS[segments[0] ?? '']
  if (!entry)
    return null
  const [key, icon, headingAsState] = entry
  return {
    details: t(key),
    privateDetails: t(key),
    state: headingAsState && segments.length > 1 ? textOf('h1') : undefined,
    icon,
    timerKey: 'site',
  }
}

const ROUTES: readonly RouteMatcher[] = [matchTracks, matchMentoring, matchProfile, matchBlog, matchSection]

/**
 * Resolves the current page. Strips the locale first (`/es-ES/tracks` → `/tracks`)
 * so it works whatever the site language is.
 * @param pathname `location.pathname`.
 * @param t Translator for the chosen language.
 * @returns First matching route, or a generic "browsing" one.
 */
function resolveRoute(pathname: string, t: Translator): IRoute {
  const segments = pathname.replace(LOCALE_PREFIX, '').split('/').filter(Boolean)
  return ROUTES.reduce<IRoute | null>((found, match) => found ?? match({ segments, t }), null)
    ?? { details: t('browsing'), privateDetails: t('browsing'), icon: ActivityAssets.Viewing, timerKey: 'site' }
}

// Presence

/** Elapsed-time anchor; restarts when the route's timerKey changes. */
let timer = { key: '', start: Math.floor(Date.now() / 1000) }

/**
 * Start timestamp (seconds) for a timer key, restarting it on key change.
 * @param key Route timer key.
 * @returns Unix seconds when the current key started.
 */
function startTimestampFor(key: string): number {
  if (timer.key !== key)
    timer = { key, start: Math.floor(Date.now() / 1000) }
  return timer.start
}

presence.on('UpdateData', async () => {
  const [lang, privacy, showTrackIcon, showTimestamp, showButtons] = await Promise.all([
    presence.getSetting<number>('lang'),
    presence.getSetting<boolean>('privacy'),
    presence.getSetting<boolean>('trackIcon'),
    presence.getSetting<boolean>('timestamp'),
    presence.getSetting<boolean>('buttons'),
  ])
  const route = resolveRoute(document.location.pathname, createTranslator(LANGS[lang] ?? 'es'))
  const track = !privacy && showTrackIcon ? route.track : undefined
  const [firstButton, secondButton] = !privacy && showButtons ? route.buttons ?? [] : []

  const presenceData: PresenceData = {
    name: 'Exercism',
    largeImageKey: ActivityAssets.Logo,
    details: privacy ? route.privateDetails : route.details,
    state: privacy ? undefined : route.state,
    smallImageKey: track ? trackIconUrl(track.slug) : route.icon,
    smallImageText: track?.title,
    startTimestamp: showTimestamp ? startTimestampFor(route.timerKey) : undefined,
    buttons: firstButton ? (secondButton ? [firstButton, secondButton] : [firstButton]) : undefined,
  }

  presence.setActivity(presenceData)
})
