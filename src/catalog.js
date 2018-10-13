import React, {Component} from 'react';
import MediaCard from './RopitaComponent';

class Catalog extends Component{

  state = {
    ropita: []
  }

componentWillMount(){
  fetch("https://shopsbackend.herokuapp.com/api/catalogo")
  .then(res => res.json())
  .then(ropita => {
    console.log(ropita)
    this.setState({ropita})
  })
}

  render(){
    return (
      <div>
      {this.state.ropita.map((r, index) => (
        <MediaCard ropita={r} key={index}/>
      ))}

      </div>

    )
  }
}

export default Catalog;
