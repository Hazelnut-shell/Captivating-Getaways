import React, { useRef, useState, useEffect } from 'react';

import Button from '../UIElements/Button';

const ImageUpload = props => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }

    // file -> url
    const fileReader = new FileReader();

    // trigged when the reading operation is finished
    fileReader.onload = () => {
      // generate preview url
      setPreviewUrl(fileReader.result);
    };
    // the URL represents the file's data as a base64 encoded string
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = event => {
    let pickedFile;

    // the state 'isValid' still holds the old value, so we use 'fileIsValid' to reflect the updated value
    let fileIsValid = isValid;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    // forward the file to the component which uses this ImageUpload component, let the parent component do some processing
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    // when clicking the 'PICK IMAGE' button, <input> click
    filePickerRef.current.click();
  };

  return (
    <div className="mx-0 my-4">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`${props.center && "center flex-col"}`}>
        <div className="flex justify-center items-center mb-4 text-center w-52 h-52 border border-solid border-[#ccc]">
          {previewUrl && <img src={previewUrl} alt="Preview" className='object-cover h-full w-full' />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
