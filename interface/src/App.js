
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
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://bankonline12.herokuapp.com/api/history/'
    try {
      const res = await fetch(proxyUrl + targetUrl);
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
          <div class="jumbotron jumbotron-fluid">
          <div class="container">
          <h2 class="display-4">Transaction History and Account Balance</h2>
          
          </div>
          </div>
            <h1>Name:{item.name}</h1>
            <h2>Contact:{item.contact}</h2>
            <h3>Description:{item.description}</h3>
            <h3>Amount Balance:{item.amount}</h3>
            <h3>Date:{item.date}</h3>
            <h3>Bank:{item.bank}</h3>
            <h3>Access:{item.access}</h3>
            <h3>Transaction:{item.transaction}</h3>
          </div>
        ))}
      </div>
      </div>
    );
  }
  
}

export default App;
