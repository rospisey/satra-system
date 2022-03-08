import { BellOutlined, DownOutlined, QuestionCircleOutlined, SearchOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Avatar, } from 'antd';
import MenuView from './menu';

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutView() {
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
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={256} style={{ backgroundColor: 'white' }}>
        <div style={{ height: '32px', margin: '16px', backgroundColor: 'white' }} />
        <MenuView />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: 'white' }} >
          <Row justify='space-between'>
            <Col span={8}>col-8</Col>
            <Col span={6}>
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
                  <Avatar icon={<UserOutlined />} />
                </Col>
                <Col flex={8}>

                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Ros Pisey <DownOutlined />
                    </a>
                  </Dropdown>
                </Col>
                <Col flex={4}>
                  <Dropdown.Button overlay={menu} placement="bottomRight" icon={<TranslationOutlined />}>
                  </Dropdown.Button>

                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}