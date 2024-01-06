import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordGenerator = () => {
  const [passwords, setPasswords] = useState([]);
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [excludeSimilarChars, setExcludeSimilarChars] = useState(false);
  const [numPasswords, setNumPasswords] = useState(1);
  const [customIncludeChars, setCustomIncludeChars] = useState('');
  const [customExcludeChars, setCustomExcludeChars] = useState('');
  const [customName, setCustomName] = useState('');

  const generatePassword = () => {
    const charsets = [
      { label: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', enabled: includeUppercase },
      { label: 'abcdefghijklmnopqrstuvwxyz', enabled: includeLowercase },
      { label: '0123456789', enabled: includeNumbers },
      { label: '!@#$%^&*()-=_+[]{}|;:,.<>?', enabled: includeSpecialChars },
      { label: 'iIl1oO0', enabled: !excludeSimilarChars },
      { label: customIncludeChars, enabled: customIncludeChars !== '' },
    ];

    const selectedCharsets = charsets
      .filter((charset) => charset.enabled)
      .map((charset) => charset.label)
      .join('');

    let generatedPasswords = [];
    for (let j = 0; j < numPasswords; j++) {
      let generatedPassword = '';

      // Include custom name in the password
      generatedPassword += customName;

      for (let i = 0; i < length - customName.length; i++) {
        const randomChar = selectedCharsets.charAt(Math.floor(Math.random() * selectedCharsets.length));
        generatedPassword += randomChar;
      }
      generatedPasswords.push(generatedPassword);
    }

    setPasswords(generatedPasswords);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="container mt-5 ">
      <div className="card p-4 border-0 shadow bg-transparent">

        <h2 className="mb-4 text-center text-white">Instantly generate a secure, random password <br/>with the PassGen online tool</h2>

        <div className="mb-3">
          <label className="form-label text-white">Password Length:</label>
          <input
            type="number"
            className="form-control bg-transparent border-0 shadow"
            value={length}
            onChange={(e) => setLength(Math.max(1, parseInt(e.target.value, 10)))}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input bg-transparent border-0 shadow"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <label className="form-check-label text-white">Include Uppercase</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input bg-transparent border-0 shadow "
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          <label className="form-check-label text-white">Include Lowercase</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input bg-transparent border-0 shadow"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <label className="form-check-label text-white">Include Numbers</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input bg-transparent border-0 shadow"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          <label className="form-check-label text-white">Include Special Characters</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input bg-transparent border-0 shadow"
            checked={excludeSimilarChars}
            onChange={() => setExcludeSimilarChars(!excludeSimilarChars)}
          />
          <label className="form-check-label text-white">Exclude Similar Characters</label>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Custom Include Characters:</label>
          <input
            type="text"
            className="form-control bg-transparent border-0 shadow"
            value={customIncludeChars}
            onChange={(e) => setCustomIncludeChars(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Custom Exclude Characters:</label>
          <input
            type="text"
            className="form-control bg-transparent border-0 shadow"
            value={customExcludeChars}
            onChange={(e) => setCustomExcludeChars(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Custom Name:</label>
          <input
            type="text"
            className="form-control bg-transparent border-0 shadow"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Number of Passwords:</label>
          <input
            type="number"
            className="form-control bg-transparent shadow border-0"
            value={numPasswords}
            onChange={(e) => setNumPasswords(Math.max(1, parseInt(e.target.value, 10)))}
          />
        </div>
        <button className="btn btn-dark mb-3" onClick={generatePassword}>
          Generate Passwords
        </button>

        {passwords.map((password, index) => (
          <div key={index} className="mb-3 password-result">
            <strong>Password {index + 1}:</strong> {password}
            <button
              className="btn btn-success ms-2"
              onClick={() => copyToClipboard(password)}
            >
              Copy Password
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordGenerator;
