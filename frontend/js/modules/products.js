const Products = {
    elements : {
        buttonAskForAccount : document.getElementById("app-products-askFor-account"),
        buttonAskForInvestment : document.getElementById("app-products-askFor-investment"),
    },
    methods: {
        requestAccount : function () {
           
        }
    }
}

Products.elements.buttonAskForAccount.addEventListener('click', () => {

    Products.methods.requestAccount();

    swal.fire({
        title: "Solicitud de Cuenta",
        html : `
                <form action="" class="app_form_accountRequest">
                    <div class="app_form_accountRequest_accountInfo">
                        <div class="form_tipo_cliente" class>
                            <label for="accountRequest-form-tipo-cliente" class="form-label">Tipo Cliente</label>
                            <select id="accountRequest-form-tipo-cliente" class="form-control">
                                <option value="persona_natural">Persona Natural</option>
                                <option value="persona_juridica">Persona Jurídica</option>
                            </select>
                        </div>
                        <div class="form-nombre" class>
                            <label for="accountRequest-form-tipoCuenta" class="form-label">Tipo Cuenta</label>
                            <select id="accountRequest-form-tipoCuenta" class="form-control">
                                <option value="ahorros">Ahorros</option>
                                <option value="corriente">Corriente</option>
                            </select>
                        </div>
                        <div class="form-nombre" class>
                            <label for="accountRequest-form-numeroCuenta" class="form-label">Numero de Cuenta</label>
                            <input type="text" id="accountRequest-form-numeroCuenta" class="form-control">
                            
                        </div>
                    </div>
                    <div class="app_form_accountRequest_userInfo">
                        <div class="form-pais" class>
                            <label for="accountRequest-form-oficina" class="form-label">Oficina</label>
                            <select id="accountRequest-form-oficina" class="form-control">
                                <option value="medellin">Medellín</option>
                                <option value="bogota">Bogotá</option>
                                <option value="cali">Cali</option>
                                <option value="miami">Miami</option>
                            </select>
                        </div>
                        <div class="form_tipo_documento" class>
                            <label for="accountRequest-form-tipo-documento" class="form-label">Tipo Documento</label>
                            <select id="accountRequest-form-tipo-documento" class="form-control">
                                <option value="cc">Cédula</option>
                                <option value="pp">Pasaporte</option>
                                <option value="nit">NIT</option>
                            </select>
                        </div>
                        <div class="form_documento" class>
                            <label for="accountRequest-form-documento" class="form-label">Documento</label>
                            <input type="text" id="accountRequest-form-documento" class="form-control">
                        </div>
                        <div class="form-clave" class>
                            <label for="accountRequest-form-clave" class="form-label">Clave</label>
                            <input type="text" id="accountRequest-form-clave" class="form-control" min="4" max="4">
                        </div>
                    </div>
                </form>`,
        showConfirmButton: true,
        confirmButtonText : "Solicitar",
        confirmButtonColor : "rgba(57, 144, 231, 1)",
        showCancelButton: true,
    })
    .then( async(result) => {

        const formTipoCuenta = document.getElementById('accountRequest-form-tipoCuenta');
        const formTipoCliente = document.getElementById('accountRequest-form-tipo-cliente');
        const formOficina = document.getElementById('accountRequest-form-oficina');
        const formTipoDocumento = document.getElementById('accountRequest-form-tipo-documento');
        const formDocumento = document.getElementById('accountRequest-form-documento');
        const formClave = document.getElementById('accountRequest-form-clave');

        console.log(`
                ${formTipoCuenta.value}
                ${formTipoCliente.value}
                ${formOficina.value}
                ${formTipoDocumento.value}
                ${formDocumento.value}
                ${formClave.value}
            `);
        
            const body = {
                "data":{
                    "tipo_cuenta": formTipoCuenta.value ,
                    "numero": 52455568,
                    "saldo": 0,
                    "movimientos": [],
                    "owner_id": BlueStorage.usuarioSession.id,
                    "oficina" : formOficina.valu,
                }
            }


    })
});

Products.elements.buttonAskForInvestment.addEventListener('click', () => {
    swal.fire({
        title: "En Construcción",
        text: "Aquí podrás solicitar tus inversiones muy pronto.",
        icon: 'warning',
        toast : 'true',
        showConfirmButton: false,
        timer : 1000,
        timerProgressBar: true
    });
});