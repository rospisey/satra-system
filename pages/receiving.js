import { Breadcrumb } from "antd"
import { Content } from "antd/lib/layout/layout"


const Receiving = ( ) =>{
    return (
         <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content> 
    )
}

export default  Receiving