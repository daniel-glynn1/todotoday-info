import React from 'react';

import '../styles/privacypolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className='privacypolicyOuter'>
      <div className='privacypolicy'>
        <h2 className='privacyTitle'>Privacy Policy for Todo Today - Habit Tracker</h2>
        <p>This Privacy Policy outlines how we collect, use, and protect information when you use our iOS application.</p>
        <h3>Information We Collect</h3>
        <p>We do not store or collect any of your data. Any data you save on Todo Today is stored locally on your device and stays there.</p>
        <h3>Third Party Services</h3>
        <p>We do not use any third party services that collect information.</p>
        <h3>User Control</h3>
        <p>You have control over your data. To delete all your data, go to the Settings tab within the app, and press the 'Delete All Data' button. Additionally, you may delete the data related to each individual task/habit you are tracking. To do this, go to Settings, press the 'Edit tasks' button, then press the trash icon next to the task you wish to delete data for. </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <h3>Contact Information</h3>
        <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href='mailto:help.todotoday@gmail.com'>help.todotoday@gmail.com</a></p>
        <p>Effective Date: November 17, 2023</p>
      </div>
      <div className='smallFooter'>
        <p className='privacyName'>Daniel Glynn</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;