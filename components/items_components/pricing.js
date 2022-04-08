import { DollarCircleOutlined } from "@ant-design/icons";
import {
    Breadcrumb,
    Button,
    Checkbox,
    Form,
    Input,
    PageHeader,
    Steps,
    message,
    DatePicker
  } from "antd";
  import { Content } from "antd/lib/layout/layout";
  const { RangePicker } = DatePicker;
const FormPricing = () => {
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
                          label="Cost Price (Without Tax)"
                          name="costprice"
                          
                          rules={[
                              {
                                  required: true,
                                  message: 'Please input your Cost Price (Without Tax)!',
                              },
                          ]}
                      >
                          <Input prefix={<DollarCircleOutlined/>}/>
                      </Form.Item>
  
                      <Form.Item
                          label="Selling Price"
                          name="sellingprice"
                          rules={[
                              {
                                required: true,
                                  message: 'Please input your Selling Price!',
                              },
                          ]}
                      >
                          <Input prefix={<DollarCircleOutlined/>}/>
                      </Form.Item>
  
                      <Form.Item
                          label="Level 1"
                          name="level1"
                          rules={[
                              {
                                  
                                  message: 'Please input your Level 1!',
                              },
                          ]}
                      >
                          <Input prefix={<DollarCircleOutlined/>}/>
                      </Form.Item>
  
                      {/* <Form.Item
                          wrapperCol={{
                              offset: 8,
                              span: 16,
                          }}
                      >
                          <Button type="default" htmlType="submit">
                              Add category
                          </Button>
                      </Form.Item> */}

                      <Form.Item
                          label="Level 2"
                          name="level2"
                          rules={[
                              {
                                  
                                  message: 'Please input your Level 2!',
                              },
                          ]}
                      >
                          <Input prefix={<DollarCircleOutlined/>}/>
                      </Form.Item>
                      <Form.Item
                          label="Level 3"
                          name="level3"
                          rules={[
                              {
                                  
                                  message: 'Please input your Level 3!',
                              },
                          ]}
                      >
                          <Input prefix={<DollarCircleOutlined/>}/>
                      </Form.Item>
                      <Form.Item
                          label="Promo Price"
                          name="promoprice"
                          rules={[
                              {
                                  
                                  message: 'Please input your Promo Price!',
                              },
                          ]}
                      >
                          <Input prefix={<DollarCircleOutlined/>}/>
                      </Form.Item>
                      <Form.Item
                          label="Promo Due Date"
                          name="promoduedate"
                          rules={[
                              {
                                  
                                  message: 'Please input your Promo Due Date!',
                              },
                          ]}
                      >
                          <RangePicker />
                      </Form.Item>
                  </Form> 
      </div>
            
    )
  }

export default FormPricing