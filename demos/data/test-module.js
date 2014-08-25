(function(obj){
    
    var def = Orgy.define(obj.__id,obj);
    if(typeof process === 'object' && process + '' === '[object process]'){
        module.exports = def;
    }
    
}(function(){
    
    var cls = {

        ///////////////////////////////////////////////////
        //  VARIABLES
        ///////////////////////////////////////////////////
        __id : "test-module"
        ,__dependencies : [

            {
                url : "*/data/test-module-2a.js"
                ,type : "script"
            }
            ,{
                url : "*/data/test-module-2b.js"
                ,type : "script"
            }
        ]
        
        ////////////////////////////////////////
        //  CONSTRUCTOR/RESOLVER
        ////////////////////////////////////////
        ,__resolver : function(r,deferred){  
            deferred.resolve(this);
        }
    };
    
    return cls;
    
}()));