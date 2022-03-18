import { Breadcrumb, PageHeader } from "antd"
import { Content } from "antd/lib/layout/layout"


const AddItem = () => {
    return (
        <Content style={{ margin: '75px 10px 0 10px', backgroundColor: 'white' }}>
            <PageHeader

                title="Add New Item"
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
        </Content>
    )
}


export default AddItem