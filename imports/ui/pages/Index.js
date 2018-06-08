import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>โปรแกรมกองทุนหมู่บ้านพัฒนา</h2>
      <p>โปรแกรมออนไลน์ เข้าถึงง่าย ใช้สะดวก ลดความผิดพลาด ประหยัดเวลา เพิ่มประสิทธิภาพการบริหาร</p>
      <p>โปรแกรมนี้พัฒนาจากโครงการ Open Source ไลเซนส์ MIT ท่านสามารถคัดลอกและนำไปใช้พัฒนาได้ภายใต้ไลเซนส์เดียวกัน</p>
      <p><a className="btn btn-success" href="https://github.com/themeteorchef/base"
      role="button">themeteorchef/base</a></p>
      <p><a className="btn btn-success" href="https://github.com/knopsod/pattana"
      role="button">knopsod/pattana</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.15.0</p>
    </Jumbotron>
  </div>
);

export default Index;
