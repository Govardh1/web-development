import React from "react";
import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { jobsAtom, messageAtom, networkAtom, notificationsAtom, totalCountSelector } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const NetworkNotificationCount = useRecoilValue(networkAtom);
  const JobsAtomCount=useRecoilValue(jobsAtom)
  const NotificationsAtomCount=useRecoilValue(notificationsAtom)
  const MessageCount=useRecoilValue(messageAtom)
  const totalselectorCount=useRecoilValue(totalCountSelector)
  return (
    <div>
      <button>Home</button>
      <button>
        My Network ({NetworkNotificationCount >= 100 ? "99+" : NetworkNotificationCount})
      </button>
      <button>Jobs ({JobsAtomCount})</button>
      <button>Notifications ({NotificationsAtomCount})</button>
      <button>messages ({MessageCount})</button>
      <button>Me ({totalselectorCount})</button>
    </div>
  );
}

export default App;
