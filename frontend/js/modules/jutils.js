const JUtils = {
    methods : {
        setBlueStorage : async function () {

            
            const template =  {

                poweredBy : 'Santiago Zuluaga',
                version : 'BlueSoft.v1',
                usuarioSesion: {},
                loginApprovation : false,
            }

            if(!localStorage.getItem('BlueStorage')) {

                JUtils.methods.saveBlueStorage(template);
                BlueStorage =  JSON.parse(localStorage.getItem('BlueStorage'));
            } else {
                BlueStorage =  JSON.parse(localStorage.getItem('BlueStorage'))

                BlueStorage.usuarioSesion = {};
                BlueStorage.loginApprovation = false;
                JUtils.methods.saveBlueStorage(BlueStorage);
                
            }

            // return BlueStorage;

        },
        saveBlueStorage: function (element) {
            localStorage.setItem('BlueStorage', JSON.stringify(element))
        }
    }
}