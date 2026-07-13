import React from 'react'
import tipoInput from '/src/enum/tipoInput';
import Modal from './modal.jsx';

export default function InputVariavel({chave, label, handleChange, valor, tipo, onClick}) {

    switch (tipo) {
        case tipoInput.SELECAO:
            return (
                <div className="m-2">
                    <label className="form-label">{label}</label>

                    <div className="input-group">
                        <input
                            className="form-control"
                            type="text"
                            value={valor ?? ""}
                            readOnly
                        />

                        <button
                            className="btn btn-primary"
                            onClick={onClick}
                        >
                            Pesquisar
                        </button>
                    </div>
                </div>
            );
        case tipoInput.BOOLEANO:
            return (
                <div>
                    <div className="form-check m-2">
                        <input className="form-check-input" 
                            type="checkbox"
                            id={chave} 
                            for={chave}
                            checked={valor}
                            onChange={e => 
                                handleChange(chave, e.target.checked)}
                            />

                        <label class="form-check-label" 
                                for={chave}>
                            {label}
                        </label>
                    </div>
                </div>
            );
        case tipoInput.SENHA:
            //TODO: adicionar tipo senha, que adiciona duas div de confirmação + validação de conformidade
        case tipoInput.TEXTO:
        default:
            return (
                <div className="m-2">
                    <label className="form-label">{label}</label>

                    <input
                    className="form-control"
                    type="text"
                    value={valor}
                    onChange={e => handleChange(chave, e.target.value)}
                    />
                </div>
            );
    }
}
