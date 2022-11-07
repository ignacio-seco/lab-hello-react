import "./Icons.css"

function Icons(props){
    return <div className="icons">
    <img src={props.img} alt="some icon"/>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    </div>
}

export default Icons