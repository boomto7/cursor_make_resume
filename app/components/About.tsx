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
              여러 산업분야의 앱을 개발하면서 다양한 분야의 사람들과 협업을 진행해왔습니다. 
              개발은 함께 하는 것이란 걸 여러 시행착오를 통해 배웠으며, 어떤 프로젝트를 진행함에 있어서 
              기술을 떠나 사람을 존중하며 의견을 소중히 들어주는 방법을 알게 되었습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              새로운 분야의 개발에 두려움이 없으며, 협업에 있어 제 파트에 대한 책임감을 가지고 
              끝까지 일을 진행합니다. JNI, Unity, BLE, FFmpeg, OpenCV, SocketIO, AR, Media3 Exoplayer 등을 
              학습하여 기업이 원하는 프로덕션을 만족스럽게 만들어냈습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              저의 가장 큰 장점은 저 자신에 대한 솔직한 평가에 빠르게 수긍하여 보완하는 점이라고 생각합니다. 
              최고의 능력을 가진 개발자는 아니지만, 끝까지 포기하지 않고 다소 느리더라도 
              꼭 결과를 만들어내는 개발자입니다.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⏱️</span>
              <span className="text-gray-700 dark:text-gray-300">총 13년 2개월 경력</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🏢</span>
              <span className="text-gray-700 dark:text-gray-300">8개 회사 다양한 산업 경험</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎯</span>
              <span className="text-gray-700 dark:text-gray-300">책임감 있는 프로젝트 완수</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🤝</span>
              <span className="text-gray-700 dark:text-gray-300">원활한 커뮤니케이션</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🚀</span>
              <span className="text-gray-700 dark:text-gray-300">새로운 기술 빠른 적응</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💪</span>
              <span className="text-gray-700 dark:text-gray-300">끝까지 포기하지 않는 끈기</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

