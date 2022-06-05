import React, { forwardRef, useState } from 'react'
import styles from "./Form.module.css"

const Form = () => {

  const [formData, setFormData] = useState({
    showPassword: false
  })

  const handleChange = (e) => {
    const inputName = e.target.name;
    // the way handling checkbox and file is diffrent
    // checkbox
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [inputName]: e.target.checked,
      });
    }

    //file
    else if (e.target.type === "file") {

      setFormData({
        ...formData,
        [inputName]: e.target.files,
      })
    }
    else {
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      })
    }
  };
  const handleSubmit = (event) => {

    event.preventDefault();

    console.log(formData.checked)
  }

  return (
    <div className={styles.main}>
  
      <div className={styles.from}>Form
        <form onSubmit={handleSubmit}>
          <div className={styles.grid}>
            <label>User name</label>
            <input type="text" name='username' onChange={handleChange} />
          </div>
          <div className={styles.grid}>
            <label>Password</label>
            <input
              type={formData.showPassword ? "text" : "password"}
              name='password' onChange={handleChange} />
            <div />
            <div>
              <label>Show password</label>
              <input type="checkbox" name='showPassword' onChange={handleChange} />
            </div>
          </div>
          <div className={styles.grid}>
            <label>Age</label>
            <input type="number" name='age' onChange={handleChange} />
          </div>
          <div className={styles.grid}>
            <label>Gender</label>
            <select name='gender' onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

            </select>
          </div>
          <div className={styles.grid}>
            <label>DOB</label>
            <input type="date" name='dob' onChange={handleChange} />
          </div>
          <div className={styles.grid}>
            <label>Salary</label>
            <input type="number" name='salary' onChange={handleChange} />
          </div>
          <div className={styles.grid}>
            <label>Resume</label>
            <input type="file" name='resume' onChange={handleChange} />
          </div>
          <div className={styles.grid}>
            <label>Address</label>
            <input type="text" name='address' onChange={handleChange} />
          </div>
          <div className={styles.grid}>
            <div />
            <div>
              <label>Married</label>
              <input type="radio" value="Married" name='check' onChange={handleChange} />

              <label>Single</label>
              <input type="radio" value="Single" name='check' onChange={handleChange} />
            </div>
          </div>

          <div className={styles.grid}>
            <div />
            <input type="submit" name='submit' />
          </div>
        </form>
      </div>
      <br />
      <br />
      <div className={styles.view}>
        <h2>Name:- {formData.username}</h2>
        <h2>Date of Birth:- {formData.dob}</h2>
        <h2>Salary:- {formData.salary}</h2>
        <h2>Age:- {formData.age}</h2>
        <h2>Marital Status:- {formData.check}</h2>
        <h2>Adress:- {formData.address}</h2>
        <h2>Gender:- {formData.gender}</h2>
      </div>
    </div>

  )

};

export default Form