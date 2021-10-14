# Contributing

Thanks for your interest in contributing to Tailwindify! Please take a moment to review this document **before submitting a pull request**.

## Pull requests

**Please check with list of available components or `src/components` folder first to see if there is any similar components with same design exists.**

It's never a fun experience to have your pull request declined after investing a lot of time and effort. To avoid this from happening, we request that contributors to first check if there is any component that already exists similar to the one you are going to build. If the same design can be improved then you can create PR by updating it. Further more you can create [an issue](https://github.com/manjumjn/tailwindify/issues) to discuss the same.

## Coding standards

When it comes to tailwind it's easier to throw in the classes you need based on the design requirements but here are list you can follow to improve.

 - **Don't modify** the existing `tailwind.config.js` - As this is a open-source project and multiple contributors will be invloved, it's better to keep it standard config so it will be consistent. 
 - **Component Names** must follow the **Naming Convention**.
    * Each Component should follow the naming as `SERIAL_NUMBER-COMPONENT_NAME`. Eg: `01-alert`,'02-notifications' etc
    * When there is a variation of the component such as `alert` we can name as `01-alert-variant2` etc
    * The serial number must follow along with category. For Example currently no card component is present, in that case `01-card`. Each component numbering starts from `01` followed by category
 - **Group related classes** together - By Grouping means keeping related classes together ( Typography related classes, transition classes etc)
 - **Related class names** - When using `@apply` directive to extract componenet classes to seperate class, use related class names. Eg: `.btn` `.card` `.menu` etc
 - **Minimum DOM elements/nesting** - Try to minimize the nesting of the elements when not necessary 
 - **Accessibility** - It's good to have accessible elements/components
 
