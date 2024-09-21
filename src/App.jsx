
import { NavBar } from "./nav"
import { Footer } from "./footer"
import styles from "./two.module.css"
import "./shared.css"
function App() {
  // js
  let x = 100
  return (
    <>
    {console.log("aaaa")}
    
    <p>{x}</p>
    <button className={styles.btn}>ok</button>
    <NavBar></NavBar>
    <Footer></Footer>
    </>
  );
}

export default App;
