# Quadro-de-Avisos-Comunitario
## 🧪 Testes 
ID do Teste	Descrição do Teste	Pré-condição	Passos para o Teste	Resultado Esperado	Status
CT01	Adicionar um aviso com texto válido	O app está aberto no navegador	1. Digitar "Item encontrado na praça" no campo de entrada. 2. Clicar no botão "Adicionar".	O aviso "Item encontrado na praça" deve aparecer na lista.	Aprovado
CT02	Adicionar um aviso vazio	O app está aberto no navegador	1. Deixar o campo de entrada vazio. 2. Clicar no botão "Adicionar".	Nenhuma nota de aviso deve ser adicionada à lista.	Aprovado
CT03	Adicionar um aviso com espaços em branco	O app está aberto no navegador	1. Digitar apenas espaços em branco. 2. Clicar no botão "Adicionar".	Nenhuma nota de aviso deve ser adicionada à lista.	Aprovado
CT04	Remover um aviso da lista	Um aviso já foi adicionado à lista	1. Clicar no botão "Remover" ao lado do aviso.	O aviso deve ser removido da lista e a tela deve ser atualizada.	Aprovado
## 🤖 Testes Automatizados
### Testes Automatizados

**Cenário de Teste:** O usuário consegue adicionar e remover um aviso.

```javascript
// Exemplo de teste automatizado usando Cypress

describe('Funcionalidade de Adicionar e Remover Aviso', () => {

  it('Deve adicionar um aviso e depois removê-lo com sucesso', () => {
    // Visita a página da aplicação
    cy.visit('http://localhost:8080'); 

    // Adiciona um aviso
    cy.get('#aviso-input').type('Item encontrado na praça');
    cy.get('#adicionar-btn').click();

    // Verifica se o aviso foi adicionado
    cy.get('.lista-avisos').contains('Item encontrado na praça').should('be.visible');

    // Remove o aviso
    cy.get('.lista-avisos').contains('Item encontrado na praça').parent().find('.remover-btn').click();

    // Verifica se o aviso foi removido
    cy.get('.lista-avisos').contains('Item encontrado na praça').should('not.exist');
  });

});