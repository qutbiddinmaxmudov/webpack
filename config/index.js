const   {readdirSync}   = require('fs'),
        path = require('path').join(__dirname,'rules')
        module.exports = readdirSync(path).map(rule=>rule= require(path+'/'+rule))
        
         