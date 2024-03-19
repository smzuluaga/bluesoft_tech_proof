const BluesoftBank = {
    sections : {
        profile : document.getElementById('app-mainsection-profile'),
        products : document.getElementById('app-mainsection-products'),
        transactions : document.getElementById('app-mainsection-transactions'),
        documents : document.getElementById('app-mainsection-documents'),
    },
    elements : {
        loginApprovation : false,
        buttonProfile : document.getElementById('app-lateral-profile'),
        buttonProducts : document.getElementById('app-lateral-products'),
        buttonTransactions : document.getElementById('app-lateral-transactions'),
        buttonDocuments : document.getElementById('app-lateral-documents'),
        buttonLogout : document.getElementById('app-lateral-logout')
    },
    methods : {

    }
}


BluesoftBank.elements.buttonProfile.addEventListener('click', () => {
    alert("profile")
})

BluesoftBank.elements.buttonProducts.addEventListener('click', () => {
    alert("products")
})

BluesoftBank.elements.buttonTransactions.addEventListener('click', () => {
    alert("transactions")
})

BluesoftBank.elements.buttonDocuments.addEventListener('click', () => {
    alert("documents")
})

BluesoftBank.elements.buttonLogout.addEventListener('click', () => {
    BluesoftBank.elements.loginApprovation = false;
    window.location.href="index.html"
})