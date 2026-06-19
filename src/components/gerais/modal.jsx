import React from 'react'

export default function Modal({titulo, onClose, children}) {
  return (
    <div className="modal-backdrop-custom">
        <div className="modal show d-block" >
          <div className="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered" role="document">
            <div className="modal-content shadow-lg" onClick={(e) => e.stopPropagation()}>

              <div className="modal-header">
                <h5 className="modal-title">{titulo}</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>

              {children}

            </div>
          </div>
        </div>
      </div>
)
}
