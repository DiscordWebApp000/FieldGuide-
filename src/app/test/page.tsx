'use client';

import { useState } from 'react';

type Category = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

type Question = {
  id: string;
  categoryId: string;
  question: string;
  options: Record<string, string>;
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

const categories: Category[] = [
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

const questions: Question[] = [
  // Stansiya sualları
  {
    id: 'q1',
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
    id: 'q2',
    categoryId: 'stansiya',
    question: 'Generatorun həddindən artıq qızması zamanı hansı tədbir görülməlidir?',
    options: {
      'a': 'Yükü artırmaq',
      'b': 'Soyutma sistemini yoxlamaq və yükü azaltmaq',
      'c': 'Generatoru söndürmək',
      'd': 'Heç bir tədbir görməmək'
    },
    correctAnswer: 'b',
    explanation: 'Həddindən artıq qızma zamanı ilk növbədə soyutma sistemi yoxlanılmalı və yük azaldılmalıdır ki, avadanlığa zərər dəyməsin.',
    difficulty: 'medium'
  },
  {
    id: 'q7',
    categoryId: 'stansiya',
    question: 'Generatorun rotorunda qısa qapanma baş verdikdə hansı əlamət müşahidə olunur?',
    options: {
      'a': 'Gərginliyin artması',
      'b': 'Vibrasiya və səs-küyün artması',
      'c': 'Sürətin artması',
      'd': 'Yağ təzyiqinin düşməsi'
    },
    correctAnswer: 'b',
    explanation: 'Rotor dolağında qısa qapanma zamanı əsas əlamət vibrasiya və səs-küyün artmasıdır.',
    difficulty: 'hard'
  },
  {
    id: 'q8',
    categoryId: 'stansiya',
    question: 'Sinxron generatorun paralel işə qoşulması zamanı hansı şərt vacib deyil?',
    options: {
      'a': 'Gərginliklərin bərabərliyi',
      'b': 'Tezliklərin bərabərliyi',
      'c': 'Generatorun rənginin uyğunluğu',
      'd': 'Fazaların ardıcıllığının uyğunluğu'
    },
    correctAnswer: 'c',
    explanation: 'Generatorun rənginin uyğunluğu paralel qoşulma üçün əhəmiyyət kəsb etmir.',
    difficulty: 'medium'
  },
  // Transformator sualları
  {
    id: 'q3',
    categoryId: 'transformator',
    question: 'Transformatorun yağ sızması aşkarlandıqda ilk növbədə nə edilməlidir?',
    options: {
      'a': 'Transformatoru dərhal söndürmək',
      'b': 'Yağ səviyyəsini yoxlamaq və sızmanın yerini müəyyən etmək',
      'c': 'Yeni yağ əlavə etmək',
      'd': 'Heç bir tədbir görməmək'
    },
    correctAnswer: 'b',
    explanation: 'İlk növbədə yağ səviyyəsi yoxlanılmalı və sızmanın yeri müəyyən edilməlidir. Bu, problemin miqyasını və təcililiyini qiymətləndirməyə imkan verir.',
    difficulty: 'medium'
  },
  {
    id: 'q4',
    categoryId: 'transformator',
    question: 'Transformatorun izolyasiya müqaviməti hansı cihazla ölçülür?',
    options: {
      'a': 'Ampermetr',
      'b': 'Voltmetr',
      'c': 'Meqaommetr',
      'd': 'Vattmetr'
    },
    correctAnswer: 'c',
    explanation: 'Transformatorun izolyasiya müqaviməti meqaommetrlə ölçülür. Bu cihaz yüksək müqavimət ölçmək üçün nəzərdə tutulub.',
    difficulty: 'hard'
  },
  {
    id: 'q9',
    categoryId: 'transformator',
    question: 'Transformatorun yüksüz işləmə cərəyanının artması nəyi göstərir?',
    options: {
      'a': 'Normal iş rejimini',
      'b': 'Nüvədə qısa qapanmanı',
      'c': 'Həddindən artıq yüklənməni',
      'd': 'Yağın keyfiyyətinin yaxşılaşmasını'
    },
    correctAnswer: 'b',
    explanation: 'Yüksüz işləmə cərəyanının artması transformator nüvəsində qısa qapanmanın olmasını göstərir.',
    difficulty: 'hard'
  },
  {
    id: 'q10',
    categoryId: 'transformator',
    question: 'Transformatorun soyutma sistemində termosifonun vəzifəsi nədir?',
    options: {
      'a': 'Yağı təmizləmək',
      'b': 'Yağın təbii sirkulyasiyasını təmin etmək',
      'c': 'Gərginliyi tənzimləmək',
      'd': 'Rütubəti kənar etmək'
    },
    correctAnswer: 'b',
    explanation: 'Termosifon transformatorda yağın təbii sirkulyasiyasını təmin edir və soyutmanı yaxşılaşdırır.',
    difficulty: 'medium'
  },
  // Mühafizə sualları
  {
    id: 'q5',
    categoryId: 'muhafize',
    question: 'Diferensial mühafizə relelərinin sazlanması zamanı nəyə diqqət yetirilməlidir?',
    options: {
      'a': 'Relenin rənginə',
      'b': 'İşləmə cərəyanının düzgün seçilməsinə',
      'c': 'Relenin ölçülərinə',
      'd': 'Relenin istehsal tarixinə'
    },
    correctAnswer: 'b',
    explanation: 'Diferensial mühafizə relelərinin sazlanmasında işləmə cərəyanının düzgün seçilməsi kritik əhəmiyyət daşıyır.',
    difficulty: 'hard'
  },
  {
    id: 'q11',
    categoryId: 'muhafize',
    question: 'Qaz relelərinin işləməsi zamanı hansı tədbir görülməlidir?',
    options: {
      'a': 'Transformatoru dərhal açmaq',
      'b': 'Yükü artırmaq',
      'c': 'Heç bir tədbir görməmək',
      'd': 'Yağı dəyişmək'
    },
    correctAnswer: 'a',
    explanation: 'Qaz relesinin işləməsi ciddi daxili nasazlığı göstərir və transformator dərhal şəbəkədən açılmalıdır.',
    difficulty: 'medium'
  },
  {
    id: 'q12',
    categoryId: 'muhafize',
    question: 'Maksimal cərəyan mühafizəsinin gecikmə müddəti nə üçün lazımdır?',
    options: {
      'a': 'Selektivliyi təmin etmək üçün',
      'b': 'Cərəyanı artırmaq üçün',
      'c': 'Gərginliyi azaltmaq üçün',
      'd': 'Relenin ömrünü artırmaq üçün'
    },
    correctAnswer: 'a',
    explanation: 'Gecikmə müddəti mühafizənin selektivliyini təmin edir və yanlış açılmaların qarşısını alır.',
    difficulty: 'medium'
  },
  // Kabel sualları
  {
    id: 'q6',
    categoryId: 'kabel',
    question: 'Kabel xəttində qısa qapanma baş verdikdə ilk tədbir nə olmalıdır?',
    options: {
      'a': 'Kabeli dəyişmək',
      'b': 'Gərginliyi artırmaq',
      'c': 'Qidalanmanı kəsmək və mühafizə sistemlərini yoxlamaq',
      'd': 'Kabel üzərində təmir işlərinə başlamaq'
    },
    correctAnswer: 'c',
    explanation: 'Qısa qapanma zamanı ilk növbədə qidalanma kəsilməli və mühafizə sistemlərinin işləməsi yoxlanılmalıdır.',
    difficulty: 'medium'
  },
  {
    id: 'q13',
    categoryId: 'kabel',
    question: 'Kabel xəttinin izolyasiya müqavimətinin azalması nəyin əlamətidir?',
    options: {
      'a': 'Normal iş rejiminin',
      'b': 'İzolyasiyanın köhnəlməsi və ya zədələnməsinin',
      'c': 'Yükün azalmasının',
      'd': 'Kabel en kəsiyinin artmasının'
    },
    correctAnswer: 'b',
    explanation: 'İzolyasiya müqavimətinin azalması izolyasiyanın köhnəlməsini və ya zədələnməsini göstərir.',
    difficulty: 'medium'
  },
  {
    id: 'q14',
    categoryId: 'kabel',
    question: 'Kabel xəttinin fazalarının ardıcıllığını hansı cihazla yoxlamaq olar?',
    options: {
      'a': 'Ampermetr',
      'b': 'Faza göstəricisi',
      'c': 'Meqaommetr',
      'd': 'Ommetr'
    },
    correctAnswer: 'b',
    explanation: 'Fazaların ardıcıllığını yoxlamaq üçün xüsusi faza göstəricisi cihazından istifadə olunur.',
    difficulty: 'easy'
  },
  // Pano sualları
  {
    id: 'q15',
    categoryId: 'pano',
    question: 'Elektrik panosu üzərində hansı işarələmə olmalıdır?',
    options: {
      'a': 'Yalnız rəngli işarələr',
      'b': 'Operativ adı və sxemi',
      'c': 'İstehsalçı şirkətin loqosu',
      'd': 'Heç bir işarələmə'
    },
    correctAnswer: 'b',
    explanation: 'Elektrik panosu üzərində onun operativ adı və elektrik sxemi göstərilməlidir.',
    difficulty: 'easy'
  },
  {
    id: 'q16',
    categoryId: 'pano',
    question: 'Elektrik panosunda yanğın təhlükəsizliyi üçün hansı tədbir görülməlidir?',
    options: {
      'a': 'Panoların qapılarını açıq saxlamaq',
      'b': 'Yanğınsöndürücü quraşdırmaq',
      'c': 'Panoları su ilə təmizləmək',
      'd': 'Tezalışan materiallar saxlamaq'
    },
    correctAnswer: 'b',
    explanation: 'Panolarda yanğınsöndürücü quraşdırılmalıdır ki, yanğın baş verərsə dərhal müdaxilə edilə bilsin.',
    difficulty: 'medium'
  },
  {
    id: 'q17',
    categoryId: 'pano',
    question: 'Elektrik panosunda cərəyan transformatorlarının təyinatı nədir?',
    options: {
      'a': 'Gərginliyi artırmaq',
      'b': 'Ölçü cihazları və mühafizə üçün cərəyanı çevirmək',
      'c': 'Tezliyi dəyişmək',
      'd': 'İzolyasiyanı yaxşılaşdırmaq'
    },
    correctAnswer: 'b',
    explanation: 'Cərəyan transformatorları ölçü cihazları və mühafizə sistemləri üçün yüksək cərəyanı kiçik qiymətlərə çevirir.',
    difficulty: 'hard'
  }
];

function CategoryCard({ 
  category,
  questionCount,
  onSelect
}: { 
  category: Category;
  questionCount: number;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
          <span className="text-2xl">{category.icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {category.title}
        </h3>
      </div>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{questionCount} sual</span>
        <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
          Başla →
        </span>
      </div>
    </button>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: Question['difficulty'] }) {
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
}: { 
  question: Question;
  selectedAnswer: string | null;
  onAnswer: (answer: string) => void;
  showExplanation: boolean;
  questionNumber: number;
  totalQuestions: number;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">
            Sual {questionNumber}/{totalQuestions}
          </span>
          <DifficultyBadge difficulty={question.difficulty} />
        </div>
        <div className="text-sm text-gray-500">
          {categories.find(c => c.id === question.categoryId)?.title}
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h2>
      <div className="space-y-3">
        {Object.entries(question.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => !showExplanation && onAnswer(key)}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center justify-between group ${
              showExplanation
                ? key === question.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : selectedAnswer === key
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200'
                : selectedAnswer === key
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
            }`}
            disabled={showExplanation}
          >
            <span className={`${
              showExplanation
                ? key === question.correctAnswer
                  ? 'text-green-700'
                  : selectedAnswer === key
                  ? 'text-red-700'
                  : 'text-gray-700'
                : 'text-gray-700 group-hover:text-blue-700'
            }`}>
              {key.toUpperCase()}) {value}
            </span>
            {showExplanation && key === question.correctAnswer && (
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-700">
            <span className="font-semibold">İzah:</span> {question.explanation}
          </p>
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
}: { 
  correctCount: number;
  totalQuestions: number;
  categoryId: string;
  onRestart: () => void;
  onSelectCategory: () => void;
}) {
  const percentage = (correctCount / totalQuestions) * 100;
  const category = categories.find(c => c.id === categoryId);

  const getResultMessage = () => {
    if (percentage >= 90) return 'Əla nəticə! Siz bu mövzunu mükəmməl bilirsiniz.';
    if (percentage >= 70) return 'Yaxşı nəticə! Bilikləriniz qənaətbəxşdir.';
    if (percentage >= 50) return 'Orta nəticə. Bəzi mövzuları təkrarlamağınız tövsiyə olunur.';
    return 'Zəif nəticə. Materialı yenidən öyrənməyiniz tövsiyə olunur.';
  };

  const getResultBadge = () => {
    if (percentage >= 90) return '🏆 Ekspert';
    if (percentage >= 70) return '🎯 Təcrübəli';
    if (percentage >= 50) return '📚 Öyrənən';
    return '🎯 Başlanğıc';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <span className="text-2xl">{category?.icon}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {category?.title} - Test Nəticələri
          </h2>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-4">
            {getResultBadge()}
          </div>
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {correctCount}/{totalQuestions}
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Doğru cavablar: {Math.round(percentage)}%
          </p>
          <p className="text-gray-700 mb-8">
            {getResultMessage()}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onRestart}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Yenidən başla
            </button>
            <button
              onClick={onSelectCategory}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Kateqoriya seç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const categoryQuestions = selectedCategory
    ? questions.filter(q => q.categoryId === selectedCategory)
    : [];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowExplanation(false);
    setIsComplete(false);
  };

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [categoryQuestions[currentQuestionIndex].id]: answer
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < categoryQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowExplanation(false);
    setIsComplete(false);
  };

  const getCorrectAnswersCount = () => {
    return Object.entries(answers).reduce((count, [questionId, answer]) => {
      const question = questions.find(q => q.id === questionId);
      return question?.correctAnswer === answer ? count + 1 : count;
    }, 0);
  };

  if (!selectedCategory) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Bilik Səviyyəsi Testi
              </h1>
              <p className="text-gray-600">
                Test etmək istədiyiniz kateqoriyanı seçin
              </p>
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
      </main>
    );
  }

  if (isComplete) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <ResultCard
              correctCount={getCorrectAnswersCount()}
              totalQuestions={categoryQuestions.length}
              categoryId={selectedCategory}
              onRestart={handleRestart}
              onSelectCategory={() => setSelectedCategory(null)}
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center text-gray-600 hover:text-gray-900"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kateqoriyalara qayıt
              </button>
              <div className="text-sm text-gray-500">
                İrəliləyiş: {Math.round(((currentQuestionIndex + 1) / categoryQuestions.length) * 100)}%
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / categoryQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <QuestionCard
            question={categoryQuestions[currentQuestionIndex]}
            selectedAnswer={answers[categoryQuestions[currentQuestionIndex].id] || null}
            onAnswer={handleAnswer}
            showExplanation={showExplanation}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={categoryQuestions.length}
          />

          {showExplanation && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {currentQuestionIndex === categoryQuestions.length - 1 ? 'Nəticələri göstər' : 'Növbəti sual'}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 