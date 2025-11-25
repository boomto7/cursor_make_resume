export default function Projects() {
  const projects = [
    {
      title: "Colley App",
      period: "2022.12 - 2025.07",
      description: "IP 공유 소셜 및 이커머스 플랫폼 (100만+ 다운로드). Clean Architecture 도입 주도, 앱 크래시율 0.1%대 달성, 다운로드 2배 증가.",
      tags: ["Kotlin", "MVVM", "Clean Architecture", "Hilt", "Coroutine"],
      link: "https://play.google.com/store/apps/details?id=com.colley",
    },
    {
      title: "Carry Box (유저용/기사용)",
      period: "2021.08 - 2022.12",
      description: "이사 서비스 플랫폼 앱 개발. 데이터 동시성을 위한 리액티브 프로그래밍, JWT 인증, 서버 드리븐 UI 구현.",
      tags: ["Kotlin", "MVVM", "AAC", "Firebase", "RxKotlin"],
      link: "",
    },
    {
      title: "삼성 Smart Bulb",
      period: "2020 - 2021",
      description: "LED 제조사, SDK 제공사(삼성), Client App 동시 개발. BLE 통신 및 IoT 기기 제어 구현.",
      tags: ["Android", "BLE", "IoT", "Socket"],
      link: "",
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
                <span className="text-6xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-semibold">
                  {project.period}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs"
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

