import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/AlertContext';
import { GithubContext } from '../context/github/GithubContext';

export const Search = () => {
  const alert = useContext(AlertContext);
  const [value, setValue] = useState('');
  const github = useContext(GithubContext);

  const onSubmit = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    github.clearUsers();

    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show('Введите данные пользователя!');
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
