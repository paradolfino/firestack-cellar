//Element receives input in a form.
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let name = $("#theName");
    let year = $("#theYear");
    let origin = $("#theOrigin");
    let src = $("#theImg");
    this.props.onSubmit(name.val(),year.val(),origin.val(),src.val());
    setTimeout(function(){
      name.val('');
      year.val('');
      origin.val('');
      src.val('');
      
    },500);
    
  }
  render() {
    return (
      <div id='theForm' className="text-center">
        <strong className="formElement">Name:</strong><br/>
        <input id='theName' type='text' placeholder='Name of Whiskey'/><br/>
        <strong className="formElement">Year:</strong><br/>
        <input id='theYear' type='text'placeholder='How long has it aged?'/><br/>
        <strong className="formElement">Place of Origin:</strong><br/>
        <input id='theOrigin' type='text'placeholder='Where is it brewed?'/><br/>
        <strong className="formElement">Image of the whiskey bottle:</strong><br/>
        <input id='theImg' type='text'placeholder="External link?"/><br/>
        <button id='submit' onClick={this.handleSubmit}>Submit it!</button>
      </div>
    );
  }
}
export default Form;