# Translations
This guide assumes the environment has already been set by running npm install, thus having all the needed depedndencies in place.

If this is not the case please take a look at the README file in the root directory of the project. 

## Table of Contents

- [How is it done?](#how-is-is-done)
- [Adding text to translate](#adding-text-to-translate)
- [Translating text](#translating-text)
  - [How to translate?](#how-to-translate)

## How is it done?


The translation library being used is [redux-i18n](https://github.com/APSL/redux-i18n), the benefits for using this library include
* Translate literals
* Pluralize literals
* Export translations to POT files (make your translations with Poedit).
* Import translations from .PO files to translations.js object (for use in your project).
* Add comments for translators.



## Adding text to be translated

The [redux-i18n](https://github.com/APSL/redux-i18n) library uses the react context API to translate text, 
so in order to add text to be translated this needs to be passed to the **"context.t"** method. 

The t() function takes up to three arguments t(textKey [, params, comments]), 
where textKey is either the string to be translated or --- for pluralization --- an object as defined below.\
*See: [redux-i18n Overview](https://github.com/APSL/redux-i18n/blob/master/README.md#overview)* 

Check the example below to see how to use this API.

```js
// Add the context method to the component
MyComponent.contextTypes = {
  t: PropTypes.func.isRequired
};
```

```js
// Apply it
context.t("Text to be translated")
```

If there's text to be translated but it exists in a file that can't have access to the **context.t** API *(actions, reducers, etc)*.\
you can still have that text translated *(the [redux-i18n](https://github.com/APSL/redux-i18n) library uses regex to find text to be translated)*.  
by having a comment similar to what you would have on a component that uses the **context.t** method.

```js
// context.t("modal title")
const modalConfig = {modalTitle: "modal title"};

```

## Translating text

The translations are read from the _`"src/translations/translations.js"`_ file, which looks like this. 

```js
export const translations = {
  en: {
    'Cancel:': 'Cancel:',
    ...
  },
  es: {
    'Cancel:': 'Cancelar:',
     ...
  }
};


```
Each language is stored on a property of the translations object.


### How to translate?
There's two ways to translate text
* Edit the translations file directly. *(Not recommended)*
* Generate a **POT** file by running `npm run extract` from the root folder.

#### Export POT File
Running `npm run extract`  will create  a **POT** file located in the `locales` folder named `template.pot`
The generated POT file can then be translated using [poedit](https://poedit.net/) app or similar.\
Ref: [redux-i18n Extract texts and build template.pot](https://github.com/APSL/redux-i18n/blob/master/README.md#extract-texts-and-build-templatepot)

#### Import PO Files
For importing your translated **PO** files place them in the `locales` folder, each file should have the language it's translated to 
in it's name.\
Find below an example of how the `locales` folder should look with 2 **PO** files, one for english and one for spanish.\
Ref: [redux-i18n Import .po files](https://github.com/APSL/redux-i18n/blob/master/README.md#import-po-files)

```
- locales
  - en.po
  - es.po
```
Once your **PO** files are in place just run `npm run import`. This will create a `translations.js` file under `src/translations`
