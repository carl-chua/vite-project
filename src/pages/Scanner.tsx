import { useState } from 'react';
import Camera from '../components/Camera';
import OCR from '../components/OCR';

function Scanner() {
  const [image, setImage] = useState<string | null>(null);

  const handleCapture = (imageSrc: string | null) => {
    setImage(imageSrc);
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <Camera onCapture={handleCapture} />
      {image && <OCR image={image} />}
    </div>
  );
}

export default Scanner;
