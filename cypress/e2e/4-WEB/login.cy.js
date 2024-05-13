describe('Test Saucedemo', () => {
  it.only('berhasil login', () => {
    // id menggunakan #
    // class menggunakan .
    // sisanya menggunakan []
    cy.visit('https://www.saucedemo.com/') //open page
    cy.get('#user-name').type('standard_user') //input username
    cy.get('[data-test="password"]').type('secret_sauce') //input password
    cy.get('.submit-button.btn_action').click() //klik tombol login
    cy.get('.app_logo').should('be.visible') //verifikasi berhasil login
    cy.url().should('include', 'inventory.html')
  })
  it('gagal login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text', 'this user has been locked out')
  })
})