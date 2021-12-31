import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageButton from './components/image_button/image_button';
import CardRepository from './service/card_repository';

const authService = new AuthService()
const imageUploader = new ImageUploader()
const cardRepository = new CardRepository()
const FileInput = memo(props => (
  <ImageButton {...props} imageUploader={imageUploader}/>
))
ReactDOM.render(
  <React.StrictMode>
    <App 
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

