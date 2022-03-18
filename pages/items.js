import { BellOutlined, ColumnHeightOutlined, DownOutlined, FullscreenOutlined, PlusCircleFilled, PlusOutlined, QuestionCircleOutlined, ReloadOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Dropdown, Menu, PageHeader, Row, Table, } from "antd"
import ButtonGroup from "antd/lib/button/button-group";
import Search from "antd/lib/input/Search"
import { Content } from "antd/lib/layout/layout"

const onSearch = value => console.log(value);
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '5',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '6',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '7',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '8',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '9',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '10',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

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
const Items = () => {
  return (
    <Content style={{ margin: '75px 10px 0 10px', backgroundColor: 'white' }}>
      <PageHeader

        title="All Items"
        onBack={() => window.history.back()}
        breadcrumb={<Breadcrumb style={{ margin: '16px 0 0 16px' }}>
          <Breadcrumb.Item>
            <a href="/">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Items</Breadcrumb.Item>
        </Breadcrumb>}
        subTitle="This is a subtitle"
        extra={[





        ]}
      />
      <Row justify='space-between'>
        <Col span={4} style={{margin: "0 48px"}}>
          <Dropdown overlay={menu} >
            <a onClick={e => e.preventDefault()}>
              Filter <DownOutlined />
            </a>
          </Dropdown>,
        </Col>
        <Col span={14}>
          <Row justify="center" >
            <Col flex={3}>
              <Search placeholder="input search text" allowClear onSearch={onSearch} enterButton style={{ width: 200 }} />

            </Col>
            <Col flex={3}>
              <Button key="1" type="default">
                View log
              </Button>
            </Col>
            <Col flex={3}>
              <Button key="2" type="primary" icon={<PlusOutlined />}>
                Add Items
              </Button>
            </Col>
            <Col flex={3}>
              <Button icon={<ReloadOutlined/>}/>
              <Button icon={<ColumnHeightOutlined/>}/>
              <Button icon={<SettingOutlined/>}/>
              <Button icon={<FullscreenOutlined/>}/>
              
            </Col>

          </Row>
        </Col>
      </Row>
      <Table dataSource={dataSource} columns={columns} style={{ margin: '16px 0 0 16px' }} />;
    </Content>
  )
}

export default Items