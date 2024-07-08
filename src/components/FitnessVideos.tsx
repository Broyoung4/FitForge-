

const FitnessVideos: React.FC = ({exerciseVideos, name}) => {
  if(!exerciseVideos.length) return <div className='loading-anim'></div>;
  return (
    <section className='mt-6'>
       <h3 className='mb-4 text-lg leading-6 font-bold'>Watch <span className='text-sea-green capitalize'>{name}{' '}</span>exercises</h3>
      <div className='flex justify-start items-center gap-4 mb-20 flex-wrap'>
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <h4 className='text-md leading-6 font-bold text-slate-gray'>{item.video.title}</h4>
              <p className='text-sm leading-6 text-slate-gray'>{item.video.channelName}</p>
            </div>
          </a>
        )) }
      </div>
    </section>
  )
}

export default FitnessVideos;