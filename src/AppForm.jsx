import React, { useState } from 'react';
/**
 *
 * form input 데이터는 사용자가 바로 수정하고 눈으로 확인 가능하기 때문에 언컨트롤 컴포넌트라고 한다
 * 그래서 리액트에서 추구하는 원칙과 어긋난다
 * 리액트는 항상 유아이의 리액트의 상태로 부터 확인 되어야 하기 때문이다
 * form 을 사용할때는 항상 상태로 관리하고 온체인지로 상태를 업데이트 해줘야 한다
 * 객체의 상태를 관리 할때는 useState, useImmer, useReducer를 사용 하면 된다.
 * */
export default function AppForm() {
  const [form, setFrom] = useState({ name: '', email: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
