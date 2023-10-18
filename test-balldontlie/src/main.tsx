import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Space } from "antd";
import Welcome from "./Welcome/Welcome";
import "./index.css";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "left",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "##0000000000",
};

const contentStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "1rem 1rem",
  color: "white",
  backgroundColor: "#000000",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>BALLDONTLIE</Header>
        <Content style={contentStyle}>
          <RouterProvider router={router} />
        </Content>
      </Layout>
    </Space>
  </React.StrictMode>
);
