
# Read before you modify code

The public folder is actually rendered on the server side. This means that the items inside this folder can be accessed on the server. For eg, you could run the app with `npm run dev` and go to `localhost:3000/favicon.icon` and that will display the icon.

The styles folder are all for the styles. It has global css and is common to have specific css files for specific pages.

The `index.tsx` page is the home module in reference ( by the css file inside styles :: you can see the import in the `index.tsx`. )

YOU CANNOT IMPORT GLOBAL STYLES DIRECTLY INTO COMPONENTS.
YOU HAVE TO FOLLOW SPECIFIC GUIDELINES ON HOW TO WRITE THE FILES FOR THE IMPORTS TO WORK.

## Installed MUI Packages with 

```
npm i @emotion/cache @emotion/react @emotion/server @emotion/styled
npm i @mui/material
npm i @fontsource/roboto
npm i @mui/icons-material

<!-- for firebase  -->
npm install firebase
```
