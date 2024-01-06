import React from 'react';
import TopNavigation from '../navigations/TopNavigation';
import Footer from '../navigations/Footer';

const PasswordFacts = () => {
  const facts = [
    "More than 6 in 10 people admit to reusing passwords. (LastPass, 2022)",
    "The most common password is “123456.” (Reader’s Digest, 2023)",
    "27.5% of individuals state their oldest password is three to five years old. (Beyond Identity, 2021)",
    "18% of individuals use their pet’s name in their passwords. (Security.org, 2023)",
    "Only 12% of people always use unique passwords. (LastPass, 2022)",
    "96% of the most common passwords can be cracked by hacking tools in less than one second. (Digital Shadows, 2022)",
    "More than 1 in 4 individuals are unsure of when they changed their email password last. (PC Matic, 2022)",
    "64% of passwords only contain eight to 11 characters. (Security.org, 2023)",
    "Only 10% of consumers report using a password to log in to their social media accounts in the past 60 days. (FIDO Alliance, 2022)",
    "21% of individuals admit including their birth year in their password. (Security.org, 2023)",
    "Almost three-fourths of those who’ve tried to guess someone's password have been correct. (Beyond Identity, 2021)",
    "69% of the time, Gen Z uses a variation of a single password. (LastPass, 2022)",
    "Less than half of Americans strongly believe that their passwords are safe. (Security.org, 2023)",
    "1 in 10 individuals believe that someone could correctly guess their passwords just by looking at their social media accounts. (Beyond Identity, 2021)",
    "Nearly 40% of people admit sharing their personal passwords with others. (Security.org, 2023)",
    "89% of people realize that using the same password is a security risk, but only 12% of them switch passwords between accounts. (LastPass, 2022)",
    "Adding a single special character to a common 10-character password can increase the time it takes for hackers to crack your password by 1.5 hours. (Digital Shadows, 2022)",
    "13% of people use the exact same password for all of their accounts. (Google, 2019)",
    "Nearly 40% of individuals haven’t changed their Wi-Fi password since the day they set it up. (PC Matic, 2022)",
    "More than one-third of individuals admit they’d be embarrassed if they had to read their password aloud. (Beyond Identity, 2021)",
    "12% of people include their partner’s name in their passwords. (Security.org, 2023)",
    "13% of people admit that they put the same level of effort into creating passwords, no matter what type of account it is for. (LastPass, 2022)",
    "61% of those affected by password hacking had passwords that were shorter than eight characters. (Security.org, 2023)",
    "Less than 50% of individuals believe that the password to their music streaming account is secure. (Beyond Identity, 2021)",
    "Only 11% of consumers report using a password to log in to their streaming accounts in the past 60 days. (FIDO Alliance, 2022)",
    "10% of people have used the same password since middle or high school. (Beyond Identity, 2021)",
    "50% of IT leaders believe that passwords are too weak a security measure. (Ping Identity, 2022)",
    "2.2% of people report using a password that is over 21 years old. (Beyond Identity, 2021)",
    "Nearly one-fourth of individuals say they’d share their password with a roommate. (Beyond Identity, 2021)"
  ];

  return (
    <>
      <div className='gradient-background'>
        <TopNavigation />
        <div className="container mt-4">
          <h2 className="text-center text-white">Password Facts</h2>
          <p className="text-center mb-4 text-white">When it comes to creating a hack-proof password, strength is key. You should also create unique passwords 
          for each of your accounts and devices. To help you better understand the dangers of using a weak password, read through these weak password facts and 
          statistics:</p>

          <div className="row">
            {facts.map((facts, index) => (
              <div key={index} className="col-md-9 mx-auto mb-3 ">
                <div className="card bg-transparent shadow border-0">
                  <div className="card-body">
                    {/* <h5 className="card-title text-white">{stat.title}</h5> */}
                    <p className="card-text text-white">{facts}</p>
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


export default PasswordFacts;
