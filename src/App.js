import React from "react";
import { Provider } from 'react-redux'
import { store } from './redux/redux';
// import { FormComponent} from './formComponent'

import WrappedHorizontalLoginForm from './Components/formComponent'
import "./App.css";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;



class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                minHeight: "90vh",
                textAlign: "center"
              }}
            >
              <h2>USER FORM MADE SIMPLE!</h2>
              <p>Kindly add your data on the table using the below form</p>
              <div className="">
               <WrappedHorizontalLoginForm />                          
               {/* <FormComponent/> */}
              </div>
             
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "#fffff",
              background: "#f5f5f5"
            }}
          >
            Powered By <span className="copyright">Ant Design</span>
          </Footer>
        </Layout>
      </Layout>
      </Provider>
    );
  }
}



export default App;


// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './redux';
// import './App.css';
// import FormComponent from './formComponent';
// // Components
// import TodoInput from './todoInput';
// import TodoList from './todoList';

// const App = () => (
//   <Provider store={store}>
//     <div className="main">
//       <TodoInput />
//       {/* <TodoList /> */}
//       <FormComponent/>
//     </div>
//   </Provider>
// );

// export default App;
