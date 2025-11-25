export default function Career() {
  const careers = [
    {
      company: "주식회사 콜리",
      period: "2022.12 - 2025.08",
      duration: "2년 9개월",
      position: "개발팀 Android 리드",
      description: "IP 공유 플랫폼 (소셜 플랫폼) - Colley 앱 기술 혁신 및 개발 생산성 극대화",
      achievements: [
        "Clean Architecture 도입 주도 및 MVVM 패턴 적용",
        "Target API 31 → 35 버전 대응, 최신 Android 기능 활용",
        "Volley에서 Retrofit2로 전환, Safe API Call + Coroutine Flow 구현",
        "Hilt(DI) 도입으로 보일러플레이트 최소화 및 확장성 향상",
        "앱 크래시율 0.1%대 달성, 다운로드 2배 이상 증가",
        "Bitbucket에서 Git으로 이전, Git-Flow 협업 도입",
        "Data Store, Coroutine Worker, FFmpeg, Media3 Streaming(HLS) 적용",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      company: "주식회사 호미소프트",
      period: "2021.08 - 2022.12",
      duration: "1년 5개월",
      position: "기술연구소 모바일 팀장",
      description: "이사 서비스 플랫폼 개발",
      achievements: [
        "Carry Box 이사 앱 (유저용/기사용) 신규 개발 및 배포",
        "리액티브 프로그래밍으로 데이터 동시성 제어",
        "JWT 활용 사용자 인증 안정화",
        "서버 드리븐 UI API 스택 구조 개발",
      ],
      color: "from-green-500 to-teal-600",
    },
    {
      company: "주식회사 아이나비모빌리티",
      period: "2021.05 - 2021.08",
      duration: "3개월",
      position: "개발팀 모바일 팀장",
      description: "모빌리티 서비스 개발",
      achievements: [
        "Socket Packet 정의 분석 및 최적화",
        "실시간 통신 구현 및 업무 효율성 강화",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      company: "주식회사 리노커뮤니케이션즈",
      period: "2019.04 - 2021.05",
      duration: "2년 2개월",
      position: "개발팀 과장",
      description: "다양한 Android 앱 개발",
      achievements: [
        "삼성 Smart Bulb IoT 앱 개발 (BLE 통신, IoT 기기 제어)",
        "LED 제조사, SDK 제공사(삼성), Client App 동시 개발",
        "데이터 흐름과 모듈화 중심 아키텍처 설계",
      ],
      color: "from-indigo-500 to-purple-600",
    },
    {
      company: "주식회사 디지털포토",
      period: "2017.04 - 2019.04",
      duration: "2년",
      position: "개발팀 대리",
      description: "Android 앱 개발",
      achievements: [
        "페이퍼리스 금융 솔루션 개발 (전자서명, OCR, 생체인증)",
        "JNI를 활용한 네이티브 모듈 연동",
        "계좌 실명 인증 및 보안 시스템 구현",
      ],
      color: "from-pink-500 to-rose-600",
    },
    {
      company: "주식회사 갈라랩",
      period: "2015.10 - 2016.11",
      duration: "1년 2개월",
      position: "개발팀 대리",
      description: "Android 앱 개발",
      achievements: [
        "태블릿 AR 교육 앱 개발 (Unity 연동)",
        "증강현실 콘텐츠 표시 및 인터랙티브 UI 구현",
      ],
      color: "from-yellow-500 to-orange-600",
    },
    {
      company: "주식회사 엠스원",
      period: "2012.09 - 2015.07",
      duration: "2년 11개월",
      position: "개발팀 과장",
      description: "Android 앱 개발",
      achievements: [
        "씽크 싱크 플러스 강의용 앱 개발 (강사용/학생용)",
        "GCM을 이용한 실시간 퀴즈 게임 구현",
        "JSON 기반 데이터 동기화 및 채팅 기능 개발",
        "이미지 편집 및 동영상 업로드 기능 구현",
      ],
      color: "from-teal-500 to-cyan-600",
    },
    {
      company: "(주)소프트엔지니어스쿨",
      period: "2009.01 - 2009.11",
      duration: "11개월",
      position: "한국무역협회 IT교육센터 교수2실 사원",
      description: "IT 교육 및 강의",
      achievements: [
        "IT Master 백서 제작 (한국-일본 IT 정책 비교 분석)",
        "C/C++ 전임강사 및 강의 진행",
      ],
      color: "from-gray-500 to-gray-700",
    },
  ];

  return (
    <section id="career" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Career
          </span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Career items */}
          <div className="space-y-12">
            {careers.map((career, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                    <div
                      className={`inline-block px-4 py-1 rounded-full text-white text-xs font-semibold mb-3 bg-gradient-to-r ${career.color}`}
                    >
                      {career.duration}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {career.company}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {career.position}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {career.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
                      {career.description}
                    </p>
                    <ul className="space-y-2">
                      {career.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

