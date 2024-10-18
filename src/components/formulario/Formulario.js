import './Formulario.css';

function Formulario() {
    return (
    
        <section>
            <form>
                <div className="nome">
                    <label>Login</label>
                    <input type="text"></input>
                </div>
                <div className="senha">
                    <label>Senha</label>
                    <input type="password"></input>
                </div>
                <div className="botao">
                    <button type='submit'>Login</button>
                </div>
            </form>
        </section>
        
    );
}

export default Formulario;