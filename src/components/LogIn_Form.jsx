import React from 'react'


const MyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    return (
      <form>
        <InputField label="Name" type="text" value={name} onChange={handleNameChange} />
        <InputField label="Email" type="email" value={email} onChange={handleEmailChange} />
        {/* Other form fields go here */}
      </form>
    );
  };
export default LogIn_Form