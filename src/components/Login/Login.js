import React from 'react'
import './Login.css'
import logo from '../../assets/logo/eTaxNewLogo.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="content-section">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2>تسجيل الدخول</h2>
          <p>لا املك بريد إلكترونى على هذه المنظومة</p>
          <Link to ='/Register' class="create-account">إنشاء حساب</Link>
          <input type="text" placeholder="البريد الإلكتروني" />
          <input type="password" placeholder="كلمة المرور" />
          <button className="submit-button">تسجيل الدخول</button>
        </div>
      </div>
    </>
  )
}

export default Login