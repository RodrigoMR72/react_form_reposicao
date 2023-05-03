import React from 'react'

export const UsuarioForm = () => {
    return (
        <div className='container'>
            <form className='conl'>
                <h2>Cadastro de Usuário</h2>
                <hr />

                <div class="col-md-4 mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="email" required />
                        <div class="valid-feedback">
                            Looks good!git 
                        </div>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="senha" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="senha" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                </div>

                <button type="button" class="btn btn-success">Enviar</button>

            </form>
        </div>
    )
}
