import { proxy, useSnapshot } from 'valtio';
import { saveInfo } from './api';

const state = proxy({
  count: 0,
  setCount: (count: number) => {
    state.count = count;
  },
  inc: () => {
    state.count++;
  },
  onClick: async () => {
    await saveInfo();
    state.inc();
  }
});

export default function App() {
  const snap = useSnapshot(state);

  return (
    <>
      <h1>Count: {snap.count}</h1>
      <button onClick={snap.onClick}>+ 1</button>
    </>
  );
}