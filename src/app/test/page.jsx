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
      className="w-full text-left bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
          <span className="text-2xl">{category.icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
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
    easy: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400',
    medium: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400',
    hard: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <DifficultyBadge difficulty={question.difficulty} />
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Sual {questionNumber} / {totalQuestions}
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        {question.question}
      </h2>

      <div className="space-y-3">
        {Object.entries(question.options).map(([key, value]) => {
          const isSelected = selectedAnswer === key;
          const isCorrect = showExplanation && key === question.correctAnswer;
          const isWrong = showExplanation && isSelected && key !== question.correctAnswer;

          let buttonClasses = 'w-full flex items-center p-4 rounded-lg border transition-all duration-200 ';
          
          if (isSelected) {
            buttonClasses += isWrong
              ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 '
              : (showExplanation
                ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 '
                : 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400');
          } else if (isCorrect) {
            buttonClasses += 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 ';
          } else {
            buttonClasses += 'border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 ';
          }

          return (
            <button
              key={key}
              className={buttonClasses}
              onClick={() => !showExplanation && onAnswer(key)}
              disabled={showExplanation}
            >
              <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-current mr-3 uppercase">
                {key}
              </span>
              {value}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="font-medium text-blue-700 dark:text-blue-400 mb-2">İzah:</h3>
          <p className="text-blue-600 dark:text-blue-300">{question.explanation}</p>
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
    if (percentage >= 80) {
      return 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400';
    }
    if (percentage >= 60) {
      return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400';
    }
    return 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center">
      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${getResultBadge()}`}>
        {getResultMessage()}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {correctCount} / {totalQuestions} Doğru Cavab
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {((correctCount / totalQuestions) * 100).toFixed(0)}% nəticə əldə etdiniz
      </p>

      <div className="space-y-3">
        <button
          onClick={onRestart}
          className="w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Yenidən Başla
        </button>
        <button
          onClick={onSelectCategory}
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
        >
          Başqa Kateqoriya Seç
        </button>
      </div>
    </div>
  );
}

export default function TestPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers({});
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  const handleNext = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers({});
  };

  const getCorrectAnswersCount = () => {
    return Object.entries(answers).reduce((count, [index, answer]) => {
      const question = categoryQuestions[parseInt(index)];
      return count + (answer === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#1e2837] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Bilik Səviyyənizi Yoxlayın
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Aşağıdakı kateqoriyalardan birini seçərək testə başlayın
              </p>
            </div>

            <div className="grid gap-4">
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
      </div>
    );
  }

  const categoryQuestions = questions.filter(q => q.categoryId === selectedCategory);
  const currentQuestion = categoryQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === categoryQuestions.length - 1;
  const hasCompleted = currentQuestionIndex >= categoryQuestions.length;

  if (hasCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#1e2837] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <ResultCard
              correctCount={getCorrectAnswersCount()}
              totalQuestions={categoryQuestions.length}
              categoryId={selectedCategory}
              onRestart={handleRestart}
              onSelectCategory={() => setSelectedCategory(null)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1e2837] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
            showExplanation={showExplanation}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={categoryQuestions.length}
          />

          {showExplanation && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={isLastQuestion ? handleNext : handleNext}
                className="px-6 py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                {isLastQuestion ? 'Nəticələri Gör' : 'Növbəti Sual'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 