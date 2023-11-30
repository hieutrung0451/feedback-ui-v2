import poster from '../assets/poster.jpg';

function Movie() {
  return (
    <div className='movie'>
      <h3>The Boy and The Haron</h3>
      <img src={poster} className='poster' />
    </div>
  );
}

export default Movie;
