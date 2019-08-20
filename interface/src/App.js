
// import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Route, Link } from 'react-router-dom';
// import  CustomerList from './CustomerList';
// import './App.css';

// const BaseLayout = () => (
//   <div className="container-fluid">
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Online Banking</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//      <div className="navbar-nav">
//       <a className="nav-item nav-link" href="#">Account</a>
      
//     </div> 
//   </div>
// </nav>  

//     <div className="content">
//       <Route path="/" exact component={CustomerList} />
     

//     </div>

//   </div>
// )

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <BaseLayout/>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/history/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Online Banking</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">     <span className="navbar-toggler-icon"></span>  
      </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="navbar-nav">
       <a className="nav-item nav-link" href="#">Account</a>
      
     </div> 
   </div>
    </nav>  
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.contact}</h1>
            <h1>{item.description}</h1>
            <h1>{item.amount}</h1>
            <h1>{item.date}</h1>
            <h1>{item.bank}</h1>
            <h1>{item.access}</h1>
            <h1>{item.transaction}</h1>
          </div>
        ))}
      </div>
      </div>
    );
  }
  
}

export default App;
