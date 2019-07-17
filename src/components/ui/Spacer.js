import React from 'react';
import styled from 'styled-components';

const Spacer = ({ flex }) => {
  return (
    <div style={{display: 'flex', flex: flex}}></div>
  );
}

export default Spacer;
