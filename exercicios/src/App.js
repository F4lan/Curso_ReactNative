import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

// import Primeiro from './components/Primeiro'
// import Comp1, { Comp2, Comp3 } from './components/Multi'
// import MiniMax from './components/MiniMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
// import ParImpar from './components/ParImpar'
// import Familia from './components/relação/Familia'
// import Membro from './components/relação/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import DigiteNome from './components/DigiteNome'
// import FlexboxV1 from './components/layout/FlexboxV1'
import Mega from './components/mega/Mega'

export default () => (
  <SafeAreaView style={style.App}>
    {/*
    <Primeiro />
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <MiniMax min={1} max={10} />
    <MiniMax min={2} max={20} /> 
    <Aleatorio min={1} max={60}/> 
    <Titulo principal="Cadastro" secundario="Tela de cadastro do Produto" />
    <Botao />
    <Contador inicial={0} passo={2} />
    <Contador />
    <Pai />
    <ContadorV2 />
    <Diferenciar />
    <ParImpar num={2}/>
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Juliana" sobrenome="Silva" />
      <Membro nome="Gui" sobrenome="Silva" />
      <Membro nome="Rebeca" sobrenome="Silva" />
    </Familia>
    <UsuarioLogado usuario={{ nome: 'Felipe', email: 'fe@fe.com' }} />
    <UsuarioLogado usuario={{ nome: 'Felipe' }} />
    <UsuarioLogado usuario={{ email: 'car@car' }} />
    <UsuarioLogado usuario={{}} />
    <ListaProdutos />
    <ListaProdutosV2 />
    <DigiteNome />
    <FlexboxV1 />
  */}
    <Mega qtdeNumeros={"7"} />
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})
