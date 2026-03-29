export default function MessageCard({recebendo = true, texto, data, usuario, foto}) {  
  var classEspaco = recebendo ? ("d-flex mb-2 w-100 flex-row-reverse"): 
                                ("d-flex mb-2 w-100")
  var classMensagem = recebendo ? ("d-flex flex-row-reverse"):
                                ("d-flex");
  
  return (
    <div className={classEspaco}>
        <div className="flex-grow-1"></div>

        <div className={classMensagem}>
            <div class="card">
              <div class="card-header d-flex justify-content-between p-1">
                  <p class="fw-bold mb-0">
                    {usuario}
                    </p>
                  <p class="text-muted small mb-0">
                    <i class="far fa-clock"></i> {data}
                  </p>
              </div>
              <div class="card-body">
                  <p class="mb-0">
                    {texto}
                  </p>
              </div>
            </div>

            <img src={foto}
                alt="avatar"
                class="rounded-circle d-flex m-3 shadow-1-strong" 
                width="60"
                />
          </div>
    </div>
  )
}
