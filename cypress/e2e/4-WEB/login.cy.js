describe('Test Saucedemo', () => {
  it('berhasil login', () => {
    // id menggunakan #
    // class menggunakan .
    // sisanya menggunakan []
    
    cy.visit('https://www.saucedemo.com/') //open page
    cy.get('#user-name').type('standard_') //input username
    cy.get('[data-test="password"]').type('secret_sauce') //input password
    cy.get('.submit-button.btn_action').click() //klik tombol login
  })
})