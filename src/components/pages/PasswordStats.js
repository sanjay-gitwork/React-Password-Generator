import React from 'react';
import TopNavigation from '../navigations/TopNavigation';
import Footer from '../navigations/Footer';

const PasswordStats = () => {
  const stats = [
    {
      title: "Password Manager Users",
      description: "45 million people rely on password managers to keep track of their passwords. (Security.org, 2023)"
    },
    {
      title: "Behavior Change After Account Takeover",
      description: "More than three-fourths of individuals changed how they managed their passwords after being affected by an account takeover. (Ponemon Institute, 2020)"
    },
    {
      title: "Password Management Methods",
      description: "Nearly two-thirds of internet users keep track of their passwords by memory or with handwritten notes. (Security.org, 2023)"
    },
    {
      title: "Password Reuse for Master Passwords",
      description: "1 in 4 internet users reuse their password manager’s master password for other accounts. (Security.org, 2023)"
    },
    {
      title: "Primary Use of Password Managers",
      description: "Nearly 35% of password manager users state that their primary use is to ensure they are using unique passwords across different accounts. (SANS, 2021)"
    },
    {
      title: "Millennials' Password Memorization",
      description: "47% of millennials are more likely to memorize their passwords. (LastPass, 2022)"
    },
    {
      title: "Password Manager Usage on Phones",
      description: "Nearly 85% of internet users who use a password manager use it on their phone. (Security.org, 2023)"
    },
    {
      title: "Usage of Password Manager for Personal Accounts",
      description: "Half of password manager users use it for only their personal accounts. (Security.org, 2023)"
    },
    {
      title: "Usage of Documents for Password Management",
      description: "Almost 1 in 4 people rely on a document on their computer to manage all of their passwords. (Bitwarden, 2022)"
    },
    {
      title: "Preference for Free Password Managers",
      description: "Nearly 70% of password manager users use free password managers. (Security.org, 2023)"
    },
    {
      title: "Spending on Password Managers",
      description: "1 in 10 password manager users spend $1-$20 a year on their password manager. (Security.org, 2023)"
    },
    {
      title: "Organizational Requirement for Password Managers",
      description: "Less than 40% of organizations require the use of a password manager. (Ponemon Institute, 2020)"
    },
    {
      title: "Dual Usage of Password Managers",
      description: "46% of password manager users use it for both personal and work accounts. (Security.org, 2023)"
    },
    {
      title: "Usage of Password Management Tools for Access",
      description: "Roughly 3 in 10 password manager users use password management tools to ensure they have easy access to their passwords. (SANS, 2021)"
    },
    {
      title: "Concerns About Safety of Password Managers",
      description: "28% of those who don’t use password managers believe they are unsafe. (Security.org, 2023)"
    },
  ];

  return (
    <>
      <div className='gradient-background'>
        <TopNavigation />
        <div className="container mt-4">
          <h2 className="text-center text-white">Password Statistics</h2>
          <p className="text-center mb-4 text-white">From password managers to sticky notes, people use a variety of methods to 
          help keep track of their passwords. To help you see how the masses are managing their passwords, 
          check out these password management statistics:</p>

          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-9 mx-auto mb-3 ">
                <div className="card bg-transparent shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title text-white">{stat.title}</h5>
                    <p className="card-text text-white">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PasswordStats;
