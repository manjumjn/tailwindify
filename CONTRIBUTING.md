# Contributing

Thanks for your interest in contributing to Tailwindify! Please take a moment to review this document **before submitting a pull request**.

## Pull requests

**Please check with list of available components or `src/components` folder first before starting work on new component.**

It's never a fun experience to have your pull request declined after investing a lot of time and effort. To avoid this from happening, we request that contributors create [an issue](https://github.com/manjumjn/tailwindify/issues) to first discuss if there is any component that already exists similar to the one you are going to build.

If the component with **category exists** then you can create it as a variation of the same. **Eg: Alert VARIATION_NAME**

### How to add new component

1. Duplicate the `template` folder into components with component name
2. Update the title in `index.html` and contents within `<!-- Component start --> <!-- Component End -->` lines.
3. Remove default `style.scss` and linking of file if not used in the `index.html`
4. Take a Screenshot of the result and replace the `preview.png` within the component folder.

## Coding standards

When it comes to tailwind it's easier to throw in the classes you need based on the design requirements but here are list you can follow to improve.

 - **Don't modify** the existing `tailwind.config.js` - As this is a open-source project and multiple contributors will be invloved, it's better to keep it standard config so it will be consistent. 
 - **Group related classes** together - By Grouping means keeping related classes together ( Typography related classes, transition classes etc)
 - **Related class names** - When using `@apply` directive to extract componenet classes to seperate class, use related class names. Eg: `.btn` `.card` `.menu` etc
 - **Minimum DOM elements/nesting** - Try to minimize the nesting of the elements when not necessary 
 - **Accessibility** - It's good to have accessible elements/components
 
