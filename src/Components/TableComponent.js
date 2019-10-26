import { connect } from "react-redux";
import React from "react";
import { Table} from "antd";

class TableComponent  extends React.Component{


    
    render(){
        // get the current state and populate the table
        const datasource = this.props.users;
        let enablePagination = false;

        if(datasource.length >= 5){
            enablePagination = true;
        }
        
        
        // table columns
        const columns = [
            {
              title: "First Name",
              dataIndex: "firstname",
              key: "firstname"
            },
            {
              title: "Last Name",
              dataIndex: "lastname",
              key: "lastname"
            },
            {
              title: "Age",
              dataIndex: "age",
              key: "age"
            },
            {
              title: "Date Of Birth",
              dataIndex: "birthday",
              key: "birthday"
            },
            {
              title: "Hobbies",
              dataIndex: "hobbies",
              key: "hobbies"
            }
          ];

          return( <Table key={datasource.key}
            columns={columns}
            dataSource={datasource}
            size={5}
            pagination={enablePagination}
          />)
    }

}

const mapStateToProps = state => ({
    //the users name is used because thats the name of the reducer, and it rturns the object
    users: state.users
  });

  export default connect(
    mapStateToProps
  )(TableComponent);
