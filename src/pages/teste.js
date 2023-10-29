//pega as Jurisprudências

this.artigos.map((remiart) => {
  const remissoesDesteArtigo = this.remissoes.filter(
    (remissao) =>
      remiart.id === remissao.id_artigo &&
      remissao.id_paragrafo === null &&
      remissao.id_inciso === null &&
      remissao.id_alinea === null
  );
  remiart.remissoesConteudos = null;
  if (!Array.isArray(remissoesDesteArtigo) || !remissoesDesteArtigo.length) {
    return remiart;
  }
  remiart.showDialog = false;
  remiart.remissoesConteudos =
    remissoesDesteArtigo.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return remiart;
});

this.paragrafos.map((remipar) => {
  const remissoesDesteParagrafo = this.remissoes.filter(
    (remissao) =>
      remipar.id === remissao.id_paragrafo &&
      remissao.id_inciso === null &&
      remissao.id_alinea === null
  );
  remipar.remissoesConteudos = null;
  if (
    !Array.isArray(remissoesDesteParagrafo) ||
    !remissoesDesteParagrafo.length
  ) {
    return remipar;
  }
  remipar.showDialog = false;
  remipar.remissoesConteudos =
    remissoesDesteParagrafo.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return remipar;
});

this.incisos.map((remiinc) => {
  const remissoesDesteInciso = this.remissoes.filter(
    (remissao) =>
      remiinc.id === remissao.id_inciso &&
      remissao.id_paragrafo === null &&
      remissao.id_alinea === null
  );
  remiinc.remissoesConteudos = null;
  if (!Array.isArray(remissoesDesteInciso) || !remissoesDesteInciso.length) {
    return remiinc;
  }
  remiinc.showDialog = false;
  remiinc.remissoesConteudos =
    remissoesDesteInciso.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return remiinc;
});

this.incisos.map((remiincp) => {
  const jurisDesteIncisocp = this.remissoes.filter(
    (remissao) =>
      remiincp.id === remissao.id_inciso && remissao.id_paragrafo != null
  );
  remiincp.remissoesConteudosp = null;
  if (!Array.isArray(jurisDesteIncisocp) || !jurisDesteIncisocp.length) {
    return remiincp;
  }
  remiincp.showDialog = false;
  remiincp.remissoesConteudosp =
    jurisDesteIncisocp.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return remiincp;
});

this.alineas.map((remiali) => {
  const remissoesDestaAlinea = this.remissoes.filter(
    (remissao) => remiali.id === remissao.id_alinea
  );
  remiali.remissoesConteudos = null;
  if (!Array.isArray(remissoesDestaAlinea) || !remissoesDestaAlinea.length) {
    return remiali;
  }
  remiali.showDialog = false;
  remiali.remissoesConteudos =
    remissoesDestaAlinea.reduce((conteudo, currentValue) => {
      return conteudo + `<li>${currentValue.conteudo}</li>`;
    }, "<ul>") + "</ul>";

  return remiali;
});
