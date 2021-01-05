const path = require('path'); 

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {  
    resolve: {  
      alias: {  
        "@assets": path.join(__dirname, './src/assets')
      },  
    },  
  },
};
