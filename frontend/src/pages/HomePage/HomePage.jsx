import React, { useEffect, useState } from 'react';
import Counter from '../../components/Counter/Counter';
import axios from 'axios';

const HomePage = () => {
  const name = 'Prajwal';

  return (
    <div>
      <Counter name={name} />
    </div>
  );
};

export default HomePage;
