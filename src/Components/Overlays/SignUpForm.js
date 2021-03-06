import React from 'react';
import { InputField, Label } from '../Objects';

export default function SignUpForm(props) {
  // Props
  const { form, handleChange } = props;

  return (
    <>
      <h2 className='form-title'>Crea una cuenta</h2>
      <h2 className='form-subtitle'>Información del usuario</h2>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-1/2 pr-1'>
          <Label forHtml='firstname' label='Primer Nombre' />

          <InputField
            id='firstname'
            name='firstname'
            placeholder='Luis'
            value={form.firstname}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='sm:w-1/2 pl-1'>
          <Label forHtml='lastname' label='Apellido' />

          <InputField
            id='lastname'
            name='lastname'
            placeholder='Ferrer'
            value={form.lastname}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      {/* TODO: Add age input*/}
      <Label forHtml='email' label='Correo Electronico' />

      <InputField
        id='email'
        name='email'
        placeholder='luisferrer@me.com'
        value={form.email}
        onChange={(e) => handleChange(e)}
      />

      <Label forHtml='password' label='Contraseña' />

      <InputField
        password
        id='password'
        name='password'
        type='password'
        value={form.password}
        onChange={(e) => handleChange(e)}
      />

      {/* TODO: Add a confirmation input */}
      <h2 className='form-subtitle mt-4'>Información de la ventana virtual</h2>
      <Label forHtml='shop' label='Nombre del negocio' />

      <InputField
        id='shop'
        name='shop'
        placeholder='La prosperidad'
        value={form.shop}
        onChange={(e) => handleChange(e)}
      />
      <Label forHtml='shopDesc' label='Descripción del negocio' />

      <textarea
        className='form-input textarea'
        type='textarea'
        name='shopDesc'
        id='shopDesc'
        placeholder='Vendemos ropa al por mayor'
        value={form.shopDesc}
        onChange={(e) => handleChange(e)}
      />

      <Label forHtml='indicative' label='Indicativo' />

      <InputField
        id='indicative'
        name='indicative'
        type='number'
        placeholder='57'
        value={form.indicative}
        onChange={(e) => handleChange(e)}
      />

      <Label forHtml='whatsapp' label='Whatsapp' />

      <InputField
        id='whatsapp'
        name='whatsapp'
        type='number'
        placeholder='300889900'
        value={form.whatsapp}
        onChange={(e) => handleChange(e)}
      />

      <Label forHtml='address' label='Dirección del negocio' />

      <InputField
        id='address'
        name='address'
        placeholder='Cl 28 K 49C - 121'
        value={form.address}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}
