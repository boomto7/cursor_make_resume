export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-5xl">👨‍💻</span>
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            홍창기
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Android Developer
        </h2>
        <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 mb-4 font-semibold">
          총 경력 13년 2개월 | Android Lead
        </p>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          MVVM-Clean Architecture, Hilt, Coroutine-Flow 기반 대규모 앱 리팩토링 및 신규 서비스 런칭 경험 보유
          <br />
          다양한 산업 분야에서 협업을 진행하며, 새로운 기술 도입과 복잡한 문제 해결에 강점
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}

