import {Botao, BotaoGoogle, SVG} from './style'
import Google from '../.././../assets/google.svg';
function Button () {
    return (
        <><Botao>Entrar</Botao>
      
        <BotaoGoogle>
            <SVG src={Google} alt=""/>
            Entrar com Google
            </BotaoGoogle>
        </>
    )
}
export {Button}
