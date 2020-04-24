import React from 'react';
import { Link } from 'react-router-dom';

export const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={''} alt={''} className="card-img-top" />
        <h5 className="card-title">Карточка</h5>
        <Link to={'/profile/' + 'react'} className="btn btn-primary">
          Открыть
        </Link>
      </div>
    </div>
  );
};
