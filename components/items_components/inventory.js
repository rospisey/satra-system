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
const FormInventory = () => {
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
                          label="Reorder Level"
                          name="reorderlevel"
                          
                          rules={[
                              {
                                  
                                  message: 'Please input your Cost Price (Without Tax)!',
                              },
                          ]}
                      >
                         <Input />
                      </Form.Item>
  
                      <Form.Item
                          label="Replenish Level"
                          name="replenishlevel"
                          rules={[
                              {
                                
                                  message: 'Please input your Selling Price!',
                              },
                          ]}
                      >
                          <Input />
                      </Form.Item>
  
                      <Form.Item
                          label="Days To Expiration"
                          name="daysToExpiration"
                          rules={[
                              {
                                  
                                  message: 'Please input your Level 1!',
                              },
                          ]}
                      >
                          <Input />
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
                          label="Current Quantity"
                          name="currentQuantity"
                          rules={[
                              {
                                  
                                  message: 'Please input your Level 2!',
                              },
                          ]}
                      >
                          <Input />
                      </Form.Item>
                      <Form.Item
                          label="Suspended Inventory"
                          name="suspendedInventory"
                          rules={[
                              {
                                  
                                  message: 'Please input your Level 3!',
                              },
                          ]}
                      >
                          <Input />
                      </Form.Item>
                      <Form.Item
                          label="Damaged Qty"
                          name="damagedQty"
                          rules={[
                              {
                                  
                                  message: 'Please input your Promo Price!',
                              },
                          ]}
                      >
                           <Input />
                      </Form.Item>
                      <Form.Item
                          label="Inventory To Add/Substract"
                          name="inventoryToAdd/Substract"
                          rules={[
                              {
                                  
                                  message: 'Please input your Promo Due Date!',
                              },
                          ]}
                      >
                          <Input />
                      </Form.Item>
                  </Form> 
      </div>
            
    )
  }

export default FormInventory