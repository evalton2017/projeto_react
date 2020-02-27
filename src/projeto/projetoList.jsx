import React from 'react'
import IconButton from '../template/iconButton'

export default props=>{
    const renderRows = () =>{
        const list = props.list || []
        return list.map(projeto=>(
            <tr key={projeto._id}>
                <td>{projeto.description}</td>
                <td>
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
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}