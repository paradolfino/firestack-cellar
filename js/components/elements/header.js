//app header
class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let page = e.target.value.toLowerCase();
    this.props.onClick(page);
  }
  render() {
    return (
      <div id="header">
        <div id="logo">
          <img src='https://cdn.worldvectorlogo.com/logos/firebase-1.svg'/>
          <h4>Firestack Cellar by <a href='http://www.viktharienvolander.com' target="_blank">Viktharien Volander</a></h4>
        </div>
        <div id="nav">
          <button onClick={this.handleClick} value='view'>View</button>
          <button onClick={this.handleClick} value='add'>Add</button>
        </div>
      </div>
    );
  }
}

export default Header;
