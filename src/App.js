import classes from './App.module.css';
import PageHandler from './PageHandler/PageHandler'
import NavBar from './Components/NavBar/NavBar';

function App() {
  var Width = window.innerWidth;
  return (
    <div className={classes.App}>
      {Width < 300 
            ?<div className={classes.mainBody}>    
                <h1 className={classes.UnavialableText} >Sorry!</h1>
                <p className={classes.UnavialableText} style={{fontSize:`${5}vw`}}>My portfolio is not yet compatible with your screen size,
                 please try again on a desktop or laptop or contact me at contactokkio@gmail.com</p>
            </div>
            :
            <>
          <NavBar/> 
          <PageHandler></PageHandler>
        </>
    }
    </div>
  );
}

export default App;
