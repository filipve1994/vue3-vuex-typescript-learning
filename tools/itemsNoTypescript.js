
const itemsNoTypescript = [

    {
        option: 'Vue Component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/vue-no-typescript/__component__Component.vue',
        },
        stringReplacers: ['__component__'],
        output: {
            path: './src/components/__component__.vue',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },

    {
        option: 'Vue Component own directory',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/vue-no-typescript/__component__Component.vue',
        },
        stringReplacers: ['__component__'],
        output: {
            path: './src/components/__component__(lowerCase)/__component__(pascalCase).vue',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },

    {
        option: 'Vue View Typescript',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/vue-no-typescript/__view__View.vue',
        },
        stringReplacers: ['__view__'],
        output: {
            path: './src/views/__view__.vue',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },

    {
        option: 'Vue View Typescript own directory',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/vue-no-typescript/__view__View.vue',
        },
        stringReplacers: ['__view__'],
        output: {
            path: './src/views/__view__(lowerCase)/__view__(pascalCase).vue',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },


    // Vue
    // {
    //     option: 'Vue Vuex Store',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/vue/vuex-store/',
    //     },
    //     stringReplacers: ['__store__', '__model__'],
    //     output: {
    //         path: './src/stores/__store__(kebabCase)',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    //     onComplete: async (results) => {
    //         console.log(`results`, results);
    //         await importVuexStore(results);
    //     },
    // },
    // React
    // {
    //     option: 'React Redux Store',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/redux-store/',
    //     },
    //     stringReplacers: ['__store__', '__model__'],
    //     output: {
    //         path: './src/stores/__store__(kebabCase)',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //         overwrite: true,
    //     },
    //     onComplete: (results) => {
    //         console.log(`results`, results);
    //     },
    // },
    //
    //
    // // Example of generating a single file
    // {
    //     option: 'Create Redux Reduce',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/__store__Reducer.ts',
    //     },
    //     stringReplacers: ['__store__', '__model__'],
    //     output: {
    //         path: './src/stores/__store__/__store__(pascalCase)Reducer.ts',
    //         pathAndFileNameDefaultCase: '(kebabCase)',
    //     },
    // },
    //
    //
    // {
    //     option: 'React Component',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/component/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/views/__name__(kebabCase)',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },
    // {
    //     option: 'React Connected Component',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/connected-component/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/views/__name__(kebabCase)',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },
    // {
    //     option: 'Selector',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/selectors/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/selectors/__name__(kebabCase)',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },
    // {
    //     option: 'Model',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/__model__Model.ts',
    //     },
    //     stringReplacers: ['__model__'],
    //     output: {
    //         path: './src/models/__model__Model.ts',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },
    // {
    //     option: 'Interface',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/I__interface__.ts',
    //     },
    //     stringReplacers: ['__interface__'],
    //     output: {
    //         path: './src/models/I__interface__.ts',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },
    // {
    //     option: 'Enum',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/__enum__Enum.ts',
    //     },
    //     stringReplacers: ['__enum__'],
    //     output: {
    //         path: './src/constants/__enum__Enum.ts',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },


];

/*
 * NOTE: there is many ways you can do this. This is just an example on how you might approach it.
 */
// async function importVuexStore(results) {
//     const files = results.output.files;
//
//     const fullPaths = files
//         .map((folderPath) => folderPath.replace('src/', '')) // remove 'src' from path
//         .map((path) => `import ${filename(path)} from '${path}'`) // create import statement
//         .join('\n'); // put all imports on there own line
//
//     try {
//         await insertLine('src/import-test.ts').append(fullPaths);
//     } catch (error) {
//         console.log(``, error);
//     }
// }

exports.items = items;
