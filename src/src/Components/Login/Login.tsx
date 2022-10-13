import { Title, 
Container, 
Fundo,
Descricao,
InputText,
InputBlock, 
CheckBoxContainer, 
TextCheckBox,
Ancora,
ContainerFundo}
from './style';

import Checkbox from '@mui/material/Checkbox';
import { Button } from '../Button/index';
import fundo from '../../../assets/background.png'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Login () {
    return (
        <Container>
            <Title>Fazer login</Title>
            <Descricao>Entre em sua conta para continuar</Descricao>
            <InputText>Seu email</InputText>
            <InputBlock 
            type="text" placeholder='gabriel@admin.com.br' id='email'
            />

            <InputText>Sua senha</InputText>
            <InputBlock 
            type="text" placeholder='*********' id='senha'
            />

            <CheckBoxContainer>
            <Checkbox  {...label} defaultChecked  />
            <TextCheckBox>Lembrar-me de mim por 30 dias</TextCheckBox> 
            <Ancora href="">Esqueci minha senha</Ancora>
            </CheckBoxContainer>
            <Button />
            <ContainerFundo>
            <Fundo src={fundo} alt="" />
            </ContainerFundo>
            </Container>
    )
}
export {Login}