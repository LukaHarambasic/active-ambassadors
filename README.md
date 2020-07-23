# Active-Ambassadors

[Website](https://active-ambassadors.org)

## Setup

### Platforms

* Hosted on [Netlify](https://www.netlify.com/)
* All the numbers (mainly on the transparency page) are served via [Airtable](https://airtable.com/)
* The content is hosted on [Prismic](https://prismic.io/)
* [IFTTT](https://ifttt.com/) to trigger daily builds

### Flows

* When content on Prismic.io is changed a new build on [Netlify](https://www.netlify.com/) will be trigerred
* Everyday at 24:00 (german time) a build will be triggered from [IFTTT](https://ifttt.com/) as [Airtable](https://airtable.com/) doesn't provide webhooks

### Development

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

