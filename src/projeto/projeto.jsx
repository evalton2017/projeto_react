import React,{Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ProjetoForm from './projetoForm'
import ProjetoList from './projetoList'

const URL = 'http://localhost:8081/api';

export default class Projeto extends Component{

    constructor(props){
        super(props)
        this.state= {description: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.handleRemove=this.handleRemove.bind(this)
        this.handleMarkAsDone=this.handleMarkAsDone.bind(this)
        this.handleMarkAsPadding = this.handleMarkAsPadding.bind(this)
        this.handleSearch = this.handleSearch.bind(this)


        this.refresh()
    }

    refresh(description =''){
        const search = description ? `${description}`:''
        axios.get(`${URL}/${search}`)
            .then(resp=>this.setState({...this.state, description: '', list:resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => this.refresh())
    }

    handleRemove(projeto){
        axios.delete(`${URL}/${projeto.id}`)
            .then(resp=>this.refresh())
    }

    handleMarkAsDone(projeto){
        axios.put(`${URL}/${projeto.id}`, {...projeto, done:true})
            .then(resp=>this.refresh()) 
    }

    handleMarkAsPadding(projeto){
        axios.put(`${URL}/${projeto.id}`, {...projeto, done:false})
        .then(resp=>this.refresh()) 
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <ProjetoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}/>
                <ProjetoList  list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone= {this.handleMarkAsDone}
                    handleMarkAsPadding = {this.handleMarkAsPadding}
                />
            </div>
        )
    }
}