import { useState } from 'react';
import "antd/dist/antd.css";
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { DeleteFilled, DownOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import logo from './logo.svg';
import './App.css';

function App() {

  const { Option } = Select;
  const { TextArea } = Input;

  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 }, 
    },
  };

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };

  return (
    <div className="App">
      <main className='app-wrapper'>
        <header className='app-header'>
        </header>
        <Drawer
          title="Create a new invoice"
          width={720}
          placement='left'
          onClose={closeDrawer}
          visible={open}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form layout='vertical' hideRequiredMark>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="street address"
                  label="Street Address"
                  rules={[{ required: true, message: "Address Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
            </Row>
              
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[{ required: true, message: "City Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="zip code"
                  label="Zip Code"
                  rules={[{ required: true, message: "Zip Code Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="country"
                  label="Country"
                  rules={[{ required: true, message: "Country Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="client name"
                  label="Client Name"
                  rules={[{ required: true, message: "Client Name Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="client email"
                  label="Client Email"
                  rules={[{ required: true, message: "Client Email Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="client street address"
                  label="Client Street Address"
                  rules={[{ required: true, message: "Client Address Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="client city"
                  label="Client City"
                  rules={[{ required: true, message: "Client City Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="client zip code"
                  label="Client Zip Code"
                  rules={[{ required: true, message: "Client Zip Code Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="client country"
                  label="Client Country"
                  rules={[{ required: true, message: "Client Country Required" }]}
                >
                  <Input style={{ padding: '12px 16px' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="invoice date"
                  label="Invoice Date"
                  rules={[{ required: true, message: "Invoice Date Required" }]}
                >
                  <DatePicker.RangePicker 
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="payment due"
                  label="Payment Due"
                  rules={[{ required: true, message: "Payment Due Required" }]}
                >
                  <Select placeholder="Payment Terms">
                    <Option value="7 days">7 Days</Option>
                    <Option value="14 days">14 Days</Option>
                    <Option value="30 days">30 Days</Option>
                    <Option value="90 days">90 Days</Option>
                    <Option value="180 days">180 Days</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="job description"
                  label="Job Description"
                  rules={[{ required: true, message: "Job Description Required" }]}
                >
                  <TextArea style={{ padding: '12px 16px' }} rows={3} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.List name="items">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                          <Form.Item
                            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                            label={index === 0 ? 'Item Name' : ''}
                            required={false}
                            key={field.key}
                            className='addon-item'
                          >
                            <Input style={{ padding: '12px 16px' }} />
                            {fields.length > 1 ? (
                              <DeleteFilled
                                className='dynamic-delete-button'
                                onClick={() => remove(field.name)}
                              />
                            ) : null}
                          </Form.Item>
                      ))}
                      
                      <Form.Item>
                        <Button type='dashed' onClick={() => add()} block icon={<PlusOutlined />}>
                          Add New Item
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                <Form.Item>
                  <Button type='primary' htmlType='submit'>
                    Save
                  </Button>
                </Form.Item>
              </Col>
            </Row>

          </Form>
          <div className='drawer-footer'></div>
        </Drawer>
      
        <section className='invoice-container'>
          <header className='invoice-header'>
            <div className='invoice-info'>
              <h1>Invoices</h1>
              <span>Invoice count</span>
            </div>
            <div className='invoice-filter'>
              <span className='filter-button' style={{ fontWeight: 700 }}>Filter by status<DownOutlined  style={{ marginLeft: '0.5rem' }}/></span>
            </div>
            <Button id="drawer-button" type='primary' onClick={openDrawer} icon={<PlusOutlined />}>New Invoice</Button>
          </header>
        </section>

      </main>
    </div>
    
  );
}

export default App;
