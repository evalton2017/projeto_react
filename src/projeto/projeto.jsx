import React,{Component} from 'react'
import PageHeader from '../template/pageHeader'
import ProjetoForm from './projetoForm'
import ProjetoList from './projetoList'

export default class Projeto extends Component{
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <ProjetoForm></ProjetoForm>
                <ProjetoList></ProjetoList>
            </div>
        )
    }
}