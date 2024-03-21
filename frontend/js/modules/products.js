const Products = {
    elements : {
        buttonAskForAccount : document.getElementById("app-products-askFor-account"),
        accountContainer : document.getElementById('app-mainsection-products-accountList'),
        // buttonAskForInvestment : document.getElementById("app-products-askFor-investment"),
    },
    methods: {
        requestAccount : function () {

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
        
                const BlueStorage = await JSON.parse(localStorage.getItem('BlueStorage'));
                console.log(BlueStorage);
        
                if(result.isConfirmed) {

                    try{
                        
                        const formTipoCuenta = document.getElementById('accountRequest-form-tipoCuenta');
                        const formNumeroCuenta = document.getElementById('accountRequest-form-numeroCuenta');
                        const formTipoCliente = document.getElementById('accountRequest-form-tipo-cliente');
                        const formOficina = document.getElementById('accountRequest-form-oficina');
                        const formTipoDocumento = document.getElementById('accountRequest-form-tipo-documento');
                        const formDocumento = document.getElementById('accountRequest-form-documento');
                        const formClave = document.getElementById('accountRequest-form-clave');
                        
                        const url = `${BluesoftBank.elements.url}/accounts`;
                        const token = BluesoftBank.elements.token;
                        const newAccout = {
                            "data":{
                                "owner_id": BlueStorage.usuarioSesion.id,
                                "oficina" : formOficina.value,
                                "tipo_cuenta": formTipoCuenta.value ,
                                "numero": formNumeroCuenta.value,
                                "saldo": 0,
                            }
                        }
                        
                        await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type' : 'application/json',
                                'Authorization' : `Bearer ${token}`
                            },
                            body: JSON.stringify(newAccout)
                        })
                        .then(response => response.json())
                        .then(async(data) => {

                            if(data.error){
                                throw new Error;
                            }
                        
                            swal.fire({
                                title: "Cuenta Creada Exitosamente",
                                icon: 'success',
                                toast : true,
                                showConfirmButton: false,
                                showCloseButton : true
                            })
                            
                        });
                    }catch {
                        swal.fire({
                            title: "La cuenta no se creó, Intentelo Nuevamente",
                            icon: 'warning',
                            toast : true,
                            showConfirmButton: false,
                            showCloseButton : true
                        })
                    }
                }
            });
        },
        renderAccounts : async function () {

            const BlueStorage = await JSON.parse(localStorage.getItem('BlueStorage'))

            const container = Products.elements.accountContainer;
            const owner_id = BlueStorage.usuarioSesion.id;
            const url = `${BluesoftBank.elements.url}/accounts?owner_id=${owner_id}&populate=owner_id`;
            const token = BluesoftBank.elements.token;

            container.innerHTML = "";
            const accounts = await fetch(url, {
                method : 'GET',
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then((data) => {

                for(let account of data.data){

                    const accountContainer = document.createElement('div');
                    const accountInfo = document.createElement('span');
                    const accountBalance = document.createElement('span');

                    accountInfo.innerHTML = `${account.attributes.tipo_cuenta.toUpperCase()} - ${account.attributes.numero}`
                    accountBalance.innerHTML = `$ ${account.attributes.saldo}`;
                    accountContainer.id = "";
                    accountContainer.classList.add('app_mainsection_products_account');
                    accountContainer.addEventListener(('click'), ()=> {
                        swal.fire({
                            title : `CUENTA - ${account.attributes.numero}`,
                            html : `
                                <form action="" class="app_form_account_info">
                                    <div>
                                        <label class='form-label'>Tipo Cuenta</label>
                                        <span class='form-control'>${account.attributes.tipo_cuenta}</span>
                                    </div>
                                    <div>
                                        <label class='form-label'>Numero de Cuenta</label>
                                        <span class='form-control'>${account.attributes.numero}</span>
                                    </div>
                                    <div>
                                    <label class='form-label'>Fecha Apertura</label>
                                    <span class='form-control'> ${account.attributes.createdAt.substring(0,10)}</span>
                                    </div>
                                    <div>
                                        <label class='form-label'>Saldo</label>
                                        <span class='form-label'> $ ${account.attributes.saldo}</span>
                                    </div>
                                </form>
                            `,
                            confirmButtonText : `Realizar Transacciones <i class='bx bx-money-withdraw'></i>`,
                            confirmButtonColor : "rgba(57, 144, 231, 1)",
                            showCloseButton: true,
                            // showCancelButton: true,
                            // cancelButtonText : "Retirar Dinero",

                        })
                        .then((response) => {

                            if(response.isConfirmed){
                                BluesoftBank.methods.hideAllSections();
                                BluesoftBank.sections.transactions.style.display = 'flex';
                                Transactions.elements.selectAccount.value = account.attributes.numero;
                            }
                        });
                    })

                    accountContainer.appendChild(accountInfo);
                    accountContainer.appendChild(accountBalance);
                    container.appendChild(accountContainer);
                }

            });

        },
    }
}

Products.elements.buttonAskForAccount.addEventListener('click', (e) => {

    e.preventDefault();
    Products.methods.requestAccount();
    
});

// Products.elements.buttonAskForInvestment.addEventListener('click', () => {
//     swal.fire({
//         title: "En Construcción",
//         text: "Aquí podrás solicitar tus inversiones muy pronto.",
//         icon: 'warning',
//         toast : 'true',
//         showConfirmButton: false,
//         timer : 1000,
//         timerProgressBar: true
//     });
// });