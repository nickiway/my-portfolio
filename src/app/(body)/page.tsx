'use client';
import Image from 'next/image';
import catImage from 'assets/images/mainPage/funny-portrait-british-shorthair-cat-isolated-transparent-background-png_1075135-346-removebg-preview.png';

import { Flex, Typography } from 'antd';

const { Title } = Typography;
export default function Home() {
  return (
    <Flex>
      <Image src={catImage} alt="cat" width={600} height={600} />
      <div>
        <Title>Hey!</Title>
        <Title level={2}>Wanna contact?</Title>
      </div>
    </Flex>
  );
}
