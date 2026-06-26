# Angular Conf Palestrantes

Aplicação Angular para apoiar a Angular Conf 2026 com listagem de palestrantes e gerenciamento de tarefas do evento. O projeto demonstra integração com `HttpClient`, tratamento de erros com RxJS, busca reativa com Signals e formulários reativos.

## Funcionalidades

- Consumo da API em: `http://localhost:3001/api/palestrantes` com `HttpClient` configurado globalmente via `provideHttpClient()`.
- Serviço `PalestranteService` tipado com a interface `Palestrante`.
- Pipeline RxJS com `tap`, `map` e `catchError`:
  - `tap` registra a quantidade de palestrantes recebidos.
  - `map` filtra a lista para exibir apenas palestrantes da empresa `Globo`.
  - `catchError` retorna `of([])` em caso de falha, evitando quebra da aplicação.
- Busca por nome com `signal`, `toObservable`, `debounceTime(500)`, `distinctUntilChanged`, `switchMap` e `toSignal`.
- Rota de simulação de falha para validar o fallback de erro.
- Painel de tarefas com `TarefaService`, armazenamento em memória e formulário reativo.
- Validação de tarefas com `Validators.required`, bloqueio do botão de salvar quando o formulário está inválido e limpeza do formulário após cadastro.
- Uso de ciclo de vida com `ngOnInit` para carregar tarefas e `DestroyRef` para registrar a destruição do componente.

## Rotas

- `/` lista os palestrantes usando a API real.
- `/palestrantes-falha` usa uma URL inexistente para demonstrar o tratamento de erro com `catchError`.
- `/tarefas` exibe o painel de gerenciamento de tarefas do evento.

## Pré-requisitos

- Node.js e npm instalados.
- Clonar projeto backend: `https://github.com/ifrn-pau-dos-ferros/atividade-IR-httpclient`
- Rodar backend

## Como Rodar

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm start
```

Acesse:

```text
http://localhost:4200/
```
