## Scripts

Start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

Lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

Build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```

## Hide your keys

Add your private keys to `.env` (for production) or `.env.development` and access them
anywhere in your code by doing `process.env.MY_API_KEY`.
