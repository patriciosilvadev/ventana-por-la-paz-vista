import React, { useState } from 'react';
import { CheckBox, InputField, Label } from '../Objects';
import { Login } from '../../Services/Api';
import Modal from './Modal';
import { Consumer } from '../../AuthContext';
import { Redirect } from 'react-router-dom';

export default function LogInOverlay(props) {
  // State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // Props
  const { toggleModal, setToggleModal, switchPage } = props;

  // Login Function
  const handleSubmit = async (evt, setAuth) => {
    evt.preventDefault();
    console.log(
      `username: ${username}, pass: ${password} ${process.env.REACT_APP_APIURL}`
    );

    if (username && password) {
      setAuth(true);
      setToken('a');
      /* await Login(username, password)
        .then((res) => {
          if (res.status === 200) {
            setToken(res.data['key']);
            console.log(token);
            sessionStorage.setItem('token', token);
          }
        })
        .catch((er) => {
          console.error(er);
        }); */
    } else {
      console.log('I can´t do that');
    }
  };

  const Footer = () => (
    <>
      <div className='action-call '>
        <div>¿No tiene una cuenta?</div>
        <div className={'bold blue-text action'} onClick={switchPage}>
          Crear Cuenta
        </div>
      </div>
    </>
  );

  return token ? (
    <Redirect to='/shop' />
  ) : (
    <Modal
      toggle={toggleModal}
      close={() => setToggleModal(false)}
      footer={Footer()}
    >
      <div className='form-title'>Iniciar Sesión</div>
      <Consumer>
        {({ setAuth }) => (
          <form onSubmit={(e) => handleSubmit(e, setAuth)} noValidate>
            <Label forHtml='login-username' label='Correo Electronico' />

            <InputField
              name='login-username'
              id='login-username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div>
              <Label forHtml='login-password' label='Contraseña' />
              <span className='text-sm p-1 tracking-tight text-primary-500 float-right'>
                Olvidé mi contraseña
              </span>
            </div>

            <InputField
              password={true}
              name='login-password'
              id='login-password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <CheckBox text={'Remember me'} />

            <button type='submit' className='form-button btn-primary'>
              Iniciar Sesión
            </button>
          </form>
        )}
      </Consumer>
    </Modal>
  );
}
