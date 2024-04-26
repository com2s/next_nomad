"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./index.module.css";

export default function AboutUs() {
  // 오디오 요소들을 참조하기 위한 배열
  const audiosRef = useRef<HTMLAudioElement[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);
  const [allPlayed, setAllPlayed] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 각 오디오의 볼륨을 0.2로 설정
    audiosRef.current.forEach((audio) => {
      if (audio) {
        audio.volume = 0.2;
      }
    });

    // 모든 오디오가 충분히 로드되었는지 확인
    const checkAllLoaded = () => {
      console.log(audiosRef.current)
      const allAudiosLoaded = audiosRef.current.every(
        (audio) => audio && audio.readyState >= 4
      );
      if (allAudiosLoaded) {
        // 모든 오디오 로드 완료
        setAllLoaded(true); 
        // 로드 완료 후 이벤트 핸들러 제거
        audiosRef.current.forEach(audio => audio.oncanplaythrough = null); 
      }
    };

    checkAllLoaded();

    // 오디오 로드 상태를 체크하는 이벤트 리스너 추가
    audiosRef.current.forEach((audio) => {
      if (audio) {
        audio.oncanplaythrough = checkAllLoaded;
      }
    });

    // 클린업 함수
    return () => {
      audiosRef.current.forEach((audio) => {
        if (audio) {
          audio.oncanplaythrough = null;
          // 컴포넌트 언마운트 시 이벤트 핸들러 제거
        }
      });
    };
  }, []);

  // 모든 오디오 재생
  const playAllAudios = () => {
    if (allLoaded) {
      if (!allPlayed) {
        setAllPlayed(true);
        audiosRef.current.forEach((audio) => {
          if (audio) {
            audio.play();
          }
        });
      } else {
        setAllPlayed(false);
        stopAllAudios();
      }
    } else {
      console.log("아직 오디오 파일이 모두 로드되지 않았습니다.");
    }
  };

  // 모든 오디오 정지
  const stopAllAudios = () => {
    audiosRef.current.forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0.5;
      }
    });
  };

  const audios = ['m1.mp3', 'm2.mp3', 'm4a.m4a', 'w1.wav'];

  return (
    <>
      <h1>Audio Player Test!</h1>
      <h2>I have no idea</h2>
      <div>
        <button onClick={playAllAudios} disabled={!allLoaded}>Play All Audios</button>
        {/* <button onClick={stopAllAudios}>Stop All Audios</button> */}
        <div>
        {audios.map((src, index) => (
            <audio
              key={index}
              controls
              // ref={(el) => audiosRef.current[index] = el}
              ref={el => {
                audiosRef.current[index] = el; // Avoid returning any value
              }}
              preload="auto"
              className={styles.audios}
            >
              <source src={src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ))}
        </div>
      </div>
    </>
  );
}
