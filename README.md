# Yazılar

Kişisel deneme arşivi. Hayat, düşünce, iman, ara ara teknik meseleler.

Hugo ile derlenir, GitHub Pages'te yayınlanır. `main` dalına push atıldığında site
otomatik güncellenir.

## Kullanım

Repo Claude Code oturumu içinden kullanılır. Üç komut var:

| Komut | Ne yapar |
|---|---|
| `fikir: ...` | `fikirler.md`'ye tarihli tek satır ekler |
| `taslak yaz` | Konuşulan fikri denemeye çevirir, `drafts/` altına koyar |
| `yayınla` | Taslağı `content/posts/`'a taşır, commit + push eder |

Yazım kuralları, üslup ve kırmızı çizgiler `CLAUDE.md` içinde.

## Yapı

```
content/posts/     yayındaki yazılar
drafts/            olgunlaşmamış taslaklar
fikirler.md        ham fikir kutusu
static/img/        görseller
```

`drafts/` ve `fikirler.md` `content/` dışında olduğu için siteye çıkmaz ama git'te
saklanır.

## Yerelde önizleme

```
hugo server -D
```

Site `http://localhost:1313` adresinde açılır. `-D` taslakları da gösterir, ama
`drafts/` klasörü `content/` dışında olduğu için orada değil, sadece front
matter'ında `draft: true` olan yazılar için geçerli.

Hugo `~/.local/bin/hugo` altında kurulu. Tema git submodule; repo klonlanırken
`git clone --recurse-submodules` kullanılmalı, unutulursa:

```
git submodule update --init --recursive
```

## Not

Bu arşiv kalıcılık için var, kitle için değil. Yazılar düz markdown; platform
bağımlılığı yok, istenildiği an başka bir yere taşınabilir.
