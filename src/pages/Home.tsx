import "../styles/components/home/home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import maid from "../assets/maid.png";
import milk from "../assets/milk.png";
import newspaper from "../assets/newspaper.png";

const Home = () => {
  // const options = {
  //   method: "GET",
  //   url: "https://imdb8.p.rapidapi.com/auto-complete",
  //   params: { q: "game of thr" },
  //   headers: {
  //     "X-RapidAPI-Key": "10a959054amsh4ed98bede2b1d44p1ab3b7jsn455bbd363de5",
  //     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  //   },
  // };

  // const [news, setNews] = useState({})
  // useEffect(() => {
  //   const getNews = async() => {
  //     try {
  //       const data = await axios.request(options)
  //       setNews(data)
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getNews()
  // }, [])

  return (
    <div className="home--container">
      <div className="home--wrapper">
        <div className="section--title">
          <h3>My Visitors</h3>
        </div>
        <ul className="notifier--list">
          {/* Daily visitors list */}
          <li className="daily--visitors">
            <div className="visitor--card">
              <div className="visitor--card--info">
                <h2>Maid</h2>
                <p>2:20 PM</p>
              </div>
              <img src={maid} alt="Maid vector image" />
            </div>

            <div className="visitor--card">
              <div className="visitor--card--info">
                <h2>Milk man</h2>
                <p>10:00 AM</p>
              </div>
              <img src={milk} alt="Maid vector image" />
            </div>

            <div className="visitor--card">
              <div className="visitor--card--info">
                <h2>Newspaper</h2>
                <p>8:00 AM</p>
              </div>
              <img src={newspaper} alt="Maid vector image" />
            </div>
          </li>
          <li className="notifier--container">
            <label className="visitors--notifier">
              Tanay Pratap wants to visit your place, do you want to accept ?
            </label>
            <div className="notifier--actions">
              <button className="btn btn--primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </li>

          <li className="notifier--container">
            <label className="visitors--notifier">
              You have a parcel from Amazon, Do you want to sent it on your
              doorstep ?
            </label>
            <div className="notifier--actions">
              <button className="btn btn--primary">Keep</button>
              <button className="btn">Send Up</button>
            </div>
          </li>
        </ul>
        {/* News feed */}
        <div className="news--feed--container">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
