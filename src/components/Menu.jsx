import React, { useState, useEffect } from "react";

import history from "../history";
import { useSelector, useDispatch, connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withCookies } from "react-cookie";
import { Badge, Button, Layout, Menu } from "antd";
import {
  BellOutlined,
  FolderOpenOutlined,
  LineChartOutlined,
  PieChartOutlined,
  PlusCircleOutlined,
  ProfileOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MenuIndex = (props) => {
  /**MENU STARTS HERE */
  const MenuItemsData = [
    {
      key: "sub2",
      icon: <PieChartOutlined />,
      label: "Operations",
      menuList: [
        {
          key: "/logbook",
          onClick: () => history.push("/logbook"),
          label: "Logbook",
        },
        {
          key: "/drafts",
          // onClick: () => history.push("/drafts"),
          label: "Drafts",
        },
      ],
    },
    {
      key: "sales",
      icon: <LineChartOutlined />,
      label: "Sales & Marketing",
      menuList: [
        {
          key: "/all-leads",

          label: "List",
        },
      ],
    },
    {
      key: "/Accounting",
      icon: <TeamOutlined />,
      label: "Accounting",

      menuList: [
        {
          key: "/manager/add-manager",
          // onClick: () => history.push("/manager/add-manager"),
          label: "List",
        },
      ],
    },
    {
      key: "/Collection",
      icon: <TeamOutlined />,
      label: "Collection",

      menuList: [
        {
          key: "/Collection-list",
          // onClick: () => history.push("/manager/add-manager"),
          label: "List",
        },
      ],
    },
    {
      key: "/Analytics",
      icon: <TeamOutlined />,
      label: "Analytics",

      menuList: [
        {
          key: "/Analytics-list",
          // onClick: () => history.push("/manager/add-manager"),
          label: "List",
        },
      ],
    },
    {
      key: "/Support",
      icon: <TeamOutlined />,
      label: "Support",

      menuList: [
        {
          key: "/Support-list",
          // onClick: () => history.push("/manager/add-manager"),
          label: "List",
        },
      ],
    },
  ];

  /**MENU ENDS HERE */

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%" }}>
              <span
                onClick={() => history.push("/cb-assignment")}
                style={{
                  color: "#fff",
                  background: "silver",
                  padding: "0px 20px",
                  borderRadius: "15px",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              >
                VIDESH
              </span>
              <span>
                <UnorderedListOutlined
                  onClick={() => history.push("/cb-assignment")}
                  style={{
                    fontSize: "30px",
                    marginLeft: "70px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </div>
            <div style={{ width: "50%", textAlign: "center" }}>
              <span
                style={{
                  color: "#D2625E",
                  fontSize: "21px",
                  cursor: "pointer",
                }}
              >
                <YoutubeOutlined style={{ marginRight: "5px" }} />
                How It Works ?
              </span>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "right",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <Button
                  type="primary"
                  disabled
                  // onClick={onAddCategoryClick}
                >
                  <PlusCircleOutlined /> Add Job
                </Button>
              </div>
              <div>
                <Badge count={5}>
                  <BellOutlined style={{ fontSize: "25px" }} />
                </Badge>
              </div>
              <div>
                <span
                  style={{
                    background: "#7F7F7F",
                    color: "#fff",
                    padding: "14px 12px",
                    borderRadius: "50px",
                    fontWeight: 700,
                  }}
                >
                  DH
                </span>
              </div>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
            width={300}
            style={{ background: "#fff" }}
          >
            <Menu
              mode="inline"
              theme="dark"
              //defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0, background: "#184261" }}
            >
              {MenuItemsData.map((item, i) => (
                <SubMenu
                  //  icon={<UserOutlined />}
                  //  collapsed={collapsed}
                  key={item.key}
                  title={
                    <span
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      {item.icon} {item.label}
                    </span>
                  }
                >
                  {item.menuList.map((subItem, subI) => (
                    <Menu.Item onClick={subItem.onClick} key={subItem.key}>
                      <ProfileOutlined /> {subItem.label}
                    </Menu.Item>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                background: "#F5F8FA",
                // padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div>{props.children}</div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userAuth,
  };
};

export default withCookies(connect(mapStateToProps, { logoutUser })(MenuIndex));
