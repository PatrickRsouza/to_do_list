import styled from 'styled-components'
import imagemFundo from '../../imagens/PixelArtLua.png'

const Fundo = styled.section`
    background-image: url(${imagemFundo});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
`

const Titulo = styled.h1`
    font-size: 35px;
    font-weight: 400;
    color: #FFFFFF;
`

const ListaDeTarefas = styled.div`
    background-color: #D9D9D9;
`

function Tudo() {
    return(
        <Fundo>
           <Titulo>Tarefas do Dia:</Titulo>
           <ListaDeTarefas>
               
           </ListaDeTarefas>
        </Fundo>
    )
}

export default Tudo