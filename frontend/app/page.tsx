const nextSteps = [
  { number: "01", title: "Perfil de tu mascota", description: "Guardá su información, vacunas, microchip y documentos." },
  { number: "02", title: "Armá el itinerario", description: "Indicá origen, destino, fechas, escalas y medios de transporte." },
  { number: "03", title: "Revisá los requisitos", description: "Consultá qué falta, cuándo hacerlo y de dónde sale cada requisito." },
];

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-[var(--line)] pb-5">
        <a href="/" className="flex items-center gap-3" aria-label="PetRoute inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--green)] text-xl text-white">P</span>
          <span className="text-xl font-semibold tracking-tight">PetRoute</span>
        </a>
        <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--muted)]">Argentina primero · Versión inicial</span>
      </div>

      <section className="mx-auto grid max-w-6xl gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--green-soft)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--green)]">
            VIAJAR CON MASCOTAS, MÁS SIMPLE
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Cada viaje con tu mascota, <span className="text-[var(--green)]">mejor preparado.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Estamos creando un lugar para organizar documentación, requisitos de transporte y fechas importantes para viajar con perros y gatos desde Argentina.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="rounded-xl bg-[var(--green)] px-5 py-3 text-sm font-semibold text-white">Próximamente: planificar viaje</span>
            <span className="text-sm text-[var(--muted)]">Estamos construyendo la primera versión.</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_20px_70px_-45px_rgba(32,37,31,0.35)] sm:p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--muted)]">Tu próximo viaje</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Todo en un mismo plan.</h2>
            </div>
            <span className="rounded-full bg-[var(--green-soft)] px-3 py-1 text-xs font-semibold text-[var(--green)]">Demo</span>
          </div>
          <div className="mt-7 rounded-2xl bg-[var(--background)] p-5">
            <div className="flex items-center justify-between">
              <div><p className="text-xs text-[var(--muted)]">ORIGEN</p><p className="mt-1 font-semibold">Argentina</p></div>
              <span className="text-xl text-[var(--green)]" aria-hidden="true">→</span>
              <div className="text-right"><p className="text-xs text-[var(--muted)]">DESTINO</p><p className="mt-1 font-semibold">Tu próximo destino</p></div>
            </div>
            <div className="mt-5 border-t border-[var(--line)] pt-4">
              <div className="flex items-center justify-between text-sm"><span className="text-[var(--muted)]">Documentación</span><span className="font-medium">Por organizar</span></div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e3e7df]"><div className="h-full w-[18%] rounded-full bg-[var(--green)]" /></div>
              <p className="mt-2 text-xs text-[var(--muted)]">Este contenido es ilustrativo; todavía no calcula requisitos reales.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {nextSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--green-soft)] text-xs font-semibold text-[var(--green)]">{step.number}</span>
                <div><h3 className="text-sm font-semibold">{step.title}</h3><p className="mt-1 text-sm leading-5 text-[var(--muted)]">{step.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-[var(--line)] pt-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} PetRoute</span>
        <span>Información clara. Fuentes visibles. Viajes mejor preparados.</span>
      </footer>
    </main>
  );
}
