import React, { Component } from 'react'
// import validator from "validator";
// import {isAlpha, isEmail, isDate, isHexColor, isLength, isFloat, isAlphanumeric} from validator

import isAlpha from "validator/es/lib/isAlpha";
import isEmail from "validator/es/lib/isEmail";
import isDate from "validator/es/lib/isDate";
import isHexColor from "validator/es/lib/isHexColor";
import isLength from "validator/es/lib/isLength";
import isFloat from "validator/es/lib/isFloat";
import isAlphanumeric from "validator/es/lib/isAlphanumeric";


const options = [
    {
        value: '',
        label: '-- Select Country--',
    },
    {
        value: 'Finland',
        label: 'Finland',
    },
    {
        value: 'Sweden',
        label: 'Sweden',
    },
    {
        value: 'Norway',
        label: 'Norway',
    },
    {
        value: 'Denmark',
        label: 'Denmark',
    },
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
    <option value={value} key={value}> {label}</option>
))

class App extends Component {
    // declaring state
    state = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favoriteColor: '',
        weight: '',
        gender: '',
        file: '',
        bio: '',
        skills: {
            html: false,
            css: false,
            javascript: false,
        },
        touched: {
            firstName: false,
            lastName: false,
            email: false,
            country: false,
            gender: false,
            tel: false,
            dateOfBirth: false,
            favoriteColor: false,
            weight: false,
            bio: false,
            file: false
        },
    }
    handleChange = (e) => {
        /*
         we can get the name and value like: e.target.name, e.target.value
        Wwe can also destructure name and value from e.target
        const name = e.target.name
        const value = e.target.value
        */
        const { name, value, type, checked } = e.target
        /*
        [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
        */

        if (type === 'checkbox') {
            this.setState({
                skills: { ...this.state.skills, [name]: checked },
            })
        } else if (type === 'file') {
            this.setState({ [name]: e.target.files[0] })
        } else {
            this.setState({ [name]: value })
        }
    }
    handleBlur = (e) => {
        const { name, value } = e.target
        // console.log(`Target name ${name}`)
        this.setState({ touched: { ...this.state.touched, [name]: true } })
    }
    validate = () => {
        // Object to collect error feedback and to display on the form
        const errors = {
            firstName: '',
            lastName: '',
            email:'',
            country:'',
            gender: '',
            tel: '',
            dateOfBirth: '',
            favoriteColor: '',
            weight: '',
            bio: '',
            file: '',

        }

        if (
            this.state.touched.firstName && !isAlpha(this.state.firstName)
            && !isLength(this.state.firstName, {min: 2, max: 12})
        ) {
            errors.firstName = 'First name must be between 2 and 12'
        }

        if (
            this.state.touched.lastName && !isAlpha(this.state.lastName)
            && !isLength(this.state.lastName, {min: 2, max: 12})
        ){
            errors.lastName = 'Last name must be between 2 and 12'
        }

        if (
            (this.state.touched.email && !isEmail(this.state.email))
        ){
            errors.email = 'Enter an email'
        }

        if (
            this.state.touched.country && !isLength(this.state.country, {min: 1,})
        ){
            errors.country = 'Select a country'
        }

        if (
            this.state.touched.gender && !isLength(this.state.gender, {min: 1,})
        ){
            errors.gender = 'Select a gender'
        }

        if (
            this.state.touched.tel && !isLength(this.state.tel, {min: 10,})
        ){
            errors.tel = 'Enter a phone number with 10 digits'
        }

        if (
            this.state.touched.dateOfBirth && !isDate(this.state.dateOfBirth)
        ){
            errors.dateOfBirth = 'Enter a DOB'
        }

        if (
            this.state.touched.favoriteColor && !isHexColor(this.state.favoriteColor)
        ){
            errors.favoriteColor = 'Select a colour'
        }

        if (
            (this.state.touched.weight && !isFloat(this.state.weight, {gt: 50, lt:100}))
        ){
            errors.weight = 'Enter a weight between 50 and 100kg'
        }

        if (
            this.state.touched.bio && !isAlphanumeric(this.state.bio)
            && !isLength(this.state.bio, {min: 1})
        ){
            errors.bio = 'Enter a short biography'
        }

        if (
            this.state.touched.file && !isLength(this.state.file, {min: 1})
        ){
            errors.file = 'Upload a file'
        }

        return errors
    }
    handleSubmit = (e) => {
        /*
          e.preventDefault()
          stops the default behavior of form element
          specifically refreshing of page
          */
        e.preventDefault()

        const {
            firstName,
            lastName,
            email,
            country,
            gender,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            bio,
            file,
            skills,
        } = this.state

        const formattedSkills = []
        for (const key in skills) {
            console.log(key)
            if (skills[key]) {
                formattedSkills.push(key.toUpperCase())
            }
        }
        const data = {
            firstName,
            lastName,
            email,
            country,
            gender,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            bio,
            file,
            skills: formattedSkills,
        }
        /*
         this is the place where we connect backend api
          to send the data to the database
          */
        console.log(data)
    }

    render() {
        // accessing the state value by destrutcturing the state
        // the noValidate attribute on the form is to stop the HTML5 built-in validation

        const { firstName,
            lastName,
            email,
            country,
            gender,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            bio,
            file } = this.validate()
        return (
            <div className='App'>
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='row'>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name </label>
                            <input
                                type='text'
                                name='firstName'
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder='First Name'
                            /> <br />
                            <small>{firstName}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name </label>
                            <input
                                type='text'
                                name='lastName'
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder='Last Name'
                            /><br/>
                            <small>{lastName}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email </label>
                            <input
                                type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder='Email'
                            /><br/>
                            <small>{email}</small>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='tel'>Telephone </label>
                        <input
                            type='tel'
                            name='tel'
                            value={this.state.tel}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder='Tel'
                        /><br/>
                        <small>{tel}</small>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='dateOfBirth'>Date of birth </label>
                        <input
                            type='date'
                            name='dateOfBirth'
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder='Date of Birth'
                        /><br/>
                        <small>{dateOfBirth}</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='favoriteColor'>Favorite Color</label>
                        <input
                            type='color'
                            id='favoriteColor'
                            name='favoriteColor'
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder='Favorite Color'
                            defaultValue='#000000'
                        /><br/>
                        <small>{favoriteColor}</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='weight'>Weight </label>
                        <input
                            type='number'
                            id='weight'
                            name='weight'
                            value={this.state.weight}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder='Weight in Kg'
                        /><br/>
                        <small>{weight}</small>
                    </div>
                    <div>
                        <label htmlFor='country'>Country</label> <br/>
                        <select name='country' onBlur={this.handleBlur} onChange={this.handleChange} id='country'>
                            {selectOptions}
                        </select><br/>
                        <small>{country}</small>
                    </div>

                    <div>
                        <p>Gender</p>
                        <div>
                            <input
                                type='radio'
                                id='female'
                                name='gender'
                                value='Female'
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                checked={this.state.gender === 'Female'}
                            />
                            <label htmlFor='female'>Female</label>
                        </div>
                        <div>
                            <input
                                id='male'
                                type='radio'
                                name='gender'
                                value='Male'
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                checked={this.state.gender === 'Male'}
                            />
                            <label htmlFor='male'>Male</label>
                        </div>

                        <div>
                            <input
                                id='other'
                                type='radio'
                                name='gender'
                                value='Other'
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                checked={this.state.gender === 'Other'}
                            />
                            <label htmlFor='other'>Other</label>
                        </div>
                        <br/>
                        <small>{gender}</small>
                    </div>

                    <div>
                        <p>Select your skills</p>
                        <div>
                            <input
                                type='checkbox'
                                id='html'
                                name='html'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='html'>HTML</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                id='css'
                                name='css'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='css'>CSS</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                id='javascript'
                                name='javascript'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='javascript'>JavaScript</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='bio'>Bio</label> <br/>
                        <textarea
                            id='bio'
                            name='bio'
                            value={this.state.bio}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            cols='120'
                            rows='10'
                            placeholder='Write about yourself ...'
                        />
                        <br/>
                        <small>{bio}</small>
                    </div>

                    <div>
                        <input type='file' name='file'
                               onChange={this.handleChange}
                               onBlur={this.handleBlur}/>
                        <br/>
                        <small>{file}</small>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;