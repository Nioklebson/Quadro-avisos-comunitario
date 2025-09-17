# Quadro-de-Avisos-Comunitario
## 🧪 Testes 
ID do Teste	Descrição do Teste	Pré-condição	Passos para o Teste	Resultado Esperado	Status
CT01	Adicionar um aviso com texto válido	O app está aberto no navegador	1. Digitar "Item encontrado na praça" no campo de entrada. 2. Clicar no botão "Adicionar".	O aviso "Item encontrado na praça" deve aparecer na lista.	Aprovado
CT02	Adicionar um aviso vazio	O app está aberto no navegador	1. Deixar o campo de entrada vazio. 2. Clicar no botão "Adicionar".	Nenhuma nota de aviso deve ser adicionada à lista.	Aprovado
CT03	Adicionar um aviso com espaços em branco	O app está aberto no navegador	1. Digitar apenas espaços em branco. 2. Clicar no botão "Adicionar".	Nenhuma nota de aviso deve ser adicionada à lista.	Aprovado
CT04	Remover um aviso da lista	Um aviso já foi adicionado à lista	1. Clicar no botão "Remover" ao lado do aviso.	O aviso deve ser removido da lista e a tela deve ser atualizada.	Aprovado