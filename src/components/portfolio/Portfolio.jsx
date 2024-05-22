import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Pairs Game",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Using just ReactJS and TailwindCSS, I created a simple pairs game. The game is simple, you choose between 18 or 24 Cards and you have to find all the pairs of cards in the shortest amount of trys possible. The game is responsive and can be played on any device. The game is also hosted on Netlify, so you can play it right now by clicking the button below",
    link: "https://slane-pairs-game.netlify.app/",
    git: "https://github.com/slane1/pairs-game",
  },
  {
    id: 2,
    title: "Weather App",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A very straight forward Weather App using different Endpoints. The app uses the Weather API from Visual Crossing to get the weather data. It will use browser location, location based on User-IP, or user input. The Weather-App is responsive and can be used on any device. It is hosted on Netlify, so you can check it out by clicking the button below.",
    link: "https://slane-weatherapp.netlify.app/",
    git: "https://github.com/slane1/myweatherapp",
  },
  {
    id: 3,
    title: "Shopping List",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A simple Shopping List App using ReactJS and TailwindCSS in the Frontend and NodeJS with MongoDB in the Backend. Users can create Accounts, add Items to their Shopping List, update, or delete them. The Repository is hosted on Github, so you can check it out by clicking the button below.",
    git: "https://github.com/slane1/shoppingList",
  },
  {
    id: 4,
    title: "This Website",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "This Website was created using ReactJS and SCSS with Framer Motion. The Website is responsive and can be used on any device. You are right now visiting the site, but you can check out the Github repository below.",
    git: "https://github.com/slane1/portfolio",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="gap">
              {item.git && <button><a href={item.git} target="_blank">Visit Repository</a></button> }
              {item.link && <button><a href={item.link} target="_blank">Explore Demo</a></button> }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Recent Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
}