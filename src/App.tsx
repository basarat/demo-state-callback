import { proxy, useSnapshot } from 'valtio';
import { saveInfo } from './api';

const state = proxy({
  count: 0,
  setCount: (count: number) => {
    state.count = count;
  },
  inc: () => {
    state.count++;
  }
});

export default function App() {
  const snap = useSnapshot(state);

  async function onClick() {
    await saveInfo();
    state.inc();
  }

  return (
    <>
      <h1>Count: {snap.count}</h1>
      <button onClick={onClick}>+ 1</button>
    </>
  );
}