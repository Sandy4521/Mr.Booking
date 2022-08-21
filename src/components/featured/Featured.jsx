import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1386444/pexels-photo-1386444.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Barcelona</h1>
          <h2>369 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/bilbao-riverbank-on-sunny-day-spain-picture-id824151922?b=1&k=20&m=824151922&s=612x612&w=0&h=4a0eOUX1rrWeppNjnYI9gBLjd8ADtST8BN-uoHlyKy0="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bilbao</h1>
          <h2>233 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/havana-cuba-downtown-skyline-picture-id905996466?b=1&k=20&m=905996466&s=612x612&w=0&h=RyOjJ5LEESrT6CAwVqRVimJsiD4KD9eXsX_6bjysmpQ="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Habana</h1>
          <h2>132 properties</h2>
    </div>
    </div>
    </div>
  );
};

export default Featured;
