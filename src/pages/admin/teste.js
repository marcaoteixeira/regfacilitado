this.artigos.map((preart) => {
  const preDesteArtigo = this.precedentes.filter(
    (precedente) =>
      preart.id === precedente.id_artigo &&
      precedente.id_paragrafo === null &&
      precedente.id_inciso === null &&
      precedente.id_alinea === null &&
      precedente.id_tipo === 14
  );
  preart.precedentesConteudos = null;
  if (!Array.isArray(preDesteArtigo) || !preDesteArtigo.length) {
    return preart;
  }
  preart.showDialog = false;
  preart.precedentesConteudos =
    preDesteArtigo.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return preart;
});

this.paragrafos.map((prepar) => {
  const preDesteParagrafo = this.precedentes.filter(
    (precedente) =>
      prepar.id === precedente.id_paragrafo &&
      precedente.id_inciso === null &&
      precedente.id_alinea === null &&
      precedente.id_tipo === 14
  );
  prepar.precedentesConteudos = null;
  if (!Array.isArray(preDesteParagrafo) || !preDesteParagrafo.length) {
    return prepar;
  }
  prepar.showDialog = false;
  prepar.precedentesConteudos =
    preDesteParagrafo.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return prepar;
});

this.incisos.map((preinc) => {
  const preDesteInciso = this.precedentes.filter(
    (precedente) =>
      preinc.id === precedente.id_inciso &&
      precedente.id_paragrafo === null &&
      precedente.id_alinea === null &&
      precedente.id_tipo === 14
  );
  preinc.precedentesConteudos = null;
  if (!Array.isArray(preDesteInciso) || !preDesteInciso.length) {
    return preinc;
  }
  preinc.showDialog = false;
  preinc.precedentesConteudos =
    preDesteInciso.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return preinc;
});
this.incisos.map((preincp) => {
  const preDesteIncisop = this.precedentes.filter(
    (precedente) =>
      preincp.id === precedente.id_inciso &&
      precedente.id_paragrafo != null &&
      precedente.id_alinea != null &&
      precedente.id_tipo === 14
  );
  preincp.precedentesConteudosp = null;
  if (!Array.isArray(preDesteIncisop) || !preDesteIncisop.length) {
    return preincp;
  }
  preincp.showDialog = false;
  preincp.precedentesConteudosp =
    preDesteIncisop.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return preincp;
});

this.alineas.map((preali) => {
  const preDestaAlinea = this.precedentes.filter(
    (precedente) =>
      preali.id === precedente.id_alinea && precedente.id_tipo === 14
  );
  preali.precedentesConteudos = null;
  if (!Array.isArray(preDestaAlinea) || !preDestaAlinea.length) {
    return preali;
  }
  preali.showDialog = false;
  preali.precedentesConteudos =
    preDestaAlinea.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return preali;
});
