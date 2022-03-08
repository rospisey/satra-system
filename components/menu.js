import {Menu} from "antd"
import {DashboardOutlined,UsergroupDeleteOutlined,ProfileOutlined,DownloadOutlined,CloudDownloadOutlined,UserOutlined,SettingOutlined} from "@ant-design/icons"

const {SubMenu} = Menu

export default function MenuView(){
    // handleClick = (e) => {
    //     console.log('click ', e);
    //   };
    return (
        <Menu 
        onClick={(e)=>{
            console.log('click',e)
        }}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline">
            <Menu.Item key="1" icon={<DashboardOutlined />} >Dashboard</Menu.Item>
            <Menu.Item key="2" icon={<UsergroupDeleteOutlined />}>Customers</Menu.Item>
            <Menu.Item key="3" icon={<ProfileOutlined />}>Items</Menu.Item>
            <Menu.Item key="4" icon={<DownloadOutlined />}>Suppliers</Menu.Item>
            <Menu.Item key="5" icon={<CloudDownloadOutlined />}>Receiving</Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>Employees</Menu.Item>
            <Menu.Item key="7" icon={<SettingOutlined />}>Setting</Menu.Item>
        </Menu>
    )
}