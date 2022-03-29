import React,{useState} from 'react';
import PropTypes from 'prop-types'

export const LoginComponent = (props) => {

    const [emailInput, setEmailInput] = useState('asdasdasda')
    const [passwordInput, setPasswordInput] = useState('aaaaaaaaa')

    const handleSubmitEmail = (e) => {
        e.preventDefault()
        if (emailInput.trim().length>2) {
            setEmailInput(emailInput => [emailInput]);
            setEmailInput('');

        }
    }

    const handleSubmitPassword = (e) => {
        e.preventDefault()
        if (passwordInput.length>6) {
            setPasswordInput(passwordInput => [passwordInput]);
            setPasswordInput('');

        }
    }

  return (
    <form onSubmit={{handleSubmitEmail, handleSubmitPassword}}>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={emailInput}
                onChange={handleSubmitEmail}
                />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"
                className="form-control"
                id="password"
                value={passwordInput}
                onChange={handleSubmitPassword}
                />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
