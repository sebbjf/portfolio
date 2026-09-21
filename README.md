
# 🐷🦀 Seb's porfolio 

My personal portfolio. Made with Astro Build.




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file, follow `.env.template`

`SPOTIFY_CLIENT_ID`

`SPOTIFY_CLIENT_SECRET`

`SPOTIFY_REFRESH_TOKEN`
## CMS Integration

To create blog posts I use [TinaCMS](https://tina.io/). It only runs locally. See [the docs](https://tina.io/docs/).

- Run the app.
```sh
npm run dev
```
- Enter the following URL.
```
http://localhost:4321/admin/index.html
```
- You'll see some templates to create posts.
- After creating a post, push the new post to the repository.
## Other dependencies
- [kbar](https://kbar.vercel.app/) - To create the command menu.
- [astro-i18next](https://github.com/yassinedoghri/astro-i18next) - Multilanguage support.
## Scripts
- `npm run dev` - Astro preview.
- `npm run dev:host` - Astro preview + host.
- `npm run dev:tina` - Astro preview + Run TinaCMS server.
- `npm run dev:tinahost` - Astro preview + Run TinaCMS server + host.
- `npm run i18next` - Generate i18next files.
## Authors

- [@sebbjf](https://www.github.com/sebbjf)


## License

[MIT](https://choosealicense.com/licenses/mit/)

