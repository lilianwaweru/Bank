
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
      <div className = "customer--list">
      <table className = "table">
        <thead key="thead">
        <tr>      
                <th>Name</th>
                <th>Contact</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Bank</th>
                <th>Access</th>
                <th>Transaction</th>
            </tr>
        </thead>
      </table>
      </div>      
      
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.contact}</h1>
          </div>
        ))}
      </div>
    );
  }

  render() {

    return (
        <div  className="customer--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                
                <th>Name</th>
                <th>Contact</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Bank</th>
                <th>Access</th>
                <th>Transaction</th>
            </tr>
            </thead>
            <tbody>
            {this.state.customers.map( c  =>
                <tr>
                <td>{c.id}  </td>
                <td>{c.name}</td>
                <td>{c.contact}</td>
                <td>{c.description}</td>
                <td>{c.amount}</td>
                <td>{c.date}</td>
                <td>{c.bank}</td>
                <td>{c.access}</td>
                <td>{c.transaction}</td>
                <td>    
                </td>
            </tr>)}
            </tbody>
            </table>
            
        </div>
        );
  }
}
}

export default App;
