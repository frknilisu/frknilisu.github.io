# Yazılar

Kişisel deneme arşivi. Hayat, düşünce, iman, ara ara teknik meseleler.

Astro ile derlenir, GitHub Pages'te yayınlanır. `main` dalına push atıldığında site
otomatik güncellenir. Üretilen sayfalar tamamen statik — çerez, analytics, client-side
JavaScript yok.

## Kullanım

Repo Claude Code oturumu içinden kullanılır. Üç komut var:

| Komut | Ne yapar |
|---|---|
| `fikir: ...` | `fikirler.md`'ye tarihli tek satır ekler |
| `taslak yaz` | Konuşulan fikri denemeye çevirir, `drafts/` altına koyar |
| `yayınla` | Taslağı `src/content/posts/`'a taşır, commit + push eder |

Yazım kuralları, üslup ve kırmızı çizgiler `CLAUDE.md` içinde.

## Yapı

```
src/content/posts/   yayındaki yazılar (markdown)
src/pages/           rotalar
src/styles/          Tailwind + tema
drafts/              olgunlaşmamış taslaklar
fikirler.md          ham fikir kutusu
public/img/          görseller
```

`drafts/` ve `fikirler.md` `src/` dışında olduğu için siteye çıkmaz ama git'te
saklanır.

## Yerelde önizleme

```
npm install
npm run dev
```

Site `http://localhost:4321` adresinde açılır. Derleme kontrolü için `npm run build`
(çıktı `dist/`).

## Not

Bu arşiv kalıcılık için var, kitle için değil. Yazılar düz markdown; platform
bağımlılığı zayıf, istenildiği an başka bir yere taşınabilir.
