import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/AlertContext';
import { HIDE_ALERT } from '../context/types';
import { GithubContext } from '../context/github/GithubContext';

export const Search = () => {
  const { show } = useContext(AlertContext);
  const [value, setValue] = useState('');
  const github = useContext(GithubContext);

  const onSubmit = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    if (value.trim()) {
      github.search(value.trim());
    } else {
      show('Введите данные пользователя!');
    }
  };

  return (
    <div className="mt-2 mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
