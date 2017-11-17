//Page for viewing the whiskeys in the database
//import Display from "../elements/display";
let rootRef, urlRef, listenerRef, numC, firstC, lastC;
class View extends React.Component {
  constructor(props) {
    super(props);
    this.config = {
      apiKey: "AIzaSyBO10d5Lm4T4O5d-XNSPPUsaG_uvcPMUA0",
      authDomain: "firestackcellar.firebaseapp.com",
      databaseURL: "https://firestackcellar.firebaseio.com",
      projectId: "firestackcellar",
      storageBucket: "firestackcellar.appspot.com",
      messagingSenderId: "985948627332"
    };

    this.stage = 0;
    this.state = { items: [] };
    this.pageFor = this.pageFor.bind(this);
    this.pageBack = this.pageBack.bind(this);
    this.viewWhiskey = this.viewWhiskey.bind(this);
  }
  componentDidMount() {
    this.viewWhiskey(0);
  }
  pageFor(event) {
    event.preventDefault();

    firstC += 4;
    lastC += 4;
    this.viewWhiskey(3);
  }
  pageBack(event) {
    event.preventDefault();

    if (!firstC <= 0) {
      firstC -= 4;
      lastC -= 4;
      this.viewWhiskey(3);
    }
  }
  viewWhiskey(stg) {
    let db = firebase.database();
    let whiskeys = [];
    setTimeout(() => {
      switch (stg) {
        case 0:
          console.log(db);
          rootRef = db.ref();
          console.log("initialized view");
          this.stage++;
          this.viewWhiskey(this.stage);
          firstC = 1;
          lastC = 4;
          break;
        case 1:
          urlRef = rootRef.child("master/sessions/");
          urlRef.once("value", snapshot => {
            //get response
            snapshot.forEach(child => {
              whiskeys.push(child.val());
              console.log(child.val);
            });
            console.log(whiskeys);
            console.log(this.stage);
            this.stage++;
            this.viewWhiskey(this.stage);
          });
          break;
        case 2:
          //get number of records
          urlRef = rootRef.child("cellar/whiskeys/");
          urlRef.once("value", snapshot => {
            console.log(snapshot.numChildren());
            numC = snapshot.numChildren();
            this.stage++;
            this.viewWhiskey(this.stage);
          });
          break;
        case 3:
          //output records set to a limit for pagination
          console.log("begin");
          $("#view").html("");
          urlRef = rootRef.child("cellar/whiskeys/");
          urlRef
            .orderByKey()
            .startAt(firstC.toString())
            .endAt(lastC.toString())
            .once("value", snapshot => {
              console.log(snapshot.numChildren());
              snapshot.forEach(child => {
                let name = child.val().name;
                let year = child.val().year;
                let origin = child.val().origin;
                let src = child.val().src;
                $("#view").append(
                  "<div id='" +
                    name +"' class='card'>" + "<img style=\"background-image: url('" +src +"')\"/><br/><span>Name: " +
                    name +
                    " </span><br/><span>" +
                    year +
                    " from" +
                    " " +
                    origin +
                    "</span></div>"
                );
              });
            });
          break;
      } //end switch
    }, 250); //end timeout
  }
  render() {
    return (
      <span>
        <span id="pagination">
          <button onClick={this.pageBack}> Last Page</button><button onClick={this.pageFor}>Next Page</button>
        </span>
        <div id="view" className="page">
          <img src='loading.gif'/>
        </div>
      </span>
    );
  }
}
export default View;
