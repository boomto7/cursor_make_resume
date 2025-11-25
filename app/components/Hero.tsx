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
            안녕하세요
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          저는 개발자입니다
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          웹 개발과 사용자 경험에 열정을 가진 개발자입니다.
          <br />
          새로운 기술을 배우고 멋진 프로젝트를 만드는 것을 좋아합니다.
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

