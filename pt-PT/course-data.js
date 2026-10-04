window.COURSE = {
  slug: 'excel',
  name: 'Excel',
  modules: [
    {
      number: 'Módulo 1', title: 'Primeiros passos',
      lessons: [
        {
          id: 'excel-01', title: 'O que é uma folha de cálculo?', level: 'Iniciação', duration: '8 min',
          intro: 'Comece sem pressupostos: um livro contém folhas e cada folha é uma grelha onde pode organizar, calcular e analisar informação.',
          objectives: ['Distinguir livro, folha, linha, coluna e célula', 'Reconhecer o endereço de uma célula, como B3'],
          steps: ['Abra o Excel e escolha <strong>Livro em branco</strong>.', 'Observe as letras no topo (colunas) e os números à esquerda (linhas).', 'Clique na célula <strong>B3</strong> e confirme o endereço na Caixa de Nome, à esquerda da barra de fórmulas.'],
          tip: 'Uma célula é identificada primeiro pela coluna e depois pela linha: <code>D7</code> significa coluna D, linha 7.',
          practice: { intro: 'Abra um livro em branco e confirme cada ação.', tasks: ['Selecionar a célula A1', 'Selecionar a célula D7', 'Identificar o separador Folha1'] },
          quiz: { question: 'Qual é o endereço da célula na coluna C e linha 5?', options: ['5C', 'C5', 'C:5'], answer: 1, explain: 'O endereço combina a letra da coluna com o número da linha: C5.' }
        },
        {
          id: 'excel-02', title: 'Conhecer a interface', level: 'Iniciação', duration: '10 min',
          intro: 'O Friso reúne os comandos do Excel. Saber onde procurar é mais útil do que memorizar todos os botões.',
          objectives: ['Localizar Friso, barra de fórmulas e separadores', 'Alternar entre folhas de cálculo'],
          steps: ['Identifique os separadores <strong>Base</strong>, <strong>Inserir</strong>, <strong>Esquema de Página</strong>, <strong>Fórmulas</strong> e <strong>Dados</strong>.', 'Clique numa célula e escreva <code>Olá</code>; repare que o conteúdo também aparece na barra de fórmulas.', 'Use o botão <strong>+</strong> junto aos separadores para criar uma segunda folha.'],
          tip: 'Se o Friso estiver oculto, use <kbd>Ctrl</kbd> + <kbd>F1</kbd> para o mostrar ou recolher.',
          image: { file: 'images/separadores-folhas.png', alt: 'Separadores Folha1 e Folha2 na parte inferior do Excel', caption: 'Os separadores permitem mudar de folha; o botão + cria uma nova.', source: 'https://support.microsoft.com/pt-pt/excel/save-a-worksheet' },
          practice: { intro: 'Explore a interface durante dois minutos.', tasks: ['Abrir o separador Inserir', 'Criar a Folha2', 'Voltar à Folha1'] },
          quiz: { question: 'Onde se escreve ou edita diretamente uma fórmula?', options: ['Na barra de estado', 'Na barra de fórmulas', 'No separador Ver'], answer: 1, explain: 'A barra de fórmulas mostra e permite editar o conteúdo da célula ativa.' }
        },
        {
          id: 'excel-03', title: 'Criar, guardar e abrir ficheiros', level: 'Iniciação', duration: '10 min',
          intro: 'Guardar cedo e com um nome claro evita perder trabalho e facilita encontrar a versão correta.',
          objectives: ['Guardar um livro em formato .xlsx', 'Abrir um ficheiro recente e usar Guardar Como'],
          steps: ['Prima <kbd>Ctrl</kbd> + <kbd>S</kbd> e escolha uma pasta.', 'Dê ao livro o nome <code>primeiro_exercicio.xlsx</code> e selecione <strong>Guardar</strong>.', 'Use <strong>Ficheiro → Guardar Como</strong> para criar uma cópia com outro nome.'],
          tip: 'O formato <code>.xlsx</code> é o formato normal. Use <code>.xlsm</code> apenas quando o livro tiver macros.',
          practice: { intro: 'Crie duas versões do mesmo exercício.', tasks: ['Guardar como primeiro_exercicio.xlsx', 'Alterar a célula A1', 'Guardar uma cópia chamada primeiro_exercicio_v2.xlsx'] },
          quiz: { question: 'Qual atalho guarda o livro atual?', options: ['Ctrl + G', 'Ctrl + S', 'Ctrl + P'], answer: 1, explain: 'Ctrl + S guarda rapidamente as alterações do livro.' }
        }
      ]
    },
    {
      number: 'Módulo 2', title: 'Introduzir e organizar dados',
      lessons: [
        {
          id: 'excel-04', title: 'Texto, números e datas', level: 'Básico', duration: '12 min',
          intro: 'O Excel trata texto, números e datas de formas diferentes. Introduzir cada tipo corretamente é a base para cálculos fiáveis.',
          objectives: ['Introduzir diferentes tipos de dados', 'Reconhecer quando um número foi guardado como texto'],
          steps: ['Na coluna A, escreva três nomes de produtos.', 'Na coluna B, escreva preços sem o símbolo € e aplique depois o formato Moeda.', 'Na coluna C, introduza datas no formato <code>dd/mm/aaaa</code>.'],
          tip: 'Por predefinição, texto alinha à esquerda e números à direita. Um triângulo verde pode indicar um número guardado como texto.',
          practice: { intro: 'Monte uma pequena lista de compras.', tasks: ['Inserir 5 produtos', 'Inserir 5 preços numéricos', 'Inserir a data de compra'] },
          quiz: { question: 'Qual entrada é mais adequada para uma data em Portugal?', options: ['31/12/2026', '12-31-2026', 'Dezembro trinta e um'], answer: 0, explain: 'O formato dia/mês/ano é reconhecido de forma consistente numa configuração pt-PT.' }
        },
        {
          id: 'excel-05', title: 'Preenchimento automático e séries', level: 'Básico', duration: '10 min',
          intro: 'A alça de preenchimento poupa tempo ao copiar padrões, fórmulas, dias, meses e sequências.',
          objectives: ['Criar sequências automaticamente', 'Copiar uma fórmula com a alça de preenchimento'],
          steps: ['Escreva <code>1</code> em A1 e <code>2</code> em A2.', 'Selecione A1:A2 e arraste o pequeno quadrado no canto inferior direito até A10.', 'Escreva <code>Janeiro</code> em B1 e arraste para baixo para completar os meses.'],
          tip: 'Se arrastar apenas uma célula com o número 1, o Excel copia 1. Se selecionar 1 e 2, reconhece a sequência.',
          practice: { intro: 'Crie três séries diferentes.', tasks: ['Números de 1 a 20', 'Meses de Janeiro a Dezembro', 'Datas de uma semana'] },
          quiz: { question: 'Que elemento deve arrastar para preencher uma série?', options: ['A barra de estado', 'A alça de preenchimento', 'O nome da folha'], answer: 1, explain: 'A alça de preenchimento fica no canto inferior direito da seleção.' }
        },
        {
          id: 'excel-06', title: 'Linhas, colunas e folhas', level: 'Básico', duration: '12 min',
          intro: 'Organizar a estrutura do livro torna os dados mais fáceis de ler e reduz erros nas fórmulas.',
          objectives: ['Inserir, eliminar e ajustar linhas e colunas', 'Mudar o nome, mover e copiar folhas'],
          steps: ['Clique com o botão direito no cabeçalho da coluna B e selecione <strong>Inserir</strong>.', 'Faça duplo clique no limite entre B e C para ajustar automaticamente a largura.', 'Clique com o botão direito em Folha1, escolha <strong>Mover ou Copiar</strong> e marque <strong>Criar uma cópia</strong>.'],
          tip: 'Mudar o nome das folhas para Dados, Resumo e Gráficos torna um livro grande muito mais fácil de navegar.',
          image: { file: 'images/mover-copiar.png', alt: 'Caixa de diálogo Mover ou copiar do Excel em português', caption: 'A opção Criar uma cópia duplica a folha sem remover a original.', source: 'https://support.microsoft.com/pt-pt/excel/save-a-worksheet' },
          practice: { intro: 'Organize um livro com três folhas.', tasks: ['Criar três folhas', 'Mudar nomes para Dados, Resumo e Gráficos', 'Mover Resumo para o segundo lugar'] },
          quiz: { question: 'O que acontece se usar Mover ou Copiar sem marcar “Criar uma cópia”?', options: ['A folha é movida', 'A folha é protegida', 'A folha é impressa'], answer: 0, explain: 'Sem essa caixa marcada, a folha muda de posição ou de livro; não é duplicada.' }
        }
      ]
    },
    {
      number: 'Módulo 3', title: 'Formatação clara e profissional',
      lessons: [
        {
          id: 'excel-07', title: 'Tipos de letra, cores e limites', level: 'Básico', duration: '12 min',
          intro: 'Uma boa formatação cria hierarquia sem transformar a folha num arco-íris.',
          objectives: ['Formatar cabeçalhos e dados de forma coerente', 'Aplicar limites apenas quando ajudam a leitura'],
          steps: ['Selecione a linha de cabeçalho e aplique <strong>Negrito</strong>.', 'Escolha uma cor de preenchimento escura e texto branco para o cabeçalho.', 'Use limites inferiores subtis e alinhe números à direita.'],
          tip: 'Use uma cor principal, uma cor de destaque e muito espaço em branco. A consistência vale mais do que a decoração.',
          image: { file: 'images/estilos-tabela.png', alt: 'Galeria de estilos de tabela do Excel', caption: 'A galeria mostra estilos prontos; escolha sempre um estilo com contraste legível.', source: 'https://support.microsoft.com/pt-pt/excel/accessibility/video-create-more-accessible-tables-in-excel' },
          practice: { intro: 'Formate uma tabela de despesas.', tasks: ['Destacar o cabeçalho', 'Alinhar descrições à esquerda', 'Aplicar limites discretos'] },
          quiz: { question: 'Qual abordagem melhora mais a leitura?', options: ['Usar uma cor diferente em cada célula', 'Manter uma hierarquia visual coerente', 'Esconder os cabeçalhos'], answer: 1, explain: 'Uma hierarquia coerente orienta o olhar sem criar ruído.' }
        },
        {
          id: 'excel-08', title: 'Formatos de número', level: 'Básico', duration: '12 min',
          intro: 'O valor não muda quando altera o formato: muda apenas a forma como o Excel o apresenta.',
          objectives: ['Aplicar formatos Moeda, Percentagem e Data', 'Controlar casas decimais sem arredondar o valor real'],
          steps: ['Selecione os preços e escolha <strong>Moeda</strong> ou <strong>Contabilidade</strong>.', 'Introduza <code>0,15</code> e aplique <strong>Percentagem</strong> para mostrar 15%.', 'Use os botões Aumentar/Diminuir Casas Decimais para ajustar a apresentação.'],
          tip: 'Formatar 0,2 como Percentagem mostra 20%. Se escrever 20 e depois aplicar %, obterá 2000%.',
          practice: { intro: 'Aplique o formato correto a cada coluna.', tasks: ['Preços em euros com 2 casas', 'Taxas em percentagem', 'Datas como dd/mm/aaaa'] },
          quiz: { question: 'Que valor deve introduzir para mostrar 25% ao aplicar o formato Percentagem?', options: ['25', '2,5', '0,25'], answer: 2, explain: '0,25 representa vinte e cinco centésimos, ou seja, 25%.' }
        },
        {
          id: 'excel-09', title: 'Formatação condicional', level: 'Intermédio', duration: '15 min',
          intro: 'A formatação condicional destaca automaticamente valores que cumprem uma regra.',
          objectives: ['Criar uma regra baseada em valores', 'Usar escalas de cor e barras de dados com critério'],
          steps: ['Selecione a coluna Total.', 'Abra <strong>Base → Formatação Condicional → Regras para Realçar Células</strong>.', 'Crie uma regra para valores superiores a 1000 e escolha um preenchimento verde.'],
          tip: 'Use poucas regras e explique o significado das cores. Vermelho deve indicar uma ação ou risco, não apenas um valor baixo.',
          practice: { intro: 'Crie um semáforo de desempenho.', tasks: ['Valores abaixo de 50 a vermelho', 'Entre 50 e 79 a amarelo', '80 ou mais a verde'] },
          quiz: { question: 'A formatação condicional altera o valor da célula?', options: ['Sim, sempre', 'Não, apenas a apresentação', 'Só em percentagens'], answer: 1, explain: 'A regra altera o aspeto, não o conteúdo da célula.' }
        }
      ]
    },
    {
      number: 'Módulo 4', title: 'Fórmulas sem medo',
      lessons: [
        {
          id: 'excel-10', title: 'Criar a primeira fórmula', level: 'Básico', duration: '14 min',
          intro: 'Todas as fórmulas começam por =. Depois combinam referências, números, operadores e funções.',
          objectives: ['Criar cálculos com +, -, * e /', 'Editar e copiar uma fórmula'],
          steps: ['Escreva 10 em A1 e 5 em B1.', 'Em C1, escreva <code>=A1+B1</code> e prima Enter.', 'Experimente <code>=A1*B1</code> e <code>=(A1+B1)/2</code>.'],
          tip: 'Use parênteses para deixar clara a ordem dos cálculos. O Excel calcula multiplicação e divisão antes de soma e subtração.',
          practice: { intro: 'Crie uma linha de fatura.', tasks: ['Quantidade em B2', 'Preço em C2', 'Total em D2 com =B2*C2'] },
          quiz: { question: 'Qual expressão multiplica B2 por C2?', options: ['B2xC2', '=B2*C2', '=B2+C2'], answer: 1, explain: 'As fórmulas começam por = e o operador de multiplicação é *.' }
        },
        {
          id: 'excel-11', title: 'Referências relativas e absolutas', level: 'Intermédio', duration: '16 min',
          intro: 'Ao copiar uma fórmula, referências relativas mudam; referências absolutas permanecem fixas.',
          objectives: ['Distinguir A1, $A$1, A$1 e $A1', 'Fixar uma taxa ao copiar uma fórmula'],
          steps: ['Coloque a taxa de IVA em F1.', 'Em D2 escreva <code>=C2*(1+$F$1)</code>.', 'Copie a fórmula para baixo e confirme que F1 permanece fixa.'],
          tip: 'Durante a edição, selecione uma referência e prima <kbd>F4</kbd> para alternar entre os quatro tipos.',
          practice: { intro: 'Calcule preços com uma taxa fixa.', tasks: ['Taxa de 23% em F1', 'Fórmula com $F$1', 'Copiar para dez linhas'] },
          quiz: { question: 'Qual referência permanece totalmente fixa?', options: ['F1', '$F$1', 'F$1:F2'], answer: 1, explain: 'Os dois cifrões fixam a coluna F e a linha 1.' }
        },
        {
          id: 'excel-12', title: 'Compreender os erros', level: 'Intermédio', duration: '14 min',
          intro: 'Os erros são mensagens de diagnóstico. Aprender a lê-los é mais eficaz do que tentar escondê-los.',
          objectives: ['Reconhecer #DIV/0!, #NOME?, #VALOR! e #REF!', 'Localizar a origem de um erro'],
          steps: ['Crie <code>=10/0</code> e observe <strong>#DIV/0!</strong>.', 'Escreva uma função com o nome incorreto para ver <strong>#NOME?</strong>.', 'Use <strong>Fórmulas → Rastrear Precedentes</strong> para seguir as células usadas.'],
          tip: 'Use <code>SEERRO</code> apenas depois de compreender o problema; ocultar um erro real pode mascarar dados incorretos.',
          practice: { intro: 'Diagnostique três fórmulas propositadamente erradas.', tasks: ['Corrigir uma divisão por zero', 'Corrigir um nome de função', 'Corrigir uma referência eliminada'] },
          quiz: { question: 'Que erro aparece normalmente numa divisão por zero?', options: ['#REF!', '#DIV/0!', '#N/D'], answer: 1, explain: '#DIV/0! indica que o divisor é zero ou está vazio.' }
        }
      ]
    },
    {
      number: 'Módulo 5', title: 'Funções essenciais',
      lessons: [
        {
          id: 'excel-13', title: 'SOMA, MÉDIA, MÍNIMO e MÁXIMO', level: 'Intermédio', duration: '16 min',
          intro: 'Estas quatro funções resolvem grande parte dos resumos numéricos do dia a dia.',
          objectives: ['Somar e resumir intervalos', 'Usar a AutoSoma e compreender o intervalo sugerido'],
          steps: ['Em B10 escreva <code>=SOMA(B2:B9)</code>.', 'Em B11 escreva <code>=MÉDIA(B2:B9)</code>.', 'Calcule também <code>=MÍNIMO(B2:B9)</code> e <code>=MÁXIMO(B2:B9)</code>.'],
          tip: 'O separador de argumentos em pt-PT é normalmente o ponto e vírgula, mas intervalos contínuos usam dois pontos.',
          practice: { intro: 'Resuma oito valores de vendas.', tasks: ['Calcular total', 'Calcular média', 'Encontrar menor e maior valor'] },
          quiz: { question: 'Qual fórmula calcula a média entre B2 e B9?', options: ['=MÉDIA(B2:B9)', '=SOMA(B2;B9)', '=MÉDIA(B2-B9)'], answer: 0, explain: 'B2:B9 representa todo o intervalo contínuo.' }
        },
        {
          id: 'excel-14', title: 'SE e decisões lógicas', level: 'Intermédio', duration: '18 min',
          intro: 'A função SE devolve um resultado quando uma condição é verdadeira e outro quando é falsa.',
          objectives: ['Construir uma condição simples', 'Combinar SE com E ou OU'],
          steps: ['Em C2 introduza uma nota entre 0 e 20.', 'Em D2 escreva <code>=SE(C2&gt;=10;"Aprovado";"Não aprovado")</code>.', 'Copie para baixo e teste notas diferentes.'],
          tip: 'Escreva textos entre aspas. Mantenha as condições simples; se existirem muitas regras, considere uma tabela de referência.',
          practice: { intro: 'Classifique resultados de uma turma.', tasks: ['Criar a coluna Resultado', 'Aplicar SE com limite 10', 'Testar valores 9, 10 e 15'] },
          quiz: { question: 'Na função SE, quantos resultados principais são definidos?', options: ['Um', 'Dois: verdadeiro e falso', 'Quatro'], answer: 1, explain: 'SE escolhe entre o valor se verdadeiro e o valor se falso.' }
        },
        {
          id: 'excel-15', title: 'CONTAR.SE e SOMASE', level: 'Intermédio', duration: '18 min',
          intro: 'Contar e somar apenas as linhas que cumprem um critério transforma listas em informação útil.',
          objectives: ['Contar registos por critério', 'Somar valores associados a uma categoria'],
          steps: ['Conte ocorrências de Lisboa com <code>=CONTAR.SE(B2:B20;"Lisboa")</code>.', 'Some vendas de Lisboa com <code>=SOMASE(B2:B20;"Lisboa";C2:C20)</code>.', 'Substitua o texto do critério por uma referência, por exemplo E2.'],
          tip: 'Referenciar uma célula de critério torna o resumo reutilizável e reduz erros de escrita.',
          practice: { intro: 'Resuma vendas por cidade.', tasks: ['Contar linhas de Porto', 'Somar vendas de Porto', 'Alterar o critério através de uma célula'] },
          quiz: { question: 'Qual função soma valores que cumprem um critério?', options: ['CONTAR.SE', 'SOMASE', 'MÉDIA'], answer: 1, explain: 'SOMASE avalia um intervalo e soma os valores correspondentes.' }
        }
      ]
    },
    {
      number: 'Módulo 6', title: 'Tabelas e qualidade dos dados',
      lessons: [
        {
          id: 'excel-16', title: 'Transformar um intervalo numa tabela', level: 'Intermédio', duration: '15 min',
          intro: 'Uma Tabela do Excel cresce automaticamente, aplica filtros e torna as fórmulas mais legíveis.',
          objectives: ['Criar uma tabela com cabeçalhos', 'Escolher um estilo acessível e dar nome à tabela'],
          steps: ['Clique dentro do intervalo e prima <kbd>Ctrl</kbd> + <kbd>T</kbd>.', 'Confirme o intervalo e marque <strong>A minha tabela tem cabeçalhos</strong>.', 'No separador Estrutura da Tabela, dê-lhe o nome <code>Vendas</code>.'],
          tip: 'Evite linhas e colunas vazias no meio da fonte de dados; cada coluna deve ter um único tipo de informação.',
          image: { file: 'images/criar-tabela.png', alt: 'Caixa Criar Tabela do Excel em português', caption: 'Confirme o intervalo e indique se a primeira linha contém cabeçalhos.', source: 'https://support.microsoft.com/pt-pt/excel/accessibility/video-create-more-accessible-tables-in-excel' },
          practice: { intro: 'Converta uma lista de 12 vendas numa tabela.', tasks: ['Selecionar uma célula da lista', 'Usar Ctrl + T', 'Dar o nome Vendas'] },
          quiz: { question: 'Qual atalho cria uma Tabela do Excel?', options: ['Ctrl + T', 'Ctrl + L', 'Alt + T'], answer: 0, explain: 'Ctrl + T abre diretamente a caixa Criar Tabela.' }
        },
        {
          id: 'excel-17', title: 'Ordenar e filtrar', level: 'Intermédio', duration: '16 min',
          intro: 'Ordenar muda a ordem das linhas; filtrar mostra apenas as que cumprem uma condição.',
          objectives: ['Ordenar por um ou vários critérios', 'Aplicar, limpar e verificar filtros'],
          steps: ['Clique numa célula da coluna Total e escolha ordenar do maior para o menor.', 'Abra a seta da coluna Região e selecione apenas Norte.', 'Use <strong>Dados → Limpar</strong> para mostrar novamente todas as linhas.'],
          tip: 'Nunca ordene apenas uma coluna isolada de uma lista. Expanda sempre a seleção para manter cada registo unido.',
          practice: { intro: 'Explore uma tabela de funcionários.', tasks: ['Ordenar por Departamento e depois por Nome', 'Filtrar apenas o departamento TI', 'Limpar todos os filtros'] },
          quiz: { question: 'O filtro elimina as linhas que não correspondem?', options: ['Sim', 'Não, apenas as oculta temporariamente', 'Só elimina células vazias'], answer: 1, explain: 'Filtrar não apaga dados; apenas altera temporariamente o que fica visível.' }
        },
        {
          id: 'excel-18', title: 'Validação e listas pendentes', level: 'Intermédio', duration: '18 min',
          intro: 'A validação evita entradas inválidas e ajuda a manter nomes e categorias consistentes.',
          objectives: ['Criar uma lista pendente', 'Definir mensagens de entrada e erro'],
          steps: ['Escreva as categorias válidas numa área auxiliar.', 'Selecione as células de destino e abra <strong>Dados → Validação de Dados</strong>.', 'Escolha <strong>Lista</strong> e selecione o intervalo das categorias.'],
          tip: 'Guarde as listas de apoio numa folha chamada Listas. Assim, pode atualizá-las sem alterar a validação.',
          practice: { intro: 'Crie uma lista de estados de tarefa.', tasks: ['Lista com Por iniciar, Em curso e Concluído', 'Aplicar a 20 linhas', 'Testar uma entrada inválida'] },
          quiz: { question: 'Qual ferramenta restringe os valores aceites numa célula?', options: ['Validação de Dados', 'Consolidar', 'Atingir Objetivo'], answer: 0, explain: 'A Validação de Dados permite definir tipos, limites e listas permitidas.' }
        }
      ]
    },
    {
      number: 'Módulo 7', title: 'Gráficos que explicam',
      lessons: [
        {
          id: 'excel-19', title: 'Escolher o gráfico certo', level: 'Intermédio', duration: '14 min',
          intro: 'O melhor gráfico depende da pergunta: comparar, mostrar evolução, composição ou relação.',
          objectives: ['Associar perguntas a tipos de gráfico', 'Evitar gráficos que distorcem a leitura'],
          steps: ['Use colunas ou barras para comparar categorias.', 'Use linhas para mostrar evolução ao longo do tempo.', 'Use circular apenas para poucas partes de um total e quando a comparação é simples.'],
          tip: 'Se o gráfico precisar de uma longa explicação, talvez a tabela ou o tipo de gráfico não estejam bem escolhidos.',
          practice: { intro: 'Escolha um gráfico para três situações.', tasks: ['Vendas por região', 'Evolução mensal', 'Percentagem por categoria'] },
          quiz: { question: 'Qual gráfico é normalmente melhor para uma evolução mensal?', options: ['Linhas', 'Circular', 'Radar'], answer: 0, explain: 'Uma linha torna a sequência temporal e a tendência fáceis de seguir.' }
        },
        {
          id: 'excel-20', title: 'Criar e editar um gráfico', level: 'Intermédio', duration: '16 min',
          intro: 'Um gráfico eficaz tem um título informativo, rótulos suficientes e pouco ruído visual.',
          objectives: ['Inserir um gráfico a partir de uma tabela', 'Editar título, legenda, eixos e rótulos'],
          steps: ['Selecione categorias e valores, incluindo cabeçalhos.', 'Aceda a <strong>Inserir</strong> e escolha <strong>Colunas Agrupadas</strong>.', 'Mude o título para uma frase específica, como “Vendas por região — 2026”.'],
          tip: 'Evite efeitos 3D: dificultam comparar comprimentos e áreas.',
          practice: { intro: 'Crie um gráfico de vendas por produto.', tasks: ['Inserir colunas agrupadas', 'Adicionar título específico', 'Remover legenda se for redundante'] },
          quiz: { question: 'Qual título é mais informativo?', options: ['Gráfico 1', 'Vendas', 'Vendas por região — 2026'], answer: 2, explain: 'Um bom título indica a medida, a dimensão e o período.' }
        },
        {
          id: 'excel-21', title: 'Minigráficos e painéis simples', level: 'Avançado', duration: '18 min',
          intro: 'Minigráficos mostram tendências dentro de células; combinados com indicadores, ajudam a criar um resumo compacto.',
          objectives: ['Inserir minigráficos', 'Construir um painel simples sem excesso de elementos'],
          steps: ['Selecione a célula onde ficará o minigráfico e escolha <strong>Inserir → Minigráficos</strong>.', 'Indique o intervalo com os valores mensais.', 'Crie três indicadores: Total, Média e Melhor mês, e alinhe-os num resumo.'],
          tip: 'Um painel deve responder a poucas perguntas importantes. Mais gráficos não significam mais clareza.',
          practice: { intro: 'Monte um resumo de uma página.', tasks: ['Criar 3 indicadores', 'Inserir 1 gráfico principal', 'Adicionar minigráficos por produto'] },
          quiz: { question: 'Onde aparece um minigráfico?', options: ['Dentro de uma célula', 'Numa nova aplicação', 'Apenas na impressão'], answer: 0, explain: 'O minigráfico é um pequeno gráfico embutido numa célula.' }
        }
      ]
    },
    {
      number: 'Módulo 8', title: 'Pesquisa e análise',
      lessons: [
        {
          id: 'excel-22', title: 'PROCX: procurar informação', level: 'Avançado', duration: '20 min',
          intro: 'PROCX procura um valor numa lista e devolve o campo correspondente, sem depender da posição da coluna.',
          objectives: ['Construir uma PROCX básica', 'Definir uma mensagem quando não existe correspondência'],
          steps: ['Crie uma tabela com Código, Produto e Preço.', 'Numa área de consulta, escreva um código em F2.', 'Use <code>=PROCX(F2;A2:A20;C2:C20;"Não encontrado")</code>.'],
          tip: 'Use intervalos com o mesmo tamanho. Em tabelas, prefira referências estruturadas para fórmulas mais legíveis.',
          practice: { intro: 'Crie uma pesquisa de preços por código.', tasks: ['Preparar tabela de produtos', 'Inserir código de consulta', 'Devolver preço ou “Não encontrado”'] },
          quiz: { question: 'Qual é a vantagem principal de PROCX sobre PROCV?', options: ['Só procura números', 'Pode devolver valores à esquerda ou à direita', 'Não usa intervalos'], answer: 1, explain: 'PROCX não exige que a coluna devolvida fique à direita da coluna procurada.' }
        },
        {
          id: 'excel-23', title: 'Tabelas dinâmicas', level: 'Avançado', duration: '24 min',
          intro: 'Uma tabela dinâmica resume centenas de linhas sem alterar os dados de origem.',
          objectives: ['Criar uma tabela dinâmica', 'Organizar campos em Linhas, Colunas, Valores e Filtros'],
          steps: ['Clique dentro da Tabela de dados e escolha <strong>Inserir → Tabela Dinâmica</strong>.', 'Coloque Região em Linhas e Total em Valores.', 'Adicione Produto a Colunas e confirme se o cálculo é Soma, não Contagem.'],
          tip: 'Atualize a tabela dinâmica quando os dados mudarem: botão direito → Atualizar.',
          practice: { intro: 'Resuma 50 vendas.', tasks: ['Total por região', 'Total por produto', 'Filtro por vendedor'] },
          quiz: { question: 'Onde deve colocar um campo numérico que pretende somar?', options: ['Valores', 'Filtros', 'Linhas'], answer: 0, explain: 'A área Valores executa agregações como Soma, Contagem e Média.' }
        },
        {
          id: 'excel-24', title: 'Segmentações e gráficos dinâmicos', level: 'Avançado', duration: '20 min',
          intro: 'Segmentações tornam os filtros visíveis e fáceis de usar; gráficos dinâmicos acompanham o resumo.',
          objectives: ['Adicionar uma segmentação', 'Ligar filtros a um gráfico dinâmico'],
          steps: ['Selecione a tabela dinâmica e escolha <strong>Inserir Segmentação de Dados</strong>.', 'Adicione os campos Região e Produto.', 'Crie um gráfico dinâmico e teste os botões da segmentação.'],
          tip: 'Use títulos curtos nas segmentações e alinhe os controlos. Muitos filtros tornam o painel mais difícil de usar.',
          practice: { intro: 'Transforme o resumo anterior num painel interativo.', tasks: ['Segmentação por região', 'Segmentação por produto', 'Gráfico dinâmico ligado'] },
          quiz: { question: 'Para que serve uma segmentação de dados?', options: ['Escrever fórmulas', 'Filtrar visualmente', 'Proteger células'], answer: 1, explain: 'A segmentação apresenta botões que aplicam filtros ao resumo.' }
        }
      ]
    },
    {
      number: 'Módulo 9', title: 'Produtividade e segurança',
      lessons: [
        {
          id: 'excel-25', title: 'Atalhos que poupam tempo', level: 'Todos os níveis', duration: '15 min',
          intro: 'Aprenda atalhos por tarefa, não como uma lista abstrata. Use-os até se tornarem naturais.',
          objectives: ['Navegar e editar mais depressa', 'Selecionar intervalos sem arrastar longas distâncias'],
          steps: ['Pratique <kbd>Ctrl</kbd> + <kbd>Seta</kbd> para saltar até ao limite dos dados.', 'Use <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Seta</kbd> para selecionar até ao limite.', 'Use <kbd>F2</kbd> para editar a célula e <kbd>Alt</kbd> + <kbd>=</kbd> para AutoSoma.'],
          tip: 'Escolha três atalhos por semana e aplique-os em trabalho real.',
          practice: { intro: 'Faça uma ronda de atalhos.', tasks: ['Copiar e colar sem rato', 'Selecionar uma coluna de dados', 'Inserir AutoSoma'] },
          quiz: { question: 'Que tecla edita a célula ativa?', options: ['F2', 'F5', 'Esc'], answer: 0, explain: 'F2 coloca o cursor no conteúdo da célula para edição.' }
        },
        {
          id: 'excel-26', title: 'Imprimir sem surpresas', level: 'Intermédio', duration: '16 min',
          intro: 'Antes de imprimir, defina o que cabe em cada página, repita cabeçalhos e verifique a pré-visualização.',
          objectives: ['Definir orientação e área de impressão', 'Repetir a linha de cabeçalho em várias páginas'],
          steps: ['Abra <strong>Esquema de Página</strong> e escolha Retrato ou Paisagem.', 'Selecione a tabela e defina a <strong>Área de Impressão</strong>.', 'Use <strong>Imprimir Títulos</strong> para repetir a primeira linha e confirme com <kbd>Ctrl</kbd> + <kbd>P</kbd>.'],
          tip: 'Evite reduzir uma tabela grande para uma única página ilegível. Ajuste apenas a largura e permita várias páginas na altura.',
          practice: { intro: 'Prepare uma tabela longa para PDF.', tasks: ['Definir orientação', 'Repetir cabeçalho', 'Confirmar na pré-visualização'] },
          quiz: { question: 'Que atalho abre a pré-visualização de impressão?', options: ['Ctrl + P', 'Ctrl + I', 'Ctrl + Alt + P'], answer: 0, explain: 'Ctrl + P abre a área de impressão e a pré-visualização.' }
        },
        {
          id: 'excel-27', title: 'Proteger fórmulas e folhas', level: 'Avançado', duration: '18 min',
          intro: 'A proteção evita alterações acidentais, mas não substitui uma política de segurança ou cópias de segurança.',
          objectives: ['Desbloquear células de entrada', 'Proteger a folha mantendo os campos editáveis'],
          steps: ['Selecione as células onde o utilizador deve escrever e abra <strong>Formatar Células → Proteção</strong>.', 'Desmarque <strong>Bloqueada</strong> nessas células.', 'Use <strong>Rever → Proteger Folha</strong> e permita apenas as ações necessárias.'],
          tip: 'Destaque visualmente as células editáveis para o utilizador saber onde deve escrever.',
          practice: { intro: 'Proteja um modelo de orçamento.', tasks: ['Desbloquear campos de entrada', 'Proteger a folha', 'Testar célula de entrada e célula de fórmula'] },
          quiz: { question: 'Quando é que a propriedade “Bloqueada” tem efeito?', options: ['Sempre', 'Quando a folha é protegida', 'Apenas ao imprimir'], answer: 1, explain: 'A marca Bloqueada só é aplicada depois de ativar Proteger Folha.' }
        }
      ]
    },
    {
      number: 'Módulo 10', title: 'Projeto orientado',
      lessons: [
        {
          id: 'excel-28', title: 'Planear um livro profissional', level: 'Avançado', duration: '20 min',
          intro: 'Antes de criar fórmulas, separe entrada de dados, cálculos e apresentação. Um bom modelo é previsível e fácil de manter.',
          objectives: ['Planear folhas e fluxos de dados', 'Definir nomes, formatos e regras antes da construção'],
          steps: ['Crie as folhas <strong>Listas</strong>, <strong>Dados</strong>, <strong>Análise</strong> e <strong>Painel</strong>.', 'Defina colunas, tipos de dados e validações na folha Dados.', 'Escolha os indicadores e perguntas que o Painel deve responder.'],
          tip: 'Não misture dados brutos e resultados manuais. Cada valor deve ter uma origem clara.',
          practice: { intro: 'Desenhe o plano do projeto final.', tasks: ['Criar quatro folhas', 'Definir campos de Dados', 'Listar quatro indicadores'] },
          quiz: { question: 'Onde devem ficar os registos linha a linha?', options: ['Dados', 'Painel', 'Gráficos'], answer: 0, explain: 'A folha Dados deve concentrar os registos estruturados que alimentam a análise.' }
        },
        {
          id: 'excel-29', title: 'Construir o painel de vendas', level: 'Avançado', duration: '35 min',
          intro: 'Junte tabelas, fórmulas, uma tabela dinâmica, um gráfico e segmentações num painel coerente.',
          objectives: ['Criar indicadores ligados aos dados', 'Montar um painel filtrável numa página'],
          steps: ['Introduza pelo menos 30 vendas com Data, Vendedor, Produto, Região, Quantidade e Preço.', 'Calcule Total, crie uma tabela dinâmica por região e adicione um gráfico de colunas.', 'No Painel, mostre Total de vendas, Ticket médio, Melhor produto e Melhor região.'],
          tip: 'Alinhe elementos, mantenha uma paleta curta e teste filtros com diferentes combinações.',
          practice: { intro: 'Construa a primeira versão funcional.', tasks: ['Tabela de 30 vendas', 'Quatro indicadores', 'Gráfico e duas segmentações'] },
          quiz: { question: 'Qual deve ser a prioridade do painel?', options: ['Ter o maior número de cores', 'Responder rapidamente às perguntas principais', 'Mostrar todas as linhas de dados'], answer: 1, explain: 'Um painel sintetiza informação para apoiar a compreensão e a decisão.' }
        },
        {
          id: 'excel-30', title: 'Revisão, acessibilidade e entrega', level: 'Projeto final', duration: '25 min',
          intro: 'Termine como um profissional: valide números, teste filtros, proteja fórmulas e prepare uma versão fácil de usar.',
          objectives: ['Aplicar uma lista de verificação final', 'Entregar o livro com instruções e sem erros visíveis'],
          steps: ['Teste fórmulas com valores conhecidos e procure erros com <strong>Localizar</strong>.', 'Adicione uma folha curta de Instruções, verifique contrastes e dê nomes claros a tabelas e folhas.', 'Proteja fórmulas, defina a área de impressão e guarde uma cópia final.'],
          tip: 'Peça a outra pessoa para usar o livro sem explicação oral. As dificuldades dela mostram o que ainda precisa de melhoria.',
          practice: { intro: 'Faça a auditoria completa do seu projeto.', tasks: ['Zero erros de fórmula visíveis', 'Filtros e segmentações testados', 'Instruções e cópia final guardadas'] },
          quiz: { question: 'Qual é o melhor teste de qualidade final?', options: ['Confirmar apenas as cores', 'Testar com dados conhecidos e com outro utilizador', 'Aumentar o número de folhas'], answer: 1, explain: 'Testes de cálculo e utilização revelam erros técnicos e problemas de clareza.' }
        }
      ]
    },
    {
      number: 'Módulo 11', title: 'Texto, datas e limpeza',
      lessons: [
        {
          id: 'excel-31', title: 'Limpar texto e remover duplicados', level: 'Básico', duration: '18 min',
          intro: 'Corrija espaços escondidos, nomes escritos de formas diferentes e linhas repetidas antes de analisar os dados.',
          objectives: ['Limpar texto importado', 'Eliminar duplicados sem perder informação importante'],
          steps: ['Crie uma cópia da folha e use <strong>SUPR.ESPAÇOS</strong> para retirar espaços adicionais.', 'Selecione a tabela e abra <strong>Dados → Remover Duplicados</strong>; escolha apenas as colunas que identificam um registo.', 'Compare a quantidade de linhas antes e depois e confirme alguns exemplos manualmente.'],
          tip: 'Nunca remova duplicados sem guardar uma cópia dos dados originais.',
          practice: { intro: 'Limpe uma lista de 12 clientes com espaços e repetições.', tasks: ['Cópia dos dados originais criada', 'Espaços adicionais removidos', 'Duplicados eliminados e resultado conferido'] },
          quiz: { question: 'Porque deve criar uma cópia antes de remover duplicados?', options: ['Para aumentar o ficheiro', 'Para poder recuperar registos eliminados por engano', 'Para mudar as cores'], answer: 1, explain: 'A cópia permite comparar e recuperar informação caso a seleção de colunas esteja errada.' }
        },
        {
          id: 'excel-32', title: 'Separar e combinar texto', level: 'Intermédio', duration: '20 min',
          intro: 'Transforme nomes, códigos e moradas em colunas úteis, ou reúna várias partes numa só descrição.',
          objectives: ['Usar Texto para Colunas', 'Combinar conteúdos com & e TEXTO.JUNTAR'],
          steps: ['Selecione a coluna e use <strong>Dados → Texto para Colunas</strong>; escolha Delimitado e indique o separador.', 'Para juntar nome e apelido, escreva <code>=A2&" "&B2</code> e preencha para baixo.', 'Quando existirem muitas partes, experimente <code>=TEXTO.JUNTAR(" ";VERDADEIRO;A2:C2)</code>.'],
          tip: 'Insira colunas vazias à direita antes de separar texto, para não substituir dados existentes.',
          practice: { intro: 'Separe uma coluna Nome completo e crie uma coluna Nome para etiqueta.', tasks: ['Nome e apelido separados', 'Nova coluna combinada com espaço', 'Fórmula copiada para todas as linhas'] },
          quiz: { question: 'O que faz o símbolo & numa fórmula?', options: ['Soma números', 'Combina texto', 'Apaga espaços'], answer: 1, explain: 'O operador & liga valores de texto e pode incluir separadores como espaços ou hífenes.' }
        },
        {
          id: 'excel-33', title: 'Datas, prazos e dias úteis', level: 'Intermédio', duration: '22 min',
          intro: 'Calcule idades, dias de atraso e datas de entrega sem contar fins de semana.',
          objectives: ['Reconhecer datas verdadeiras no Excel', 'Calcular prazos com dias úteis'],
          steps: ['Introduza uma data e aplique um formato em <strong>Base → Número → Data Abreviada</strong>.', 'Calcule dias decorridos com <code>=HOJE()-A2</code> e formate o resultado como Número.', 'Calcule uma entrega com <code>=DIATRABALHO(A2;10)</code> e, se necessário, indique feriados num terceiro argumento.'],
          tip: 'Se uma data ficar alinhada à esquerda e não funcionar nos cálculos, pode estar guardada como texto.',
          practice: { intro: 'Crie um pequeno mapa de cinco tarefas com início, prazo e dias em atraso.', tasks: ['Datas reconhecidas pelo Excel', 'Prazos calculados em dias úteis', 'Atrasos destacados com formatação condicional'] },
          quiz: { question: 'Que função devolve a data atual?', options: ['HOJE()', 'AGORA.DIA()', 'DATA.ATUAL()'], answer: 0, explain: 'HOJE() devolve a data atual e é recalculada quando o livro é aberto.' }
        }
      ]
    },
    {
      number: 'Módulo 12', title: 'Fórmulas avançadas',
      lessons: [
        {
          id: 'excel-34', title: 'SOMASES, CONTAR.SES e MÉDIASES', level: 'Avançado', duration: '24 min',
          intro: 'Resuma listas grandes com vários critérios, como vendas pagas de uma região e de um mês específico.',
          objectives: ['Construir cálculos com vários critérios', 'Confirmar intervalos de critérios e de resultados'],
          steps: ['Converta a origem numa Tabela e identifique as colunas Vendas, Estado e Região.', 'Escreva <code>=SOMASES(Tabela[Vendas];Tabela[Estado];"Pago";Tabela[Região];"Norte")</code>.', 'Troque SOMASES por <strong>CONTAR.SES</strong> ou <strong>MÉDIASES</strong> conforme o objetivo e teste com filtros.'],
          tip: 'Todos os intervalos usados nestas funções devem ter o mesmo número de linhas.',
          practice: { intro: 'Crie três indicadores: total pago, número de pedidos e venda média por região.', tasks: ['SOMASES criada com dois critérios', 'CONTAR.SES e MÉDIASES testadas', 'Resultados comparados com filtros'] },
          quiz: { question: 'Quando deve usar SOMASES?', options: ['Quando soma valores que cumprem vários critérios', 'Quando quer ordenar uma tabela', 'Quando quer criar um gráfico'], answer: 0, explain: 'SOMASES soma um intervalo apenas nas linhas que cumprem todos os critérios indicados.' }
        },
        {
          id: 'excel-35', title: 'FILTRAR, ORDENAR e ÚNICO', level: 'Avançado', duration: '24 min',
          intro: 'Crie listas que se atualizam automaticamente quando os dados de origem mudam.',
          objectives: ['Criar matrizes dinâmicas', 'Combinar funções para produzir listas sem repetição'],
          steps: ['Numa área vazia, escreva <code>=ÚNICO(Tabela[Categoria])</code> para obter uma lista sem repetições.', 'Use <code>=ORDENAR(ÚNICO(Tabela[Categoria]))</code> para ordenar o resultado.', 'Crie uma lista de pedidos pagos com <code>=FILTRAR(Tabela;Tabela[Estado]="Pago";"Sem resultados")</code>.'],
          tip: 'Estas funções requerem uma versão recente do Microsoft 365; deixe células livres para o resultado se expandir.',
          practice: { intro: 'Crie uma área automática com categorias únicas e pedidos pendentes.', tasks: ['Lista ÚNICO criada', 'Resultado ordenado', 'Filtro dinâmico com mensagem sem resultados'] },
          quiz: { question: 'O que significa o erro #DESPEJAR!?', options: ['Não existe Internet', 'Há células a bloquear a expansão do resultado', 'A folha está protegida'], answer: 1, explain: 'As matrizes dinâmicas precisam de espaço vazio para mostrar todos os resultados.' }
        },
        {
          id: 'excel-36', title: 'Nomes e referências estruturadas', level: 'Avançado', duration: '22 min',
          intro: 'Dê nomes claros a células e tabelas para tornar fórmulas longas mais fáceis de ler e manter.',
          objectives: ['Criar nomes definidos', 'Usar referências estruturadas de Tabelas'],
          steps: ['Selecione a célula com a taxa de IVA, clique na <strong>Caixa de Nome</strong> e escreva TaxaIVA.', 'Use o nome numa fórmula, por exemplo <code>=D2*TaxaIVA</code>, e confirme que permanece fixo ao copiar.', 'Numa Tabela, use <code>=[@Quantidade]*[@Preço]</code> e observe o preenchimento automático da coluna.'],
          tip: 'Use nomes curtos, sem espaços e que expliquem o valor, como TaxaIVA ou MetaMensal.',
          practice: { intro: 'Melhore uma folha de preços usando nomes e referências de Tabela.', tasks: ['Taxa fixa recebeu um nome', 'Nome usado numa fórmula', 'Coluna calculada criada na Tabela'] },
          quiz: { question: 'Qual é a vantagem de um nome como TaxaIVA?', options: ['A fórmula fica mais legível', 'A folha fica maior', 'O Excel deixa de calcular'], answer: 0, explain: 'Um nome descritivo ajuda a perceber a fórmula e reduz enganos com referências.' }
        }
      ]
    },
    {
      number: 'Módulo 13', title: 'Análise e cenários',
      lessons: [
        {
          id: 'excel-37', title: 'Subtotais e agrupamentos', level: 'Intermédio', duration: '20 min',
          intro: 'Resuma uma lista por categoria e oculte detalhes para apresentar apenas os valores principais.',
          objectives: ['Aplicar subtotais a uma lista ordenada', 'Usar níveis de agrupamento'],
          steps: ['Ordene a lista pela coluna Categoria para juntar registos iguais.', 'Abra <strong>Dados → Subtotal</strong>, escolha Categoria, Soma e a coluna de valores.', 'Use os níveis 1, 2 e 3 à esquerda para alternar entre total geral, subtotais e detalhe.'],
          tip: 'Se os dados mudarem frequentemente, uma Tabela Dinâmica costuma ser uma alternativa mais flexível.',
          practice: { intro: 'Crie um resumo de despesas por categoria e mostre apenas os subtotais.', tasks: ['Lista ordenada por categoria', 'Subtotais aplicados', 'Nível de resumo selecionado'] },
          quiz: { question: 'Porque deve ordenar antes de aplicar Subtotal?', options: ['Para juntar linhas da mesma categoria', 'Para mudar a moeda', 'Para proteger a folha'], answer: 0, explain: 'O comando insere um subtotal sempre que o valor da coluna escolhida muda.' }
        },
        {
          id: 'excel-38', title: 'Atingir Objetivo e Gestor de Cenários', level: 'Avançado', duration: '25 min',
          intro: 'Descubra que valor de entrada é necessário para alcançar uma meta e compare hipóteses otimista e prudente.',
          objectives: ['Resolver uma meta com Atingir Objetivo', 'Guardar e comparar cenários'],
          steps: ['Crie uma fórmula de resultado dependente de uma célula de entrada, como preço ou quantidade.', 'Abra <strong>Dados → Análise de Hipóteses → Atingir Objetivo</strong>; indique a célula da fórmula, a meta e a célula a alterar.', 'No Gestor de Cenários, guarde três conjuntos de entradas e gere um resumo.'],
          tip: 'A célula definida deve conter uma fórmula; a célula alterada deve ser uma entrada, não outro resultado.',
          practice: { intro: 'Calcule quantas unidades precisa vender para atingir 5 000 € e compare três preços.', tasks: ['Modelo com entrada e resultado criado', 'Atingir Objetivo executado', 'Três cenários comparados'] },
          quiz: { question: 'Que célula é alterada pelo Atingir Objetivo?', options: ['Uma célula de entrada escolhida pelo utilizador', 'Sempre A1', 'A célula com o título'], answer: 0, explain: 'O Excel varia a entrada indicada até a fórmula atingir o resultado pedido.' }
        },
        {
          id: 'excel-39', title: 'Solver: otimizar uma decisão', level: 'Avançado', duration: '28 min',
          intro: 'Encontre a melhor combinação possível respeitando limites de orçamento, tempo ou capacidade.',
          objectives: ['Definir objetivo, variáveis e restrições', 'Interpretar uma solução do Solver'],
          steps: ['Se necessário, ative <strong>Ficheiro → Opções → Suplementos → Solver</strong>.', 'Crie células para quantidades, uma fórmula de lucro total e fórmulas para recursos usados.', 'Abra <strong>Dados → Solver</strong>, maximize o lucro, escolha as quantidades e adicione restrições de recursos e valores inteiros.'],
          tip: 'Comece com um modelo pequeno e confirme manualmente se a solução respeita todas as restrições.',
          practice: { intro: 'Otimize a produção de dois produtos com horas e material limitados.', tasks: ['Células variáveis e objetivo definidos', 'Restrições adicionadas', 'Solução verificada manualmente'] },
          quiz: { question: 'O que é uma restrição no Solver?', options: ['Um limite que a solução deve respeitar', 'Uma cor da célula', 'Um tipo de gráfico'], answer: 0, explain: 'As restrições representam limites reais, como orçamento máximo ou quantidade mínima.' }
        }
      ]
    },
    {
      number: 'Módulo 14', title: 'Power Query e automatização',
      lessons: [
        {
          id: 'excel-40', title: 'Importar CSV e corrigir tipos', level: 'Avançado', duration: '24 min',
          intro: 'Importe dados externos de forma repetível e garanta que números, datas e texto são reconhecidos corretamente.',
          objectives: ['Importar um ficheiro CSV', 'Corrigir delimitadores e tipos de dados'],
          steps: ['Abra <strong>Dados → Obter Dados → De Texto/CSV</strong> e escolha o ficheiro.', 'Confirme origem, delimitador e pré-visualização; clique em <strong>Transformar Dados</strong>.', 'No Power Query, defina o tipo de cada coluna e escolha <strong>Fechar e Carregar</strong>.'],
          tip: 'Uma coluna de códigos postais ou identificadores deve normalmente ser Texto para conservar zeros iniciais.',
          practice: { intro: 'Importe um CSV de vendas e corrija datas, valores e códigos.', tasks: ['Delimitador correto escolhido', 'Tipos de todas as colunas revistos', 'Consulta carregada numa nova folha'] },
          quiz: { question: 'Porque deve rever os tipos de dados?', options: ['Para permitir cálculos e datas corretos', 'Para esconder a consulta', 'Para mudar o nome do ficheiro'], answer: 0, explain: 'O tipo determina como o Power Query e o Excel interpretam e transformam cada valor.' }
        },
        {
          id: 'excel-41', title: 'Transformar e combinar tabelas no Power Query', level: 'Avançado', duration: '28 min',
          intro: 'Automatize limpezas repetidas e una tabelas mensais sem copiar e colar todas as semanas.',
          objectives: ['Registar passos de transformação', 'Anexar ou intercalar consultas'],
          steps: ['No Editor do Power Query, remova colunas desnecessárias, filtre erros e altere nomes; observe <strong>Passos Aplicados</strong>.', 'Use <strong>Anexar Consultas</strong> para empilhar tabelas com as mesmas colunas, ou <strong>Intercalar</strong> para procurar uma chave noutra tabela.', 'Carregue o resultado e use <strong>Dados → Atualizar Tudo</strong> depois de alterar as origens.'],
          tip: 'Não edite manualmente a tabela carregada; corrija a transformação na consulta para que a atualização continue repetível.',
          practice: { intro: 'Combine dois meses de vendas e acrescente o nome da categoria por código.', tasks: ['Transformações registadas', 'Consultas anexadas ou intercaladas', 'Atualização Tudo testada'] },
          quiz: { question: 'Qual é a diferença principal entre Anexar e Intercalar?', options: ['Anexar empilha linhas; Intercalar junta colunas por uma chave', 'São exatamente iguais', 'Anexar cria gráficos'], answer: 0, explain: 'Anexar reúne tabelas semelhantes verticalmente; Intercalar procura correspondências entre tabelas.' }
        },
        {
          id: 'excel-42', title: 'Gravar a primeira macro com segurança', level: 'Avançado', duration: '26 min',
          intro: 'Automatize uma sequência repetitiva gravando os seus cliques, sem precisar de escrever código.',
          objectives: ['Gravar e executar uma macro simples', 'Guardar num formato compatível com macros'],
          steps: ['Ative o separador <strong>Programador</strong> nas Opções e abra um livro de treino sem dados sensíveis.', 'Clique em <strong>Gravar Macro</strong>, dê um nome sem espaços, execute uma formatação simples e clique em Parar Gravação.', 'Guarde como <strong>Livro com Permissão para Macros (.xlsm)</strong> e execute apenas macros de fontes em que confia.'],
          tip: 'A gravação regista erros e ações desnecessárias; faça primeiro um ensaio manual curto.',
          practice: { intro: 'Grave uma macro que formata um título e ajusta a largura das colunas.', tasks: ['Macro gravada e interrompida', 'Ficheiro guardado em .xlsm', 'Macro executada numa cópia segura'] },
          quiz: { question: 'Porque não deve ativar macros desconhecidas?', options: ['Podem conter ações maliciosas', 'Mudam sempre o idioma', 'Impedem todas as fórmulas'], answer: 0, explain: 'Macros podem executar código; use apenas ficheiros e autores de confiança.' }
        }
      ]
    },
    {
      number: 'Módulo 15', title: 'Projetos por objetivo',
      lessons: [
        {
          id: 'excel-43', title: 'Projeto: criar um orçamento pessoal', level: 'Projeto final', duration: '45 min',
          intro: 'Construa um ficheiro útil para registar rendimentos, controlar despesas e perceber o saldo mensal.',
          objectives: ['Criar um orçamento mensal funcional', 'Visualizar categorias que consomem mais dinheiro'],
          steps: ['Crie folhas <strong>Movimentos</strong> e <strong>Resumo</strong>; transforme os movimentos numa Tabela com Data, Descrição, Categoria, Tipo e Valor.', 'No Resumo, calcule rendimentos, despesas e saldo com SOMASES e adicione validação de dados nas categorias.', 'Crie um gráfico por categoria, teste um mês completo e escreva instruções simples no topo.'],
          tip: 'Comece com poucas categorias claras; detalhe apenas quando a análise realmente precisar.',
          practice: { intro: 'Entregue um orçamento que outra pessoa consiga usar sem ajuda.', tasks: ['Registo com validações criado', 'Resumo e saldo calculados', 'Gráfico e instruções verificados'] },
          quiz: { question: 'Qual é o sinal de que o projeto está bem feito?', options: ['Outra pessoa consegue registar e compreender os dados', 'Tem muitas cores', 'Usa o maior número de folhas'], answer: 0, explain: 'Um bom ficheiro é correto, simples de atualizar e claro para o utilizador.' }
        },
        {
          id: 'excel-44', title: 'Projeto: criar um controlo de stock', level: 'Projeto final', duration: '50 min',
          intro: 'Controle entradas, saídas, quantidade atual e produtos que precisam de reposição.',
          objectives: ['Calcular stock atual por produto', 'Criar alertas de reposição'],
          steps: ['Crie tabelas <strong>Produtos</strong> e <strong>Movimentos</strong> com códigos únicos e listas de validação.', 'Calcule entradas e saídas por código com SOMASES; obtenha Stock atual e Estado com SE.', 'Aplique formatação condicional a valores abaixo do mínimo e crie um resumo filtrável por categoria.'],
          tip: 'O código do produto deve ser único e estável; o nome pode mudar sem quebrar as relações.',
          practice: { intro: 'Monte e teste um controlo com dez produtos e vinte movimentos.', tasks: ['Produtos e movimentos estruturados', 'Stock atual calculado por código', 'Alertas de reposição testados'] },
          quiz: { question: 'Porque usar um código único?', options: ['Para identificar o produto sem ambiguidade', 'Para deixar a folha colorida', 'Para substituir as quantidades'], answer: 0, explain: 'Um identificador único evita confundir produtos com nomes semelhantes ou alterados.' }
        },
        {
          id: 'excel-45', title: 'Projeto: criar um painel de gestão', level: 'Projeto final', duration: '60 min',
          intro: 'Reúna indicadores, gráficos e filtros numa página clara para apoiar uma decisão real.',
          objectives: ['Construir um painel com indicadores relevantes', 'Validar dados, interações e apresentação final'],
          steps: ['Defina a pergunta do painel e prepare uma Tabela limpa com datas, categorias e valores.', 'Crie Tabelas Dinâmicas, três indicadores e gráficos simples; ligue segmentações a todas as análises necessárias.', 'Organize tudo numa folha Painel, teste filtros, atualize dados e acrescente data da última atualização e instruções.'],
          tip: 'Um painel responde a perguntas; retire elementos que não ajudam a decidir.',
          practice: { intro: 'Apresente um painel completo de vendas, despesas ou desempenho.', tasks: ['Indicadores respondem ao objetivo', 'Filtros e atualização testados', 'Painel legível e pronto para apresentar'] },
          quiz: { question: 'Qual deve ser o primeiro passo ao criar um painel?', options: ['Definir a pergunta e o utilizador', 'Escolher muitas cores', 'Criar dez gráficos'], answer: 0, explain: 'O objetivo determina quais dados, indicadores e gráficos realmente fazem sentido.' }
        }
      ]
    },
    {
      number: 'Módulo 16', title: 'Colaboração e trabalho na nuvem',
      lessons: [
        {
          id: 'excel-46', title: 'Partilhar e editar em simultâneo', level: 'Profissional', duration: '24 min',
          intro: 'Guarde o livro no OneDrive ou SharePoint e trabalhe com outras pessoas sem criar várias cópias incompatíveis.',
          objectives: ['Partilhar um livro com permissões adequadas', 'Reconhecer alterações feitas por outros utilizadores'],
          steps: ['Escolha <strong>Ficheiro → Guardar Como → OneDrive</strong> e confirme o nome do livro.', 'Clique em <strong>Partilhar</strong>, escolha quem pode aceder e decida se essas pessoas podem editar ou apenas ver.', 'Abra o livro com outra conta ou peça a um colega para editar uma célula; confirme os indicadores de presença e a gravação automática.'],
          tip: 'Partilhe uma ligação com pessoas específicas quando o livro contém informação interna.',
          practice: { intro: 'Partilhe uma cópia de treino e teste a edição simultânea.', tasks: ['Livro guardado na nuvem', 'Permissão de edição ou leitura definida', 'Alteração simultânea confirmada'] },
          quiz: { question: 'Onde deve estar guardado o livro para coautoria moderna?', options: ['OneDrive ou SharePoint', 'Apenas numa pen USB', 'Na Reciclagem'], answer: 0, explain: 'A coautoria depende de uma localização na nuvem compatível e de permissões corretas.' }
        },
        {
          id: 'excel-47', title: 'Comentários, notas e histórico de versões', level: 'Profissional', duration: '22 min',
          intro: 'Converse sobre valores, preserve explicações e recupere uma versão anterior sem duplicar ficheiros.',
          objectives: ['Distinguir comentários modernos de notas', 'Consultar e restaurar o histórico de versões'],
          steps: ['Selecione uma célula e use <strong>Rever → Novo Comentário</strong>; mencione uma pessoa com @ quando apropriado.', 'Use uma <strong>Nota</strong> apenas para uma anotação simples sem conversa e resolva comentários concluídos.', 'Abra <strong>Ficheiro → Informações → Histórico de Versões</strong>, compare uma versão anterior e restaure apenas numa cópia de treino.'],
          tip: 'Resolver um comentário mantém o histórico da conversa; eliminar remove-o.',
          practice: { intro: 'Simule a revisão de um orçamento por duas pessoas.', tasks: ['Comentário com resposta criado', 'Nota explicativa adicionada', 'Versão anterior aberta e comparada'] },
          quiz: { question: 'Para que serve o histórico de versões?', options: ['Consultar ou recuperar estados anteriores do livro', 'Criar fórmulas', 'Alterar o teclado'], answer: 0, explain: 'O histórico regista versões guardadas na nuvem e ajuda a recuperar alterações.' }
        },
        {
          id: 'excel-48', title: 'Projeto: livro de equipa controlado', level: 'Profissional', duration: '40 min',
          intro: 'Crie um livro partilhado com entradas protegidas, responsabilidades claras e um processo de revisão.',
          objectives: ['Preparar um ficheiro para utilização por várias pessoas', 'Documentar regras de atualização e aprovação'],
          steps: ['Crie folhas <strong>Instruções</strong>, <strong>Entradas</strong> e <strong>Resumo</strong>; use uma Tabela e validações nas entradas.', 'Desbloqueie apenas as células editáveis, proteja fórmulas e partilhe com o grupo correto.', 'Adicione comentários para dúvidas, teste uma alteração simultânea e confirme o histórico antes de publicar o resumo.'],
          tip: 'Um livro colaborativo precisa de regras visíveis: quem introduz, quem valida e quando se atualiza.',
          practice: { intro: 'Entregue um mapa partilhado de tarefas ou despesas.', tasks: ['Áreas de entrada e cálculo separadas', 'Permissões e proteção testadas', 'Instruções e revisão registadas'] },
          quiz: { question: 'O que deve ficar desbloqueado?', options: ['Apenas as células destinadas a entrada', 'Todas as fórmulas', 'Nada, em qualquer situação'], answer: 0, explain: 'Limitar a edição reduz alterações acidentais sem impedir o trabalho necessário.' }
        }
      ]
    },
    {
      number: 'Módulo 17', title: 'Engenharia de fórmulas modernas',
      lessons: [
        {
          id: 'excel-49', title: 'SEERRO, E, OU e lógica combinada', level: 'Profissional', duration: '26 min',
          intro: 'Construa decisões robustas com vários critérios e apresente mensagens claras quando uma fórmula não pode calcular.',
          objectives: ['Combinar condições lógicas', 'Tratar erros sem esconder problemas de dados'],
          steps: ['Crie uma decisão com <code>=SE(E(A2&gt;=Meta;B2="Pago");"Aprovado";"Rever")</code>.', 'Teste alternativas com <strong>OU</strong> e verifique casos nos limites da regra.', 'Envolva apenas a parte arriscada em <strong>SEERRO</strong> e use uma mensagem que indique a correção necessária.'],
          tip: 'Não substitua todos os erros por vazio; uma mensagem útil ajuda a descobrir dados em falta.',
          practice: { intro: 'Classifique dez pedidos por valor, estado e prazo.', tasks: ['Regra com E criada', 'Alternativa com OU testada', 'Erro tratado com mensagem útil'] },
          quiz: { question: 'Quando E devolve VERDADEIRO?', options: ['Quando todas as condições são verdadeiras', 'Quando qualquer condição é verdadeira', 'Quando existe um erro'], answer: 0, explain: 'E exige que todas as condições fornecidas sejam verdadeiras.' }
        },
        {
          id: 'excel-50', title: 'PROCX, ÍNDICE e CORRESP', level: 'Profissional', duration: '28 min',
          intro: 'Escolha uma procura moderna ou uma combinação compatível para localizar dados com segurança.',
          objectives: ['Usar PROCX com resultado quando não encontrado', 'Construir uma procura com ÍNDICE e CORRESP'],
          steps: ['Procure um preço por código com <code>=PROCX(A2;Produtos[Código];Produtos[Preço];"Não encontrado")</code>.', 'Reordene as colunas e confirme que PROCX continua a devolver a coluna indicada.', 'Recrie a procura com <strong>ÍNDICE</strong> e <strong>CORRESP</strong> e teste códigos existentes, vazios e desconhecidos.'],
          tip: 'Use correspondência exata para códigos e mantenha identificadores únicos.',
          practice: { intro: 'Ligue uma tabela de movimentos a um catálogo de produtos.', tasks: ['PROCX com mensagem criada', 'ÍNDICE e CORRESP testados', 'Casos desconhecidos verificados'] },
          quiz: { question: 'Qual vantagem tem PROCX sobre PROCV?', options: ['Pode procurar em qualquer direção', 'Cria gráficos automaticamente', 'Dispensa uma chave de procura'], answer: 0, explain: 'PROCX permite escolher separadamente o intervalo procurado e o intervalo devolvido.' }
        },
        {
          id: 'excel-51', title: 'LET, LAMBDA e matrizes dinâmicas', level: 'Profissional', duration: '32 min',
          intro: 'Torne fórmulas complexas mais legíveis e crie cálculos reutilizáveis sem escrever VBA.',
          objectives: ['Nomear partes de uma fórmula com LET', 'Criar e testar uma função LAMBDA'],
          steps: ['Teste uma fórmula longa e use <strong>LET</strong> para dar nomes aos valores intermédios.', 'Crie e teste <code>=LAMBDA(valor;valor*1,23)(A2)</code> numa célula antes de a guardar.', 'Abra <strong>Fórmulas → Gestor de Nomes</strong>, guarde a LAMBDA com um nome claro e combine-a com uma matriz dinâmica numa área vazia.'],
          tip: 'LET e LAMBDA dependem da versão do Excel; mantenha uma alternativa documentada quando o ficheiro será aberto em versões antigas.',
          practice: { intro: 'Crie uma função reutilizável para calcular preço com imposto.', tasks: ['Fórmula simplificada com LET', 'LAMBDA testada na célula', 'Função nomeada aplicada a vários valores'] },
          quiz: { question: 'Porque testar a LAMBDA antes de lhe dar um nome?', options: ['Para confirmar o cálculo e os parâmetros', 'Para alterar a cor', 'Para criar uma impressão'], answer: 0, explain: 'O teste direto separa erros de lógica de erros de configuração do nome.' }
        }
      ]
    },
    {
      number: 'Módulo 18', title: 'Modelo de Dados e Power Pivot',
      lessons: [
        {
          id: 'excel-52', title: 'Relacionar tabelas no Modelo de Dados', level: 'Profissional', duration: '28 min',
          intro: 'Analise vendas, produtos e clientes sem repetir todas as informações numa única tabela gigante.',
          objectives: ['Identificar chaves únicas e chaves de ligação', 'Criar uma relação entre tabelas'],
          steps: ['Prepare tabelas separadas para Vendas, Produtos e Clientes; confirme que cada catálogo tem uma chave única.', 'Adicione as tabelas ao <strong>Modelo de Dados</strong> e abra <strong>Dados → Relações</strong>.', 'Relacione as chaves correspondentes e crie uma Tabela Dinâmica que combine campos de duas tabelas.'],
          tip: 'O lado de catálogo da relação deve ter uma chave sem duplicados nem células vazias.',
          practice: { intro: 'Relacione vendas a produtos e categorias.', tasks: ['Três tabelas limpas criadas', 'Relações válidas definidas', 'Tabela Dinâmica cruzada criada'] },
          quiz: { question: 'O que identifica unicamente um produto?', options: ['Uma chave sem duplicados', 'A cor da linha', 'A posição da folha'], answer: 0, explain: 'Uma chave estável permite relacionar cada movimento com o registo correto.' }
        },
        {
          id: 'excel-53', title: 'Medidas DAX e contexto de filtro', level: 'Profissional', duration: '32 min',
          intro: 'Crie indicadores reutilizáveis que respondem automaticamente aos filtros do relatório.',
          objectives: ['Distinguir coluna calculada de medida', 'Criar medidas simples no Power Pivot'],
          steps: ['Abra <strong>Power Pivot → Gerir</strong> e confirme as relações do modelo.', 'Crie uma medida como <code>Total Vendas := SUM(Vendas[Total])</code> e formate-a como moeda.', 'Adicione Região e Categoria à Tabela Dinâmica, aplique segmentações e observe como o contexto altera a medida.'],
          tip: 'Use medidas para agregações de relatório e colunas calculadas para valores avaliados linha a linha.',
          practice: { intro: 'Crie medidas de total, quantidade e preço médio.', tasks: ['Medidas criadas e formatadas', 'Filtros e segmentações aplicados', 'Resultados conferidos com um cálculo simples'] },
          quiz: { question: 'O que acontece a uma medida quando aplica um filtro?', options: ['É recalculada no contexto filtrado', 'É convertida em texto', 'Deixa de existir'], answer: 0, explain: 'As medidas DAX respondem ao contexto criado por linhas, colunas, filtros e segmentações.' }
        },
        {
          id: 'excel-54', title: 'Projeto: modelo analítico de vendas', level: 'Profissional', duration: '50 min',
          intro: 'Integre importação, relações, medidas e uma análise dinâmica num único modelo controlado.',
          objectives: ['Construir um pequeno modelo dimensional', 'Documentar atualização e verificações'],
          steps: ['Importe Vendas, Produtos, Clientes e Calendário com Power Query e carregue-os no Modelo de Dados.', 'Crie relações, medidas de total, margem e quantidade, e valide os totais antes de desenhar o relatório.', 'Monte uma página com Tabela Dinâmica, gráfico e segmentações; documente a origem e o procedimento Atualizar Tudo.'],
          tip: 'Valide cada tabela e relação antes de culpar uma medida por um total inesperado.',
          practice: { intro: 'Entregue um modelo com quatro tabelas e três medidas.', tasks: ['Consultas e relações documentadas', 'Medidas validadas', 'Relatório filtrável e atualização testada'] },
          quiz: { question: 'Qual é a ordem mais segura?', options: ['Limpar, relacionar, validar e apresentar', 'Criar gráficos antes dos dados', 'Formatar antes de importar'], answer: 0, explain: 'Uma base validada evita que erros estruturais cheguem ao painel.' }
        }
      ]
    },
    {
      number: 'Módulo 19', title: 'Análise visual avançada',
      lessons: [
        {
          id: 'excel-55', title: 'Gráficos combinados e eixo secundário', level: 'Profissional', duration: '26 min',
          intro: 'Compare grandezas com escalas diferentes sem tornar o gráfico enganador.',
          objectives: ['Criar um gráfico combinado', 'Usar e explicar um eixo secundário'],
          steps: ['Selecione uma tabela com Vendas e Margem percentual e escolha <strong>Inserir → Gráfico Combinado</strong>.', 'Mostre Vendas em colunas e Margem em linha; ative o eixo secundário apenas para a percentagem.', 'Dê títulos completos aos dois eixos, reduza elementos decorativos e confirme se a comparação continua honesta.'],
          tip: 'Um eixo secundário exige rótulos muito claros, porque duas escalas podem sugerir relações falsas.',
          practice: { intro: 'Compare vendas mensais e margem num gráfico.', tasks: ['Tipos de série escolhidos', 'Eixos e unidades identificados', 'Mensagem principal escrita numa frase'] },
          quiz: { question: 'Quando faz sentido um eixo secundário?', options: ['Quando as séries usam unidades ou escalas muito diferentes', 'Em todos os gráficos', 'Apenas para mudar cores'], answer: 0, explain: 'O eixo secundário permite ler uma segunda escala, mas precisa de identificação explícita.' }
        },
        {
          id: 'excel-56', title: 'Previsão, tipos de dados e Analisar Dados', level: 'Profissional', duration: '28 min',
          intro: 'Explore tendências e funcionalidades assistidas, sabendo distinguir sugestão de resultado confirmado.',
          objectives: ['Criar uma folha de previsão a partir de uma série temporal', 'Avaliar sugestões automáticas com espírito crítico'],
          steps: ['Organize uma série com datas regulares e valores, depois escolha <strong>Dados → Folha de Previsão</strong>.', 'Quando disponível, experimente tipos de dados como Geografia ou Ações numa cópia sem informação sensível.', 'Use <strong>Analisar Dados</strong> para obter sugestões e confirme cada resultado comparando-o com os dados e o objetivo.'],
          tip: 'Algumas funcionalidades exigem Microsoft 365, Internet ou regiões específicas; o curso deve continuar utilizável sem elas.',
          practice: { intro: 'Crie uma previsão de seis períodos e avalie uma sugestão automática.', tasks: ['Frequência temporal verificada', 'Previsão e intervalo observados', 'Sugestão confirmada ou rejeitada com justificação'] },
          quiz: { question: 'Uma sugestão automática deve ser aceite sem verificar?', options: ['Não, deve ser comparada com os dados e o contexto', 'Sim, sempre', 'Apenas se tiver muitas cores'], answer: 0, explain: 'A ferramenta ajuda a explorar, mas a interpretação e validação continuam a ser responsabilidade do utilizador.' }
        },
        {
          id: 'excel-57', title: 'Projeto: painel executivo responsivo', level: 'Profissional', duration: '55 min',
          intro: 'Transforme perguntas de gestão em indicadores e visuais que funcionam no ecrã, em PDF e numa apresentação.',
          objectives: ['Desenhar uma hierarquia de informação', 'Testar filtros, atualização e leitura em diferentes tamanhos'],
          steps: ['Defina três perguntas executivas e limite o painel a indicadores e gráficos que respondem diretamente a essas perguntas.', 'Construa uma grelha, adicione filtros, títulos dinâmicos e data de atualização; use cores com significado consistente.', 'Teste a atualização, filtros extremos, zoom pequeno, modo escuro do sistema e exportação para PDF.'],
          tip: 'Um painel completo não é um painel cheio; cada elemento deve ajudar a compreender ou decidir.',
          practice: { intro: 'Entregue uma página executiva com três indicadores e até três gráficos.', tasks: ['Perguntas e público definidos', 'Filtros e atualização validados', 'Leitura em ecrã e PDF verificada'] },
          quiz: { question: 'O que deve determinar o conteúdo do painel?', options: ['As perguntas do utilizador', 'O número máximo de gráficos', 'As cores disponíveis'], answer: 0, explain: 'As perguntas orientam os dados, indicadores, comparações e filtros necessários.' }
        }
      ]
    },
    {
      number: 'Módulo 20', title: 'Auditoria, governação e projeto final',
      lessons: [
        {
          id: 'excel-58', title: 'Auditar fórmulas e melhorar o desempenho', level: 'Profissional', duration: '30 min',
          intro: 'Localize a origem de um resultado, encontre dependências e reduza cálculos desnecessários.',
          objectives: ['Usar ferramentas de auditoria de fórmulas', 'Reconhecer causas comuns de lentidão'],
          steps: ['Selecione um resultado e use <strong>Fórmulas → Rastrear Precedentes</strong> e <strong>Rastrear Dependentes</strong>.', 'Abra <strong>Avaliar Fórmula</strong> para acompanhar o cálculo por etapas e procure referências circulares.', 'Substitua referências a colunas inteiras quando desnecessárias, evite funções voláteis em excesso e compare o tempo de recálculo.'],
          tip: 'Otimize apenas depois de medir e preservar uma cópia funcional do modelo.',
          practice: { intro: 'Audite um livro com três erros preparados e uma fórmula lenta.', tasks: ['Precedentes e dependentes rastreados', 'Erros explicados', 'Melhoria de desempenho comparada'] },
          quiz: { question: 'Para que serve Avaliar Fórmula?', options: ['Ver o cálculo passo a passo', 'Criar uma tabela', 'Partilhar o ficheiro'], answer: 0, explain: 'A avaliação mostra resultados intermédios e ajuda a localizar a parte incorreta.' }
        },
        {
          id: 'excel-59', title: 'Acessibilidade, privacidade e ligações externas', level: 'Profissional', duration: '28 min',
          intro: 'Entregue um livro compreensível e sem dados, metadados ou ligações que não deveriam sair da organização.',
          objectives: ['Executar verificações de acessibilidade e privacidade', 'Identificar ligações e conteúdos externos'],
          steps: ['Use <strong>Rever → Verificar Acessibilidade</strong>; corrija nomes de folhas, texto alternativo, contraste e ordem lógica.', 'Abra <strong>Ficheiro → Informações → Verificar Existência de Problemas → Inspecionar Documento</strong> numa cópia.', 'Consulte ligações e consultas externas, remova dados ocultos desnecessários e teste a cópia final sem acesso às origens privadas.'],
          tip: 'Não quebre ligações antes de guardar uma cópia: a ação pode substituir fórmulas por valores de forma difícil de reverter.',
          practice: { intro: 'Prepare uma versão externa segura de um relatório.', tasks: ['Problemas de acessibilidade corrigidos', 'Metadados e conteúdo oculto revistos', 'Ligações externas documentadas ou removidas'] },
          quiz: { question: 'Porque deve inspecionar uma cópia?', options: ['Algumas remoções não são fáceis de desfazer', 'Para criar mais fórmulas', 'Para mudar o idioma'], answer: 0, explain: 'A inspeção pode remover metadados e conteúdo oculto; uma cópia preserva o original.' }
        },
        {
          id: 'excel-60', title: 'Projeto final: sistema completo de gestão', level: 'Projeto final', duration: '90 min',
          intro: 'Integre entrada controlada, transformação, modelo, cálculos, colaboração e apresentação num projeto utilizável por outra pessoa.',
          objectives: ['Construir uma solução Excel do início ao fim', 'Demonstrar qualidade técnica, clareza e segurança'],
          steps: ['Escolha um objetivo real, defina utilizadores e requisitos, e prepare dados de teste sem informação pessoal.', 'Construa entradas validadas, consultas repetíveis, cálculos ou medidas auditáveis e um painel que responda às perguntas definidas.', 'Peça a outra pessoa para testar, corrija problemas, execute acessibilidade e inspeção, documente a atualização e entregue versões XLSX/PDF adequadas.'],
          tip: 'A conclusão exige prova: totais reconciliados, testes registados e instruções que permitam atualizar o sistema sem o autor.',
          practice: { intro: 'Entregue o projeto, um guia de utilização e uma lista de testes.', tasks: ['Dados, cálculos e visualização integrados', 'Testes e acessibilidade concluídos', 'Partilha, segurança e atualização documentadas'] },
          quiz: { question: 'Quando o projeto pode ser considerado concluído?', options: ['Quando outra pessoa o consegue usar e atualizar com resultados validados', 'Quando tem muitas folhas', 'Quando foi guardado uma vez'], answer: 0, explain: 'Um sistema profissional precisa de funcionar, ser compreendido, ser testado e poder ser mantido.' }
        }
      ]
    }
  ]
};
