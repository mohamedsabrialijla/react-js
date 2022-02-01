import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


  
class DemoForm extends React.Component {
    constructor() {
    super();
    this.state = {
      data: {},
    };
     
  }


  componentDidMount() {

    // const config = {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET"
    //     }
    //   };

      const config = { responseType: "blob" };


      axios.get('https://hello-world-two-roan.vercel.app/api', config)
      .then(res => {
          console.log(res);
        this.setState({
          data: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.data.map((res, i) => {
      return (
        <tr>
            <td>{res.name}</td>
           
        </tr>
    );
    });
  }





  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.DataTable()} */}
        </tbody>
      </Table>
    </div>);
  }
      }
        
      export default DemoForm;  