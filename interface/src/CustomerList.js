import  React, { Component } from  'react';
import  Service  from  './Service';

const  customerService  =  new  Service();
class  CustomerList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        customers: []
       
    };
    
}

componentDidMount() {
    var  self  =  this;
    customerService.getCustomers().then(function (result) {
        console.log(result);
        self.setState({ customers:  result.data})
    });
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

export  default  CustomerList;