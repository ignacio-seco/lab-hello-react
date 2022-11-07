import "./NavBar.css"
import ironLogo from "../../images/ironhack-logo-xs.png"
import menuBtn from "../../images/menu-top-xs.png"
function NavBar(){
    return <div className="navBar">
        <img src={ironLogo} alt="enterprise logo" className="navBarEnterprise"/>
        <button type="button"><img src={menuBtn} alt="menuBtn" className="navBarMenu"/></button>
        
    </div>
}
export default NavBar