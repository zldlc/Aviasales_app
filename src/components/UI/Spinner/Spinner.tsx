import React, { FC } from 'react';

import { Spin, Flex } from 'antd';

import './Spinner.scss';

const Spinner: FC = () => {
  return (
    <Flex justify="center" align="center" className="main__spinner-wrapper">
      <Spin size="large" className="spin"></Spin>
    </Flex>
  );
};

export default Spinner;
