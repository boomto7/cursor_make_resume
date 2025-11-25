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
              개발자 소개
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              안녕하세요! 저는 열정적인 개발자입니다. 사용자 중심의 웹 애플리케이션을 
              만드는 것에 관심이 많습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              항상 새로운 기술을 배우고 더 나은 코드를 작성하기 위해 노력하고 있습니다.
              팀워크와 협업을 중요하게 생각하며, 문제 해결 능력을 발휘하는 것을 즐깁니다.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎓</span>
              <span className="text-gray-700 dark:text-gray-300">학습에 대한 열정</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💻</span>
              <span className="text-gray-700 dark:text-gray-300">깔끔한 코드 작성</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🚀</span>
              <span className="text-gray-700 dark:text-gray-300">빠른 문제 해결</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🤝</span>
              <span className="text-gray-700 dark:text-gray-300">원활한 팀 협업</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

