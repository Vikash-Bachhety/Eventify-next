"use client";

import React from "react";

const AboutUs = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden -z-10">
      {/* Background Video */}
      <iframe
        className="top-0 left-0 w-full h-full object-cover -z-10 fixed"
        src="https://www.youtube.com/embed/MuTh3_TkAHw?autoplay=1&loop=1&mute=1&playlist=MuTh3_TkAHw"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      {/* Overlay Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

      {/* Content */}
      <div className="relative w-full z-10 flex flex-col items-center text-center mt-20 px-6 md:px-12 py-10 text-white space-y-10">

        {/* Mission Section */}
        <div className="max-w-3xl py-10 bg-black/20 rounded-lg px-6 border-2 border-white animate-pulse">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-base md:text-lg">
            Our mission is to connect audiences with the best live experiences and empower artists to share their talents with the world. We strive to make every event a moment to remember. We believe that live events have the unique power to bring people together, foster creativity, and inspire change.
          </p>
          <p className="mt-4 text-base md:text-sm">
            We are dedicated to providing a platform that not only allows people to discover exciting events but also supports artists and organizers by offering them the tools and resources they need to succeed. By facilitating connections and collaborations, we aim to create a thriving ecosystem where the arts and entertainment industries can flourish.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Our team works tirelessly to ensure that every event listed on our platform is curated with care and attention to detail. We partner with a wide range of event organizers to ensure diversity in the experiences we offer, from music and performing arts to food festivals and cultural events.
          </p>
        </div>

        {/* Vision Section */}
        <div className="max-w-3xl py-10 bg-black/20 rounded-lg px-6 border-2 border-white animate-pulse">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Vision</h2>
          <p className="mt-4 text-base md:text-lg">
            To be the leading platform for discovering, organizing, and enjoying events globally. We envision a future where everyone has access to extraordinary live experiences, regardless of their location or background. Our vision is to create a world where people can connect with others through shared interests, discover new talents, and be inspired by the power of live events.
          </p>
          <p className="mt-4 text-base md:text-sm">
            As we look to the future, we are focused on expanding our reach globally. We aim to become the go-to platform for event discovery, offering personalized recommendations based on your preferences and interests. Whether you’re looking for the hottest new concert, a life-changing seminar, or a unique theater production, Eventify will be there to guide you.
          </p>
          <p className="mt-4 text-base md:text-sm">
            By embracing technology, innovation, and creativity, we are working to make live experiences more accessible, enjoyable, and impactful. We believe that the future of live events is about creating connections that go beyond the physical space, integrating virtual and hybrid experiences that allow anyone, anywhere, to be part of something special.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Ultimately, our vision is to build a community where everyone, from artists to fans, can come together and celebrate the power of live events, sharing moments that last a lifetime. We are committed to fostering a culture of inclusivity, creativity, and passion in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
