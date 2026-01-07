module.exports = function(eleventyConfig) {
  // Copiar arquivos estáticos
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Coleções por categoria
  eleventyConfig.addCollection("contos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/contos/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  eleventyConfig.addCollection("cronicas", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/cronicas/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  eleventyConfig.addCollection("poemas", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/poemas/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  eleventyConfig.addCollection("escrita", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/escrita/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  // Coleção com todos os textos combinados
  eleventyConfig.addCollection("todosTextos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/{contos,cronicas,poemas,escrita}/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  // Filtro para formatar datas em português
  eleventyConfig.addFilter("dataPT", function(date) {
    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const d = new Date(date);
    return `${d.getDate()} de ${meses[d.getMonth()]}, ${d.getFullYear()}`;
  });

  // Filtro para calcular tempo de leitura
  eleventyConfig.addFilter("tempoLeitura", function(content) {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime === 1 ? "1 min de leitura" : `${readingTime} min de leitura`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
