# Tailwindify
HTML Components built using TailwindCSS and Parcel

### Built With
- [TailwindCSS](https://tailwindcss.com/)
- [ParcelJS](https://parceljs.org/)

## File Structure

```
  ├── src/
        ├──components             contains components respective folder with markup and styles
            ├──COMPONENT A        components folder where all components with thier respective folders are present
                ├──index.html     component A markup file
                ├──style.scss     component A style file (Optional)
            ├──COMPONENT B              
                ├──index.html     
                ├──style.scss
            ....
            ....
            ....
            ....
            ├──COMPONENT X              
                ├──index.html     
                ├──style.scss
        ├──style.scss             Main page styles
        ├──index.html             Main page of the website
  ├── dist/  Optimized components with respective folders (Available after `yarn build`)
```
## Usage

### Install Depedencies

```bash
yarn install
```

### Build Components

```bash
yarn build
```

### Update Components and Watch

```bash
yarn serve
```

The local dev server on serve can be accessed through port 8989 i.e., `localhost:8989`

### How it works

- Each component is present in it's respective folder eg: `components/alert`,`components/notification` etc
- Optional SCSS file can added and linked directly within HTML using `link` attribute which will be compiled by parcel.
  
  **Note: Tailwind Styles are required for each Saas file if you are planning on using tailwind in seperate styles file**
  ```scss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  // Other styles here using @apply for extracting tailwind classes to each class
  ```
- Once `yarn build` is run, the output files will be present on `dist` folder with same component structure.



