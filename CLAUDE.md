# CLAUDE.md

## Bu repo nedir

Furkan'ın kişisel deneme/blog arşivi. Aklına gelen fikirler — hayat felsefesi, dini
meseleler, ara ara teknik konular — sohbet içinde olgunlaşır, burada yazıya döner ve
kalıcı olur. Sohbet geçmişi kaybolur; bu repo kaybolmaz.

Site Hugo ile derlenir, GitHub Pages'te yayınlanır. `main` dalına push atıldığında
otomatik yayına çıkar.

## Kurulum hedefi

İlk oturumda kurulacaklar:

- Hugo (extended sürüm gerekmiyor, sade tema kullanılacak)
- Tema: `janraasch/hugo-bearblog` — git submodule olarak eklensin. Erişilemiyorsa
  benzer minimal, JavaScript'siz bir tema seç ve hangisini seçtiğini söyle.
- GitHub Actions workflow: `main`'e push → Hugo build → GitHub Pages deploy
- Repo adı `<kullanıcıadı>.github.io` olsun ki site kök adreste çıksın ve `baseURL`
  sade kalsın
- Site dili Türkçe (`languageCode = "tr"`)
- Analytics yok, çerez yok, JavaScript yok, yorum sistemi yok

## Dizin yapısı

```
.
├── content/posts/     yayındaki yazılar
├── drafts/            olgunlaşmamış taslaklar (Hugo build etmez)
├── fikirler.md        ham fikir kutusu
├── static/img/        görseller
└── CLAUDE.md
```

`drafts/` ve `fikirler.md` bilerek `content/` dışında. Yayınlanmasınlar ama git'te
dursunlar diye.

## İş akışı

Üç komut var. Furkan bunlardan birini söylediğinde ilgili adımı çalıştır.

**"fikir: ..."** → `fikirler.md`'nin en üstüne tarihli tek satır ekle. Yorum yapma,
genişletme, yazıya çevirmeye kalkma. Sadece kaydet.

**"taslak yaz"** → Konuşulan fikri deneme haline getir, `drafts/` altına yaz.
Yayınlama.

**"yayınla"** → Taslağı `content/posts/` altına taşı, front matter'ı tamamla, commit
et, push et. Commit mesajı yazının başlığı olsun.

## Yazı formatı

Front matter alanları: `title`, `date`, `tags`, `slug`.

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
- Dizin yapısını yeniden düzenleme, tema özelleştirmesine girişme, istenmeyen
  özellik ekleme.

## Yayın öncesi kontrol

- Front matter tam mı, slug ASCII mi
- Etiket kapalı listeden mi
- Yasak kalıplardan biri geçiyor mu
- Yazıda konuşmada geçmeyen bir iddia var mı
- Uydurulmuş kaynak var mı
