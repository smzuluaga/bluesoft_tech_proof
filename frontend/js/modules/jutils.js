const JUtils = {
    elements :{
        capitalizeExeptions : ['de']
    },
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
        },
        formData : function (string,format) {

            if (string === undefined || string === null || string.length === 0){ return string = ""};

            switch(format){
                case "original" : {
                    string = string;
                    break;
                };
                case "upper" : {
                    string = string.toUpperCase();
                    break;
                };
                case "capitalized" : {

                    let array = string.split(' ');
                    let newArray = [];

                    for (let i = 0; i < array.length; i++){

                        let capitalized =  array[i] != "" ? array[i][0].toUpperCase() : "";
                        
                        if (JUtils.elements.capitalizeExeptions.includes(array[i])){
                            newArray[i] = array[i];
                        } else {
                            newArray[i] = `${capitalized}${array[i].substring(1)}`;
                        }
                    }
                    
                    string = newArray.join(' ');

                    break;
                };
                default : {
                    string = string;
                    break;
                }

            }
            
            return string;
        },
        formatNumeric : function (number) {

            const string = String(number).split('');
            const length = string.length
    
            for (let i = length; i > 0; i-=3){
                if(i!== length){
                    string.splice(i, 0, '.')
                } else {
                    continue
                }
            }
            return string.join('');
        },
        renderSelectOptions : async function(place) {

            const BlueStorage = await JSON.parse(localStorage.getItem('BlueStorage'))
            const owner_id = BlueStorage.usuarioSesion.id;

            const url = `${BluesoftBank.elements.url}/accounts?owner_id=${owner_id}&populate=owner_id`;
            const token = BluesoftBank.elements.token;
            
            await fetch(url, {
                method : 'GET',
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(Response => Response.json())
            .then((data) => {

                const options = data.data;

                for (let option of options){

                    const { numero, tipo_cuenta } = option.attributes;

                    const selectOption = document.createElement('option');
                    selectOption.value = numero;
                    selectOption.innerHTML = `Cuenta ${JUtils.methods.formData(tipo_cuenta,'capitalized')} - ${numero}`;

                    place.appendChild(selectOption);
                }
                console.log(options);
            });


        }
    }
}