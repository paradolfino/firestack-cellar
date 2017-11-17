//Page for the intro screen
class Front extends React.Component {
  constructor(props){
    super(props);
    
  }
  render() {
   return (
      <div id="front" className="page">
       
       <div id="info" className="pageElement">
        <h2>Welcome to Firestack Cellar</h2>
        
        <p>
          An app that lets you add and view a catalogue of whiskeys from around the world!
        </p>
       
         <p>The word 'Firestack' stands for use of React.js, for the front end, and Google Firebase, for the back end, of the app.</p>
       
         <h4>Other stuff</h4>
         <p>This app was to practice React with Firebase. I'm still doing some touch up on the styling.</p>
       </div>
      </div>
    );
  }
}
export default Front;