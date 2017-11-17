//static elements for main app
import Header from "./components/elements/header";
import Footer from "./components/elements/footer";
//pages
import Add from "./components/pages/add";
import View from "./components/pages/view";
import Front from "./components/pages/front";
import Thanks from "./components/pages/thanks";

class App extends React.Component {
  constructor(props) {
    super(props);
    //app variables
    this.config = {
      apiKey: "AIzaSyBO10d5Lm4T4O5d-XNSPPUsaG_uvcPMUA0",
      authDomain: "firestackcellar.firebaseapp.com",
      databaseURL: "https://firestackcellar.firebaseio.com",
      projectId: "firestackcellar",
      storageBucket: "firestackcellar.appspot.com",
      messagingSenderId: "985948627332"
    };
    firebase.initializeApp(this.config);
    //state
    this.state = {
      page: "front",
      wrapper: 'pageWrapper'
    };
    
    //bindings
    this.pageHandler = this.pageHandler.bind(this);
  }
  componentDidMount() {
    
    console.log("initialized");
    
  }
  
  pageHandler(page) {
    this.setState({page: page});
  }

  render() {
    switch (this.state.page) {
      case "front":
        return (
          <div id={this.state.wrapper}>
            <Header onClick={this.pageHandler}/>
            <Front />
            <Footer />
          </div>
        );
        break;
      case "view":
        return (
          <div id={this.state.wrapper}>
            <Header onClick={this.pageHandler}/>
            <View config={this.config}/>
            <Footer />
          </div>
        );
        break;
      case "add":
        return (
          <div id={this.state.wrapper}>
            <Header onClick={this.pageHandler}/>
            <Add onAdd={this.pageHandler}/>
            <Footer />
          </div>
        );
        break;
      case "thanks":
        return (
          <div id={this.state.wrapper}>
            <Header onClick={this.pageHandler}/>
            <Thanks />
            <Footer />
          </div>
        );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
