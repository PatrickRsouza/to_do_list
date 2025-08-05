import styled from 'styled-components'
import imagemFundo from '../../imagens/PixelArtLua.png'

const Fundo = styled.section`
    background-image: url(${imagemFundo});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 8.06rem;
`

const Titulo = styled.h1`
    font-size: 35px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 5.625rem;
`

const ListaDeTarefas = styled.div`
    background-color: #D9D9D9;
    height: 16.375rem;
    width: 20.43rem;
    border-radius: 33px;
    opacity: 50%;
`
const Form = styled.form`
    margin: 10px 10px;
`
const Input = styled.input`
    background: transparent;
    font-size: 30px;
    width: 290px;
    heigh: 30px;
    reside: none;
`

function Tudo() {
    return(
        <Fundo>
           <Titulo>Tarefas do Dia:</Titulo>
           <ListaDeTarefas>
                <Form>
                    <Input type='text' placeholder='Digite aqui' />
                </Form>
           </ListaDeTarefas>
        </Fundo>
    )
}

export default Tudo