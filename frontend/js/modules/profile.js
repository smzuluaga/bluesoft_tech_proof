const Profile = {
    elements : {
        nombre : document.getElementById('form-nombre'),
        apellidos : document.getElementById('form-apellidos'),
        pais : document.getElementById('form-pais'),
        ciudad : document.getElementById('form-ciudad'),
        direccion : document.getElementById('form-direccion'),
        cel : document.getElementById('form-cel'),
        email : document.getElementById('form-email'),
        clave : document.getElementById('form-clave'),
        tipoDocumento : document.getElementById('form-tipo-documento'),
        documento : document.getElementById('form-documento'),
        tipoCliente : document.getElementById('form-tipo-cliente'),
        buttonSend : document.getElementById('form-sendButton')
    },
    methods : {
        fillForm : function () {

            const BlueStorage = JSON.parse(localStorage.getItem('BlueStorage'));
            const usuarioSesion = BlueStorage.usuarioSesion;

            console.log(BlueStorage);
            Profile.elements.nombre.value= usuarioSesion.nombre;
            Profile.elements.apellidos.value= usuarioSesion.apellidos;
            Profile.elements.pais.value= usuarioSesion.pais;
            Profile.elements.ciudad.value= usuarioSesion.ciudad;
            Profile.elements.direccion.value= usuarioSesion.direccion;
            Profile.elements.cel.value= usuarioSesion.cel;
            Profile.elements.email.value= usuarioSesion.email;
            Profile.elements.clave.value= usuarioSesion.clave;
            Profile.elements.tipoDocumento.value= usuarioSesion.tipo_documento;
            Profile.elements.documento.value= usuarioSesion.documento;
            Profile.elements.tipoCliente.value= usuarioSesion.tipo_cliente;
        },
        sendForm: function () {

            const BlueStorage = JSON.parse(localStorage.getItem('BlueStorage'));
            const usuarioSesion = BlueStorage.usuarioSesion;

            const url = `${BluesoftBank.elements.url}/clients`;
            const token = BluesoftBank.elements.token;

            const register = {
                "data" : {
                    "id" : usuarioSesion.id,
                    "nombre" : Profile.elements.nombre.value,
                    "apellidos" : Profile.elements.apellidos.value,
                    "pais": Profile.elements.pais.value,
                    "ciudad": Profile.elements.ciudad.value,
                    "direccion" : Profile.elements.direccion.value,
                    "cel" : Profile.elements.cel.value,
                    "email" : Profile.elements.email.value,
                    "clave" : Profile.elements.clave.value,
                    "tipo_documento" : Profile.elements.tipoDocumento.value,
                    "documento" : Profile.elements.documento.value,
                    "tipo_cliente" : Profile.elements.tipoCliente.value,
                    "cuentas" : []
                }
            }

            console.log(register);
            fetch(url, {
                method: 'POST',
                headers : {
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${token}`
                },
                body : JSON.stringify(register)
            })
            .then(response => response.JSON)
            .then(data => {

                BlueStorage.usuarioSesion = data;
                // JUtils.methods.saveBlueStorage(BlueStorage);
                console.log(data);
                console.log(usuarioSesion);

                Profile.methods.fillForm();
            })
        }
    }

}

Profile.elements.buttonSend.addEventListener('click', () => {
    Profile.methods.sendForm();
})