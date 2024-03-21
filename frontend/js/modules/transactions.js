const Transactions = {
    elements : {
        selectAccount : document.getElementById("app-mainsection-transactions-filterAccount")
    },
    methods: {
        renderSelectAccount : function () {
            JUtils.methods.renderSelectOptions(Transactions.elements.selectAccount)
        }
    }
}