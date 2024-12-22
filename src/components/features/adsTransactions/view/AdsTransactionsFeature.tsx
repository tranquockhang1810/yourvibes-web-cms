"use client"
import CardFeature from '@/components/common/CardFeature'
import useColor from '@/global/hooks/useColor'
import { CurrencyFormat } from '@/utils/helper/CurrencyFormat'
import { Button, Col, ConfigProvider, DatePicker, Form, Input, InputNumber, Row, Select, Table } from 'antd'
import dayjs from 'dayjs'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { SiGoogledocs } from 'react-icons/si'

const AdsTransactionsFeature = () => {
  const { green } = useColor();

  const statusConst = [
    { label: "Tất cả", value: "", color: "" },
    { label: "Hoàn thành", value: true, color: green },
    { label: "Thất bại", value: false, color: "red" },
  ]

  return (
    <CardFeature
      title='Lịch sử giao dịch quảng cáo'
    >
      <Form
        layout='vertical'
        className='w-full'
      >
        {/* filter */}
        <Row gutter={16}>
          {/* status */}
          <Col xs={24} lg={4}>
            <Form.Item
              label={<span className='font-bold'>Trạng thái</span>}
            >
              <Select
                placeholder='Trạng thái'
                options={statusConst.map((item) => ({ label: item.label, value: item.value }))}
              />
            </Form.Item>
          </Col>
          {/* post ID */}
          <Col xs={24} lg={4}>
            <Form.Item
              label={<span className='font-bold'>ID bài viết</span>}
            >
              <Input
                placeholder='ID bài viết'
              />
            </Form.Item>
          </Col>
          {/* email */}
          <Col xs={24} lg={4}>
            <Form.Item
              label={<span className='font-bold'>Email</span>}
            >
              <Input
                placeholder='Email'
                type='email'
              />
            </Form.Item>
          </Col>
          {/* fromPrice */}
          <Col xs={24} lg={4}>
            <Form.Item
              label={<span className='font-bold'>Giá thấp nhấp</span>}
            >
              <InputNumber
                placeholder='Giá thấp nhấp'
                step={1000}
                min={1000}
                addonAfter="₫"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          {/* toPrice */}
          <Col xs={24} lg={4}>
            <Form.Item
              label={<span className='font-bold'>Giá cao nhất</span>}
            >
              <InputNumber
                placeholder='Giá cao nhất'
                step={1000}
                min={1000}
                addonAfter="₫"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          {/* date */}
          <Col xs={24} lg={4}>
            <Form.Item
              label={<span className='font-bold'>Thời gian</span>}
            >
              <DatePicker.RangePicker
                style={{ width: '100%' }}
                format='DD/MM/YYYY'
                disabledDate={(current) => current && current > dayjs()}
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
            >
              <Button
                icon={<IoIosSearch />}
                type='primary'
                className='w-full'
                htmlType='submit'
              >
                Tra cứu
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        columns={[
          {
            title: "STT",
            align: "center",
            render: (_, __, index) => index + 1,
            width: "6%"
          },
          {
            title: "ID giao dịch",
            dataIndex: "id",
            align: "center",
          },
          {
            title: "Email",
            dataIndex: "email",
            align: "center",
          },
          {
            title: "Trạng thái",
            dataIndex: "status",
            align: "center",
            render: (value: string) => {
              const status = statusConst.find((item) => item.value === value);
              return <span style={{ color: status?.color }} className='font-bold'>{status?.label}</span>;
            }
          },
          {
            title: "Phương thức",
            dataIndex: "method",
            align: "center",
          },
          {
            title: "Thời gian",
            dataIndex: "time",
            align: "center",
            render: (time: string) => dayjs(time).format("DD/MM/YYYY HH:mm:ss"),
          },
          {
            title: "Tổng tiền",
            dataIndex: "price",
            align: "center",
            render: (price: number) => <span style={{ color: green }} className='font-bold'>{CurrencyFormat(price)}</span>,
          },
          {
            title: "Chi tiết",
            align: "center",
            render: () => <Button
              icon={<SiGoogledocs />}
              shape='circle'
              type='primary'
              ghost
              onClick={() => { }}
            />,
          }
        ]}
        dataSource={[
          {
            id: "123kjlfasd",
            email: "RkX4o@example.com",
            status: true,
            method: "MOMO",
            time: "01/01/2023",
            price: 10000
          },
          {
            id: "9h23458uh2",
            email: "ibuoier@example.com",
            status: false,
            method: "MOMO",
            time: "01/01/2023",
            price: 20000
          }
        ]}
        rowKey='id'
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50, 100],
          showTotal: (total) => <div className='font-bold absolute left-0'>Tổng giao dịch: {total}</div>,
        }}
        scroll={{ x: "max-content" }}
      />
    </CardFeature>
  )
}

export default AdsTransactionsFeature