import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCount, removeCount } from '../../redux/index';

// components
import CounterBtn from './CounterBtn';

import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CounterTitle = styled.h2`
  margin-bottom: 20px;
`;

const Counter = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <CounterContainer>
        <CounterTitle>현재 카운트 값 : {props.count}</CounterTitle>
        <CounterBtn />
        <input type='text' value={number} onChange={(e) => setNumber(e.target.value)}></input>
      </CounterContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counteReducer.count
  };
};
const mapDispatchToProps = {
  // addCount,
  // removeCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
