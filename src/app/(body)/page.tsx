'use client';
// import Image from 'next/image';
import bg from 'assets/images/mainPage/1655475655_17-06-2022-19_19_10.webp';

import { Typography } from 'antd';

import 'styles/global.css';
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <main>
      <div className="feed__container ">
        <Title>Welcome!</Title>
        <Paragraph>I am Nick Shkitak, lets connect :3</Paragraph>
      </div>
    </main>
  );
}
