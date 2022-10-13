import styled from "styled-components";

export const Title = styled.h1`
    font-family: 'Poppins';
    font-weight: 550;
    color: #2B2B2B;
    font-size: 48px;
    line-height: 120%;
    font-style: normal;
    @media (max-width: 576px){
        font-size: 15px;
        line-height: normal;
        text-align: center;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    margin: 162px 162px 0 203px;
    width: auto;
    @media (max-width: 576px){
        margin: 200px 20px 0 0;
        width: 500px;
        height: 200px;
        text-align: center;
    }
    

`
export const Descricao = styled.span`
    margin-top: 4px;
    color: rgba(43, 43, 43, 0.5);
    font-size: 18px;
    line-height: 150%;
    font-family: 'Raleway';
    @media (max-width: 576px){
        text-align: center;
    }
    

`
export const InputText = styled.span`
    margin-top: 32px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #2B2B2B;
    @media (max-width: 576px){
        text-align: center;
    }

`
export const InputBlock = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    box-sizing: border-box;
    width: 489px;
    height: 48px;
    margin-top: 8px;
    @media (max-width: 576px){
       width: 300px;
       
    }
    

`

export const CheckBoxContainer = styled.div`
    display: flex;
    margin-top: 28px;
    
    
`

export const TextCheckBox = styled.p`
    margin-top: 7px;
`
export const Ancora = styled.a`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #2B2B2B;
    margin-left: 54px;
    margin-top: 7px;

`
export const Fundo = styled.img`
     width: 620px;
    height: 800px;
    margin-left: 850px;
    margin-top: -730px;
    overflow: hidden;
    @media (max-width: 576px){
       display: none;
    }
`
export const ContainerFundo = styled.div`
    
`   