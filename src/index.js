import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageButton from './components/image_button/image_button';

const authService = new AuthService()
const imageUploader = new ImageUploader()
const FileInput = props => (
  <ImageButton {...props} imageUploader={imageUploader}/>
)
ReactDOM.render(
  <React.StrictMode>
    <App 
      authService={authService}
      FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

