# starfighters
Constrói uma API que compara a quantidade de estrelas que um usuário no GitHub tem com outro.

Quando encontramos um repositório que gostamos no GitHub, podemos dar uma estrela para mostrar apreciação ou salvar para ver melhor depois. O GitHub disponibiliza uma [API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api) pública na qual podemos buscar todos os repositórios de um usuário. No meio das várias informações, podemos encontrar a propriedade `stargazers_count`.

O objetivo é construir uma API que compare a quantidade de estrelas que um usuário no GitHub tem com outro e persistir a informação de ganhos, perdas e empates para gerar um ranking.
