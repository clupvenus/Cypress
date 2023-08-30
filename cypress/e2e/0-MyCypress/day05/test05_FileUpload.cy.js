///<reference types="Cypress" />
describe('File Upload', () => {
    it.skip('Single file upload', () => {
        //cypress-file-upload plugin yuklemelidir
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="images.png"
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('include.text','images')
    });
    it.skip('Multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="images.png"
        const path2="wisequarter_career-1.png"
        const path3="wisequarter_powerful-1.png"
        cy.get('#filesToUpload').attachFile(path1).wait(3000)
        .attachFile(path2).wait(3000)
        .attachFile(path3)
        cy.get('#fileList > li').should('include.text','wisequarter_powerful-1')

    });
    it('Multiple file upload 2', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="images.png"
        const path2="wisequarter_career-1.png"
        const path3="wisequarter_powerful-1.png"
        cy.get('#filesToUpload').attachFile([path1,path2,path3])
    });
});