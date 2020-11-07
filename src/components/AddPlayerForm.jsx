/*
import React from 'react';

class AddPlayerForm extends React.Component{
  state = {
    value: ''
  };

  constructor(props) {
    super(props);
    this.formRef = React.createRef(); //React.createRef는 class 컴포넌트만 사용가능.
    this.textRef = React.createRef();
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault(); //form action이 없으면 자신의 창 재호출하는 기본 이벤트를 막음

    //form 노드에 접근하는 방법
    const form = this.formRef.current; //this.formRef.current는 document.getElementById(id) 와 동일
    console.log(form.checkValidity()); //폼내의 모든 입력 validation을 체크

    //input text 노드에 접근하는 방법
    const player = this.textRef.current;
    console.log(player.validity.valid) // 입력의 9가지 validation을 체크

    if (!form.checkValidity()) {
      alert("입력값을 입력하세요");
      return;
    }
    
    this.props.addPlayer(this.state.value);
    this.setState(
      {
        value : ''
      }
    );
  }

  render() {
    return (
      //form.form>input.input*2
      <form ref={this.formRef} className="form" onSubmit={this.handleSubmit} noValidate>
        <input ref={this.textRef} type="text" className="input" required
               placeholder="enter a player's name"
               value={this.state.value} onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="Add Player"/>
      </form>
    )
  }
};
*/

import React, {useRef, useState} from 'react';

function AddPlayerForm(props) {
  const [value, setValue] = useState('');

  //const formRef = React.createRef();
  const formRef = useRef(null);
  //const textRef = React.createRef();
  const textRef = useRef(null);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //form action이 없으면 자신의 창 재호출하는 기본 이벤트를 막음

    //form 노드에 접근하는 방법
    const form = formRef.current; //this.formRef.current는 document.getElementById(id) 와 동일
    console.log(form.checkValidity()); //폼내의 모든 입력 validation을 체크

    //input text 노드에 접근하는 방법
    const player = textRef.current;
    console.log(player.validity.valid) // 입력의 9가지 validation을 체크

    if (!form.checkValidity()) {
      alert("입력값을 입력하세요");
      return;
    }

    props.addPlayer(value);
    setValue('');
  }


  return (
    //form.form>input.input*2
    <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
      <input ref={textRef} type="text" className="input" required
             placeholder="enter a player's name"
             value={value} onChange={handleValueChange}/>
      <input type="submit" className="input" value="Add Player"/>
    </form>
  )

}


export default AddPlayerForm;