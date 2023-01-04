import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import UserOptionView from './UserOptionView';

const UserOptionIndex = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <section className='main-section' >
      <nav className='second-nav'>
        <div className="nav-wrapper second-nav-item">
          <ul className="right">
            <li><i >اطلاعات وام</i></li>

            <li><i onClick={() => navigate('/userspecification',
              { state:{ personalInfo: location.state}})}
              >اطلاعات تکمیلی</i></li>

            <li><i onClick={() => navigate('/useraddress',
              { state:{ personalInfo: location.state}})}
            >مشخصات محل سکونت</i></li>

            <li><i href="sass.html">اطلاعات پرسنل نظامی</i></li>
          </ul>
        </div>
      </nav>
      <UserOptionView />
    </section>
  );
}

export default UserOptionIndex;