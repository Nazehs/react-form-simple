import React from "react";
import WrappedHorizontalLoginForm from './formComponent'
import "./App.css";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;


class App extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
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
    );
  }
}



export default App;
