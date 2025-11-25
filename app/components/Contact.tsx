export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                연락해주세요
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                프로젝트 협업이나 문의사항이 있으시면 언제든지 연락 주세요!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:boomto7@hotmail.co.kr" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    boomto7@hotmail.co.kr
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔗</span>
                  <a href="https://github.com/boomto7" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    github.com/boomto7
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📝</span>
                  <a href="https://childlike-keyboard-688.notion.site/Project-Resume-349fe7746f484bc1b0bf4fc14ab348eb" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Notion Portfolio
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="space-y-4 w-full">
                <a
                  href="mailto:boomto7@hotmail.co.kr"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
                >
                  이메일 보내기
                </a>
                <a
                  href="https://github.com/boomto7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-900 transition-all"
                >
                  GitHub 방문하기
                </a>
                <a
                  href="https://childlike-keyboard-688.notion.site/Project-Resume-349fe7746f484bc1b0bf4fc14ab348eb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-900 transition-all"
                >
                  Notion 포트폴리오
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

