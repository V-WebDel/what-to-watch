import {useEffect, useState, useRef} from 'react';

type VideoPlayerProps = {
  poster: string;
  src: string;
  isActive: boolean;
}

function VideoPlayer({poster, src, isActive}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement === null) {
      return;
    }

    videoElement.addEventListener('loadeddata', () => setIsLoading(false));

    if (isActive && !(isLoading)) {
      videoElement.play();
    } else {
      videoElement.pause();
      videoElement.load();
    }
  }, [isActive, isLoading]);

  return (
    <video
      poster={poster}
      ref={videoRef}
      muted
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;
