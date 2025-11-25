export default function Projects() {
  const projects = [
    {
      title: "Colley App",
      period: "2022.12 - 2025.07",
      company: "주식회사 콜리",
      description: "IP 공유 소셜 및 이커머스 플랫폼 (100만+ 다운로드). Clean Architecture 도입 주도, 앱 크래시율 0.1%대 달성, 다운로드 2배 증가. Volley에서 Retrofit2로 전환, MVVM 패턴 적용, Target API 35 대응.",
      tags: ["Kotlin", "MVVM", "Clean Architecture", "Hilt", "Coroutine", "Retrofit2", "Media3"],
      link: "",
    },
    {
      title: "Carry Box - 이사 (유저용)",
      period: "2021.08 - 2022.12",
      company: "주식회사 호미소프트",
      description: "이사 플랫폼 유저용 앱 개발. 리액티브 프로그래밍으로 데이터 동시성 제어, JWT 인증 구현, 서버 드리븐 UI 개발. 소셜 로그인, Firebase Analytics, Adbrix 연동.",
      tags: ["Java", "MVVM", "AAC", "Data Binding", "Firebase", "FCM"],
      link: "",
    },
    {
      title: "Carry Box - 이사 (기사용)",
      period: "2021.09 - 2022.12",
      company: "주식회사 호미소프트",
      description: "이사 플랫폼 기사용 앱 개발. 실시간 위치 추적, 업무 배정 시스템, Push 알림 구현. Firebase Analytics를 통한 사용자 행동 분석.",
      tags: ["Kotlin", "MVVM", "AAC", "Data Binding", "Firebase", "Location"],
      link: "",
    },
    {
      title: "아이나비 모빌리티 앱",
      period: "2021.05 - 2021.08",
      company: "주식회사 아이나비모빌리티",
      description: "모빌리티 서비스 앱 개발. Socket Packet 정의 분석 및 최적화, 실시간 통신 구현. 데이터 흐름 명확성을 위한 아키텍처 개선.",
      tags: ["Android", "Socket", "Real-time", "Optimization"],
      link: "",
    },
    {
      title: "삼성 Smart Bulb IoT",
      period: "2020.05 - 2021.04",
      company: "㈜씨앤제이솔루션",
      description: "LED 제조사, SDK 제공사(삼성), Client App 동시 개발. BLE 통신을 통한 스마트 전구 제어, IoT 기기 연동. 모듈화와 데이터 흐름에 집중한 설계.",
      tags: ["Android", "BLE", "IoT", "Samsung SDK", "Bluetooth"],
      link: "",
    },
    {
      title: "페이퍼리스 금융 솔루션",
      period: "2018.09 - 2020.05",
      company: "㈜씨앤제이솔루션",
      description: "비대면 금융 계약 시스템 개발. 전자서명, OCR 신분증 인식, 생체 인증, 계좌 실명 인증 구현. JNI를 활용한 네이티브 모듈 연동.",
      tags: ["Android", "OCR", "Bio-Auth", "JNI", "Security"],
      link: "",
    },
    {
      title: "태블릿 AR 교육 앱",
      period: "2018.01 - 2018.09",
      company: "㈜씨앤제이솔루션",
      description: "AR 기술을 활용한 교육용 태블릿 앱 개발. Unity와 Android 연동, 증강현실 콘텐츠 표시. 교육 효과 극대화를 위한 인터랙티브 UI 구현.",
      tags: ["Android", "Unity", "AR", "Tablet", "Education"],
      link: "",
    },
    {
      title: "씽크 싱크 플러스 강의용 앱",
      period: "2016 - 2018",
      company: "㈜씨앤제이솔루션",
      description: "강사용/학생용 태블릿 앱 개발. 이미지 편집 및 레이아웃 변경, 동영상 업로드, GCM을 이용한 실시간 퀴즈 게임, JSON 기반 데이터 동기화 및 채팅 기능.",
      tags: ["Android", "Java", "GCM", "Real-time", "Education"],
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
                <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                  {project.company}
                </p>
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

