const Movements = {
    elements : {
        selectAccount : document.getElementById("app-mainsection-movements-filterAccount")
    },
    methods: {
        renderSelectAccount : function () {
            JUtils.methods.renderSelectOptions(Movements.elements.selectAccount)
        }
    }
}