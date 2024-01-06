import React from 'react';
import TopNavigation from '../navigations/TopNavigation';
import Footer from '../navigations/Footer';

const PasswordTips = () => {
  const tips = [
    {
      heading: "Avoid using personal information:",
      description: "When creating a password, avoid using personal information like your name, birthday, or pet’s name."
    },
    {
      heading: "Use a unique password for every account: ",
      description: "Try to avoid using the same password for everything. That way, if a hacker finds one of your passwords, your other accounts will remain secure."
    },
    {
      heading: "Enable two-factor authentication: ",
      description: "Enabling 2FA wherever possible provides an additional layer of security between a hacker and your personal information."
    },
    {
      heading: "Don’t share your passwords: ",
      description: "To ensure your passwords never end up in the wrong hands, avoid carelessly sharing them with others."
    },
    {
      heading: "Increase your password length:",
      description: "By increasing the length of your passwords, you can make it harder for hackers to guess them. It’s recommended that you create a password longer than 16 characters."
    },
    {
      heading: "Avoid writing your passwords down: ",
      description: "If you keep all your passwords written down on paper, your online security could be jeopardized if it ends up in the wrong hands."
    },
    {
      heading: "Use special characters and numbers: ",
      description: "By sprinkling in numbers and special characters, you can create more secure passwords that are harder to crack."
    },
    {
      heading: "Avoid using common words and phrases: ",
      description: "Instead of using common words and phrases, use random patterns to help protect your passwords from hacking methods like dictionary attacks."
    },
    {
      heading: "Regularly monitor your accounts: ",
      description: "Always keep an eye out for any suspicious activity or login alerts that may be a result of a compromised password."
    },
    {
      heading: "Change your passwords regularly:  ",
      description: "To maximize your security, it is recommended that you change your passwords every few months to ensure you’re staying ahead of any hackers or potentially unknown data breaches."
    },
    {
      heading: "Start using a password manager:  ",
      description: "Password managers are a great way to help you safely keep track of all your unique passwords. In some cases, a password manager may also help you ideate strong passwords."
    }
  ];

  return (
    <>
      <div className='gradient-background'>
        <TopNavigation></TopNavigation>
        <div className="container mt-4">
          <h2 className="text-center text-white">Password Tips</h2>
          <p className="text-center mb-4 text-white">To help ensure you’re doing the best you can to increase your Cyber Safety, follow these password security best practices:</p>


          <div className="row">
            {tips.map((tip, index) => (
              <div key={index} className="col-md-6 mx-auto mb-3 ">
                <div className="card bg-transparent shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title text-white">Tip {index + 1}</h5>
                    <h5 className="card-subtitle mb-2 text-white">{tip.heading}</h5>
                    <p className="card-text text-white">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default PasswordTips;
