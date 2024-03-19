// ***** FUNCIONES GENERALES - INICIO ****

// Variable que contendrá al objeto JStorage para usar LocalStorage con propósitos de experiencia de usuario.
let JStorage;

//Función para configurar localStorage.
window.onload = (()=>{
    // JUtils.methods.setJStorage();
});



// ***** OBJETO PRINCIPAL MODULO INDEX ****

const Login = 
{
    elements : 
    {
        user : document.getElementById("jlogin-datauser"),
        password : document.getElementById("jlogin-datapassword"),
        loginButton : document.getElementById("jlogin-databutton"),
        registerButton : document.getElementById("jlogin-register-button"),
        loginApprovation : false,
        url : 'http://localhost:1337/api',
        token: '57b45774267102906a1acb8c29932fada85139149acb75e28dd26df946d52c225f7328159cea7447da70a1392c31aa731f44f27f6a2a455b4160d1bfe2bc0733cf5dcc587bb15eee0ba3ebc5911eacf45ec8ada3ee2a1d40507ee1d4e391488132c9c8ea3dc01255bf11f721a0ef0b739be459904431c0aeb04cf37d6a1f5ac0'
    },
    methods:
    {
        login : async function() {

            const url = `${Login.elements.url}/clients/login`;
            const token = Login.elements.token;

            console.log(url);
        
            const userLogin = {
                email : Login.elements.user.value,
                clave : Login.elements.password.value
            }
        
            await fetch (url, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`,
                },
                body: JSON.stringify(userLogin)
            })
            .then(response => response.json())
            .then(data => {

                console.log(data);
                
                console.log(data.email);
                console.log(data.clave);
                if(data.email && data.clave){
                    
                    Login.elements.loginApprovation = true;
                    JStorage.loginApprovation = true;
                    JStorage.usuarioSesion = data[0];
                    JStorage.currentWindow = "japp-dashboard-home";
                    // JUtils.methods.saveJStorage(JStorage)

                    console.log("Login Finalizado con éxito");
                    return data;
                } else {
                    swal.fire({
                        title : "Acceso Denegado",
                        icon : "warning",
                        backdrop: true,
                        // confirmButtonColor: "#DD6B55",
                        showConfirmButton: false,
                        showCloseButton: true,
                        toast: true
                    })
                }
                
            })
            .catch((err)=>{
                console.error(err);
                swal.fire({
                    title : "Acceso Denegado",
                    icon : "error",
                    backdrop: true,
                    // confirmButtonColor: "#DD6B55",
                    showConfirmButton: false,
                    showCloseButton: true,
                    toast: true
                })
                console.log("Login Finalizado sin éxito");
            })

                
        },
        registerNewUser : function () {
            
            swal.fire({
                title: 'Registro de Usuarios',
                html : `
                <form action="" class="jlogin_register_form">
                    <div class="form-nombre" class>
                        <label for="form-nombre" class="form-label">Nombre</label>
                        <input type="text" id="form-nombre" class="form-control">
                    </div>
                    <div class="form-apellidos" class>
                        <label for="form-apellidos" class="form-label">Apellidos</label>
                        <input type="text" id="form-apellidos" class="form-control">
                    </div>
                    <div class="form-pais" class>
                        <label for="form-pais" class="form-label">Pais</label>
                        <select id="form-pais" class="form-control">
                            <option value="colombia">Colombia</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                    <div class="form-ciudad" class>
                        <label for="form-ciudad" class="form-label">Ciudad</label>
                        <select id="form-ciudad" class="form-control">
                            <option value="medellin">Medellín</option>
                            <option value="bogota">Bogotá</option>
                            <option value="cali">Cali</option>
                            <option value="miami">Miami</option>
                        </select>
                    </div>
                    <div class="form-direccion" class>
                        <label for="form-direccion" class="form-label">Direccion</label>
                        <input type="text" id="form-direccion" class="form-control">
                    </div>
                    <div class="form-cel" class>
                        <label for="form-cel" class="form-label">Cel</label>
                        <input type="text" id="form-cel" class="form-control">
                    </div>
                    <div class="form-email" class>
                        <label for="form-email" class="form-label">Email</label>
                        <input type="email" id="form-email" class="form-control">
                    </div>
                    <div class="form-clave" class>
                        <label for="form-clave" class="form-label">Clave</label>
                        <input type="text" id="form-clave" class="form-control" min="4" max="4">
                    </div>
                    <div class="form_tipo_documento" class>
                        <label for="form-tipo-documento" class="form-label">Tipo Documento</label>
                        <select id="form-tipo-documento" class="form-control">
                            <option value="cc">Cédula</option>
                            <option value="pp">Pasaporte</option>
                            <option value="nit">NIT</option>
                        </select>
                    </div>
                    <div class="form_documento" class>
                        <label for="form-documento" class="form-label">Documento</label>
                        <input type="text" id="form-documento" class="form-control">
                    </div>
                    <div class="form_tipo_cliente" class>
                        <label for="form-tipo-cliente" class="form-label">Tipo Cliente</label>
                        <select id="form-tipo-cliente" class="form-control">
                            <option value="persona_natural">Persona Natural</option>
                            <option value="persona_juridica">Persona Jurídica</option>
                        </select>
                    </div>
                </form>`,
                showConfirmButton: true,
                confirmButtonText : "Registrarme",
                confirmButtonColor : "rgba(57, 144, 231, 1)",
                showCancelButton: true,
            })
            .then( async(result) => {

                try {
                    if(result.isConfirmed){
                    
                        const nombre = document.getElementById('form-nombre');
                        const apellidos = document.getElementById('form-apellidos');
                        const pais = document.getElementById('form-pais');
                        const ciudad = document.getElementById('form-ciudad');
                        const direccion = document.getElementById('form-direccion');
                        const cel = document.getElementById('form-cel');
                        const email = document.getElementById('form-email');
                        const clave = document.getElementById('form-clave');
                        const tipoDocumento = document.getElementById('form-tipo-documento');
                        const documento = document.getElementById('form-documento');
                        const tipoCliente = document.getElementById('form-tipo-cliente');

                        const register = {
                            "data" : {
                                "nombre" : nombre.value,
                                "apellidos" : apellidos.value,
                                "pais": pais.value,
                                "ciudad": ciudad.value,
                                "direccion" : direccion.value,
                                "cel" : cel.value,
                                "email" : email.value,
                                "clave" : clave.value,
                                "tipoDocumento" : tipoDocumento.value,
                                "documento" : documento.value,
                                "tipocliente" : tipoCliente.value,
                                "cuentas" : []
                            }
                        }

                        console.log(register);

                        const url = `${Login.elements.url}/clients`;
                        const token = Login.elements.token;

                        const userRegistered = await fetch (url, {
                            method : 'POST',
                            headers : {
                                'Content-Type' : 'application/json',
                                'Authorization' : `Bearer ${token}`
                            },
                            body : JSON.stringify(register)
                        })
                        .then( async(data) => {
                            console.log(data);
                            alert("usuario Registrado")
                            return data
                        }

                        )
                        
                        
                        return userRegistered;
                    }
                }catch (err){
                    console.log(err);
                }
            });
        }
    }
}


// IMPLEMENTACIÓN DE COMPORTAMIENTO DE BOTONES


// Boton Login
Login.elements.loginButton.addEventListener('click', async (e) => {

    e.preventDefault();

    await Login.methods.login();

    if(Login.elements.loginApprovation){

        setTimeout(()=>{
            window.location.href = "./app.html";
        },1500);

        await swal.fire({
            icon : "success",
            title: "Bienvenido",
            backdrop: true,
            showConfirmButton : false,
            timer: 1300,
            padding:'40px',
            toast: true,
        })
    } 

});

Login.elements.registerButton.addEventListener('click', async (e) => {

    e.preventDefault();

    await Login.methods.registerNewUser();
})

