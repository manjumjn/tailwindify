# Tailwindify
HTML Components built using TailwindCSS

### Built With
- [TailwindCSS](https://tailwindcss.com/)
- [ParcelJS](https://parceljs.org/)

## Table of Components
  * [Usage](#usage)
    + [Install Dependencies](#install-dependencies)
    + [Build Components](#build-components)
    + [Update Components and Watch](#update-components-and-watch)
  * [How it works](#how-it-works)
  * [Naming Convention](#naming-convention)
  * [How to add new component](#how-to-add-new-component)
  * [Contribution](#contribution)
  * [License](#license)
  * [Contact Information](#contact-information)

## File Structure

```
  ├── src/
        ├──components             contains components respective folder with markup and styles
            ├──COMPONENT A        components folder where all components with their respective folders are present
                ├──index.html     component A markup file
                ├──style.scss     component A style file (Optional)
                ├──preview.md     component screenshot preview on folder access
                ├──preview.png    component design preview image
            ├──COMPONENT B              
                ├──index.html     
                ├──style.scss
            ├──COMPONENT B VARIATION      
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

### Install Dependencies

```bash
yarn install
```

### Run Dev Server

```bash
yarn serve
```

> Note: The local dev server can be accessed through port `8989` i.e., **`localhost:8989`** and corresponding components by accessing folder/file as **`localhost:8989/components/COMPONENT_FOLDER/index.html`** eg: `localhost:8989/components/alert/index.html`


### Build Components

```bash
yarn build
```



## How it works

- Each component is present in it's respective folder eg: `components/COMPONENT1`,`components/COMPONENT2`, Eg: `components/card` etc
- SCSS file is added and linked directly within HTML using `link` attribute which will be compiled by parcel which as default `tailwindcss` styles.

  ````HTML
  <link rel="stylesheet" href="style.scss">
  ````
  
  **Note: Tailwind Styles are required for each respective component style (SCSS) file within which you can use `@apply` directive to extract tw classes to respective component classes**
  ```scss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  // Other styles here using @apply for extracting tailwind classes to each class
  ```
- Once the command `yarn build` is run, the output files will be present on `dist` folder with the same component structure.

## Naming Convention

- Each Component should follow the naming as `SERIAL_NUMBER-COMPONENT_NAME`. Eg: `01-alert`,'02-notifications' etc
- When there is a variation of the component such as `alert` we can name as `01-alert-variant2` etc
- The serial number must follow along with category. For Example currently no card component is present, in that case `01-card`. Each component numbering starts from `01` followed by category

## How to add new component

1. Go to `src/components` directory. Duplicate the `template` folder into components with the component name. Follow [Naming Convention](#naming-convention) for naming the folder
2. Update the title in `index.html` and contents within `<!-- Component start --> <!-- Component End -->` lines.
3. Take a Screenshot of the result and replace the `preview.png` within the component folder.
4. Run `yarn serve` to play with changes

## Contribution

Glad to see you are interested in improving this repository. Please read the contributing guidelines [here](https://github.com/manjumjn/tailwindify/blob/main/CONTRIBUTING.md)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Contact Information

- Email: manjumjng2@gmail.com
- Twitter: https://twitter.com/manjumjn
- Website: https://manjumjn.com
