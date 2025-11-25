export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certification
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 학력 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="text-3xl mr-3">🎓</span>
              학력
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                  청주대학교
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  정보통신공학과 학사
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  2001.03 - 2008.02
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  평점 3.21 / 4.5
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                  양명고등학교
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  1998.03 - 2001.02
                </p>
              </div>
            </div>
          </div>

          {/* 자격증 및 외국어 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="text-3xl mr-3">📜</span>
              자격증 & 외국어
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                  정보처리기사
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  한국산업인력공단
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  2009.11 취득
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                  JLPT 2급 (일본어)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  회화(중급) / 독해(하급) / 작문(하급)
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                  IT 교육 이수
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  한국무역협회 IT마스터 임베디드 클래스
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  2008.01 - 2008.12
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 해외 경험 */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
            <span className="text-3xl mr-3">✈️</span>
            해외 경험
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg border border-blue-200 dark:border-blue-900">
              <p className="text-2xl mb-2">🇦🇺</p>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">호주 워킹홀리데이</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">2010.09 - 2011.07 (11개월)</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg border border-blue-200 dark:border-blue-900">
              <p className="text-2xl mb-2">🇦🇺</p>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Kaplan Sydney 어학연수</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">2011.03 - 2011.06 (4개월)</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg border border-blue-200 dark:border-blue-900">
              <p className="text-2xl mb-2">🇵🇭</p>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">필리핀 어학연수</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">2010.03 - 2010.06 (4개월)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

