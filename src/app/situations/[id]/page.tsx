import { notFound } from 'next/navigation';
import { PageHeader, Section } from './client';
import situationsData from '@/data/situations.json';

const { situations } = situationsData;

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
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
