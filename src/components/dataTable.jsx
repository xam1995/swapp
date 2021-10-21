import React, { Component } from 'react';
class DataTable extends React.Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        birthdate: this.props.birthdate,
        height: this.props.height,
        gender: this.props.gender,
        mass: this.props.mass,
        skincolor: this.props.skincolor,
        species: this.props.species,
        vehicles: this.props.vehicles,
        spaceships: this.props.spaceships
    }
    render () { 
        return <div className='DataTable' key={this.state.id}>
            <table>
                <tr>
            <th><img src={'https://raw.githubusercontent.com/xam1995/swapp/xam1995-graphics/height.png'} alt='height img'height={20} width={20}/></th>
            <th>{this.state.height} cm</th>
            <th><img src={'https://raw.githubusercontent.com/xam1995/swapp/xam1995-graphics/weight.png'} alt='mass img'height={20} width={20}/></th>
            <th>{this.state.mass} kg </th>
            <th><img src={'https://raw.githubusercontent.com/xam1995/swapp/xam1995-graphics/birthyear.png'} alt='birth year img'height={20} width={20}/></th> 
            <th>{this.state.birthdate}</th>
            <th><img src={'https://raw.githubusercontent.com/xam1995/swapp/xam1995-graphics/gender.png'} alt='gender img'height={20} width={20}/></th> 
            <th>{this.state.gender}</th> 
                </tr>
            </table>
        </div>;
    }
}
 
export default DataTable;