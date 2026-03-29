import React from 'react'

export default function InputVariavel({chave,label, valor, handleChange}) {
  return (
    <div className="m-2">
        {
            typeof valor === "boolean" ? (
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
            ) : (
                <div>
                    <label className="form-label">{label}</label>

                    <input
                    className="form-control"
                    type="text"
                    value={valor}
                    onChange={e => handleChange(chave, e.target.value)}
                    />
                </div>
            )
        }
    </div>
  )
}
