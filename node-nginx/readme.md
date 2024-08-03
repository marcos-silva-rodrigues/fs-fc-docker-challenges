# Desafio Node/Nginx

**Objetivo:** Roda uma api node que roda atrás de um proxy reverso utilizando nginx, a api salva o nome "Wesley Willians" toda vez que acessa a rota "/", mas é possivel sobrescrever esse comportamento passando o nome na query "?name=Marcos", a lista de todos os nomes cadastrados são mostrados na página.

## Como rodar

```bash
docker compose up -d
```