class Toggle extends React.Component {
    constructor(props){
        super(props);
       this.toggleVisability = this.toggleVisability.bind(this)
       this.state = {
            visability: false
       }
    }
    toggleVisability() {
        this.setState((prevState) => {
            return {
              visability: !prevState.visability
            }
        })
    }
    
    render (){
        return(
          <div>
            <h1> Visability Toggle </h1>
                <button onClick={this.toggleVisability}> 
                    {this.state.visability ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visability && (
                <div> 
                    <p> Test </p>
                </div>
                )}
          </div>
            )
    }
}

ReactDOM.render(<Toggle />, document.getElementById("app"))

