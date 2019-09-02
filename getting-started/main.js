function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your age: {props.age}</p>
    </div> 
  )
};

var app = (
  <div>
    <Person name="Milan" age="38" />
    <Person name="Petra" age="32" />
  </div>
)

ReactDOM.render(app, document.getElementById("app"));
