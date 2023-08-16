describe('Meu primeiro teste', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/produtos');
  });

  it('Deve conter o títilo Listagem de produtos', () => {
    cy.get('h1').should('contain', 'Listagem de produtos');
  });

  it('Há registros na tabela', () => {
    cy.get('table tr').should('have.length.gt', 1);
  });

  it('Deve emitir um alerta ao clicar no botão de sair', () => {
    cy.get('button').first().should('contain', 'Sair').click();
    cy.on('window:alert', (event) => {
      expect(event).to.include('Saindo');
    });
  });

  it('Deve emitir um alerta ao editar um produto', () => {
    cy.get('table tr:nth-child(3) button:contains("Editar")').click();
    cy.on('window:alert', (event) => {
      expect(event).to.include('Editando produto 3');
    });
  });

  it('Deve emitir um alerta ao remover um produto', () => {
    cy.get('table tr:nth-child(2) button:contains("Remover")').click();
    cy.on('window:alert', (event) => {
      expect(event).to.include('Removendo produto 2');
    });
  });
});
