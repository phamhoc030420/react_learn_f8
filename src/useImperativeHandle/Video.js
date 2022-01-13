
import video from '../videos/video_tammy.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react';

function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }))
    return (
        <>
            <div>
                <video ref={videoRef} style={{ width: 300, height: 360 }} src={video} ></video>

            </div>
        </>
    )
}
export default forwardRef(Video);