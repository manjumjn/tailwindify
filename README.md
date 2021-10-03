# Tailwindify
HTML Components built using TailwindCSS and Parcel

### Built With
- [TailwindCSS](https://tailwindcss.com/)
- [ParcelJS](https://parceljs.org/)

## File Structure

```
  ├── src/
        ├──components                       contains components respective folder with markup and styles
            ├──COMPONENT FOLDER             component folder
                ├──COMPONENT_FILE.html      component markup file
                ├──COMPONENT_FILE.scss      component style file
        ├──style.scss               Main page styles
        ├──index.html               Main page of the website
  ├── dist/  Optimized components with respective folders (Available after `yarn build`)
```
## Usage

### Install Depedencies

```
yarn install
```

### Build Components

```
yarn build
```

### Update Components and Watch

```
yarn serve
```

The local dev server on serve can be accessed through port 8989 i.e., `localhost:8989`

