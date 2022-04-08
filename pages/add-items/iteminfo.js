import {
  DollarCircleOutlined,
  DollarOutlined,
  FileImageOutlined,
  HeatMapOutlined,
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
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

const { Step } = Steps;

import { useState } from "react";
import FormInventory from "../../components/items_components/inventory";
import FormItemInfo from "../../components/items_components/itemInfo";
import FormPricing from "../../components/items_components/pricing";
import FormVariation from "../../components/items_components/variation";
const steps = [
  {
    title: "Item Info",
    content: <FormItemInfo/>,
  },
  {
    title: "Variations",
    content: <FormVariation/>
  },
  {
    title: "Pricing",
    content: <FormPricing/>,
  },
  {
    title: "Inventory",
    content: <FormInventory/>,
  },
  {
    title: "Image",
    content: "Image",
  },
  {
    title: "Locations",
    content: "Locations",
  },
];

const AddNewItem = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (current) => {
    console.log("onChange:", current);
    // this.setState({ current });
    setCurrent(current);
  };

  // const { current } = this.state;

  return (
    <Content style={{ margin: "75px 10px 0 10px", backgroundColor: "white" }}>
      <PageHeader
        title="Add New Item"
        onBack={() => window.history.back()}
        breadcrumb={
          <Breadcrumb style={{ margin: "16px 0 0 16px" }}>
            <Breadcrumb.Item>
              <a href="/">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Items</Breadcrumb.Item>
          </Breadcrumb>
        }
        subTitle="This is a subtitle"
        extra={[
          <div>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        
      </div>
        ]}
      />
      <Steps
        size="small"
        current={current}
        onChange={onChange}
        style={{ padding: "16px 32px" }}
      >
        {/* <Step title="Item Info" icon={<UserOutlined />} />
                <Step title="Variations" icon={<SolutionOutlined />} />
                <Step title="Pricing" icon={<DollarOutlined />} />
                <Step title="Inventory" icon={<SmileOutlined />} />
                <Step title="Image" icon={<FileImageOutlined />} />
                <Step title="Locations" icon={<HeatMapOutlined />} /> */}
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <Content style={{ backgroundColor: "white" }}>
        {steps[current].content}
      </Content>
      {/* <div style={{ marginTop: "75px" }}>
        
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
      
    </Content>
  );
};



export default AddNewItem;

