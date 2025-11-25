export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Android Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              안드로이드 개발자로서 MVVM-Clean Architecture, Hilt, Coroutine-Flow 기반 대규모 앱 리팩토링 및 
              신규 서비스 런칭, 팀 리딩 경험을 보유하고 있습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Colley 앱 개발 시 레거시 구조를 Clean Architecture로 전환하고, 
              앱 크래시율을 0.1% 대로 낮추며 다운로드 수를 2배 이상 증가시켰습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              협업과 회의를 통해 명확한 방향성을 정하고, 새로운 기술이 필요하면 
              적극적으로 학습하여 프로젝트 목표를 달성하는 것을 중요하게 생각합니다.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📱</span>
              <span className="text-gray-700 dark:text-gray-300">Android 전문 개발</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🏗️</span>
              <span className="text-gray-700 dark:text-gray-300">Clean Architecture</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🚀</span>
              <span className="text-gray-700 dark:text-gray-300">대규모 리팩토링 경험</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👥</span>
              <span className="text-gray-700 dark:text-gray-300">팀 리딩 & 협업</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📊</span>
              <span className="text-gray-700 dark:text-gray-300">성과 중심 개발</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

