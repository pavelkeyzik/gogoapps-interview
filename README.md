# GogoApps Inteview

## How to run application

To run application add `.env` file to the root folder with this content

```
REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY
```

And start the project with `npm run start:prod` to run with YouTube's API

If you don't want to use YouTube's API you can use mocked data, so you event don't need `.env` file. Just run `npm run start:dev` command and that's it.

## Some notes about project

- Added `.vscode/settings.json` with formatOnSave. Just for those who will use VSCode to be able format code on save. As a lot of time people are used to forget about this. If the teams don't need I'll definetely remove this part.

- I use `components` folder to store global components

- `core` folder is the place for business logic like API requests or work with Video Player

- `design-system` folder is used to add components that we can move in npm library in the future. It's something like Bootstrap, Material UI, Primer, but locally.

- `pages` folder contains pages that you can add to your routing. Every page may contain local hooks, components, etc.

## Things to improve

1. Change all relative path to absolute. `../../../design-system` to '@/design-system'
2. Add button in Search Input for mobile devices
3. Add tabindex for `VideoPreview` component to be able select item by hitting `Tab` button
4. Add queryString.parse() to generate string of query parameters from object in API requests
5. Instead of add return type Promise<typeof getVideosListJSON | null> it's better to generate these types from API Schema like in Swagger. I wrote an article about how to do this. Check this link: https://blog.pavelkeyzik.com/posts/generate-types-from-swagger
