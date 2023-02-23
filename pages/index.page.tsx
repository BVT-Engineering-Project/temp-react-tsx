import { Layout, Text } from '@ui';
import { useAuthAction } from '@hooks';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import { decrement, increment } from 'redux/reducers/counter/counterSlice';

function HomePage() {
  const auth = useAuthAction();
  const { login } = auth;
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Layout title="Ini title" description="Ini deskripsi">
      <>
        <Text
          label="First Name"
          name="firstName"
          value={''}
          onChange={() => {}}
        />
        <div>Welcome to Next.js!</div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </>
    </Layout>
  );
}

export default HomePage;
