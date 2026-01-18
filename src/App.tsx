import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import * as d3 from 'd3'

function App() {
  const marketShareRef = useRef<SVGSVGElement>(null)
  const growthTrendRef = useRef<SVGSVGElement>(null)
  const genreUsageRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (marketShareRef.current) {
      renderMarketShareChart(marketShareRef.current)
    }
    if (growthTrendRef.current) {
      renderGrowthTrendChart(growthTrendRef.current)
    }
    if (genreUsageRef.current) {
      renderGenreUsageChart(genreUsageRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-gradient-to-b from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-accent border-accent/30 bg-accent/10 px-4 py-2">
              STEAM ANALYTICS REPORT
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              La Era del <span className="text-accent">Mando</span> en PC
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              El PC gaming ya no es solo teclado y ratón. Analizamos cómo millones de usuarios de Steam están migrando hacia los gamepads, impulsados por las consolas portátiles y los juegos cross-platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="glassmorphic border-border hover:scale-[1.02] transition-transform duration-200">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                  <GamepadIcon />
                  <div className="font-mono text-5xl font-bold text-foreground">15%</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">
                    De sesiones activas usan Mando
                  </div>
                  <div className="text-xs text-muted-foreground/70">
                    Un aumento del 300% desde 2018
                  </div>
                </CardContent>
              </Card>

              <Card className="glassmorphic border-border hover:scale-[1.02] transition-transform duration-200">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                  <TrendingUpIcon />
                  <div className="font-mono text-5xl font-bold text-foreground">3.000M+</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">
                    Sesiones de juego anuales
                  </div>
                  <div className="text-xs text-muted-foreground/70">
                    Con entrada de gamepad registrada
                  </div>
                </CardContent>
              </Card>

              <Card className="glassmorphic border-border hover:scale-[1.02] transition-transform duration-200">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                  <ControllerIcon />
                  <div className="font-mono text-5xl font-bold text-foreground">~60%</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">
                    Dominio de Xbox
                  </div>
                  <div className="text-xs text-muted-foreground/70">
                    El estándar de facto en PC (XInput)
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 border-l-4 border-accent pl-4">
                La Guerra de los Controladores
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aunque la libertad de elección es el pilar del PC, existe un claro ganador. Los controladores estilo <strong className="text-foreground">Xbox</strong> dominan el ecosistema debido a su integración nativa con Windows (XInput). Sin embargo, los controladores de <strong className="text-foreground">PlayStation</strong> han visto un crecimiento masivo gracias a un mejor soporte de API en Steam Input y el lanzamiento de exclusivos de Sony en PC.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'oklch(0.60 0.20 150)' }}></div>
                <div className="flex-1">
                  <div className="font-semibold">Xbox (Standard)</div>
                  <div className="text-xs text-muted-foreground">Plug & Play nativo en la mayoría de juegos</div>
                </div>
                <div className="font-mono font-bold text-xl" style={{ color: 'oklch(0.60 0.20 150)' }}>59%</div>
              </div>

              <div className="flex items-center p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'oklch(0.65 0.21 260)' }}></div>
                <div className="flex-1">
                  <div className="font-semibold">PlayStation (DualShock/Sense)</div>
                  <div className="text-xs text-muted-foreground">Crecimiento rápido por ports de Sony</div>
                </div>
                <div className="font-mono font-bold text-xl" style={{ color: 'oklch(0.65 0.21 260)' }}>26%</div>
              </div>

              <div className="flex items-center p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'oklch(0.70 0.22 350)' }}></div>
                <div className="flex-1">
                  <div className="font-semibold">Steam Deck / Otros</div>
                  <div className="text-xs text-muted-foreground">Impulsado por el auge de handhelds</div>
                </div>
                <div className="font-mono font-bold text-xl" style={{ color: 'oklch(0.70 0.22 350)' }}>10%</div>
              </div>
            </div>
          </div>

          <Card className="glassmorphic border-border">
            <CardHeader>
              <CardTitle className="text-xl text-center text-accent">Cuota de Mercado de Dispositivos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[350px] flex items-center justify-center">
                <svg ref={marketShareRef} className="w-full h-full"></svg>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4 italic">
                Datos basados en estadísticas públicas de Steam Input (Estimación 2024)
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        <section>
          <Card className="glassmorphic border-border">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-semibold border-l-4 border-accent pl-4">
                    Tendencia Histórica
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    La adopción no es lineal; es exponencial. En 2018, el uso del mando era una rareza reservada para juegos de deportes. Hoy, con la normalización de géneros como los <em>Souls-like</em> y la mejora de la capa de compatibilidad de Steam, las sesiones diarias se han disparado.
                  </p>
                  <div className="bg-card/50 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-accent mb-2">Factor Clave: Steam Input</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      La tecnología de traducción de Steam permite usar cualquier mando (incluso de Switch) en juegos que solo soportan Xbox. Esto eliminó la barrera de entrada para millones de usuarios.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <svg ref={growthTrendRef} className="w-full h-[400px]"></svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
            <span className="text-accent">Análisis por Género:</span> ¿Dónde se juega con Mando?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="bg-gradient-to-r from-card to-card/50 p-6 rounded-lg border-l-4" style={{ borderColor: 'oklch(0.60 0.20 150)' }}>
                <h3 className="text-xl font-semibold mb-2">Territorio Absoluto</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Los juegos de <strong className="text-foreground">Deportes y Lucha</strong> son prácticamente injugables competitivamente sin un mando analógico. Aquí el uso roza el 99%.
                </p>
              </div>

              <div className="bg-gradient-to-r from-card to-card/50 p-6 rounded-lg border-l-4" style={{ borderColor: 'oklch(0.75 0.19 30)' }}>
                <h3 className="text-xl font-semibold mb-2">El Campo de Batalla Híbrido</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Los <strong className="text-foreground">RPG de Acción</strong> (como Elden Ring o The Witcher) muestran un equilibrio perfecto. Muchos jugadores de PC prefieren la ergonomía del mando para sesiones largas de aventura en tercera persona.
                </p>
              </div>

              <div className="bg-gradient-to-r from-card to-card/50 p-6 rounded-lg border-l-4" style={{ borderColor: 'oklch(0.70 0.22 350)' }}>
                <h3 className="text-xl font-semibold mb-2">La Resistencia del Ratón</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Los <strong className="text-foreground">RTS (Estrategia)</strong> y <strong className="text-foreground">FPS Competitivos</strong> (CS:GO, Valorant) siguen siendo bastiones del teclado y ratón debido a la precisión necesaria, aunque el "Aim Assist" está cambiando esto en títulos como CoD o Apex.
                </p>
              </div>
            </div>

            <Card className="glassmorphic border-border order-1 lg:order-2">
              <CardContent className="p-4">
                <svg ref={genreUsageRef} className="w-full h-[500px]"></svg>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <footer className="text-center space-y-6 py-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Conclusión</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            El PC se ha transformado en una plataforma híbrida. Ya no es necesario sentarse en un escritorio para disfrutar de la biblioteca de Steam. Con más de 87 millones de usuarios usando mando al menos una vez, los desarrolladores ahora priorizan el soporte completo de controlador desde el día uno.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/70">
            <span>Steam Analytics Dashboard</span>
            <span>•</span>
            <span>Fuente: Steam Community Updates & Developer Surveys</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

function GamepadIcon() {
  return (
    <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>
  )
}

function TrendingUpIcon() {
  return (
    <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  )
}

function ControllerIcon() {
  return (
    <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  )
}

function renderMarketShareChart(svg: SVGSVGElement) {
  const width = svg.clientWidth
  const height = svg.clientHeight
  const radius = Math.min(width, height) / 2 - 20

  const data = [
    { label: 'Xbox', value: 59, color: 'oklch(0.60 0.20 150)' },
    { label: 'PlayStation', value: 26, color: 'oklch(0.65 0.21 260)' },
    { label: 'Switch Pro', value: 4, color: 'oklch(0.75 0.19 30)' },
    { label: 'Steam Deck', value: 7, color: 'oklch(0.70 0.22 350)' },
    { label: 'Genéricos', value: 4, color: 'oklch(0.55 0.18 120)' }
  ]

  const g = d3.select(svg)
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`)

  const pie = d3.pie<{ label: string; value: number; color: string }>()
    .value(d => d.value)
    .sort(null)

  const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number; color: string }>>()
    .innerRadius(radius * 0.5)
    .outerRadius(radius)

  const arcs = g.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')

  arcs.append('path')
    .attr('d', arc)
    .attr('fill', d => d.data.color)
    .attr('stroke', 'oklch(0.22 0 0)')
    .attr('stroke-width', 2)
    .style('opacity', 0)
    .transition()
    .duration(800)
    .style('opacity', 1)

  arcs.append('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('text-anchor', 'middle')
    .attr('fill', 'oklch(0.92 0 0)')
    .attr('font-size', '14px')
    .attr('font-weight', 'bold')
    .style('opacity', 0)
    .text(d => `${d.data.value}%`)
    .transition()
    .delay(800)
    .duration(400)
    .style('opacity', 1)
}

function renderGrowthTrendChart(svg: SVGSVGElement) {
  const margin = { top: 20, right: 30, bottom: 40, left: 60 }
  const width = svg.clientWidth - margin.left - margin.right
  const height = svg.clientHeight - margin.top - margin.bottom

  const data = [
    { year: '2018', value: 5.2 },
    { year: '2019', value: 8.1 },
    { year: '2020', value: 14.5 },
    { year: '2021', value: 19.2 },
    { year: '2022', value: 24.8 },
    { year: '2023', value: 32.1 },
    { year: '2024', value: 38.5 }
  ]

  const g = d3.select(svg)
    .attr('width', svg.clientWidth)
    .attr('height', svg.clientHeight)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const x = d3.scaleBand()
    .domain(data.map(d => d.year))
    .range([0, width])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value) as number * 1.1])
    .range([height, 0])

  g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .attr('color', 'oklch(0.65 0 0)')

  g.append('g')
    .call(d3.axisLeft(y))
    .attr('color', 'oklch(0.65 0 0)')

  g.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', -45)
    .attr('x', -height / 2)
    .attr('text-anchor', 'middle')
    .attr('fill', 'oklch(0.65 0 0)')
    .attr('font-size', '12px')
    .text('Millones de Sesiones')

  const line = d3.line<{ year: string; value: number }>()
    .x(d => (x(d.year) ?? 0) + x.bandwidth() / 2)
    .y(d => y(d.value))
    .curve(d3.curveMonotoneX)

  const path = g.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'oklch(0.70 0.19 240)')
    .attr('stroke-width', 3)
    .attr('d', line)

  const totalLength = path.node()?.getTotalLength() ?? 0
  path.attr('stroke-dasharray', totalLength)
    .attr('stroke-dashoffset', totalLength)
    .transition()
    .duration(2000)
    .attr('stroke-dashoffset', 0)

  g.selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => (x(d.year) ?? 0) + x.bandwidth() / 2)
    .attr('cy', d => y(d.value))
    .attr('r', 0)
    .attr('fill', 'oklch(0.70 0.19 240)')
    .attr('stroke', 'oklch(0.92 0 0)')
    .attr('stroke-width', 2)
    .transition()
    .delay((d, i) => i * 300)
    .duration(400)
    .attr('r', 5)
}

function renderGenreUsageChart(svg: SVGSVGElement) {
  const margin = { top: 20, right: 30, bottom: 40, left: 160 }
  const width = svg.clientWidth - margin.left - margin.right
  const height = svg.clientHeight - margin.top - margin.bottom

  const data = [
    { genre: 'Deportes y Carreras', value: 92, color: 'oklch(0.60 0.20 150)' },
    { genre: 'Juegos de Lucha', value: 89, color: 'oklch(0.60 0.20 150)' },
    { genre: 'Soulslike / 3rd Person', value: 75, color: 'oklch(0.65 0.21 260)' },
    { genre: 'Plataformeros', value: 70, color: 'oklch(0.65 0.21 260)' },
    { genre: 'Mundo Abierto / Aventura', value: 55, color: 'oklch(0.75 0.19 30)' },
    { genre: 'MMORPG', value: 30, color: 'oklch(0.75 0.19 30)' },
    { genre: 'FPS (Shooters)', value: 15, color: 'oklch(0.70 0.22 350)' },
    { genre: 'RTS / Estrategia', value: 2, color: 'oklch(0.70 0.22 350)' }
  ]

  const g = d3.select(svg)
    .attr('width', svg.clientWidth)
    .attr('height', svg.clientHeight)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width])

  const y = d3.scaleBand()
    .domain(data.map(d => d.genre))
    .range([0, height])
    .padding(0.2)

  g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d => `${d}%`))
    .attr('color', 'oklch(0.65 0 0)')

  g.append('g')
    .call(d3.axisLeft(y))
    .attr('color', 'oklch(0.92 0 0)')
    .selectAll('text')
    .attr('font-size', '13px')
    .attr('font-weight', '500')

  g.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', 0)
    .attr('y', d => y(d.genre) ?? 0)
    .attr('width', 0)
    .attr('height', y.bandwidth())
    .attr('fill', d => d.color)
    .attr('rx', 4)
    .transition()
    .delay((d, i) => i * 100)
    .duration(800)
    .attr('width', d => x(d.value))

  g.selectAll('.label')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'label')
    .attr('x', d => x(d.value) + 5)
    .attr('y', d => (y(d.genre) ?? 0) + y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .attr('fill', 'oklch(0.92 0 0)')
    .attr('font-size', '13px')
    .attr('font-weight', 'bold')
    .style('opacity', 0)
    .text(d => `${d.value}%`)
    .transition()
    .delay((d, i) => i * 100 + 800)
    .duration(400)
    .style('opacity', 1)
}

export default App
