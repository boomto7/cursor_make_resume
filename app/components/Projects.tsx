export default function Projects() {
  const projects = [
    {
      title: "프로젝트 1",
      description: "웹 애플리케이션 개발 프로젝트입니다. React와 Next.js를 사용했습니다.",
      tags: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "프로젝트 2",
      description: "백엔드 API 서버 구축 프로젝트입니다. Node.js와 Express를 활용했습니다.",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "프로젝트 3",
      description: "모바일 반응형 웹사이트 제작 프로젝트입니다.",
      tags: ["TypeScript", "Tailwind", "API"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

