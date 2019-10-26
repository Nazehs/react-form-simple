import { connect} from "react-redux";
import React from "react";
import { Layout, Form, Icon, Input, DatePicker, Button } from "antd";
import moment from "moment";
import uuid from 'uuid/v4';
import { addUserDetails } from "../redux/actions";
import TableComponent from './TableComponent'

const { Content } = Layout;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {

  constructor() {
    super();   
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }


  handleReset = ()=>{
    this.props.form.resetFields();
  }
  handleSubmit = e => {
    e.preventDefault();
    // validate and check for errors and sanatize data before storing
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // extract the date and format it
        const { _d } = values.birthday;
        values.birthday = moment(_d).format("MM/DD/YY");
        values.key = uuid();  

        // add the new entry to the redux store
        this.props.addUserDetails(values);
        this.handleReset();
      } else {
        console.log("Error logged: ", err);
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

     
    // Only show error after a field is touched.
    const firstnameError =isFieldTouched("firstname") && getFieldError("firstname");
    const lastnameError =isFieldTouched("lastname") && getFieldError("lastname");
    const ageError = isFieldTouched("age") && getFieldError("age");
    const hobbyError = isFieldTouched("hobbies") && getFieldError("hobbies");
    const birthdayError =isFieldTouched("birthday") && getFieldError("birthday");
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
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
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
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
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
                <DatePicker
                  className="datepicker"
                  format="MM/DD/YYYY"
                  placeholder="What is your birthday?"
                  mode="date"
                  prefix={
                    <Icon
                      type="datepicker"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                />
              )}
            </Form.Item>
            <Form.Item
              validateStatus={hobbyError ? "error" : ""}
              help={hobbyError || ""}
            >
              {getFieldDecorator("hobbies", {
                rules: [{ required: true, message: "Pls provide your hobbies" }]
              })(
                <Input
                  type="text"
                  placeholder="What are your hobbies? seperated by commas"
                  prefix={
                    <Icon type="bulb" style={{ color: "rgba(0,0,0, 0.25)" }} />
                  }
                />
              )}
            </Form.Item>
            <Form.Item
              validateStatus={ageError ? "error" : ""}
              help={ageError || ""}
            >
              {getFieldDecorator("age", {
                rules: [{ required: true, message: "Pls provide your age!" }]
              })(
                <Input
                  prefix={
                    <Icon
                      type="dashboard"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder="What is your age?"
                  type="text"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                className="submitbtn"
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
          {/* importing the table here */}
         <TableComponent/>
        </div>
      </Content>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
  HorizontalLoginForm
);

// map the state 
const mapStateToProps = state => ({
  users: state.users
});

// export default WrappedHorizontalLoginForm;
export default connect(
  mapStateToProps,
  { addUserDetails }
)(WrappedHorizontalLoginForm);

