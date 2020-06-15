import React from 'react';
import { SkeletonCard } from './../SkeletonCard';
import './index.css';

const Application = () => (
  <div
    className='application'
    id='cm-poc'
    style={{
      display: 'flex',
      'flex-direction': 'column',
      width: '100%',
      height: '100%'
    }}
  >
    <div className='application-title'>
      <h1>Cluster Manager</h1>
    </div>
    <div className='content'>
      <div>
        {[1, 2, 3, 4, 5].map((id) => (
          <SkeletonCard id={id} />
        ))}
      </div>
    </div>
  </div>
);

export default Application;
