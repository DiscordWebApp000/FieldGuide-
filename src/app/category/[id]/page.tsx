import situationsData from '@/data/situations.json';
import { CategoryHeader, SituationCard, SearchBox } from './components';

const { situations } = situationsData;

type SearchParams = { [key: string]: string | string[] | undefined };

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<SearchParams>;
}

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

export default async function CategoryPage({ params, searchParams }: Props) {
  const { id: categoryId } = await params;
  const resolvedSearchParams = await searchParams;
  const searchQuery = typeof resolvedSearchParams.q === 'string' ? resolvedSearchParams.q : '';
  
  const categorySituations = situations.filter(
    (situation) => getCategoryId(situation.category) === categoryId
  );

  const filteredSituations = categorySituations.filter(situation =>
    situation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    situation.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
    situation.fullDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <CategoryHeader categoryId={categoryId} situationsCount={categorySituations.length} />
        <SearchBox defaultValue={searchQuery} />

        <div className="grid gap-4 mt-6">
          {filteredSituations.map((situation) => (
            <SituationCard key={situation.id} situation={situation} />
          ))}
        </div>

        {filteredSituations.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchQuery ? 'Heç bir nəticə tapılmadı' : 'Bu kateqoriyada durum tapılmadı'}
            </h3>
            <p className="text-gray-600">
              {searchQuery 
                ? 'Axtarışınıza uyğun nasazlıq vəziyyəti tapılmadı. Zəhmət olmasa başqa açar sözlər sınayın.'
                : 'Hələ bu kateqoriyaya aid nasazlıq vəziyyəti əlavə edilməyib.'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 