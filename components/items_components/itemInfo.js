import {
    Breadcrumb,
    Button,
    Checkbox,
    Form,
    Input,
    PageHeader,
    Steps,
    message
  } from "antd";
  import { Content } from "antd/lib/layout/layout";

const FormItemInfo = () => {
    return (
        
      <div>
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
                    //   onFinish={}
                    //   onFinishFailed={}
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
      </div>
            
    )
  }

export default FormItemInfo