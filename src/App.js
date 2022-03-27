import image from "./imageInSrc.jpg";
import './style.css';



function App() {
    return (
    <header>
      <div style={{border:"solid 1px black" , width:"100vw"}}>
        <h1 className="title red">Your name here</h1>
            <div className="img">
            <img className="imgSrc" src={image}/>
            <img className="imgPub"src="imageInPublic.jpg"/>
            </div>
            
      </div>
              <video width="320" height="240" controls>
                  <source src="myVideo.mp4" type="video/mp4" ></source>
              </video>
    </header>
    );   
}


export default App;