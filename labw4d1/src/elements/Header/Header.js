import "./Header.css"

function Header(props){ 
    return <div className="headerStyle">
    <div className="headerLeft">
    <h1>{props.title}</h1>
    <p>{props.paragraph}</p>
    <button type="button">{props.buttonText}</button>
    </div>
    </div>
}
export default Header