import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../Profile/Profile.css";


const Profile = () => {
    <>
    <Header/>
    <div className="profole">
        <p className="profile__welcome">Привет, Анастасия!</p>
        <button type="submit" className="profile__submit">
            Редактировать
        </button>
        <Link to="/signin" className="profile__exit">
            Выйти из аккаунта
        </Link>
    </div>
    </>
}


export default Profile