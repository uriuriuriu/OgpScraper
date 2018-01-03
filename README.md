# OgpScraper
ogpScraper


# usage 

### a. get

http://localhost:3000/api/https%3a%2f%2fqiita.com%2furiuriuriu

### b. post

```bash
$ curl -d url=https://qiita.com/uriuriuriu http://localhost:3000/api/
```

### result

return jsonp

```json
{
  title: "uriuriuriu - Qiita",
  ogp: {
    og:title: [
      "uriuriuriu - Qiita"
    ],
    og:type: [
      "article"
    ],
    og:url: [
     "https://qiita.com/uriuriuriu"
    ],
    og:image: [
      "https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png"
    ],
    og:description: [
     "突撃ラピブラ使いです。"
    ],
    og:site_name: [
     "Qiita"
    ],
    fb:admins: [
      "564524038"
    ]
  },
  seo: {
    viewport: [
      "width=device-width,initial-scale=1"
    ],
    description: [
      "突撃ラピブラ使いです。"
    ],
    twitter:card: [
      "summary"
    ],
    twitter:site: [
      "@Qiita"
    ],
    csrf-param: [
      "authenticity_token"
    ],
    csrf-token: [
      "lkYmjoBjRj8QURTWmFV0fdT6Nod8Qt4lzfhnqf4Npp1OBKeAEEaXuhSaBcqXKjj+8rg58ypj6g/yIy/QXvnH8A=="
    ]
  }
}

```