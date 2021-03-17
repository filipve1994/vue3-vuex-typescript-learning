const {itemsNoTypescript} = require("./itemsNoTypescript");
const {itemsTypescript} = require("./itemsTypescript");
// Note: In your file it will be like this:
const {generateTemplateFiles} = require('generate-template-files');

// node ./tools/generate.js angular-ngrx-store __name__=some-name __model__=some-other-name --outputpath=./src/here --overwrite
// node ./tools/generate.js vue-component-typescript __name__=some-name --outputpath=./src/here --overwrite

generateTemplateFiles(itemsNoTypescript);
