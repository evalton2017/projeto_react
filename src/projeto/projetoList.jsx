import React from 'react'
import IconButton from '../template/iconButton'

export default props=>{
    const renderRows = () =>{
        const list = props.list || []
        return list.map(projeto=>(
            <tr key={projeto.id}>
                <td className={projeto.done ? 'markedAsDone': ''}>{projeto.description}</td>
                <td>{projeto.done ?'Sim':'Não'}</td>
                <td>
                    <IconButton style='success' icon='check' hide={projeto.done}
                     onClick={()=>props.handleMarkAsDone(projeto)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!projeto.done}
                     onClick={()=>props.handleMarkAsPadding(projeto)}></IconButton>
                    <IconButton style='danger' icon='trash-o' onClick={()=>props.handleRemove(projeto)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}