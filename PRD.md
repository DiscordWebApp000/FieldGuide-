# Enerji Dağıtım Şirketi Eğitim ve Değerlendirme Platformu PRD

## 1. Proje Özeti
Bu proje, enerji dağıtım şirketi çalışanlarının eğitim ve değerlendirilmesi için tasarlanmış web tabanlı bir platformdur. Platform, çalışanların saha durumlarını öğrenmelerini ve bilgilerini test etmelerini sağlar.

## 2. Teknik Gereksinimler

### 2.1 Teknoloji Yığını
- Frontend Framework: React + Next.js
- Styling: Tailwind CSS
- Veri Yönetimi: Statik JSON dosyaları
- Deployment: Statik site olarak deploy edilecek

### 2.2 Tarayıcı Uyumluluğu
- Modern tarayıcılar (Chrome, Firefox, Safari, Edge)
- Responsive tasarım (Mobile-first yaklaşım)

## 3. Özellik Detayları

### 3.1 Bilgilendirme Bölümü

#### Ana Sayfa
- Saha durumlarının grid layout ile listelenmesi
- Her durum için:
  - Başlık
  - Kısa açıklama
  - İlgili görsel/ikon
  - "Detayları Gör" butonu

#### Durum Detay Sayfası
- Başlık
- Detaylı açıklama
- Problem nedenleri
- Çözüm adımları
- İlgili görseller
- Navigasyon için breadcrumb
- Önceki/Sonraki durum navigasyonu

### 3.2 Değerlendirme ve Sertifikalandırma Bölümü

#### Test Ekranı
- Tek seferde bir soru gösterimi
- Her soru için:
  - Soru metni
  - 4 seçenek (A, B, C, D)
  - Anlık geri bildirim
  - İlerleme göstergesi
  
#### Sonuç ve Sertifika Ekranı
- Test sonucu özeti
- Doğru/yanlış sayısı
- Başarı yüzdesi
- Sertifika seviyesi gösterimi:
  - %70 altı: Başlangıç Seviyesi
  - %70-85: Orta Seviye
  - %85 üstü: Uzman Seviyesi
- Sertifika görüntüleme/yazdırma seçeneği

## 4. Veri Yapısı

### 4.1 Durumlar JSON Yapısı
```json
{
  "situations": [
    {
      "id": "string",
      "title": "string",
      "shortDescription": "string",
      "fullDescription": "string",
      "causes": ["string"],
      "solutions": ["string"],
      "images": ["string"],
      "icon": "string"
    }
  ]
}
```

### 4.2 Sorular JSON Yapısı
```json
{
  "questions": [
    {
      "id": "string",
      "question": "string",
      "options": {
        "a": "string",
        "b": "string",
        "c": "string",
        "d": "string"
      },
      "correctAnswer": "string",
      "explanation": "string"
    }
  ]
}
```

## 5. UI/UX Gereksinimleri

### 5.1 Renk Paleti
- Primary: #0F172A (Koyu mavi - kurumsal)
- Secondary: #3B82F6 (Mavi - vurgu)
- Success: #22C55E (Yeşil - başarı)
- Error: #EF4444 (Kırmızı - hata)
- Background: #F8FAFC (Açık gri - arka plan)

### 5.2 Tipografi
- Başlıklar: Inter
- İçerik: Inter
- Boyutlar:
  - H1: 2.25rem
  - H2: 1.875rem
  - H3: 1.5rem
  - Body: 1rem

### 5.3 Responsive Breakpoints
- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025px+

## 6. Performans Gereksinimleri
- Lighthouse skoru minimum 90
- İlk yüklenme süresi < 3 saniye
- Time to Interactive < 5 saniye

## 7. Güvenlik Gereksinimleri
- XSS koruması
- CSP implementasyonu
- Statik dosya güvenliği

## 8. Erişilebilirlik Gereksinimleri
- WCAG 2.1 AA uyumluluğu
- Klavye navigasyonu desteği
- Screen reader uyumluluğu
- Alt text tüm görseller için 