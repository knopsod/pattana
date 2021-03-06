import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>โปรแกรมกองทุนหมู่บ้านพัฒนา</h2>
      <p>เข้าถึงง่าย ใช้สะดวก ลดความผิดพลาด ประหยัดเวลา เพิ่มประสิทธิภาพการบริหาร</p>
      <p>พัฒนาจาก Open Source ไลเซนส์ MIT สามารถคัดลอกและนำไปใช้ภายใต้ไลเซนส์นี้</p>;
      <p><a className="btn btn-success" href="https://github.com/themeteorchef/base"
      role="button">GitHub: themeteorchef/base</a></p>
      <p><a className="btn btn-success" href="https://github.com/knopsod/pattana"
      role="button">GitHub: knopsod/pattana</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.15.0</p>
    </Jumbotron>
  </div>
);

export default Index;
