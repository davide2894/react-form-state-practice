import "./Form.scss";
import { useState } from "react";

export default function Form(){
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        marketingCheckbox: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleChange(evt) {
        const {name, value, type, checked} = evt.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if(formData.password === formData.confirmPassword) {
            console.log("Successfully signed up");
        } else {
            console.log("passwords to not match");
        }

        if(formData.marketingCheckbox   ) {
            console.log("Thanks for signing up for our newsletter!");
        }
    }
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="marketingCheckbox"
                        onChange={handleChange}
                        checked={formData.marketingCheckbox}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}