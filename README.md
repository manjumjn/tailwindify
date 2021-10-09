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


## How it works

- Each component is present in it's respective folder eg: `components/alert`,`components/notification`,`components/notification variation 1` etc
- Optional SCSS file can added and linked directly within HTML using `link` attribute which will be compiled by parcel.

  ````HTML
  <link rel="stylesheet" href="style.scss">
  ````
  
  **Note: Tailwind Styles are required for each respective component style (SCSS) file if you are planning on using tailwind in using `@apply` directive**
  ```scss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  // Other styles here using @apply for extracting tailwind classes to each class
  ```
- Once the command `yarn build` is run, the output files will be present on `dist` folder with same component structure.

## List of Component Categories

- [x] Alert
- [ ] Card
- [ ] Navigation
- [ ] Notification
- [ ] CTA

and more..

## How to add new component

1. Duplicate the `template` folder into components with component name
2. Update the title in `index.html` and contents within `<!-- Component start --> <!-- Component End -->` lines.
3. Remove default `style.scss` and linking of file if not used in the `index.html`
4. Take a Screenshot of the result and replace the `preview.png` within the component folder.

## Contribution

Glad to see you are interested in improving this repository. Please read the contributing guidelines [here](https://github.com/manjumjn/tailwindify/blob/main/CONTRIBUTING.md)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Contact Information

- Email: manjumjng2@gmail.com
- Twitter: https://twitter.com/manjumjn
- Website: https://manjumjn.com