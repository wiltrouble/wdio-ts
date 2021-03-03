 const path = require('path')

 module.exports = {
     entry: './features/*.ts*',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'main.js',
     },
     resolve: {
        extensions: ['.ts']
     }
 }