import React from 'react';
import { connect } from 'react-redux';
import { addCount, removeCount } from '../../redux/index';

import styled from 'styled-components';

const CounterButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin-bottom: 20px;
`;

const CounterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
  margin: 0 10px;
  /* width: 200px; */
  /* height: 50px; */
  color: white;
  border: none;
  border-radius: 20px;
  /* font-size: 48px; */
  background-color: #ffaebc;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #a0e7e5;
  }
`;

const CounterBtn = (props) => {
  const { addCount, removeCount } = props;
  const handleAddCount = () => {
    addCount();
  };
  const handleRemoveCount = () => {
    removeCount();
  };
  return (
    <CounterButtonWrap>
      <CounterButton onClick={handleAddCount}>+</CounterButton>
      <CounterButton onClick={handleRemoveCount}>-</CounterButton>
    </CounterButtonWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counteReducer.count
  };
};
const mapDispatchToProps = {
  addCount,
  removeCount
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterBtn);
