import PropTypes from "prop-types";

import { useState } from "react";
import { GrupoInput } from "./GrupoInput";

export const Formulario = (props) => {
  
  const [data, setData] = useState("");
  const [valor, setValor] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  var brDate = data.split('-').reverse().join('/');
  console.log(brDate);
  
  function zeraCampos() {
    setData("");
    setQuantidade(0);
    setValor(0);
  }
  
  function salvarNegociacao() {
    const negociacao = {
      data: brDate,
      quantidade: quantidade,
      valor: valor,
    };
    props.quandoAdicionar(negociacao);

    // Bônus: resetar os campos após a inserção
    zeraCampos();
  }

  return ( 
    <form className="form container">
      <div className="row">
        <GrupoInput id="data" etiqueta="Data" tipo="date" aoDigitar={(e) => setData(e.target.value)} valor={data}/>
        <GrupoInput id="quantidade" etiqueta="Quantidade" tipo="number" aoDigitar={(e) => setQuantidade(e.target.value)} valor={quantidade} min="1" step="1"/>
        <GrupoInput id="valor" etiqueta="Valor" tipo="number" aoDigitar={(e) => setValor(e.target.value)} valor={valor} min="0.01" step="0.01"/>
        <div className="col-1 d-flex align-items-end justify-content-end">
          <button className="btn btn-primary" type="button" onClick={salvarNegociacao}>Incluir</button>
        </div>
      </div>
    </form>
  );
};

Formulario.propTypes = {
  quandoAdicionar: PropTypes.func.isRequired,
};
