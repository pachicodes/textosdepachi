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
  
  // Filtro para formatar datas em português
  eleventyConfig.addFilter("dataPT", function(date) {
    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const d = new Date(date);
    return `${d.getDate()} de ${meses[d.getMonth()]}, ${d.getFullYear()}`;
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
