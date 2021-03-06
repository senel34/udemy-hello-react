var turn = 'O';

class Board extends React.Component{


  constructor(props){
    super(props);
    this.testname = 'aasd';
    this.state = {
      gameBoard: ['','','','','','','','','']
    }
  }

  onClickHandlerTestEvent(){
    console.log(this.state.gameBoard);
    console.log(this.testname);
  }

  updateBoard(id, val){
    console.log(id + val);
    this.state.gameBoard[id] = val;
    this.forceUpdate();
  }

  render(){
    return(
      <div>
        <table>
          <tbody>
          <tr>
            <td><ImageCell id='1' updateMethod={this.updateBoard.bind(this)} /></td>
            <td><ImageCell id='2' updateMethod={this.updateBoard.bind(this)} /></td>
            <td><ImageCell id='3' updateMethod={this.updateBoard.bind(this)} /></td>
          </tr>
          <tr>
            <td><ImageCell id='4' updateMethod={this.updateBoard.bind(this)} /></td>
            <td><ImageCell id='5' updateMethod={this.updateBoard.bind(this)} /></td>
            <td><ImageCell id='6' updateMethod={this.updateBoard.bind(this)} /></td>
          </tr>
          <tr>
            <td><ImageCell id='7' updateMethod={this.updateBoard.bind(this)} /></td>
            <td><ImageCell id='8' updateMethod={this.updateBoard.bind(this)} /></td>
            <td><ImageCell id='9' updateMethod={this.updateBoard.bind(this)} /></td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.onClickHandlerTestEvent.bind(this)}> Test </button>
      </div>
      );
  }
}

class ImageCell extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      val: '',
      imgSrc: 'blank.png',
      updateBoard: this.props.updateMethod
    }
  }

  updatePiece(){
    this.updateTurn();
    this.updateImage();
    this.state.updateBoard(this.state.id, this.state.val);
  }


  updateTurn(){
    switch(turn){
      case 'O':
        turn='X'
        break;
      case 'X':
        turn = 'O'
        break;
    }
  }

  updateImage(){
    switch(this.state.val){
      case 'X':
        this.setState({
          imgSrc: 'x.png'
        })
        break;
      case 'O':
        this.setState({
          imgSrc: 'c.png'
        })
        break;
      case '':
        this.setState({
          imgSrc: 'blank.png'
        })
        break;
    }
  }

  onClickHandlerStateUpdate(){
    if(this.state.val == ''){
      this.setState({
        val: turn
      }, this.updatePiece);
    }
    else{
      this.setState({
        val: turn
      }, this.updatePiece);
    }
  }


  render(){

    return(
      <div>
        <img onClick={this.onClickHandlerStateUpdate.bind(this)} src={this.state.imgSrc}></img>
      </div>
    );
  }

}


ReactDOM.render(
  <Board/>,
  document.getElementById("app")
);