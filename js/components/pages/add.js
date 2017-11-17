//Page for adding whiskey
import Form from "../elements/form";
let rootRef,urlRef,numC;
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.db = firebase.database();
    this.addWhiskey = this.addWhiskey.bind(this);
    this.countRecords = this.countRecords.bind(this);
   
  }
  componentDidMount() {
    this.countRecords();
  }
  countRecords() {
    rootRef = this.db.ref();
    urlRef = rootRef.child("cellar/whiskeys/");
          urlRef.once("value", snapshot => {
            console.log(snapshot.numChildren());
            numC = snapshot.numChildren();
          });
  }
  addWhiskey(name, year, origin, src) {
    //add whiskey to database
    let newWhiskey = (numC);
    this.db.ref("cellar/whiskeys/" + newWhiskey).set('');
    this.db.ref("cellar/whiskeys/" + newWhiskey + "/name/").set(name);
    this.db.ref("cellar/whiskeys/" + newWhiskey + "/year/").set(year);
    this.db.ref("cellar/whiskeys/" + newWhiskey + "/origin/").set(origin);
    this.db.ref("cellar/whiskeys/" + newWhiskey + "/src/").set(src);
    this.countRecords();
    setTimeout(()=>{
      this.props.onAdd('thanks');
    },250);
    
  }
  
  render() {
    return (
      <div id="add" className="page">
        <div className="pageElement">
        <h2>Add a Whiskey to the Cellar!</h2>
        <Form onSubmit={this.addWhiskey} />
        <p>
          Once you do, you'll see it available in our whiskey cellar catalogue!
        </p>
        </div>
      </div>
    );
  }
}
export default Add;
