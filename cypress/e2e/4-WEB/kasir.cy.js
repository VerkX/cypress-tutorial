import kasirPage from '../../support/pageObject/kasir'

describe('Test Kasir', () => {
    beforeEach(() => {
        cy.visit('https://kasirdemo.belajarqa.com/')
        cy.loginKasir('elva@gmail.com','elva')
      })
    it.skip('Add Product', () => {
      cy.get('[href="/products"] > .css-ewi1jp').click()
      cy.get('.css-1piskbq').click()
      cy.get('#nama').type('kalkulator')
      cy.get('#deskripsi').type('ATK')
      //cy.get('[id="harga beli"]').clear().type('10000')
      cy.typeKasir('[id="harga beli"]','10000')
      //cy.get('[id="harga jual"]').clear().type('20000')
      cy.typeKasir('[id="harga jual"]','20000')
      //cy.get('#stok').clear().type('10')
      cy.typeKasir('#stok','11')
      cy.get('.chakra-input__right-addon').click()
      cy.contains('Umum').click()
      //cy.get('.chakra-button').click()
      cy.get(kasirPage.submit_btn).click()
    })
    it('Add Penjualan', () => {
        cy.get(kasirPage.menu_penjualan).click()
        cy.get(kasirPage.submit_btn).click()
        cy.typeKasir(kasirPage.diskon, '2000')
        cy.get(kasirPage.pilih_produk).click()
        cy.get(kasirPage.search_produk).type('ayam')
        cy.contains(kasirPage.produk).click()
        cy.get(kasirPage.save_btn).click()
        cy.get(kasirPage.yes_btn).click()
      })
  })