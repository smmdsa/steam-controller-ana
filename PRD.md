# Planning Guide

A data visualization dashboard showcasing Steam controller usage statistics with professional, analytical design that emphasizes clarity and information hierarchy.

**Experience Qualities**: 
1. **Professional** - Corporate presentation quality with clean typography and structured information hierarchy
2. **Analytical** - Data-first approach with clear visual emphasis on statistics and trends
3. **Accessible** - High contrast grayscale foundation ensures readability with strategic color highlights for key metrics

**Complexity Level**: Light Application (multiple features with basic state)
This is an interactive data dashboard with multiple chart visualizations and no complex state management needed - primarily a content showcase with dynamic chart rendering.

## Essential Features

### Interactive Chart Visualizations
- **Functionality**: Render multiple chart types (doughnut, line, horizontal bar) using D3.js to display controller market share, historical growth trends, and genre-specific usage patterns
- **Purpose**: Transform raw statistical data into digestible visual insights
- **Trigger**: Charts render on component mount with smooth entrance animations
- **Progression**: Page loads → Charts animate in sequentially → Users can hover for detailed tooltips → Data persists throughout session
- **Success criteria**: All charts render correctly, tooltips show accurate data, responsive across devices

### Hero Statistics Dashboard
- **Functionality**: Display three key performance indicators with Material Design icons showing total adoption rate, annual sessions, and market leader
- **Purpose**: Immediately communicate the most important findings
- **Trigger**: Visible on page load
- **Progression**: User lands on page → Sees prominent KPI cards → Understands main story at a glance
- **Success criteria**: Statistics are immediately visible and visually distinct from body content

### Narrative Content Sections
- **Functionality**: Structured content blocks with supporting text, lists, and contextual information paired with visualizations
- **Purpose**: Provide context and analysis for the raw data
- **Trigger**: User scrolls through page
- **Progression**: User views chart → Reads accompanying analysis → Understands implications → Moves to next section
- **Success criteria**: Content is scannable, well-structured, and complements visualizations

### Multi-Language Support
- **Functionality**: Toggle between Spanish and English languages with persistent preference storage
- **Purpose**: Make the dashboard accessible to both Spanish and English speaking audiences
- **Trigger**: User clicks ES/EN language toggle buttons in header
- **Progression**: User selects language → All text content updates → Charts re-render with translated labels → Preference saved for future visits
- **Success criteria**: All content translates seamlessly, charts update labels correctly, language preference persists across sessions

## Edge Case Handling

- **No Data Scenarios**: Charts gracefully handle empty datasets (though not applicable here with static data)
- **Mobile Responsiveness**: Charts resize appropriately, text reflows, and card grids stack vertically on small screens
- **Long Labels**: Genre names and controller types wrap intelligently in chart legends and tooltips
- **Browser Compatibility**: D3 charts work across modern browsers with appropriate fallbacks

## Design Direction

The design should evoke a sense of corporate professionalism and analytical rigor - think Bloomberg Terminal meets Google Material Design. The interface should feel like a high-quality business intelligence report: neutral, trustworthy, data-forward, with strategic use of color to draw attention to key insights. The grayscale foundation ensures the data remains the hero while accent colors create visual hierarchy.

## Color Selection

Monochromatic grayscale palette with strategic accent colors for data visualization and key metrics.

- **Primary Color**: `oklch(0.20 0 0)` - Deep charcoal gray for primary text and strong emphasis, communicating authority and professionalism
- **Secondary Colors**: 
  - Background: `oklch(0.15 0 0)` - Near-black for main background providing high contrast
  - Surface: `oklch(0.22 0 0)` - Slightly lighter gray for card surfaces creating subtle depth
  - Border: `oklch(0.30 0 0)` - Medium gray for dividers and borders
- **Accent Color**: `oklch(0.70 0.19 240)` - Vibrant blue for CTAs and data highlights, providing the only chromatic punctuation in an otherwise neutral palette
- **Chart Colors**: 
  - `oklch(0.60 0.20 150)` - Teal for positive/primary data
  - `oklch(0.65 0.21 260)` - Purple for secondary data series
  - `oklch(0.75 0.19 30)` - Orange for tertiary highlights
  - `oklch(0.70 0.22 350)` - Pink accent for critical data points

**Foreground/Background Pairings**:
- Background Dark (`oklch(0.15 0 0)`): Light gray text (`oklch(0.85 0 0)`) - Ratio 8.2:1 ✓
- Surface (`oklch(0.22 0 0)`): Off-white text (`oklch(0.92 0 0)`) - Ratio 11.5:1 ✓
- Accent Blue (`oklch(0.70 0.19 240)`): White text (`oklch(1 0 0)`) - Ratio 5.1:1 ✓
- Muted areas (`oklch(0.30 0 0)`): Mid-gray text (`oklch(0.65 0 0)`) - Ratio 4.8:1 ✓

## Font Selection

Typography should convey precision and clarity with excellent readability at all sizes - characteristics essential for data-heavy interfaces.

- **Primary Font**: IBM Plex Sans - A rational, technical typeface from IBM's design system that bridges corporate professionalism with modern digital design
- **Data Font**: JetBrains Mono - Monospaced font for numerical data ensuring alignment and scanability

**Typographic Hierarchy**:
- H1 (Page Title): IBM Plex Sans Bold / 56px / -0.02em letter spacing / tight line height
- H2 (Section Headers): IBM Plex Sans Semibold / 32px / -0.01em / 1.2 line height
- H3 (Card Titles): IBM Plex Sans Medium / 20px / normal spacing / 1.3 line height
- Body Text: IBM Plex Sans Regular / 16px / normal spacing / 1.6 line height
- Data/Stats: JetBrains Mono Bold / 48px / tabular nums / tight spacing
- Captions: IBM Plex Sans Regular / 13px / 0.01em / 1.4 line height

## Animations

Animations should serve functional purposes - revealing hierarchy, indicating interactivity, and guiding attention. Use sparingly with preference for micro-interactions: subtle fade-ins for content sections as they enter viewport (300ms ease-out), hover state transitions on cards (150ms), and gentle scale transforms on interactive elements. Charts should animate on initial render with staggered entrance (500ms duration, ease-out curves). Avoid gratuitous motion - every animation must enhance comprehension or provide feedback.

## Component Selection

- **Components**: 
  - Card: Base container for charts and content blocks with subtle shadows
  - Badge: Small pill-shaped label for categories ("Informe de Inteligencia")
  - Separator: Horizontal dividers between major sections
  - (Custom) Stat Card: Three-column grid showing KPI with icon, large number, label, and subtext
  - (Custom) List Items: Styled list with color indicators for market share breakdown
  
- **Customizations**: 
  - Custom glassmorphic card variant with backdrop blur and border
  - Custom chart container with fixed aspect ratios and responsive sizing
  - Material Design icon integration using CSS/SVG instead of emoji
  
- **States**: 
  - Cards: Default has subtle shadow, hover increases shadow and adds slight scale (1.02)
  - Interactive elements: Smooth transitions (200ms) on all state changes
  - Charts: Tooltip appears on hover with dark background and crisp typography
  
- **Icon Selection**: 
  - Gamepad icon for controller statistics
  - Trending up arrow for growth metrics
  - Xbox controller outline for market dominance
  - Chart/analytics icons for different data visualization sections
  - Use Material Design iconography style rendered as inline SVGs
  
- **Spacing**: 
  - Section padding: `py-12` (48px vertical)
  - Card padding: `p-6 md:p-8` (24px → 32px)
  - Grid gaps: `gap-6 lg:gap-8` (24px → 32px)
  - Content max-width: `max-w-7xl` (1280px) for optimal reading
  
- **Mobile**: 
  - Hero stats grid: 1 column mobile → 3 columns desktop
  - Main content: Single column mobile → 2-column grid on tablet/desktop
  - Charts: Full width on mobile with reduced height, maintain aspect ratio
  - Typography: Reduce H1 from 56px → 36px on mobile
  - Padding: Reduce from 48px → 24px vertical spacing on small screens
