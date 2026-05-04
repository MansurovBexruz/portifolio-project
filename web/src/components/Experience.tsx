import { useRevealAll } from "../hooks/useReveal";
// import { Award, BookOpen, Briefcase, Calendar } from "lucide-react";

// const experiences = [
//   {
//     type: "work",
//     icon: <Briefcase size={16} className="text-sky-400" />,
//     title: "Freelance Web Developer",
//     org: "Self-Employed",
//     period: "Jan 2024 – Present",
//     color: "border-sky-500/30 bg-sky-500/5",
//     dotColor: "bg-sky-400",
//     points: [
//       "Designed and developed 8+ responsive websites for small businesses",
//       "Built custom React dashboards with data visualizations for clients",
//       "Improved page load performance by 40% through optimization techniques"
//     ]
//   },
//   {
//     type: "work",
//     icon: <Briefcase size={16} className="text-indigo-400" />,
//     title: "Junior Web Developer (Intern)",
//     org: "TechStart Agency",
//     period: "Jun 2023 – Dec 2023",
//     color: "border-indigo-500/30 bg-indigo-500/5",
//     dotColor: "bg-indigo-400",
//     points: [
//       "Collaborated on 3 client projects using React and TypeScript",
//       "Implemented pixel-perfect UI from Figma designs",
//       "Participated in daily standups and code reviews in an Agile team"
//     ]
//   },
//   {
//     type: "cert",
//     icon: <Award size={16} className="text-amber-400" />,
//     title: "Meta Front-End Developer Certificate",
//     org: "Coursera / Meta",
//     period: "Mar 2023",
//     color: "border-amber-500/30 bg-amber-500/5",
//     dotColor: "bg-amber-400",
//     points: [
//       "Completed 9-course professional certificate program",
//       "Covered React, JavaScript, UX/UI design principles",
//       "Built a capstone portfolio project as final assessment"
//     ]
//   },
//   {
//     type: "cert",
//     icon: <Award size={16} className="text-green-400" />,
//     title: "The Odin Project – Full Stack",
//     org: "The Odin Project",
//     period: "Sep 2022 – Feb 2023",
//     color: "border-green-500/30 bg-green-500/5",
//     dotColor: "bg-green-400",
//     points: [
//       "Completed full-stack curriculum covering HTML, CSS, JavaScript, React, Node.js",
//       "Built 15+ projects including an Express REST API and React SPA",
//       "Strong focus on problem-solving and computer science fundamentals"
//     ]
//   },
//   {
//     type: "education",
//     icon: <BookOpen size={16} className="text-rose-400" />,
//     title: "CS50: Introduction to Computer Science",
//     org: "Harvard / edX",
//     period: "Jun 2022",
//     color: "border-rose-500/30 bg-rose-500/5",
//     dotColor: "bg-rose-400",
//     points: [
//       "Completed Harvard's prestigious intro to CS course with distinction",
//       "Topics: algorithms, data structures, C, Python, SQL, web development",
//       "Final project: Full-stack task management application"
//     ]
//   }
// ];

// const certBadges = [
//   { name: "Meta Front-End Developer", issuer: "Coursera", color: "from-sky-500 to-blue-600" },
//   { name: "JavaScript Algorithms", issuer: "freeCodeCamp", color: "from-green-500 to-emerald-600" },
//   { name: "Responsive Web Design", issuer: "freeCodeCamp", color: "from-orange-500 to-amber-600" },
//   { name: "CS50x", issuer: "Harvard / edX", color: "from-red-500 to-rose-600" }
// ];

export default function Experience() {
  const containerRef = useRevealAll();

  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent" />

      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="section-badge rounded-full px-4 py-1.5 font-mono text-xs">04. Tajriba</span>
          <h2 className="mt-6 mb-4 text-4xl font-black text-white lg:text-5xl">
            Experience & <span className="gradient-text">Certificates</span>
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          <p className="mx-auto max-w-lg text-slate-400">
            Mening professional yo'lim va ko'nikmalarimni shakllantirgan o'rganish bosqichlari.
          </p>
        </div>
      </div>

      <h1 className="flex justify-center text-5xl">Not Yet</h1>
    </section>
  );
}
