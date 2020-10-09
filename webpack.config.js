//o webpack tem acesso aos módulos do nodejs, então podemos usar a constante path
const path = require('path');

module.exports ={
    entry: path.resolve(__dirname, 'src', 'index.js'), //especifíca o arquivo que o webpack deve buscar para que seja traduzido para o babel
    output: {
        path: path.resolve(__dirname, 'public'), //especifíca onde o arquivo "traduzido" será gravado
        filename: 'bundle.js' //nome do arquivo "traduzido"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/, //expressão regular para buscar apenas arquivos com a extenão .js
                exclude: /node_module/, //exclui a pasta node_modules da busca
                use: {
                    loader: 'babel-loader' //especifíca o loader que será usado pelo webpack nos arquivos com extensão .js
                }
            },
            {
                test: /\.css$/,//procura arquivos com a extensão CSS
                exclude: /node_modules/,
                //Para usar mais de um loader, precisamos declarar um array para "use"
                use: [                    
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}