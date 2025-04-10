import { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

interface OCRProps {
  image: string;
}

const OCR = ({ image }: OCRProps) => {
  const [text, setText] = useState('');

  const handleOCR = async () => {
    if (image) {
      try {
        const result = await Tesseract.recognize(image, 'eng', {
          logger: (m) => console.log(m),
        });
        setText(result.data.text);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    handleOCR();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return (
    <div className="flex flex-col justify-center">
      {text && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default OCR;
