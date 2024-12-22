"use client"
import CardFeature from '@/components/common/CardFeature';
import useColor from '@/global/hooks/useColor';
import { CurrencyFormat } from '@/utils/helper/CurrencyFormat';
import { Form, Row, Col, Select, InputNumber, DatePicker, Button, Table, Input } from 'antd';
import dayjs from 'dayjs';
import React from 'react'
import { IoIosSearch } from 'react-icons/io';
import { SiGoogledocs } from 'react-icons/si';

const ReportPostFeature = () => {
  const { green } = useColor();

  const statusConst = [
    { label: "Tất cả", value: "", color: "" },
    { label: "Đã xử lý", value: true, color: green },
    { label: "Chưa xử lý", value: false, color: "red" },
  ]

  return (
    <CardFeature
      title='Báo cáo bài viết'
    >
      <>
        <Form
          layout='vertical'
          className='w-full'
        >
          {/* filter */}
          <Row gutter={16}>
            {/* status */}
            <Col xs={24} xl={4}>
              <Form.Item
                label={<span className='font-bold'>Trạng thái</span>}
              >
                <Select
                  placeholder='Trạng thái'
                  options={statusConst.map((item) => ({ label: item.label, value: item.value }))}
                />
              </Form.Item>
            </Col>
            {/* reporter's email */}
            <Col xs={24} xl={4}>
              <Form.Item
                label={<span className='font-bold'>Email báo cáo</span>}
              >
                <Input
                  placeholder='Email báo cáo'
                  type='email'
                />
              </Form.Item>
            </Col>
            {/* reported's post */}
            <Col xs={24} xl={4}>
              <Form.Item
                label={<span className='font-bold'>ID post bị báo cáo</span>}
              >
                <Input
                  placeholder='ID post bị báo cáo'
                />
              </Form.Item>
            </Col>
            {/* admin email */}
            <Col xs={24} xl={4}>
              <Form.Item
                label={<span className='font-bold'>Email admin</span>}
              >
                <Input
                  placeholder='Email admin'
                  type='email'
                />
              </Form.Item>
            </Col>
            {/* date */}
            <Col xs={24} xl={8}>
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
              title: "Email báo cáo",
              dataIndex: "reporter_email",
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
              title: "Admin",
              dataIndex: "admin_email",
              align: "center",
            },
            {
              title: "ID post bị báo cáo",
              dataIndex: "reported_post",
              align: "center",
            },
            {
              title: "Thời gian",
              dataIndex: "time",
              align: "center",
              render: (time: string) => dayjs(time).format("DD/MM/YYYY HH:mm:ss"),
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
              reporter_email: "RkX4o@example.com",
              status: true,
              admin_email: "admin1@example.com",
              time: "01/01/2023",
              reported_post: "09872b3o4i",
            },
            {
              id: "9h23458uh2",
              reporter_email: "ibuoier@example.com",
              status: false,
              time: "01/01/2023",
              reported_post: "nhkj23b23r",
            }
          ]}
          rowKey='id'
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50, 100],
            showTotal: (total) => <div className='font-bold absolute left-0'>Tổng: {total}</div>,
          }}
          scroll={{ x: "max-content" }}
        />
      </>
    </CardFeature>
  )
}

export default ReportPostFeature