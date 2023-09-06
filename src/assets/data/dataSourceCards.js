const dashFrontDataCards = {
    data() {
        return {
            dashList: [{
                    id: 7,
                    title: "BUILD",
                    body: "usado quando se realiza alguma modificação em arquivos de build e dependências.<br>Exemplo: adição de dependências do Apache Kafka.",
                    dtalt: "25/08/2023 - 09:06h"
                },
                // {
                //     id: 6,
                //     title: "ENV",
                //     body: "utilizado quando se modifica ou adiciona algum arquivo de CI/CD. <br>Exemplo: modificar um comando do Dockerfile ou adicionar um step a um Jenkinsfile.",
                //     dtalt: "25/08/2023 - 09:06h"
                // },
                {
                    id: 5,
                    title: "DOC",
                    body: "ideal para quando se adiciona ou modifica alguma documentação no código ou do repositório em questão.<br>Exemplo: adição de documentação sobre o response de uma API ou adição de um README.md.",
                    dtalt: "25/08/2023 - 09:06h"
                },
                // {
                //     id: 4,
                //     title: "TEST",
                //     body: "usado quando se realizam alterações de qualquer tipo nos testes, seja a adição de novos testes ou a refatoração de testes já existentes.<br>Exemplo: adição de testes de contrato e modificação de testes unitários.",
                //     dtalt: "25/08/2023 - 09:06h"
                // },
                // {
                //     id: 3,
                //     title: "STYLE",
                //     body: "utilizado quando são realizadas mudanças no estilo e formatação do código que não irão impactar em nenhuma lógica do código.<br>Exemplo: realizar a indentação de um código.",
                //     dtalt: "25/08/2023 - 09:06h"
                // },
                {
                    id: 2,
                    title: "REFACTOR",
                    body: "utilizado na realização de uma refatoração que não causará impacto direto no código ou em qualquer lógica/regra de negócio. <br>Exemplo: melhorias de performance revisadas em um code review.",
                    dtalt: "25/08/2023 - 09:06h"
                },
                {
                    id: 1,
                    title: "FIX",
                    body: "usado quando existem erros de código que estão causando bugs. <br>Exemplo: de uma variável que está gerando um NullPointerException em produção.",
                    dtalt: "25/08/2023 - 09:06h"
                },
                {
                    id: 0,
                    title: "FEAT",
                    body: "utilizado quando se adiciona alguma nova funcionalidade do zero ao código/serviço/projeto. <br>Exemplo: adição de um novo endpoint para uma API REST ou um novo consumer para um serviço de mensageria.",
                    dtalt: "25/08/2023 - 09:06h"
                },

            ]
        }
    }
};

export default dashFrontDataCards;