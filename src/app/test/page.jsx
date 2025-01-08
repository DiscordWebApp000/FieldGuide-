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
  // ... diğer sorular buraya eklenecek
];

function CategoryCard({ category, questionCount, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50">
          <span className="text-2xl">{category.icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm">
        <span className="text-gray-600">{questionCount} sual</span>
        <span className="text-blue-600">Başla →</span>
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
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          Sual {questionNumber}/{totalQuestions}
        </div>
        <DifficultyBadge difficulty={question.difficulty} />
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h2>

      <div className="space-y-3">
        {Object.entries(question.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onAnswer(key)}
            disabled={showExplanation}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${
              showExplanation
                ? key === question.correctAnswer
                  ? 'bg-green-50 border-green-200'
                  : selectedAnswer === key
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200'
                : selectedAnswer === key
                ? 'bg-blue-50 border-blue-200'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-current text-sm font-medium mr-3">
                {key.toUpperCase()}
              </span>
              <span className="flex-grow">{value}</span>
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">İzah:</h3>
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

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
  };

  const handleAnswer = (answer) => {
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
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
  };

  const getCorrectAnswersCount = () => {
    return Object.entries(selectedAnswers).reduce((count, [index, answer]) => {
      const question = categoryQuestions[parseInt(index)];
      return count + (answer === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Bilik Səviyyənizi Yoxlayın
              </h1>
              <p className="text-gray-600">
                Elektrik sistemləri üzrə biliklərinizi test edin
              </p>
            </div>

            <div className="grid gap-6">
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
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === categoryQuestions.length - 1;
  const hasAnsweredAll = Object.keys(selectedAnswers).length === categoryQuestions.length;

  if (hasAnsweredAll && showExplanation) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
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
    <div className="min-h-screen bg-gray-50 py-12">
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

          {showExplanation && !isLastQuestion && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Növbəti sual →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 