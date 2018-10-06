import React from 'react';
import ReactDOM from 'react-dom';
import Rectangle from 'react-rectangle';

class DialogueBox extends React.Component{
  render(){
    return <div style={{ background: '#9e9e9e', width: '100vw', height: '100vh' }}>
      <Rectangle aspectRatio={[5, 3]}>
        <div style={{ background: '#607d8b', width: '100%', height: '100%' }} />
      </Rectangle>
    </div>
  }
}

export default DialogueBox
