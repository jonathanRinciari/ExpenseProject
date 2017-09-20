console.log("app.js is running");

//jsx - Javascript XML Syntax

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option)
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    } 
    console.log(app.options)
    renderTemplates();
}

const onRemoveAll = () => {
    app.options = [];
    renderTemplates()
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
}
const appRoot = document.getElementById("app");

const renderTemplates = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p> {app.subtitle} </p> }
            <p> {app.options.length > 0 ? "You have options" : "You have no options"} </p>
            <button disabled={app.options.length === 0}onClick={onMakeDecision}> Select Random </button>
            <button onClick={onRemoveAll}> Remove All </button>
            <ol>
           {
               app.options.map((option) => {
                return <li key={option}> Option: {option} </li>
               })
           }
          </ol>

            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button> Add Option </button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderTemplates();



