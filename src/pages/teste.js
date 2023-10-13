//pega as Observações

this.artigos.map((obsart) => {
  const observacoesDesteArtigo = this.observacoes.filter(
    (observacao) =>
      obsart.id === observacao.id_artigo &&
      observacao.id_paragrafo === null &&
      observacao.id_inciso === null &&
      observacao.id_alinea === null
  );
  obsart.observacoesConteudos = null;
  if (
    !Array.isArray(observacoesDesteArtigo) ||
    !observacoesDesteArtigo.length
  ) {
    return obsart;
  }
  obsart.showDialog = false;
  obsart.observacoesConteudos =
    observacoesDesteArtigo.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return obsart;
});

this.paragrafos.map((obspar) => {
  const observacoesDesteParagrafo = this.observacoes.filter(
    (observacao) =>
      obspar.id === observacao.id_paragrafo &&
      observacao.id_inciso === null &&
      observacao.id_alinea === null &&
      observacao.id_tipo === 8
  );
  obspar.observacoesConteudos = null;
  if (
    !Array.isArray(observacoesDesteParagrafo) ||
    !observacoesDesteParagrafo.length
  ) {
    return obspar;
  }
  obspar.showDialog = false;
  obspar.observacoesConteudos =
    observacoesDesteParagrafo.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return obspar;
});

this.incisos.map((obsinc) => {
  const observacoesDesteInciso = this.observacoes.filter(
    (observacao) =>
      obsinc.id === observacao.id_inciso &&
      observacao.id_paragrafo === null &&
      observacao.id_alinea === null &&
      observacao.id_tipo === 8
  );
  obsinc.observacoesConteudos = null;
  if (
    !Array.isArray(observacoesDesteInciso) ||
    !observacoesDesteInciso.length
  ) {
    return obsinc;
  }
  obsinc.showDialog = false;
  obsinc.observacoesConteudos =
    observacoesDesteInciso.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return obsinc;
});

this.incisos.map((obsincp) => {
  const observacoesDesteIncisocp = this.observacoes.filter(
    (observacao) =>
      obsincp.id === observacao.id_inciso &&
      observacao.id_paragrafo != null &&
      observacao.id_alinea != null
  );
  obsincp.observacoesConteudosp = null;
  if (
    !Array.isArray(observacoesDesteIncisocp) ||
    !observacoesDesteIncisocp.length
  ) {
    return obsincp;
  }
  obsincp.showDialog = false;
  obsincp.observacoesConteudosp =
    observacoesDesteIncisocp.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return obsincp;
});

this.alineas.map((obsali) => {
  const observacoesDestaAlinea = this.observacoes.filter(
    (observacao) => obsali.id === observacao.id_alinea
  );
  obsali.observacoesConteudos = null;
  if (
    !Array.isArray(observacoesDestaAlinea) ||
    !observacoesDestaAlinea.length
  ) {
    return obsali;
  }
  obsali.showDialog = false;
  obsali.observacoesConteudos =
    observacoesDestaAlinea.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return obsali;
});
