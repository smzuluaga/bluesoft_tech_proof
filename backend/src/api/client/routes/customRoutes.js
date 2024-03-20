module.exports = {
    routes : [
        {
            "method" : 'POST',
            "path" : '/clients/login',
            "handler" : 'client.login',
            "config" : {
                "policies" : []
            }
        }
    ]

    
}