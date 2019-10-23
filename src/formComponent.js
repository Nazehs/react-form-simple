import React from "react";
import { Layout, Form, Icon, Input, Table, DatePicker, Button } from "antd";
import moment from "moment";
const { Content } = Layout;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
class HorizontalLoginForm extends React.Component {
    constructor(){
      super();
      this.state = {
        enablePagination: false,
        datasource:[
          {firstname: "Nazeh", lastname: "Abel", birthday: "10/20/19", hobbies: "Skating, music", age: "30"}
          
        ]
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
      // To disabled submit button at the beginning.
      this.props.form.validateFields();
      
    }
    
    handleSubmit = e => {
      
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const {_d} = values.birthday;
          values.birthday = moment(_d).format('MM/DD/YY');
          console.log(values.birthday, moment(_d).format('MM-DD-YYYYY'));
          this.setState(prevState =>
            {
              let enable = false
              console.log(prevState.datasource.length , 'state')
              if(prevState.datasource.length >=5){
                enable = true;
              }
              return {datasource: prevState.datasource.concat(values), enablePagination:enable}
            }
  
          )
        }else{
          console.log(err);
        }
      });
    };
  
    render() {
      const {
        getFieldDecorator,
        getFieldsError,
        getFieldError,
        isFieldTouched
      } = this.props.form;
  
      const columns = [
        {
                      title: 'First Name',
                      dataIndex: 'firstname',
                     key:'firstname'
                    },
                    {
                      title: 'Last Name',
                      dataIndex: 'lastname',
                      key:'lastname'
                    },
                    {
                      title: 'Age',
                      dataIndex: 'age',
                      key:'age'
                    },
                    {
                      title: 'Date Of Birth',
                      dataIndex: 'birthday',
                      key:'birthday'
                    },
                    {
                      title: 'Hobbies',
                      dataIndex: 'hobbies',
                      key:'hobbies'
                    }];
      // Only show error after a field is touched.
      const firstnameError =
        isFieldTouched("firstname") && getFieldError("firstname");
      const lastnameError =
        isFieldTouched("lastname") && getFieldError("lastname");
      const ageError = isFieldTouched("age") && getFieldError("age");
      const hobbyError = isFieldTouched("hobbies") && getFieldError("hobbies");
      const birthdayError =
        isFieldTouched("birthday") && getFieldError("birthday");
      return (
        <Content>
          <div className="formWrapper">
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Form.Item
            validateStatus={firstnameError ? "error" : ""}
            help={firstnameError || ""}
          >
            {getFieldDecorator("firstname", {
              rules: [{ required: true, message: "What is your first name!" }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="what is you first Name"
              />
            )}
          </Form.Item>
          <Form.Item
            validateStatus={lastnameError ? "error" : ""}
            help={lastnameError || ""}
          >
            {getFieldDecorator("lastname", {
              rules: [{ required: true, message: "What is your last name!" }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="text"
                placeholder="What is your Last Name?"
              />
            )}
          </Form.Item>
          <Form.Item
            validateStatus={birthdayError ? "error" : ""}
            help={birthdayError || ""}
          >
            {getFieldDecorator("birthday", {
              rules: [
                { required: true, message: "Please Provide Your Birthday!" }
              ]
            })(
              <DatePicker className="datepicker"
                 format="MM/DD/YYYY"
                placeholder="What is your birthday?" mode="date"  
                prefix={
                  <Icon type="datepicker" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </Form.Item>
          <Form.Item validateStatus={hobbyError ? 'error' : ''} help={hobbyError || ''}> 
            {getFieldDecorator('hobbies', {rules:[{required:true, message:"Pls provide your hobbies"}]})(
              <Input type="text" placeholder="What are your hobbies? seperated by commas" prefix={<Icon type="bulb" style={{color:"rgba(0,0,0, 0.25)"}}/>}/>
            )}
          </Form.Item>
          <Form.Item validateStatus={ageError ? 'error': ''} help={ageError || ''}>
           { getFieldDecorator('age', {rules:[{required:true, message:'Pls provide your age!'}]})(<Input prefix={<Icon type="dashboard" style={{color:"rgba(0,0,0,.25)"}}/>}  placeholder="What is your age?" type="text" />)}
          </Form.Item>
          <Form.Item>
            <Button className="submitbtn"
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              POPULATE MY DATA 
            </Button>
          </Form.Item>
        </Form>
        </div>
       <div className="formData">
       <Table columns={columns} dataSource={this.state.datasource} size={5} pagination={this.state.enablePagination}/>
        </div>
        </Content>
      );
    }
  }
  const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
    HorizontalLoginForm
  );


  export default WrappedHorizontalLoginForm;