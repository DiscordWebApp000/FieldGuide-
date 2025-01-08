'use client';

import { useState } from 'react';

const categories = [
  {
    id: 'stansiya',
    title: 'Stansiya Avadanlıqları',
    icon: '⚡',
    description: 'Elektrik stansiyası avadanlıqları ilə bağlı suallar'
  },
  {
    id: 'transformator',
    title: 'Transformatorlar',
    icon: '🔌',
    description: 'Transformator və onun komponentləri haqqında suallar'
  },
  {
    id: 'muhafize',
    title: 'Mühafizə Sistemləri',
    icon: '🛡️',
    description: 'Rele mühafizəsi və avtomatika sualları'
  },
  {
    id: 'kabel',
    title: 'Kabel Sistemləri',
    icon: '🔋',
    description: 'Kabel və kabel şəbəkələri üzrə suallar'
  },
  {
    id: 'pano',
    title: 'Elektrik Panoları',
    icon: '📊',
    description: 'Paylayıcı qurğular və panolar haqqında suallar'
  }
];

const questions = [
  {
    id: 's1',
    categoryId: 'stansiya',
    question: 'Generator qəfildən dayandıqda hansı yoxlama aparılmamalıdır?',
    options: {
      'a': 'Gərginlik göstəricilərinin yoxlanması',
      'b': 'Mühafizə relelərin vəziyyətinin yoxlanması',
      'c': 'Generatorun korpusunun rənginin yoxlanması',
      'd': 'Tezlik göstəricilərinin yoxlanması'
    },
    correctAnswer: 'c',
    explanation: 'Generatorun korpusunun rəngi qəfil dayanma zamanı prioritet yoxlama deyil. Əsas diqqət elektrik parametrlərinə və mühafizə sistemlərinə yönəldilməlidir.',
    difficulty: 'easy'
  },
  {
    id: 's2',
    categoryId: 'stansiya',
    question: 'Turbinin yağlama sistemində təzyiq düşdükdə hansı tədbir görülməlidir?',
    options: {
      'a': 'Turbini dərhal dayandırmaq',
      'b': 'Yağ nasosunu dəyişmək',
      'c': 'Yükü azaltmaq',
      'd': 'Ehtiyat yağ əlavə etmək'
    },
    correctAnswer: 'a',
    explanation: 'Yağlama sistemində təzyiq düşməsi turbinin yastıqlarına ciddi zərər verə bilər, ona görə turbin dərhal dayandırılmalıdır.',
    difficulty: 'medium'
  },
  {
    id: 's3',
    categoryId: 'stansiya',
    question: 'Generatorun stator dolağında temperatur artımı müşahidə olunduqda ilk addım nə olmalıdır?',
    options: {
      'a': 'Soyutma sistemini yoxlamaq',
      'b': 'Yükü azaltmaq',
      'c': 'İzolyasiyanı ölçmək',
      'd': 'Generatoru söndürmək'
    },
    correctAnswer: 'b',
    explanation: 'Stator dolağında temperatur artımı zamanı ilk tədbir yükü azaltmaqdır. Bu, həm avadanlığı qoruyur, həm də problemin səbəbini araşdırmağa imkan verir.',
    difficulty: 'medium'
  },
  {
    id: 's4',
    categoryId: 'stansiya',
    question: 'Hansı hal generatorun təcili dayandırılmasını tələb etmir?',
    options: {
      'a': 'Yağlama sisteminin dayanması',
      'b': 'Stator dolağında qısa qapanma',
      'c': 'Vibrasiya səviyyəsinin yüksəlməsi',
      'd': 'Gərginlik tənzimləyicisinin nasazlığı'
    },
    correctAnswer: 'd',
    explanation: 'Gərginlik tənzimləyicisinin nasazlığı digər hallara nisbətən daha az təhlükəlidir və təcili dayandırma tələb etmir.',
    difficulty: 'hard'
  },
  {
    id: 's5',
    categoryId: 'stansiya',
    question: 'Buxar turbinində vibrasiya səviyyəsi hansı həddə çatdıqda təcili dayandırma tələb olunur?',
    options: {
      'a': '7.1 mm/s',
      'b': '11.2 mm/s',
      'c': '4.5 mm/s',
      'd': '9.3 mm/s'
    },
    correctAnswer: 'b',
    explanation: '11.2 mm/s vibrasiya səviyyəsi təhlükəli hədd sayılır və turbinin təcili dayandırılmasını tələb edir.',
    difficulty: 'hard'
  },
  {
    id: 's6',
    categoryId: 'stansiya',
    question: 'Generatorun rotor dolağında torpaqlanma baş verdikdə nə etmək lazımdır?',
    options: {
      'a': 'Həyəcan cərəyanınıı artırmaq',
      'b': 'Generatoru şəbəkədən açmaq',
      'c': 'Yükü azaltmaq',
      'd': 'Soyutma sistemini gücləndirmək'
    },
    correctAnswer: 'b',
    explanation: 'Rotor dolağında torpaqlanma ciddi qəza vəziyyətidir və generator dərhal şəbəkədən açılmalıdır.',
    difficulty: 'medium'
  },
  {
    id: 't1',
    categoryId: 'transformator',
    question: 'Transformatorun yağında qaz əmələ gəlməsi nəyi göstərir?',
    options: {
      'a': 'Normal işləmə rejimi',
      'b': 'Daxili qısaqapanma',
      'c': 'Həddindən artıq yüklənmə',
      'd': 'Soyutma problemi'
    },
    correctAnswer: 'b',
    explanation: 'Transformator yağında qaz əmələ gəlməsi daxili qısaqapanmanın əsas əlamətlərindən biridir və təcili müdaxilə tələb edir.',
    difficulty: 'medium'
  },
  {
    id: 't2',
    categoryId: 'transformator',
    question: 'Transformatorun yüksüz işləmə cərəyanının artması nəyin göstəricisidir?',
    options: {
      'a': 'Nüvədə problem',
      'b': 'Sarğılarda qısaqapanma',
      'c': 'Yağ keyfiyyətinin pisləşməsi',
      'd': 'Soyutma sistemində nasazlıq'
    },
    correctAnswer: 'a',
    explanation: 'Yüksüz işləmə cərəyanının artması adətən transformator nüvəsində problem olduğunu göstərir.',
    difficulty: 'hard'
  },
  {
    id: 'm1',
    categoryId: 'muhafize',
    question: 'Diferensial mühafizə sistemi nə zaman işə düşməlidir?',
    options: {
      'a': 'Giriş və çıxış cərəyanları fərqli olduqda',
      'b': 'Gərginlik düşdükdə',
      'c': 'Temperatur artdıqda',
      'd': 'Tezlik dəyişdikdə'
    },
    correctAnswer: 'a',
    explanation: 'Diferensial mühafizə giriş və çıxış cərəyanları arasında fərq yarandıqda işə düşməlidir, bu daxili zədələnməni göstərir.',
    difficulty: 'hard'
  },
  {
    id: 'm2',
    categoryId: 'muhafize',
    question: 'Qaz relesinə nə zaman baxış keçirilməlidir?',
    options: {
      'a': 'Həftədə bir dəfə',
      'b': 'Ayda bir dəfə',
      'c': '6 ayda bir dəfə',
      'd': 'İldə bir dəfə'
    },
    correctAnswer: 'b',
    explanation: 'Qaz relesinə ayda bir dəfə baxış keçirilməli və işləmə vəziyyəti yoxlanılmalıdır.',
    difficulty: 'medium'
  },
  {
    id: 'k1',
    categoryId: 'kabel',
    question: 'Kabel xəttində izolasiya müqaviməti hansı cihazla ölçülür?',
    options: {
      'a': 'Meqaommetr',
      'b': 'Ampermetr',
      'c': 'Voltmetr',
      'd': 'Ommetr'
    },
    correctAnswer: 'a',
    explanation: 'Kabel xəttinin izolasiya müqaviməti meqaommetrlə ölçülür, bu yüksək müqavimət ölçmək üçün xüsusi cihazdır.',
    difficulty: 'easy'
  },
  {
    id: 'k2',
    categoryId: 'kabel',
    question: 'Kabel muftası quraşdırılarkən ən vacib şərt nədir?',
    options: {
      'a': 'Temperatur rejimi',
      'b': 'Nəmlik səviyyəsi',
      'c': 'İşıqlanma',
      'd': 'Külək sürəti'
    },
    correctAnswer: 'b',
    explanation: 'Kabel muftası quraşdırılarkən ən vacib şərt nəmlik səviyyəsidir, yüksək nəmlik keyfiyyətli montaja mane olur.',
    difficulty: 'medium'
  },
  {
    id: 'p1',
    categoryId: 'pano',
    question: 'Elektrik panosu quraşdırılarkən minimal servis məsafəsi nə qədər olmalıdır?',
    options: {
      'a': '0.5 metr',
      'b': '0.8 metr',
      'c': '1.0 metr',
      'd': '1.2 metr'
    },
    correctAnswer: 'c',
    explanation: 'Elektrik panosu qarşısında minimal servis məsafəsi 1 metr olmalıdır ki, təhlükəsiz xidmət göstərmək mümkün olsun.',
    difficulty: 'medium'
  },
  {
    id: 'p2',
    categoryId: 'pano',
    question: 'Avtomatik açarın nominal cərəyanı necə seçilir?',
    options: {
      'a': 'İş cərəyanından 20% az',
      'b': 'İş cərəyanından 20% çox',
      'c': 'İş cərəyanına bərabər',
      'd': 'İş cərəyanından 2 dəfə çox'
    },
    correctAnswer: 'b',
    explanation: 'Avtomatik açarın nominal cərəyanı iş cərəyanından təxminən 20% çox seçilməlidir ki, normal iş rejimində açılmasın.',
    difficulty: 'medium'
  }
];

function CategoryCard({ category, questionCount, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100">
          <span className="text-2xl">{category.icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm">
        <span className="text-gray-600">{questionCount} sual</span>
        <span className="text-blue-600 flex items-center gap-1">
          Başla
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </button>
  );
}

function DifficultyBadge({ difficulty }) {
  const colors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  const labels = {
    easy: 'Asan',
    medium: 'Orta',
    hard: 'Çətin'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[difficulty]}`}>
      {labels[difficulty]}
    </span>
  );
}

function QuestionCard({ 
  question,
  selectedAnswer,
  onAnswer,
  showExplanation,
  questionNumber,
  totalQuestions
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            Sual {questionNumber}/{totalQuestions}
          </span>
          <DifficultyBadge difficulty={question.difficulty} />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-8">{question.question}</h2>

      <div className="space-y-4">
        {Object.entries(question.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onAnswer(key)}
            disabled={showExplanation}
            className={`group w-full text-left transition-all duration-200 ${
              showExplanation
                ? key === question.correctAnswer
                  ? 'opacity-100'
                  : selectedAnswer === key
                  ? 'opacity-100'
                  : 'opacity-60'
                : 'opacity-100 hover:scale-[1.01]'
            }`}
          >
            <div className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 ${
              showExplanation
                ? key === question.correctAnswer
                  ? 'bg-green-50 border-green-300 text-green-700'
                  : selectedAnswer === key
                  ? 'bg-red-50 border-red-300 text-red-700'
                  : 'bg-white border-gray-200 text-gray-500'
                : selectedAnswer === key
                ? 'bg-blue-50 border-blue-300 text-blue-700 shadow-md'
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md group-hover:bg-gray-50'
            }`}>
              <div className={`min-w-[48px] h-12 flex items-center justify-center rounded-lg text-base font-medium ${
                showExplanation
                  ? key === question.correctAnswer
                    ? 'bg-green-100 text-green-700'
                    : selectedAnswer === key
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-500'
                  : selectedAnswer === key
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-50 text-gray-700 group-hover:bg-gray-100'
              }`}>
                {key.toUpperCase()}
              </div>
              <span className="flex-grow text-base text-gray-700">{value}</span>
              {showExplanation && (
                <div className="flex items-center justify-center min-w-[24px]">
                  {key === question.correctAnswer ? (
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : selectedAnswer === key ? (
                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : null}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            İzah:
          </h3>
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}

function ResultCard({ 
  correctCount,
  totalQuestions,
  categoryId,
  onRestart,
  onSelectCategory
}) {
  const getResultMessage = () => {
    const percentage = (correctCount / totalQuestions) * 100;
    if (percentage >= 80) return 'Əla nəticə!';
    if (percentage >= 60) return 'Yaxşı nəticə!';
    return 'Təkrar cəhd edin!';
  };

  const getResultBadge = () => {
    const percentage = (correctCount / totalQuestions) * 100;
    if (percentage >= 80) return 'bg-green-100 text-green-800';
    if (percentage >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
      <div className="mb-6">
        <span className={`inline-flex items-center px-4 py-2 rounded-full text-lg font-medium ${getResultBadge()}`}>
          {correctCount} / {totalQuestions}
        </span>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {getResultMessage()}
      </h2>
      
      <p className="text-gray-600 mb-8">
        {correctCount} sualdan {totalQuestions} düzgün cavab verdiniz.
      </p>

      <div className="space-y-3">
        <button
          onClick={onRestart}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Yenidən başla
        </button>
        
        <button
          onClick={onSelectCategory}
          className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Başqa kateqoriya seç
        </button>
      </div>
    </div>
  );
}

export default function TestPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isTestComplete, setIsTestComplete] = useState(false);

  // Filter questions by selected category
  const categoryQuestions = questions.filter(q => q.categoryId === selectedCategory);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsTestComplete(false);
  };

  const handleAnswer = (answer) => {
    if (selectedAnswers[currentQuestionIndex]) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < categoryQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    } else {
      setIsTestComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsTestComplete(false);
  };

  const getCorrectAnswersCount = () => {
    return Object.entries(selectedAnswers).reduce((count, [index, answer]) => {
      const question = categoryQuestions[parseInt(index)];
      return count + (answer === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bilik Səviyyənizi Yoxlayın</h1>
            <p className="text-gray-600">Elektrik sistemləri üzrə testlər</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                questionCount={questions.filter(q => q.categoryId === category.id).length}
                onSelect={() => handleCategorySelect(category.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isTestComplete) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <ResultCard
          correctCount={getCorrectAnswersCount()}
          totalQuestions={categoryQuestions.length}
          categoryId={selectedCategory}
          onRestart={handleRestart}
          onSelectCategory={() => setSelectedCategory(null)}
        />
      </div>
    );
  }

  const currentQuestion = categoryQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Kategoriyalara qayıt</span>
          </button>
        </div>

        {currentQuestion && (
          <>
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              onAnswer={handleAnswer}
              showExplanation={showExplanation}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={categoryQuestions.length}
            />

            {showExplanation && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  {currentQuestionIndex < categoryQuestions.length - 1 ? (
                    <>
                      <span>Növbəti sual</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Testi bitir</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
} 