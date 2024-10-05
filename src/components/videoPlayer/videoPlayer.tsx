import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  poster: string;
  src: string;
  isActive: boolean;
}

function VideoPlayer({poster, src, isActive}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement === null) {
      return;
    }

    if (isActive) {
      videoElement.play();
    } else {
      videoElement.pause();
      videoElement.load();
    }
  }, [isActive]);

  return (
    <video
      poster={poster}
      ref={videoRef}
      width="280"
      muted
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;
