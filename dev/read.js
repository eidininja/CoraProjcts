const soap = require('soap')

const url = 'http://192.168.100.187/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl'

var objKeys  = []
var cle = {
    key:'BPCNUM',
    value:'AO001'
}
objKeys = cle

var cliente = {
    codeLang: 'POR',
    poolAlias: 'SEED',
    poolId:'',
    resquestConfig: 'adxwss.trace.on=on&adxwss.trace.size=16384&adonix.trace.on=on&adonix.trace.level=3&adonix.trace.size=8&adxwss.optreturn=XML'
}
var args = {
    callContext: cliente,
    publicName: 'BPC', 
     objectKeys: cle
}
soap.createClient(url,(err,client) => {
    if(err){
        console.log(err)
    }else{
        console.log('ok')
        client.setSecurity(new soap.BasicAuthSecurity('ws','intcorax3'))
        client.read(args, function(err,result){
        var myJSON = JSON.stringify(result.readReturn.resultXml)
        console.log(myJSON)
        })        
    }
})
