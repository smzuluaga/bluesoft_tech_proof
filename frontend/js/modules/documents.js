const Documents = {
    elements : {
        selectAccount : document.getElementById("app-mainsection-documents-filterAccount"),
        selectDocumentType : document.getElementById("app-mainsection-documents-documentType"),
    },
    methods: {
        renderSelectAccount : function () {
            JUtils.methods.renderSelectOptions(Documents.elements.selectAccount)
        }
    }
}