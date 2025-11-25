export default function Career() {
  const careers = [
    {
      company: "주식회사 콜리",
      period: "2022.12 - 2025.08",
      duration: "2년 9개월",
      position: "개발팀 연구원 파트장",
      description: "Colley 앱 기술 혁신 및 개발 생산성 극대화",
      achievements: [
        "Clean Architecture 도입 주도 및 MVVM 패턴 적용",
        "Target API 31 → 35 버전 대응 및 최신 Android 기능 활용",
        "Volley에서 Retrofit2로 전환, Safe API Call 구현",
        "Hilt 도입으로 보일러플레이트 최소화 및 확장성 향상",
        "앱 크래시율 0.1%대 달성, 다운로드 2배 이상 증가",
        "Git-Flow 협업 도입으로 팀 생산성 향상",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      company: "주식회사 호미소프트",
      period: "2021.05 - 2022.12",
      duration: "1년 8개월",
      position: "개발팀 책임연구원 팀장",
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
      duration: "4개월",
      position: "개발팀 과장 팀장",
      description: "모빌리티 서비스 개발",
      achievements: [
        "Socket Packet 정의 분석 및 최적화",
        "실시간 통신 구현 및 업무 효율성 강화",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      company: "㈜씨앤제이솔루션",
      period: "2016 - 2021.04",
      duration: "약 5년",
      position: "Android 개발자",
      description: "다양한 산업 분야 Android 앱 개발",
      achievements: [
        "삼성 Smart Bulb IoT 앱 개발 (BLE, IoT)",
        "페이퍼리스 금융 솔루션 개발 (OCR, 생체인증, JNI)",
        "태블릿 AR 교육 앱 개발 (Unity, AR)",
        "씽크 싱크 플러스 강의용 앱 개발 (실시간 채팅, 퀴즈)",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      company: "(주)소프트엔지니어스쿨",
      period: "2009.04 - 2009.11",
      duration: "8개월",
      position: "한국무역협회 IT교육센터 교수1실 사원",
      description: "IT 교육 및 강의",
      achievements: [
        "IT Master 백서 제작 (한국-일본 IT 정책 비교 분석)",
        "C/C++ 전임강사 및 강의 진행",
        "해외(일본) 취업 담당 업무",
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

