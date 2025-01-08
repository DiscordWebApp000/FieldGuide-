import situationsData from '@/data/situations.json';
const { situations } = situationsData;
import Link from 'next/link';
import { notFound } from 'next/navigation';

function getCategoryId(category: string): string {
  const categoryIds: Record<string, string> = {
    'Stansiya': 'stansiya',
    'Transformator': 'transformator',
    'Mühafizə': 'muhafize',
    'Kabel': 'kabel',
    'Elektrik Panosu': 'elektrik-panosu',
    'Ətraf Mühit': 'etraf-muhit'
  };
  return categoryIds[category] || category.toLowerCase().replace(/\s+/g, '-');
}

function PageHeader({ situation }: { situation: typeof situations[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center gap-2 text-sm mb-4 text-gray-500">
        <Link href="/" className="hover:text-blue-600">Ana Səhifə</Link>
        <span>/</span>
        <Link href={`/category/${getCategoryId(situation.category)}`} className="hover:text-blue-600">
          {getCategoryTitle(situation.category)}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-4xl">{situation.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{situation.title}</h1>
          <p className="text-gray-600 mt-1">{situation.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children, type = "default" }: { 
  title: string; 
  children: React.ReactNode;
  type?: "default" | "warning" | "steps" 
}) {
  const bgColor = {
    default: "bg-white",
    warning: "bg-red-50",
    steps: "bg-blue-50"
  }[type];

  return (
    <div className={`${bgColor} rounded-lg shadow-sm p-6`}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default function SituationPage({ params }: { params: { id: string } }) {
  const situation = situations.find((s) => s.id === params.id);

  if (!situation) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <PageHeader situation={situation} />

        <div className="space-y-6">
          {/* ÖNEMLİ UYARI */}
          <Section title="⚠️ VACİB TƏHLÜKƏSİZLİK XƏBƏRDARLIKLARI" type="warning">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-red-700 font-medium">
                <span>•</span>
                İşə başlamazdan əvvəl enerjini kəsin!
              </li>
              <li className="flex items-center gap-2 text-red-700 font-medium">
                <span>•</span>
                İş təhlükəsizliyi avadanlıqlarını yoxlayın!
              </li>
              <li className="flex items-center gap-2 text-red-700 font-medium">
                <span>•</span>
                Lazımi icazələri alın!
              </li>
            </ul>
          </Section>

          {/* HIZLI KONTROL */}
          <Section title="🔍 SÜRƏTLİ YOXLAMA">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Əlamətlər:</h3>
                <p className="text-gray-600">{situation.fullDescription}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Mümkün Səbəblər:</h3>
                <ul className="space-y-1">
                  {situation.causes.map((cause, index) => (
                    <li key={index} className="text-gray-600">
                      • {cause}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* TAMİR ADIMLARI */}
          <Section title="🛠 TƏMİR ADIMLARI" type="steps">
            <div className="space-y-4">
              {situation.solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-900">{solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* KONTROL LİSTESİ */}
          <Section title="✅ YOXLAMA SİYAHISI">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">Enerji kəsmə əməliyyatı yerinə yetirildi</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">Təhlükəsizlik avadanlıqları yoxlanıldı</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">Lazımi icazələr alındı</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">Təmir addımları tamamlandı</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">Son yoxlamalar aparıldı</span>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}

function getCategoryTitle(category: string): string {
  const titles: Record<string, string> = {
    'Stansiya': 'Stansiya Nasazlıqları',
    'Transformator': 'Transformator Nasazlıqları',
    'Mühafizə': 'Mühafizə Sistemi Nasazlıqları',
    'Kabel': 'Kabel Nasazlıqları',
    'Elektrik Panosu': 'Elektrik Panosu Nasazlıqları',
    'Ətraf Mühit': 'Ətraf Mühit Nasazlıqları'
  };
  return titles[category] || category;
} 