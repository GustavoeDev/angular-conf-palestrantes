# Angular Conf Palestrantes

Aplicação Angular para apoiar a Angular Conf 2026 com listagem de palestrantes e gerenciamento de tarefas do evento. O projeto demonstra integração com `HttpClient`, tratamento de erros com RxJS, busca reativa com Signals, formulários reativos e proteção de rotas com autenticação JWT.

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
- Autenticação com `AuthService`, token persistido em `localStorage` e estado global via Signals.
- Guard funcional `authGuard` com redirecionamento para `/login` quando o usuário não está autenticado.
- Tela de login com formulário reativo integrada à API `POST /api/auth/login`.

## Rotas

- `/` lista os palestrantes usando a API real.
- `/palestrantes-falha` usa uma URL inexistente para demonstrar o tratamento de erro com `catchError`.
- `/login` exibe a tela de autenticação da equipe interna.
- `/tarefas` exibe o painel de gerenciamento de tarefas do evento (rota protegida).

## Credenciais de teste

- E-mail: `aluno@teste.com`
- Senha: `Teste123`

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
