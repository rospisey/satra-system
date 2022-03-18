import { BellOutlined, DownOutlined, QuestionCircleOutlined, SearchOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Avatar, Button } from 'antd';
import MenuView from './menu';

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutView({ children }) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <Layout hasSider >
      <Sider width={200} style={{
        backgroundColor: 'white', overflow: 'auto',
        position: 'fixed', left: 0,
        top: 0,
        bottom: 0,
      }}>
        <div style={{ height: '32px', margin: '16px', backgroundColor: 'white' }} />
        <MenuView />
      </Sider>
    
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{
            borderBottomWidth:"1px",borderBottomColor:"#e9ebf0",
            padding: 0, backgroundColor: 'white', position: 'fixed', zIndex: 1000, width: 'calc(100% - 200px)',
          }} >
            <Row justify='space-between'>
              <Col span={8}>col-8</Col>
              <Col span={8}>
                <Row justify="center" >
                  <Col flex={3}>
                    <SearchOutlined />
                  </Col>
                  <Col flex={3}>
                    <QuestionCircleOutlined />
                  </Col>
                  <Col flex={3}>
                    <BellOutlined />
                  </Col>
                  <Col flex={3}>
                    <Dropdown overlay={menu}>
                      <Button>
                        <TranslationOutlined />
                      </Button>
                    </Dropdown>
                    {/* <TranslationOutlined>
                  <Dropdown.Button overlay={menu}  >
                  </Dropdown.Button>
                  </TranslationOutlined> */}

                  </Col>
                  <Col flex={3}>
                    <Avatar icon={<UserOutlined />} />
                  </Col>

                  <Col flex={6}>

                    <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Ros Pisey <DownOutlined />
                      </a>
                    </Dropdown>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Header>
          {children}
          {/* <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content> */}
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
    
    </Layout>
  )
}