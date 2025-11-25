export default function Skills() {
  const skills = [
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700" },
    { name: "JavaScript", icon: "📜", color: "from-yellow-400 to-yellow-600" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-teal-400 to-cyan-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
    { name: "Git", icon: "📦", color: "from-orange-500 to-red-600" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

