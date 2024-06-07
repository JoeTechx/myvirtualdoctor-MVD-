"use client";
import { PlayAndStopCards } from "../../app/index";
import { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export const PlayAndStopCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === PlayAndStopCards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  return (
    <div className="play-stop_card">
      <div className="flex">
        {PlayAndStopCards.map((card, index) => (
          <div
            key={card.id}
            className={`min-w-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <div className="play-stop_details">
              <div>
                <h2 className="play-stop_text">{card.title}</h2>
                <p className="play-stop_des">{card.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="play-stop_cicle">
        {PlayAndStopCards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-[#01a69c]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="play-stop_button">
        <button className="play-stop_btn" onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};
