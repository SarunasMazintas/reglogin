import React, { useEffect, useRef, useState } from 'react'

export const Register = ({users, setUsers}) => {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const imageRef = useRef();

    const [errors, setErrors] = useState([]);
    


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const containsNumber = (input) => {
        return /\d/.test(input)
    }

    function clearForm(){
        usernameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        imageRef.current.value = '';
    }

    function isFormValid() {
        let noErrors = true;
        setErrors((e) => []);
        usernameRef.current.style.borderColor = null;
        usernameRef.current.style.backgroundColor = null;

        emailRef.current.style.borderColor = null;
        emailRef.current.style.backgroundColor = null;

        passwordRef.current.style.borderColor = null;
        passwordRef.current.style.backgroundColor = null;

        imageRef.current.style.borderColor = null;
        imageRef.current.style.backgroundColor = null;

        if (usernameRef.current.value.length < 4 || usernameRef.current.value.length > 20) {
            setErrors((currentValue) => [...currentValue, 'User name length must be 4..20!'])
            usernameRef.current.style.borderColor = "red";
            usernameRef.current.style.backgroundColor = "rgb(231, 185, 185, 0.2)";
            noErrors = false;
        }

        if (!validateEmail(emailRef.current.value)) {
            setErrors((currentValue) => [...currentValue, 'Email is incorrect']);
            emailRef.current.style.borderColor = "red";
            emailRef.current.style.backgroundColor = "rgb(231, 185, 185, 0.2)";
            noErrors = false;
        }

        if (passwordRef.current.value.length < 4 || passwordRef.current.value.length > 20 || !containsNumber(passwordRef.current.value)) {
            setErrors((currentValue) => [...currentValue, 'Password length must be: 4..20 and it must contain number'])
            passwordRef.current.style.borderColor = "red";
            passwordRef.current.style.backgroundColor = "rgb(231, 185, 185, 0.2)";
            noErrors = false;
        }

        if (!imageRef.current.value.includes('http')) {
            setErrors((current) => [...current, '"http" is missing on image url']);
            imageRef.current.style.borderColor = "red";
            imageRef.current.style.backgroundColor = "rgb(231, 185, 185, 0.2)";
            noErrors = false;
        }
        return noErrors;
    }

    function submit() {
        if (!isFormValid()) return;
        setUsers(current => [...current, {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            image: imageRef.current.value
        }
        ]);

        clearForm();
    }

    useEffect(() => console.log(users) ,[users])

    return (
        <div className='register'>
            <div className="form-control">
                <label htmlFor="username"> Username: </label>
                <input type="text" id='username' ref={usernameRef} />
            </div>
            <div className="form-control">
                <label htmlFor="email"> Email: </label>
                <input type="text" id='email' ref={emailRef} />
            </div>
            <div className="form-control">
                <label htmlFor="password"> Password: </label>
                <input type="text" id='password' ref={passwordRef} />
            </div>
            <div className="form-control">
                <label htmlFor="image"> Image: </label>
                <input type="text" id='image' ref={imageRef} />
            </div>

            <button onClick={submit}>Register!</button>
            <div className="errors">
                {errors && errors.map((x, id) => <div key={id}>{x}</div>)}
            </div>
        </div>
    )
}
