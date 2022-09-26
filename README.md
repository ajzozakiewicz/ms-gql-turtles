# gql-codegen-tsc-sample

## supporting libraries
* [@graphql-tools/load-files](https://www.graphql-tools.com/docs/api/modules/load_files_src)
```js
export const myModule = createModule({
  id: 'my-module',
  dirname: __dirname,
  typeDefs: loadFilesSync(join(__dirname, './typeDefs/*.graphql'))
})
```
