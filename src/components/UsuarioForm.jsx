import React, { useState } from 'react'

export const UsuarioForm = () => {

    //const [nome, setNome] = useState('Rodrigo')
   // const [email, setEmail] = useState('rmr@rmr')
   // const [senha, setSenha] = useState('')

   const [usuario, setUsuario] = useState({

    nome: '',
    email: '',
    senha:''


   })

    const submeterForm = (event) => {
        event.preventDefault()

        console.log(usuario)
    }

    // const atualizarValorNome = (event) => {

    //    let valor = event.target.value
    //    setNome(valor)


    // }

    // const atualizarValorEmail = (event) => {

    //     let valor = event.target.value
    //     setEmail(valor)
 
 
    //  }

    //  const atualizarValorSenha = (event) => {

    //     let valor = event.target.value
    //     setSenha(valor)
 
 
    //  }

        const atualizarValor = (event) => {

        const id = event.target.id
        const valor = event.target.value
        

        setUsuario({ ...usuario, [id]: valor})


     }

    

    return (
        <div className='container'>
            <form className='col' onSubmit={submeterForm}>
                <h2>Cadastro de Usuário</h2>
                <hr />

                <div className="col-md-4 mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={usuario.nome}
                        onChange={atualizarValor}
                        required
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={usuario.email}
                        onChange={atualizarValor}
                        required
                    />
                    <div className="valid-feedback">
                        Looks good!git
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="senha"
                        value={usuario.senha}
                        onChange={atualizarValor}
                        required
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <button type="submit" className="btn btn-success">Enviar</button>

            </form>
        </div>
    )
}