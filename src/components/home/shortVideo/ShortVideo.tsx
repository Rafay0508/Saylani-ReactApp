import './shortVideo.css';

function ShortVideo() {
    return (
        <div className='video-container'>
            <p>-----Short Video of our Services-----</p>
            <video  controls >
                <source src="./videos/videoplayback.mp4" type="video/mp4" />
            </video>
        </div>

    );
}

export default ShortVideo;
