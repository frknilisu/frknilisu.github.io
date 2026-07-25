# CLAUDE.md

## Bu repo nedir

Furkan'ın kişisel deneme/blog arşivi. Aklına gelen fikirler — hayat felsefesi, dini
meseleler, ara ara teknik konular — sohbet içinde olgunlaşır, burada yazıya döner ve
kalıcı olur. Sohbet geçmişi kaybolur; bu repo kaybolmaz.

Site Astro ile derlenir, GitHub Pages'te yayınlanır. `main` dalına push atıldığında
GitHub Actions build alıp otomatik yayına çıkarır.

Astro sadece derleme aracı — ürettiği sayfalar tamamen statik HTML/CSS, tarayıcıya
JavaScript göndermiyor (island kullanılmıyor). "JavaScript yok" ilkesi böyle korunuyor.

## Yapı ve teknoloji

- **Astro** (statik çıktı, `dist/`). `npm run dev` yerelde önizleme, `npm run build` derler.
- **Tailwind CSS v4** — `@tailwindcss/vite` eklentisiyle. Ayrı config dosyası yok;
  tasarım anahtarları `src/styles/global.css` içinde `@theme` bloğunda.
- **@tailwindcss/typography** (`prose`) — uzun metni biçimlendiren asıl şey. Yazı
  içeriğinin güzel görünmesi buradan geliyor.
- **Fontlar Fontsource ile yerelde** (`@fontsource-variable/*`), CDN yok — dış istek
  yok. Başlık: Bricolage Grotesque, gövde/arayüz: Inter.
- Repo adı `frknilisu.github.io` → site kök adreste, `base = "/"`.
- Site dili Türkçe (`<html lang="tr">`, tarihler `tr-TR`).
- **Analytics yok, çerez yok, client-side JavaScript yok, yorum sistemi yok.**

## Dizin yapısı

```
.
├── src/
│   ├── content/posts/   yayındaki yazılar (markdown + front matter)
│   ├── content.config.ts  koleksiyon şeması (front matter doğrulama)
│   ├── pages/           rotalar: index, posts/, [slug], etiket/[tag], rss.xml
│   ├── layouts/Base.astro   HTML iskeleti, head, header/footer
│   ├── components/      Header, Footer, PostCard, SeriesBox
│   ├── styles/global.css   Tailwind + palet (@theme) + prose dokunuşları
│   └── lib/utils.ts     Türkçe tarih, okuma süresi
├── public/             olduğu gibi servis edilen statik dosyalar (görseller vb.)
├── drafts/             olgunlaşmamış taslaklar (Astro build etmez)
├── fikirler.md         ham fikir kutusu
├── astro.config.mjs
└── CLAUDE.md
```

URL biçimi Hugo'daki gibi korundu: yazılar `/slug/`, etiketler `/etiket/tag/`.

`drafts/` ve `fikirler.md` bilerek `src/` dışında. Yayınlanmasınlar ama git'te
dursunlar diye.

## Görünüm

Tema "Ferah & sıcak": sıcak beyaz zemin (`--color-paper #faf9f7`), koyu mürekkep
metin, tek kiremit aksan (`--color-clay #c2603f`). Palet ve tipografi
`src/styles/global.css` içindeki `@theme` bloğunda; oradan değiştir.

Görsel zenginlik hazır kütüphaneden geliyor — el ile CSS yazmaya girişme. Uzun metin
`prose` (Tailwind Typography) ile biçimleniyor; üstüne birkaç sıcak dokunuş var
(başlık önü kısa aksan çizgi, açılış paragrafında drop-cap, pull-quote). Bunları
`global.css` içindeki `.prose` düzenlemelerinden ayarla.

Değişmeyen ilke: **JavaScript yok, çerez yok, analytics yok, yorum yok.** Tasarımı
zenginleştirmek serbest ama bu çizgiyi bozan bir şey (client JS, çerez, izleyici)
ekleme.

Görsel/fotoğraf uydurulmaz. Görsel gerekiyorsa Furkan sağlar; `public/img/` altına
konur. O gelene kadar tasarım renk/tipografi/kart ile taşınır.

## İş akışı

Üç komut var. Furkan bunlardan birini söylediğinde ilgili adımı çalıştır.

**"fikir: ..."** → `fikirler.md`'nin en üstüne tarihli tek satır ekle. Yorum yapma,
genişletme, yazıya çevirmeye kalkma. Sadece kaydet.

**"taslak yaz"** → Konuşulan fikri deneme haline getir, `drafts/` altına yaz.
Yayınlama.

**"yayınla"** → Taslağı `src/content/posts/` altına taşı, front matter'ı tamamla,
`npm run build` ile derlenip derlenmediğini doğrula, commit et, push et. Commit mesajı
yazının başlığı olsun.

## Yazı formatı

Front matter alanları: `title`, `date`, `tags`, `slug`. İsteğe bağlı: `description`
(kart/özet ve yazı başı için), seri yazılarında `series` + `series_order`.

Slug ASCII olacak — Türkçe karakterler dönüştürülür: ı→i, ş→s, ğ→g, ü→u, ö→o, ç→c.
Kısa tutulsun, başlığın tamamı olmak zorunda değil.

Etiket listesi kapalı. Sadece şunlar: `deneme`, `iman`, `teknik`, `hayat`, `okuma`,
`parfüm`.
Yeni etiket ancak Furkan açıkça isterse eklenir. Etiket enflasyonu arşivi bozar.

## Yazı üslubu

Bu en önemli bölüm. Yazılar tutarlı bir sesle çıkmazsa arşiv birkaç ay içinde
dağınık görünür.

- Türkçe. Birinci tekil şahıs.
- 600–1000 kelime. Uzunsa böl, iki yazı yap.
- Düz nesir. Madde işareti ve alt başlık kullanma — bu bir deneme, dokümantasyon
  değil.
- Kısa cümle. Süs yok, edebiyat yapmaya çalışma.
- Başlık kısa ve düz olsun. İki noktalı alt başlık yok, merak tuzağı yok.
- Somut bir gözlemle veya olayla başla, oradan fikre git. Tanımla başlama.
- Sonucu bağlamak zorunda değil. Soruyla veya askıda bitebilir; deneme bunu kaldırır.
- Şu kalıplar yasak: "günümüzde", "sonuç olarak", "bu yazıda ele alacağız",
  "unutmayalım ki", "peki ya siz?"

## Kırmızı çizgiler

- **Furkan'ın söylemediği fikri yazıya ekleme.** Senin işin onun düşüncesini yazıya
  dökmek, düşünceyi büyütmek değil. Eksik bir yer varsa yaz ve sor, doldurma.
- **Örnek, anı, istatistik uydurma.** Yazıda geçen her somut şey konuşmada geçmiş
  olmalı.
- **Ayet, hadis, alıntı uydurma.** Dini içerikli bir yazıda kaynak geçecekse önce
  Furkan'a doğrulat. Doğrulanmamış hiçbir nakil yazıya girmez. Bu konuda tereddüt
  edersen alıntıyı tamamen çıkar.
- İstenmeden yazı yazma, istenmeden yayınlama.
- Dizin yapısını gereksiz yere değiştirme, istenmeyen özellik ekleme. Görünüm
  değişikliği için "Görünüm" bölümündeki sınırlara uy: JavaScript, çerez, analytics
  girmez.

## Yayın öncesi kontrol

- Front matter tam mı, slug ASCII mi
- Etiket kapalı listeden mi
- Yasak kalıplardan biri geçiyor mu
- Yazıda konuşmada geçmeyen bir iddia var mı
- Uydurulmuş kaynak var mı
