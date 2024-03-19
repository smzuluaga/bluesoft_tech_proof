
window.onload = () => {
    BluesoftBank.methods.setDate();
}


const BluesoftBank = {
    sections : {
        profile : document.getElementById('app-mainsection-profile'),
        products : document.getElementById('app-mainsection-products'),
        transactions : document.getElementById('app-mainsection-transactions'),
        documents : document.getElementById('app-mainsection-documents'),
    },
    elements : {
        loginApprovation : false,
        date: document.getElementById('app_lateral_date'),
        buttonProfile : document.getElementById('app-lateral-profile'),
        buttonProducts : document.getElementById('app-lateral-products'),
        buttonTransactions : document.getElementById('app-lateral-transactions'),
        buttonDocuments : document.getElementById('app-lateral-documents'),
        buttonLogout : document.getElementById('app-lateral-logout')
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
            console.log(date);

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
        showCloseFutton : false,
        timer : 800,
    })
})

BluesoftBank.elements.buttonProducts.addEventListener('click', () => {
    BluesoftBank.methods.hideAllSections();

    BluesoftBank.sections.products.style.display = 'flex';
    swal.fire({
        title : 'Productos',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        showCloseFutton : false,
        timer : 800,
    })
})

BluesoftBank.elements.buttonTransactions.addEventListener('click', () => {

    BluesoftBank.methods.hideAllSections();
    BluesoftBank.sections.transactions.style.display = 'flex';
    swal.fire({
        title : 'Transacciones',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        showCloseFutton : false,
        timer : 800,
    })
})

BluesoftBank.elements.buttonDocuments.addEventListener('click', () => {

    BluesoftBank.methods.hideAllSections();
    BluesoftBank.sections.documents.style.display = 'flex';
    swal.fire({
        title : 'Documento',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        showCloseFutton : false,
        timer : 800,
    })
})

BluesoftBank.elements.buttonLogout.addEventListener('click', () => {

    swal.fire({
        title : 'Cerrando Sesión',
        icon : 'success',
        toast: true,
        showConfirmButton : false,
        showCloseFutton : false,
        timer : 800,
        timerProgressBar:true
        
    })
    
    setTimeout(() => {
        BluesoftBank.methods.hideAllSections();
        BluesoftBank.elements.loginApprovation = false;
        window.location.href="index.html"
    },800)
})