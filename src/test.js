import React from 'react';
// import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import REN from './components/REn';
import i18n from "i18next";

const options = [
    { value: 'english', label: 'english' },
    { value: 'arabic', label: 'arabic' },
    { value: 'france', label: 'france' },
    { value: 'italy', label: 'italy' },
  ];


class DemoForm extends React.Component {

    
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      selectItem: "english",
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
        input
      });
    }

   
    

    handleChange2(e) {
        console.log("Item Selected!!");
        this.setState({ selectItem: e.target.value });
        // alert(e.target.value)
        if(e.target.value == 'arabic'){

            i18n.changeLanguage('ar');
            document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");

        }
        if(e.target.value == 'english'){
            i18n.changeLanguage('en');
            document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");

        }

        if(e.target.value == 'france'){
            i18n.changeLanguage('fr');
            document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");

        }

        if(e.target.value == 'italy'){
            i18n.changeLanguage('it');
            document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");

        }
      }


      
    handleSubmit(event) {
      event.preventDefault();
    
      if(this.validate()){
          console.log(this.state);
          document.getElementById("json").textContent = JSON.stringify(this.state.input);

    
          let input = {};
          input["name"] = "";
          input["email"] = "";
          input["comment"] = "";
          this.setState({input:input});
    
          alert('Test from mohamed al ijla is submited');
      }
    }
    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
    
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
      
          if (!input["comment"]) {
            isValid = false;
            errors["comment"] = "Please enter your comment.";
          }
      
          this.setState({
            errors: errors
          });
      
          return isValid;
        }
     
        render() {


          return (
              
            <div>
              <REN/>

            <div className="select-container">
            <select value={this.state.fruit} onChange={this.handleChange2}>
                {options.map((option,key) => (
                <option value={option.value} key={key}>{option.label}</option>
                ))}
            </select>
            </div>


              <form onSubmit={this.handleSubmit}>
        
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={this.state.input.name}
                    onChange={this.handleChange}
                    class="form-control" 
                    placeholder="Enter name" 
                    id="name" />
        
                    <div className="text-danger">{this.state.errors.name}</div>
                </div>
        
                <div class="form-group">
                  <label for="email">Email Address:</label>
                  <input 
                    type="text" 
                    name="email" 
                    value={this.state.input.email}
                    onChange={this.handleChange}
                    class="form-control" 
                    placeholder="Enter email" 
                    id="email" />
         
                    <div className="text-danger">{this.state.errors.email}</div>
                </div>
                
        
                <div class="form-group">
                  <label for="comment">Comment:</label>
                  <textarea 
                    name="comment"
                    value={this.state.input.comment} 
                    onChange={this.handleChange}
                    placeholder="Enter comment"
                    class="form-control" />
        
                    <div className="text-danger">{this.state.errors.comment}</div>
                </div>
                   
                <input type="submit" value="Submit" class="btn btn-success" />
              </form>

             <strong>Result :</strong>  <pre id="json"></pre>
            </div>
          );
        }
      }
        
      export default DemoForm;  