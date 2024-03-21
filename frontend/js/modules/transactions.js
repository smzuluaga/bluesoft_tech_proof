const Transactions = {
    elements : {
        selectAccount : document.getElementById("app-mainsection-transactions-filterAccount"),
        buttonIncome : document.getElementById("app-mainsection-transaction-buttonIncome"),
        buttonExpense : document.getElementById("app-mainsection-transaction-buttonExpense"),
    },
    methods: {
        renderSelectAccount : function () {
            JUtils.methods.renderSelectOptions(Transactions.elements.selectAccount)
        }
    }
}



Transactions.elements.buttonIncome.addEventListener('click', () => {

    if(Transactions.elements.selectAccount.value==='Seleccionar Cuenta'){
        return swal.fire({
            title: "Seleccione una Cuenta",
            icon: "warning",
            toast: true,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton : false,

        });
    };

    const currentDate =  new Date().toISOString().split('T')[0];

    swal.fire({
        title : 'Consignaciones',
        html: `
        <form action="" class="app-transactions-form">
            <div>
                <label for="app-transactions-form-numeroCuenta" class="form-label">Cuenta</label>
                <select id="app-transactions-form-numeroCuenta" class="form-control" disabled>
                    <option value="${Transactions.elements.selectAccount.value}">${Transactions.elements.selectAccount.value}</option>
                </select>
            </div>
            <div>
                <label for="app-transactions-form-fecha" class="form-label">Fecha</label>
                <input type="date" id="app-transactions-form-fecha" class="form-control" value="${currentDate}" disabled>
            </div>
            <div>
                <label for="app-transactions-form-tipoMovimiento" class="form-label">Tipo Movimiento</label>
                <select id="app-transactions-form-tipoMovimiento" class="form-control">
                    <option value="consignacion">Consignación</option>
                </select>
            </div>
            <div>
                <label for="app-transactions-form-ciudad" class="form-label">Ciudad</label>
                <select id="app-transactions-form-ciudad" class="form-control">
                    <option value="medellin">Medellín</option>
                    <option value="bogota">Bogotá</option>
                    <option value="cali">Cali</option>
                    <option value="miami">Miami</option>
                </select>
            </div>
            <div>
                <label for="app-transactions-form-medio" class="form-label">Medio</label>
                <select id="app-transactions-form-medio" class="form-control">
                    <option value="app">App</option>
                    <option value="cajero">Cajero</option>
                </select>
            </div>
            <div>
                <label for="app-transactions-form-valor" class="form-label">Valor</label>
                <input type="text" id="app-transactions-form-valor" class="form-control">
            </div>
        </form>
        <div class="app-transactions-formSaldos">
            <div>
                <label for="app-transactions-form-saldoActual" class="form-label">Saldo Disponible</label>
                <span id="app-transactions-form-saldoActual" class="" disabled>$ ${JUtils.methods.formatNumeric(50000)}</span>
            </div>
            <div>
                <label for="app-transactions-form-saldoActualNuevo" class="form-label">Saldo Cuenta</label>
                <span id="app-transactions-form-saldoActualNuevo" class="">$ ${JUtils.methods.formatNumeric(10000)}</span>
            </div>
        </div>
        `,
        confirmButtonText: 'Consignar',
        confirmButtonColor: 'rgba(57, 144, 231, 1)',
        showCancelButton : true,
        cancelButtonText: 'Cancelar Operación',
    })
    .then((result) => result.json())
    .then((data) => {

        document.getElementById('').value = currentDate;

    });
});

Transactions.elements.buttonExpense.addEventListener('click', () => {

    if(Transactions.elements.selectAccount.value==='Seleccionar Cuenta'){
        return swal.fire({
            title: "Seleccione una Cuenta",
            icon: "warning",
            toast: true,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton : false,

        });
    };

    const currentDate =  new Date().toISOString().split('T')[0];

    swal.fire({
        title : 'Retiros',
        html: `
        <form action="" class="app-transactions-form">
            <div>
                <label for="app-transactions-formEgreso-numeroCuenta" class="form-label">Cuenta</label>
                <select id="app-transactions-formEgreso-numeroCuenta" class="form-control" disabled>
                    <option value="${Transactions.elements.selectAccount.value}">${Transactions.elements.selectAccount.value}</option>
                </select>
            </div>
            <div>
                <label for="app-transactions-formEgreso-saldoActual" class="form-label">Saldo Disponible</label>
                <span id="app-transactions-formEgreso-saldoActual" class="form-control" disabled>$ ${JUtils.methods.formatNumeric(50000)}</span>
            </div>
            <div>
                <label for="app-transactions-formEgreso-fecha" class="form-label">Fecha</label>
                <input type="date" id="app-transactions-formEgreso-fecha" class="form-control" value="${currentDate}" disabled>
            </div>
            <div>
                <label for="app-transactions-formEgreso-tipoMovimiento" class="form-label">Tipo Movimiento</label>
                <select id="app-transactions-formEgreso-tipoMovimiento" class="form-control">
                    <option value="consignacion">Consignación</option>
                </select>
            </div>
            <div>
                <label for="app-transactions-formEgreso-ciudad" class="form-label">Ciudad</label>
                <select id="app-transactions-formEgreso-ciudad" class="form-control">
                    <option value="medellin">Medellín</option>
                    <option value="bogota">Bogotá</option>
                    <option value="cali">Cali</option>
                    <option value="miami">Miami</option>
                </select>
            </div>
            <div>
                <label for="app-transactions-formEgreso-medio" class="form-label">Medio</label>
                <select id="app-transactions-formEgreso-medio" class="form-control">
                    <option value="cajero">Cajero</option>
                    <option value="app">App</option>
                </select>
            </div>
            <div>
                <label for="app-transactions-formEgreso-valor" class="form-label">Valor</label>
                <input type="text" id="app-transactions-formEgreso-valor" class="form-control">
            </div>
            <div>
                <label for="app-transactions-formEgreso-saldoActualNuevo" class="form-label">Saldo Cuenta</label>
                <span id="app-transactions-formEgreso-saldoActualNuevo" class="">$ ${JUtils.methods.formatNumeric(10000)}</span>
            </div>
        </form>`,
        confirmButtonText: 'Retirar',
        confirmButtonColor: 'rgba(57, 144, 231, 1)',
        showCancelButton : true,
        cancelButtonText: 'Cancelar Operación',
    });
});