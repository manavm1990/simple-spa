# A Very Simple SPA Demo

It's based loosely on [this tutorial.](https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/) which demos how to do a simple PWA.

You would also need to add a 'db.json' file for `json-server` (or adjust the code for whatever API, etc.). Here's the JSON that I used in my 'db':

```json
{
  "coffees": [
    {
      "name": "Perspiciatis",
      "image": "https://source.unsplash.com/400x300/?coffee"
    },
    {
      "name": "Voluptatem",
      "image": "https://source.unsplash.com/400x300/?coffee"
    },
    {
      "name": "Explicabo",
      "image": "https://source.unsplash.com/400x300/?coffee"
    },
    {
      "name": "Rchitecto",
      "image": "https://source.unsplash.com/400x300/?coffee"
    },
    {
      "name": " Beatae",
      "image": "https://source.unsplash.com/400x300/?coffee"
    },
    {
      "name": " Vitae",
      "image": "https://source.unsplash.com/400x300/?coffee"
    },
    {
      "name": "Inventore",
      "image": "https://source.unsplash.com/400x300/?coffee"
    },
    {
      "name": "Veritatis",
      "image": "https://source.unsplash.com/400x300/?coffee"
    },
    {
      "name": "Accusantium",
      "image": "https://source.unsplash.com/400x300/?coffee"
    }
  ]
}
```

Other than that, if you want to use `json-server` like I did, kindly do: `npm run db` and then `npm run serve` will spin up `parcel index.html`.
