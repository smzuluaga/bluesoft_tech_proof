// ***** FUNCIONES GENERALES - INICIO ****

// Variable que contendrá al objeto BlueStorage para usar LocalStorage con propósitos de experiencia de usuario.
let BlueStorage;

//Función para configurar localStorage.
window.onload = (()=>{
    JUtils.methods.setBlueStorage();
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
        url : 'https://bluesoft-backend.onrender.com/api',
        // url : 'http://localhost:1337/api',
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
                
                if(data.email && data.clave){
                    
                    Login.elements.loginApprovation = true;
                    BlueStorage.loginApprovation = true;
                    BlueStorage.usuarioSesion = data;
                    // BlueStorage.currentWindow = "japp-dashboard-home";
                    console.log("blueStorage", BlueStorage);
                    JUtils.methods.saveBlueStorage(BlueStorage);
                    
                    console.log("blueStorage");

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
                Login.elements.loginApprovation = false;

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
                        <label for="login-form-nombre" class="form-label" required>Nombre</label>
                        <input type="text" id="login-form-nombre" class="form-control">
                    </div>
                    <div class="form-apellidos" class>
                        <label for="login-form-apellidos" class="form-label">Apellidos</label>
                        <input type="text" id="login-form-apellidos" class="form-control">
                    </div>
                    <div class="form-pais" class>
                        <label for="login-form-pais" class="form-label">Pais</label>
                        <select id="login-form-pais" class="form-control">
                            <option value="colombia">Colombia</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                    <div class="form-ciudad" class>
                        <label for="login-form-ciudad" class="form-label">Ciudad</label>
                        <select id="login-form-ciudad" class="form-control">
                            <option value="medellin">Medellín</option>
                            <option value="bogota">Bogotá</option>
                            <option value="cali">Cali</option>
                            <option value="miami">Miami</option>
                        </select>
                    </div>
                    <div class="form-direccion" class>
                        <label for="login-form-direccion" class="form-label">Direccion</label>
                        <input type="text" id="login-form-direccion" class="form-control">
                    </div>
                    <div class="form-cel" class>
                        <label for="login-form-cel" class="form-label">Cel</label>
                        <input type="text" id="login-form-cel" class="form-control">
                    </div>
                    <div class="form-email" class>
                        <label for="login-form-email" class="form-label">Email</label>
                        <input type="email" id="login-form-email" class="form-control">
                    </div>
                    <div class="form-clave" class>
                        <label for="login-form-clave" class="form-label">Clave</label>
                        <input type="text" id="login-form-clave" class="form-control" min="4" max="4">
                    </div>
                    <div class="form_tipo_documento" class>
                        <label for="login-form-tipo-documento" class="form-label">Tipo Documento</label>
                        <select id="login-form-tipo-documento" class="form-control">
                            <option value="cc">Cédula</option>
                            <option value="pp">Pasaporte</option>
                            <option value="nit">NIT</option>
                        </select>
                    </div>
                    <div class="form_documento" class>
                        <label for="login-form-documento" class="form-label">Documento</label>
                        <input type="text" id="login-form-documento" class="form-control">
                    </div>
                    <div class="form_tipo_cliente" class>
                        <label for="login-form-tipo-cliente" class="form-label">Tipo Cliente</label>
                        <select id="login-form-tipo-cliente" class="form-control">
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
                    
                        const nombre = document.getElementById('login-form-nombre');
                        const apellidos = document.getElementById('login-form-apellidos');
                        const pais = document.getElementById('login-form-pais');
                        const ciudad = document.getElementById('login-form-ciudad');
                        const direccion = document.getElementById('login-form-direccion');
                        const cel = document.getElementById('login-form-cel');
                        const email = document.getElementById('login-form-email');
                        const clave = document.getElementById('login-form-clave');
                        const tipoDocumento = document.getElementById('login-form-tipo-documento');
                        const documento = document.getElementById('login-form-documento');
                        const tipoCliente = document.getElementById('login-form-tipo-cliente');

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
                                "tipo_documento" : tipoDocumento.value,
                                "documento" : documento.value,
                                "tipo_cliente" : tipoCliente.value,
                                // "cuentas" : []
                            }
                        }

                        console.log(register);
                        console.log(!register.data.nombre);
                        console.log(register.data.apellidos);
                        console.log(register.data.nombre);
                        console.log(register.data.direccion);
                        console.log(register.data.cel);
                        console.log(register.data.email);
                        console.log(register.data.tipo_documento);
                        console.log(register.data.documento);
                        console.log(register.data.tipo_cliente);

                        if(!register.data.nombre ||
                            !register.data.apellidos ||
                            !register.data.direccion ||
                            !register.data.cel ||
                            !register.data.email ||
                            !register.data.clave ||
                            !register.data.tipo_documento ||
                            !register.data.documento ||
                            !register.data.tipo_cliente){
                                throw new Error("Diligencie Todos los Campos Obligatorios")
                            }

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

                            swal.fire({
                                title: "Usuario Registrado",
                                icon: "success",
                                toast: true,
                                showCloseButton: true,
                                showCancelButton: false,
                                showConfirmButton: false,
                            });
                            return data
                        })
                        .catch((error) => {
                            console.log(error);
                            swal.fire({
                                title: "Error en el Registro",
                                icon: "warning",
                                toast: true,
                                showCloseButton: true,
                                showCancelButton: false,
                                showConfirmButton: false,
                            });
                        });
                        
                        
                        return userRegistered;
                    }
                }catch (err){
                    console.log(err);
                    swal.fire({
                        title: "Error en El Registro",
                        icon: "warning",
                        toast: true,
                        showCloseButton: true,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
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

