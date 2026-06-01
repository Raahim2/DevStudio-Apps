# DevStudio Apps — Landing & Portfolio Suite

Welcome to the official repository for **DevStudio Apps**. This is a highly focused, performance-optimized, single-page and multi-page landing suite built using **Next.js (App Router)** and **Tailwind CSS**. It showcases your Android portfolio, featuring immersive WebGL shaders, highly interactive isometric vector graphics, and streamlined legal documentation.

---

## 🚀 Key Features

*   **Premium Glassmorphic Navigation:** A floating header featuring real-time backdrop blur filter saturation (`backdrop-blur-lg backdrop-saturate-150`) allowing underlying elements to bleed through organically.
*   **Tactile WebGL Hero Canvas:** An abstract shader animation overlayed with contrast-shielded premium typography and announcement badges.
*   **Holographic Bento Grid:** A three-column technical grid layout utilizing a collapsed 1px border technique (`border-zinc-800`) to guarantee consistent single-pixel grid lines across devices. It contains three interactive, vector isometric animations:
    1.  `RingsGraphic`: Floating blueprint rings with a central glowing core.
    2.  `CubesGraphic`: Floating isometric cubes with individual hover translation vectors.
    3.  `BarsGraphic`: Overlapping isometric parallel plates with dynamic hover focus heights.
*   **Dynamic App Directory Carousel:** A client-side state-driven portfolio mapping your 6 Google Play Store apps with dynamic card glows, custom assets, and automatic route transitions.
*   **Interactive Dedicated Landing Pages:**
    *   `/apps/Counter`: Tactical fully clickable on-screen digital clicker demo.
    *   `/apps/Sharpify`: Fully functional, touch-responsive before/after split comparative slider.
    *   `/apps/Renderly`: Complete, feature-rich 3D mockup designer workspace.
*   **Faintly Drifting 404 Smoke Screen:** A custom, elegant, minimal `not-found` page featuring three layers of procedurally drifting CSS-based gaussian clouds.
*   **Compliant Privacy Policies:** Separate dynamic policies detailing local-first sandboxed architectures, Cloudinary cloud hosting, and Google AdMob/Play Billing compliance.

---

## 📁 Directory Mapping

To help maintain your App Router codebase, here is where each component resides:

```text
src/
├── app/
│   ├── page.js                     # Main DevStudio Landing Page
│   ├── not-found.jsx               # Custom Minimal "Smoky" 404 Page [2]
│   ├── apps/
│   │   ├── page.jsx                # Comprehensive App Directory Grid [1]
│   │   ├── Counter/
│   │   │   ├── page.jsx            # Counter App Landing Page (with Clicker)
│   │   │   └── privacy/
│   │   │       └── page.jsx        # Counter Privacy (Offline + AdMob)
│   │   ├── Sharpify/
│   │   │   ├── page.jsx            # Sharpify Landing Page (with Comparison Slider)
│   │   │   └── privacy/
│   │   │       └── page.jsx        # Sharpify Privacy (AI + Cloudinary)
│   │   └── renderly/
│   │       ├── page.jsx            # Renderly Landing Page (Bento, Timeline)
│   │       └── privacy/
│   │           └── page.jsx        # Renderly Privacy (Local-First + GPU)
└── components/
    ├── commen/
    │   ├── Navbar.jsx              # Glassmorphic Sticky Header
    │   ├── Footer.jsx              # Simplified 4-Column Footer
    │   └── SectionHeader.jsx       # Reusable Dual-Tone Heading Component
    └── landing/
        ├── AppCard.jsx             # Highly customized App Preview Card
        ├── AppsSection.jsx         # Carousel list wrapper
        ├── FeaturesSection.jsx     # Bento Grid layout
        ├── PerfectToolsSection.jsx # Blueprint Bento layout
        └── Graphics/
            ├── RingsGraphic.jsx    # Interactive Hologram SVG
            ├── CubesGraphic.jsx    # Interactive Floating Cubes SVG
            └── BarsGraphic.jsx     # Interactive Parallel Plates SVG
```
