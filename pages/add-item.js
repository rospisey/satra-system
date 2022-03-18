import { DollarCircleOutlined, DollarOutlined, FileImageOutlined, HeatMapOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Checkbox, Form, Input, PageHeader, Steps } from "antd"
import { Content } from "antd/lib/layout/layout";

const { Step } = Steps;

const AddNewItem = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
            <Steps size="small" current={1} style={{ padding: "16px 32px" }}>
                <Step status="process" title="Item Info" icon={<UserOutlined />} />
                <Step status="wait" title="Variations" icon={<SolutionOutlined />} />
                <Step status="wait" title="Pricing" icon={<DollarOutlined />} />
                <Step status="wait" title="Inventory" icon={<SmileOutlined />} />
                <Step status="wait" title="Image" icon={<FileImageOutlined />} />
                <Step status="wait" title="Locations" icon={<HeatMapOutlined />} />
            </Steps>
            <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    
                >
                    <Form.Item
                        label="Item Name"
                        name="itemName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Item Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Barcode Name"
                        name="barcodeName"
                        rules={[
                            {
                                
                                message: 'Please input your Barcode Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Category!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="default" htmlType="submit">
                            Add category
                        </Button>
                    </Form.Item>
                    <Form.Item
                        label="Supplier"
                        name="supplier"
                        rules={[
                            {
                                
                                message: 'Please input your Supplier!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="UPC/EAN/ISBN"
                        name="code"
                        rules={[
                            {
                                
                                message: 'Please input your UPC/EAN/ISBN!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Product ID"
                        name="productID"
                        rules={[
                            {
                                
                                message: 'Please input your Product ID!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Tags"
                        name="tags"
                        rules={[
                            {
                                
                                message: 'Please input your Tags!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
        </Content>
    )
}


export default AddNewItem