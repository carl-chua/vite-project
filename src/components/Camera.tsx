import { useCallback, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import './Camera.css'; // Import the CSS file

interface CameraProps {
  onCapture: (imageSrc: string | null) => void;
}

const Camera = ({ onCapture }: CameraProps) => {
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      onCapture(imageSrc);
    }
  }, [webcamRef, onCapture]);

  useEffect(() => {
    const interval = setInterval(capture, 1000);
    return () => clearInterval(interval);
  }, [capture]);

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
      />
      <div className="overlay"></div>
    </div>
  );
};

export default Camera;
