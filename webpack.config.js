const path=require('path');

module.exports={
    entry: './src/index.js',
    output:{
        filename:'script.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'production',

module:{
        rules:[
            {
            //verifica se arquivos termina com .css
            test:/\.css$/,
            //usa este arquivo
            use:['style-loader','css-loader']
            }

        ]
    }

};