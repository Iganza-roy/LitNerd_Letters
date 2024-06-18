import React from 'react';
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Panel from '../components/Panel';
import { Link } from 'react-router-dom';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="logo" />
        <div className="user">
          <img src='https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=' alt="" />
          <div className="info">
            <span>Major</span>
            <p>Posted 5 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src= {Edit} alt="edit" />
            </Link>
            <img src= {Delete} alt="delete" />
          </div>
        </div>
        <h1>OP-ED: Leapfrogging? No shortcuts on the road to progress Professor Calestous Juma's legacy challenges</h1>
        <p>
          <p>Remembering the late Calestous Juma FRS HonFREng (9 June 1953 – 15 December 2017) is to recall a Kenyan scientist and academic luminary whose contributions to sustainable development left an indelible mark. </p>
          <p>Named one of the most influential Africans multiple times by New African magazine, Juma held the esteemed position of Professor of the Practice of International Development and served as Faculty Chair of the Innovation for Economic Development Executive Program at the Harvard Kennedy School.</p>
          <p>Globally recognised, Juma was elected to prestigious institutions such as the Royal Society of London, the US National Academy of Sciences, and the UK Royal Academy of Engineering, among others. His academic legacy includes the often-referenced book "Innovation and Its Enemies: Why People Resist New Technologies," published by Oxford University Press in 2016.</p>

          <p>Globally recognised, Juma was elected to prestigious institutions such as the Royal Society of London, the US National Academy of Sciences, and the UK Royal Academy of Engineering, among others. His academic legacy includes the often-referenced book "Innovation and Its Enemies: Why People Resist New Technologies," published by Oxford University Press in 2016.</p>

          <p>Globally recognised, Juma was elected to prestigious institutions such as the Royal Society of London, the US National Academy of Sciences, and the UK Royal Academy of Engineering, among others. His academic legacy includes the often-referenced book "Innovation and Its Enemies: Why People Resist New Technologies," published by Oxford University Press in 2016.</p>
        </p>
      </div>
      <Panel />
    
    </div>
  )
}

export default Single
