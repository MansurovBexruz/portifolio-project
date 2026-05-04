import { useRevealAll } from "../hooks/useReveal";
// import { ExternalLink, Star } from "lucide-react";

// const projects = [
//   //   {
//   //     title: "ShopFlow E-Commerce",
//   //     description:
//   //       "A full-featured online store with cart management, Stripe payments, and real-time inventory updates. Built with React and a Supabase backend.",
//   //     image: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600",
//   //     tags: ["React", "TypeScript", "Supabase", "Tailwind"],
//   //     github: "#",
//   //     demo: "#",
//   //     featured: true
//   //   },
//   //   {
//   //     title: "TaskMaster Pro",
//   //     description:
//   //       "A productivity app with drag-and-drop boards, real-time collaboration, and analytics dashboard. Inspired by Trello, built from scratch.",
//   //     image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
//   //     tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
//   //     github: "#",
//   //     demo: "#",
//   //     featured: true
//   //   },
//   //   {
//   //     title: "WeatherNow",
//   //     description:
//   //       "A sleek weather dashboard showing 7-day forecasts, interactive maps, and weather alerts using the OpenWeather API.",
//   //     image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
//   //     tags: ["JavaScript", "CSS", "OpenWeather API"],
//   //     github: "#",
//   //     demo: "#",
//   //     featured: false
//   //   },
//   //   {
//   //     title: "DevBlog Platform",
//   //     description:
//   //       "A markdown-powered blog platform with syntax highlighting, dark mode, and a headless CMS. Fully responsive and SEO-optimized.",
//   //     image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
//   //     tags: ["React", "Tailwind", "Markdown", "SEO"],
//   //     github: "#",
//   //     demo: "#",
//   //     featured: false
//   //   },
//   //   {
//   //     title: "CryptoTrack",
//   //     description:
//   //       "Real-time cryptocurrency price tracker with portfolio management, price alerts, and interactive chart visualizations.",
//   //     image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600",
//   //     tags: ["React", "TypeScript", "Chart.js", "CoinGecko API"],
//   //     github: "#",
//   //     demo: "#",
//   //     featured: false
//   //   },
//   //   {
//   //     title: "RestaurantHub",
//   //     description:
//   //       "Landing page and reservation system for a restaurant. Features online booking, menu showcase, and Google Maps integration.",
//   //     image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
//   //     tags: ["HTML", "CSS", "JavaScript", "Google Maps API"],
//   //     github: "#",
//   //     demo: "#",
//   //     featured: false
//   //   }
// ];


export default function Projects() {
  const containerRef = useRevealAll();

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent" />

      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="section-badge rounded-full px-4 py-1.5 font-mono text-xs">03. Loyihalar</span>
          <h2 className="mt-6 mb-4 text-4xl font-black text-white lg:text-5xl">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          <p className="mx-auto max-w-lg text-slate-400">
            Men yaratgan loyihalar tanlovi — konsepsiyadan tortib ishlab chiqarishgacha.{" "}
          </p>
        </div>

        <h1 className="flex justify-center text-5xl">Not yet</h1>
      </div>
    </section>
  );
}
