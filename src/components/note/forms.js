import React, { Component } from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
class Forms extends Component{
    render(){
        return <div>
            <Row type="flex" justify="center"  style={{margin:"10px 0 0 0"}}>
                <Col span={16}>
                <Input type="textarea" rows={4} />
                </Col>
            </Row>
            <Row type="flex" justify="center" style={{margin:"10px 0 0 0"}}>
                <Col><Button type="primary">提交</Button></Col>
            </Row>
        </div>
    }
}

export default Forms;