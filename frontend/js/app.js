let BlueStorage;

window.onload = () => {
    BluesoftBank.methods.setDate();
    BlueStorage = JSON.parse(localStorage.getItem('BlueStorage'));
}


const BluesoftBank = {
    sections : {
        profile : document.getElementById('app-mainsection-profile'),
        products : document.getElementById('app-mainsection-products'),
        transactions : document.getElementById('app-mainsection-transactions'),
        movements : document.getElementById('app-mainsection-movements'),
        documents : document.getElementById('app-mainsection-documents'),
    },
    elements : {
        // url : 'http://localhost:1337/api',
        url : 'https://bluesoft-backend.onrender.com/api',
        token : '57b45774267102906a1acb8c29932fada85139149acb75e28dd26df946d52c225f7328159cea7447da70a1392c31aa731f44f27f6a2a455b4160d1bfe2bc0733cf5dcc587bb15eee0ba3ebc5911eacf45ec8ada3ee2a1d40507ee1d4e391488132c9c8ea3dc01255bf11f721a0ef0b739be459904431c0aeb04cf37d6a1f5ac0',
        loginApprovation : false,
        date: document.getElementById('app_lateral_date'),
        buttonProfile : document.getElementById('app-lateral-profile'),
        buttonProducts : document.getElementById('app-lateral-products'),
        buttonTransactions : document.getElementById('app-lateral-transactions'),
        buttonMovements : document.getElementById('app-lateral-movements'),
        buttonDocuments : document.getElementById('app-lateral-documents'),
        buttonLogout : document.getElementById('app-lateral-logout'),
        profileTitle : document.getElementById('app-profile-profileTitle')
    },
    methods : {
        hideAllSections : function () {
            BluesoftBank.sections.profile.style.display = 'none';
            BluesoftBank.sections.products.style.display = 'none';
            BluesoftBank.sections.transactions.style.display = 'none';
            BluesoftBank.sections.documents.style.display = 'none';
        },
        setDate : function () {
            date = new Date;

            BluesoftBank.elements.date.innerHTML = String(date).substring(0,21)

            console.log( BluesoftBank.elements.date.innerHTML);
        }
    }
}


BluesoftBank.elements.buttonProfile.addEventListener('click', () => {
    
    BluesoftBank.methods.hideAllSections();
    BluesoftBank.sections.profile.style.display = 'flex';
    swal.fire({
        title : 'Perfil',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        showCloseButton : false,
        timer : 800,
    })

    Profile.methods.fillForm();
})

BluesoftBank.elements.buttonProducts.addEventListener('click', () => {

    BluesoftBank.methods.hideAllSections();
    Products.methods.renderAccounts();

    BluesoftBank.sections.products.style.display = 'flex';
    swal.fire({
        title : 'Productos',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        showCloseButton : false,
        timer : 500,
    })
})

BluesoftBank.elements.buttonTransactions.addEventListener('click', () => {

    Transactions.methods.renderSelectAccount();
    BluesoftBank.methods.hideAllSections();
    BluesoftBank.sections.transactions.style.display = 'flex';
    swal.fire({
        title : 'Transacciones',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        Button : false,
        timer : 500,
    })
})


BluesoftBank.elements.buttonMovements.addEventListener('click', () => {

    Movements.methods.renderSelectAccount();
    BluesoftBank.methods.hideAllSections();
    BluesoftBank.sections.movements.style.display = 'flex';
    swal.fire({
        title : 'Movimientos',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        Button : false,
        timer : 500,
    })
})

BluesoftBank.elements.buttonDocuments.addEventListener('click', () => {

    Documents.methods.renderSelectAccount();
    BluesoftBank.methods.hideAllSections();
    BluesoftBank.sections.documents.style.display = 'flex';
    swal.fire({
        title : 'Documentos',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        showCloseButton : false,
        timer : 500,
    })
})

BluesoftBank.elements.buttonLogout.addEventListener('click', () => {

    swal.fire({
        title : 'Cerrando Sesión',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        showCloseButton : false,
        timer : 500,
        timerProgressBar:true
        
    })
    
    setTimeout(() => {
        BluesoftBank.methods.hideAllSections();
        BluesoftBank.elements.loginApprovation = false;
        window.location.href="index.html"
    },800)
})