import * as React from 'react';
import './FileUploader.scss';

const FileUploader = ({ title }) => {
  return (
    <div className="input-wrapper">
      <label>{title}</label>
      <div className="uploader">
        <input
          id="file-upload"
          type="file"
          name="fileUpload"
          accept="image/*"
        />
        <label htmlFor="file-upload" id="file-drag">
          <img id="file-image" src="#" alt="Preview" className="hidden" />
          <div id="start">
            <div>Click to upload or drag and drop</div>
            <div>SVG, PNG, JPG or GIF (max. 3MB)</div>
            <div id="notimage" className="hidden">
              Please select an image
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FileUploader;
