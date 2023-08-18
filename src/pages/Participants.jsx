import List from './../components/List';
import Empty from './../components/Empty';
import Loader from '../components/Loader';
import NoteService from '../services/ParticipantService';
import { useState } from 'react';


const Participants = () => {

  const [load, setLoad] = useState(false); // [false, function
  const [participants, setParticipants] = useState();
  const getAll = participants => {
    setParticipants(participants);
  };

  const loader = (load) => {
    setLoad(load);
  };
  

  return (
    <>
      <div className="row">
        <div className="col">
          <List participants= {participants} getAll = {getAll} loader={loader}/>
          <Empty notes={participants} />
          {load && <Loader />}

        </div>
      </div>
    </>
  );
};

export default Participants;
