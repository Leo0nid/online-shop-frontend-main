import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import logo from './assets/icons/shop.png';
import avatar from '../components/assets/icons/avatar.png';
import logout from '../components/assets/icons/logout.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


import { toast } from 'react-toastify';

const Header = () => {
 
  const navigate = useNavigate();


  //показывает кнопку logOut
  const handleAvatarClick = () => {
    navigate('/login');
  };

  //выход из профиля
  const handleLogout = async () => {
    try {
      localStorage.removeItem('accessToken')
      toast.success('Вы успешно вышли из аккаунта!');
      navigate('/');
    } catch (error) {
      toast.error('Ошибка при выходе из аккаунта.');
    }
  };
  const accessToken = localStorage.getItem('accessToken')
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <div className="header__logo">
              <img className="header__icon" src={logo} alt="logo" />

              <h1 className="header__logo-name">Shop</h1>
            </div>
          </Link>
          <div className="header__nav">
            <div className="header__nav-list">
              <li>
                <Link to="/">Магазин</Link>
              </li>
                <>
                  <li>
                    <Link to="/favorites">Избранное</Link>
                  </li>
                  <li>
                    <Link to="/cart">Корзина</Link>
                  </li>
                </>
            
             
            </div>
          </div>
          <Search />
          <div className="header__profile">
            {accessToken && (
             <>  
                         
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onClick={() => {
                      handleLogout();
                    }}
                    className="header__logout">
                    <img src={logout} alt="logout" />
                  </motion.button>
                    
              
              </>
            )}

            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                handleAvatarClick();
              }}
              className="header__avatar">
              <img src={avatar} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
