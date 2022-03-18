import { Menu } from "antd";
import {
    DashboardOutlined,
    UsergroupDeleteOutlined,
    ProfileOutlined,
    DownloadOutlined,
    CloudDownloadOutlined,
    UserOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
const { SubMenu } = Menu;

export default function MenuView() {
    // handleClick = (e) => {
    //     console.log('click ', e);
    //   };
    const router = useRouter();
    const { parentMenu } = router.query;
    // console.log(router.pathname)
    return (
        <Menu
            onClick={(e) => {
                console.log("click", e);
            }}
            style={{ width: 200 }}
            // defaultSelectedKeys={['1']}
            defaultSelectedKeys={router.pathname}
            // defaultOpenKeys={['sub1']}
            defaultOpenKeys={[parentMenu]}
            mode="inline"

        >
            <Menu.Item key="/" icon={<DashboardOutlined />}>
                <Link href="/?parentMenu=parent1" as="/">
                    <a>Deshboard</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="/customers" icon={<UsergroupDeleteOutlined />}>
                <Link href="/customers?parentMenu=parent1" as="/customers">
                    <a>Customers</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="/items" icon={<ProfileOutlined />}>
                <Link href="/items?parentMenu=parent1" as="/items">
                    <a>items</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="/suppliers" icon={<DownloadOutlined />}>
                <Link href="/suppliers?parentMenu=parent1" as="/suppliers">
                    <a>suppliers</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="/receiving" icon={<CloudDownloadOutlined />}>
                <Link href="/receiving?parentMenu=parent1" as="/receiving">
                    <a>Receiving</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="/employees" icon={<UserOutlined />}>

                <Link href="/employees?parentMenu=parent1" as="/employees">
                    <a>Employees</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="/setting" icon={<SettingOutlined />}>

                <Link href="/setting?parentMenu=parent1" as="/setting">
                    <a>Setting</a>
                </Link>
            </Menu.Item>
            
        </Menu>
    );
}

