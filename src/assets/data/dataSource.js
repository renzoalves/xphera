const dashFrontData = {
    data() {
        return {
            dashList: [{
                    id: 9,
                    img: require("@/assets/imgs/dash-produtos-lista/corregedoria.png"),
                    alt: "Corregedoria",
                    slug: "corregedoria",
                    title: "Corregedoria",

                    text: "Análise de LOGs - San3.0 (HTTP-500)",

                    date: "2023-08-30",
                    article: [{
                            id: 0,
                            type: "t3",
                            text: "Erros HTTP-500"
                        },
                        {
                            id: 1,
                            type: "pf",
                            text: "Em análise de Logs, foi identificado que existem alguns clientes da integração 3.0, que estão consumindo e gerando muitos erros no processo. Essa é uma boa oportunidade pra gente intensificar o intercâmbio IMENDES vs CLIENTES/PARCEIROS nessas situações.<br/><br/>Os LOGs que estamos gravando desses casos, são logs de erros gerados na API, logo não chegamos ao ponto de obter o JSON de envio.<br>São logs de erros da categoria HTTP-500."
                        },
                        {
                            id: 2,
                            type: "pf",
                            text: "<ul><li>Parcerio 0260-06179532000114 (AVISTARE), cliente: 55313035000172, 55313035000253;</li><li>Parcerio 0079-14084522000123 (VETOR SOLUÇÕES), cliente: 17703809000182;</li><li>Parcerio 0434-34712530000184 (ALMATI), cliente: 34712530000184;</li><li>Parcerio 0266-24895561000164 (BEM INFORMÁICA), cliente: 91845735000414;</li></ul>"
                        },
                    ]
                },
                {
                    id: 8,
                    img: require("@/assets/imgs/dash-produtos-lista/corregedoria.png"),
                    alt: "Corregedoria",
                    slug: "corregedoria",
                    title: "Corregedoria",

                    text: "Client Life Cycle - Organizando os fluxos",

                    date: "2023-08-14",
                    article: [{
                            id: 0,
                            type: "t3",
                            text: "1. Regras e Dicas"
                        },
                        {
                            id: 1,
                            type: "pf",
                            text: "<ul><li>Os cartões só serão movidos para as colunas do tipo DEV pelo setor de Desenvolvimento após recebimento via e-mail informando o andamento da integração;</li><li>Todos os setores estão autorizados (e devem) utilizar seção \"Atividades\" para reportar e registrar andamentos sobre cada cartão;</li><li>Para um melhor entendimento sobre a Responsabilidade de cada coluna deste Quadro, leia atentamente as descrições exibidas na checklist \"SIGLAS: Explicação\";</li><li>Para um melhor entendimento sobre a função de cada coluna deste Quadro, leia atentamente as descrições exibidas na checklist \"COLUNAS: Explicação\";</li><li>Todos os cartões deve conter a marcação de ao menos 1(um) membro para ser o seu responsável até o mesmo ser movido para DEV - Produção ou para Abortados.</li><li>Qualquer dificuldade com direitos de acesso sobre os Cartões, favor formalizar por e-mail para o setor de Desenvolvimento que tomará as devidas providências.</li></ul>"
                        },
                        {
                            id: 2,
                            type: "t5-i",
                            text: "Importante:"
                        },
                        {
                            id: 3,
                            type: "p",
                            text: "Para informação, todas as modificações, exclusões, arquivamentos e criações tanto dos Cartões, quanto das Colunas geram Log que registram o Usuário e a Ação feita."
                        },

                        {
                            id: 4,
                            type: "t3",
                            text: "2. Siglas"
                        },
                        {
                            id: 5,
                            type: "pi",
                            text: "2.1. DEV"
                        },
                        {
                            id: 6,
                            type: "pf",
                            text: "<ul><li>Coluna de gestão pertencente ao setor de Desenvolvimento. Não deve ser alterada por nenhum outro setor. Pode ser visualizado por todos sem restrições.</li></ul>"
                        },
                        {
                            id: 7,
                            type: "pi",
                            text: "2.2. HOM"
                        },
                        {
                            id: 8,
                            type: "pf",
                            text: "<ul><li>Coluna de gestão pertencente ao setor de Suporte responsável pelas Homologações. Não deve ser alterada por nenhum outro setor exceto por ele mesmo e o Desenvolvimento. Pode ser visualizado por todos sem restrições.</li></ul>"
                        },
                        {
                            id: 9,
                            type: "pi",
                            text: "2.2. GER"
                        },
                        {
                            id: 10,
                            type: "pf",
                            text: "<ul><li>Coluna onde todos tem liberdade para controlar, desde que seja o um dos \"donos\" do cartão. Normalmente essas colunas terão sua gestão sob responsabilidade do setor Comercial.</li></ul>"
                        },

                        {
                            id: 11,
                            type: "t3",
                            text: "3. Níveis"
                        },
                        {
                            id: 12,
                            type: "pi",
                            text: "Prospecção COM: "
                        },
                        {
                            id: 13,
                            type: "pf",
                            text: "<ul><li>Parceiros que ainda estão na fase de negociações ou devem ser prospectados.</li></ul>"
                        },
                        {
                            id: 14,
                            type: "pi",
                            text: "Stand By: "
                        },
                        {
                            id: 15,
                            type: "pf",
                            text: "<ul><li>Parceiros que já passaram da fase de Prospecção e já foi enviado ou não o Pacote de Manuais para Integração.</li></ul>"
                        },
                        {
                            id: 16,
                            type: "pi",
                            text: "Re-Contato: "
                        },
                        {
                            id: 17,
                            type: "pf",
                            text: "<ul><li>Lista de Parceiros onde o Pacote de Manuais para Integração já foi enviado porém sem evolução real. Requer acompanhamento de seu gestor.</li></ul>"
                        },
                        {
                            id: 18,
                            type: "pi",
                            text: "Integração Parada (BLOCK): "
                        },
                        {
                            id: 19,
                            type: "pf",
                            text: "<ul><li>Lista onde o Parceiro já iniciou o processo de homologação para integração de sistemas, porém ainda há alguma pendência por parte do mesmo para finalização. Aguardando re-agendamento.</li></ul>"
                        },
                        {
                            id: 20,
                            type: "pi",
                            text: "Em Integração (WORK): "
                        },
                        {
                            id: 21,
                            type: "pf",
                            text: "<ul><li>Parceiros que receberam a documentação e estão trabalhando para que haja a homologação do seu sistema. Podendo ou não já ter agendado o processo de homologação.</li></ul>"
                        },
                        {
                            id: 22,
                            type: "pi",
                            text: "Agendado:"
                        },
                        {
                            id: 23,
                            type: "pf",
                            text: "<ul><li>Parceiros que já agendaram o processo de Homologação e estão aguardando acontecer.</li></ul>"
                        },
                        {
                            id: 24,
                            type: "pi",
                            text: "Processo aguardando nova data para finalização:"
                        },
                        {
                            id: 25,
                            type: "pf",
                            text: "<ul><li>Parceiros que já iniciaram o processo de Homologação, mas que por algum motivo não pôde ser finalizado. Esses Parceiros estão aguardando novo momento para finalizar o processo, podendo já ter agendado ou não.</li></ul>"
                        },
                        {
                            id: 26,
                            type: "pi",
                            text: "Produção:"
                        },
                        {
                            id: 27,
                            type: "pf",
                            text: "<ul><li>Parceiros integrados e em produção.</li></ul>"
                        },
                        {
                            id: 28,
                            type: "pi",
                            text: "Proj.Casa Magalhães:"
                        },
                        {
                            id: 29,
                            type: "pf",
                            text: "<ul><li>Lista de clientes que utilizam o sistema SaneamentoImendes para o sistema SysPDV da softwarehouse Casa Magalhães. Tecnicamente os clientes pertencentes ao parceiro \"RK Solutions\" receberão todo o apoio pelo parceiro e quando necessário, o parceiro entra em contato conosco.</li></ul>"
                        },
                        {
                            id: 30,
                            type: "pi",
                            text: "Abortados:"
                        },
                        {
                            id: 31,
                            type: "pf",
                            text: "<ul><li>Projetos onde não há mais interesse do parceiro em seguir com a integração.</li></ul>"
                        },

                        {
                            id: 32,
                            type: "t3",
                            text: "4. Ações"
                        },
                        {
                            id: 33,
                            type: "pf",
                            text: "<ul><li>Aguardando retorno do cliente</li><li>Integrar API 2.0</li><li>Manuais de Integração enviado</li><li>Quente</li><li>Sistema Homologação</li><li>Morno</li><li>Aguardando retorno do cliente</li><li>Em negociação</li></ul>"
                        },
                    ]
                },
                {
                    id: 7,
                    img: require("@/assets/imgs/dash-produtos-lista/corregedoria.png"),
                    alt: "Corregedoria",
                    slug: "corregedoria",
                    title: "Corregedoria",
                    text: "Client Life Cycle: Acompanhaando ciclo de vida dos clientes",
                    date: "2023-06-16",
                    article: [{
                            id: 0,
                            type: "t3",
                            text: "Acompanhamento dos Parceiros e Clientes desde o primeiro contatos no fechamento de um contrato"
                        },
                        {
                            id: 1,
                            type: "pf",
                            text: "<ul><li> Trazer um mapa dos gaps q aconteceram por falta de gestão do processo </li><ul><li> O <strong>Comercial</strong> trazer um mapa para o <strong>Produtos</strong> sobre o perfil de atuação do parceiro e clientes deste, para poder definir de maneira mais acertiva sobre o qual o tipo de integração deve ser ofertada.</li></ul><li>moskit (CRM q o Comal está usando). => Ver Integração com o Jira.</li><li> Processo de fechamento da parceria e inicio da integração</li><li> Definição do tipo de integração ofertar de acordo com o perfil de atuação do parceiro</li><ul><li>Conhecimento das regras de negócio do lado do parceiro, entendendo o sistema do parceiro</li><li>acompanhamento periódico dos parceiros</li></ul></ul>"
                        },
                        {
                            id: 2,
                            type: "t4",
                            text: "BPMN"
                        },
                        {
                            id: 3,
                            type: "p",
                            text: "Implementar uma plataforma, restrita por login e senha do Parceiro, contendo:"
                        },
                        {
                            id: 4,
                            type: "t4",
                            text: "INTEGRAÇÃO"
                        },
                        {
                            id: 5,
                            type: "pi",
                            text: "Processo atual: 26/06/223"
                        },
                        {
                            id: 6,
                            type: "pf",
                            text: "<ul><li><strong>COMERCIAL: </strong>Contato comercial, apresentando a IMendes;</li><li><strong>COMERCIAL: </strong>Envia link de credenciamento para o Parceiro;</li><li><strong>SUPORTE: </strong> Quando o credenciamento é identificado, é enviado para o Parceiro os manuais para Integração;</li><li><strong>PARCEIRO: </strong> Inicia processo de Integração;</li><li>Acontece a Homoloção;</li><li><strong>SUPORTE: </strong>Com a Homoloção finalizada, é notificado ao Comercial;</li><li><strong>COMERCIAL: </strong>Negocia contrato com o Parceiro;</li><li><strong>PARCEIRO: </strong>Inicia suas atividades.</li></ul>"
                        },
                        {
                            id: 7,
                            type: "pf",
                            text: "<a href='https://drive.google.com/file/d/1jNZKQU-tpa41Ba-bKxQS9nwMMWKOwD2Z/view?usp=sharing'>Acessar diagrama</a>"
                        },
                        {
                            id: 7,
                            type: "img",
                            text: require("@/assets/imgs/posts/life-cycle.png")
                        },
                    ]

                },
                {
                    id: 6,
                    img: require("@/assets/imgs/dash-produtos-lista/ideias.png"),
                    alt: "Idéias Relevantes",
                    slug: "ideias-relevantes",
                    title: "Idéias Relevantes",
                    text: "Plataforma de integração",
                    date: "2023-06-06",
                    article: [{
                            id: 0,
                            type: "t3",
                            text: "Plataforma dinâmica de para o processo de integração"
                        },
                        {
                            id: 1,
                            type: "p",
                            text: "Implementar uma plataforma, restrita por login e senha do Parceiro, contendo:"
                        },
                        {
                            id: 1,
                            type: "pf",
                            text: "<ul><li>Base de Conhecimento, indicando ao Parceiro situações onde as informações retornadas pelas APIs devem ser manipuladas ao invés de serem aplicadas diretamente;</li><li>Exemplo de telas ilustrando todo o processo de integração, trazendo de forma efetiva a aplicação dos recursos oeferecidos;</li></ul>"
                        },
                    ]
                },
                {
                    id: 5,
                    img: require("@/assets/imgs/dash-produtos-lista/corregedoria.png"),
                    alt: "Corregedoria",
                    slug: "corregedoria",
                    title: "Corregedoria",
                    text: "CALL Wuysmy - Síntese de dados para o novo modelo de homologaçoes",
                    date: "2023-06-06",
                    article: [{
                            id: 0,
                            type: "t3",
                            text: "Pontos abordados:"
                        },
                        {
                            id: 1,
                            type: "pf",
                            text: "<ul><li>Acompanhamento de todo o processo, desde o nascimento da parceria no Comercial até a finalização do processo deo homologação.</li><ul><li>Esse acompanhamento servirá proncipalmente para evitar que o contato esfrie e de certa forma, pressionar o Parceiro a iniciar o quanto antes a parte técnica da integrção.</li></ul><li>Dividir o processo de integração em etapas relevantes, demonstrando a importância da implementação de todos os recursos de controle que temos à disposição.</li><li>Repositório compartilhado das documentações enviadas pelo parceiro, como JSONs, prints, vídeos, etc.</li><li>Revisão do questionário para homologação sobre os recursos implementados.</li><ul><li>Hoje segue-se um modelo muito pobre e genérico sobre o que foi implementado, principalmente reclacionados aos recursos de controle, como as rotinas da ENVIARECEBEDADOS.</li></ul></ul>"
                        },
                    ]
                },
                {
                    id: 4,
                    img: require("@/assets/imgs/dash-produtos-lista/homologacoes.png"),
                    alt: "Homologações",
                    slug: "homologacoes",
                    title: "Homologações",
                    text: "Síntese de dados para o novo modelo de homologaçoes",
                    date: "2023-06-05",
                    article: [{
                            id: 0,
                            type: "t3",
                            text: "Novos acompanhamentos:"
                        },
                        {
                            id: 1,
                            type: "pf",
                            text: "<ol><li>Acompanhar uma homologação com cada um deles como ouvinte;</li><li>Fazer análise e mapeamento de melhoria no processos;</li><li>Revisitar roteiro e fazer uma proposta de atualização; Depois atualizamos os próximos passos. Ao meu ver, toda aquela parte de contato com parceiros, comercial etc. Seria uma segunda etapa.</li></ol>"
                        },
                        {
                            id: 2,
                            type: "p",
                            text: "Dados a serem registrados para controle das Homologações:"
                        },
                        {
                            id: 3,
                            type: "pf",
                            text: "<ul><li>CNPJ;</li><li>Razão Social;</li><li>Tipo da Homologação: XML; SAN1; SAN2; SAN3;</li><li>Continuação: (S;N) S=Se é continuação do processo de homologação; N=homologação do zero;</li><li>Data/Hora;</li><li>Responsável/Cargo;</li></ul>"
                        },
                    ]
                },
                {
                    id: 3,
                    img: require("@/assets/imgs/dash-produtos-lista/corregedoria.png"),
                    alt: "Corregedoria",
                    slug: "corregedoria",
                    title: "Agendamento de Homologações",
                    text: "Contato e agendamentos com o Wuysmy",
                    date: "2023-06-05",
                    article: [{
                            id: 1,
                            type: "t3",
                            text: "Continuação do processo de homologação com o parceiro."
                        },
                        {
                            id: 0,
                            type: "p",
                            text: "MM Flow - 44.135.347/0001-17"
                        },
                        {
                            id: 1,
                            type: "p",
                            text: "Conversei com Wuysmy sobre as próximas homologações: O Wuysmy me passou um parceiro onde está em reta final, aguardando agendamento. Então pra esse assunto, estou de standy-by pra organizar agenda pra fazer o acompanhamento como ouvinte como combinamos."
                        },
                    ]
                },
                {
                    id: 2,
                    img: require("@/assets/imgs/dash-produtos-lista/corregedoria.png"),
                    alt: "Corregedoria",
                    slug: "corregedoria",
                    title: "Agendamento de Homologações",
                    text: "Próximas Homologações: Ayran e Wuysmy",
                    date: "2023-05-22",
                    article: [{
                            id: 0,
                            type: "t3",
                            text: "Homologações agendadas"
                        },
                        {
                            id: 1,
                            type: "p",
                            text: "Em 06/06/23 acompanharei o processo de homologação com o Ayran às 9:30h do Parceiro TIAPPS TECNOLOGIA (ZAIDNEI GOMERI COELHO COSTA) como ouvinte."
                        },
                    ]
                },
                {
                    id: 1,
                    img: require("@/assets/imgs/dash-produtos-lista/vuejs.png"),
                    alt: "Vue JS",
                    slug: "vuejs",
                    title: "API Saneamento 1",
                    text: "Manual técnico com a descrição das informações pertinentes ao processo de integração com nossa API para consulta de dados tributários.",
                    date: "2023-05-17",
                    article: [],
                },
                {
                    id: 0,
                    img: require("@/assets/imgs/dash-produtos-lista/vacine.png"),
                    alt: "Vacine",
                    slug: "vacine",
                    title: "Vacine API",
                    text: "Mapear processos sobre a gravação de pendências.",
                    date: "2023-06-05",
                    article: [{
                            id: 0,
                            type: "t3",
                            text: "Homologações agendadas"
                        },
                        {
                            id: 1,
                            type: "p",
                            text: "Em 06/06/23 acompanharei o processo de homologação com o Ayran às 9:30h do Parceiro TIAPPS TECNOLOGIA (ZAIDNEI GOMERI COELHO COSTA) como ouvinte."
                        },
                    ]
                },
            ]
        }
    }
};

export default dashFrontData;