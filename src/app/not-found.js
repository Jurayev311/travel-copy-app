import React from 'react';
import { Button, Result } from 'antd';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Result
        status="404"
        title={<h1 style={{ fontSize: '38px' }}>404</h1>}
        subTitle={<p style={{ fontSize: '18px' }}>Sorry, the page you visited does not exist.</p>}
        extra={
          <Link href="/">
            <Button type="primary" size="middle">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;