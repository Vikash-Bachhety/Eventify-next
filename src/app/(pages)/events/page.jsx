"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/eventCollection");
        const result = response.data?.data;
        setEvents(result);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Calculate the index of the first and last event on the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers dynamically based on the number of events
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(events.length / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 to-sky-400 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-50 mb-10">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {currentEvents.map((event) => (
            <Card key={event._id} className="bg-white h-[580px] hover:shadow-md hover:shadow-black rounded-lg overflow-hidden hover:-skew-y-3 hover:scale-105 duration-300">
              {/* Event Image */}
              <div className="relative h-60">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Event Details */}
              <CardHeader className="px-4 pt-4">
                <CardTitle className="text-xl font-bold text-gray-800">{event.eventName}</CardTitle>
                <CardDescription className="text-gray-600">{event.eventType}</CardDescription>
                <CardDescription className="text-gray-600">{event.eventDate}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-sm text-gray-700 mb-2">{event.location}</p>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{event.description}</p>
                <p className="text-sm text-gray-600 mb-2">{event.organizer}</p>
                <p className="text-sm text-gray-700 mb-2 flex truncate">
                  <span className="font-semibold">Artists:</span> {event.artists}
                </p>
                <p className="text-sm text-gray-800 font-semibold mb-4">Ticket Price: {event.ticketPrice} ₹</p>
                <Link href={`/events/${event._id}`} className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition w-full">
                  View Details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="w-full flex justify-center mt-10">
          <div className="flex gap-4">
            {pageNumbers.map((number) => (
              <Button
                key={number}
                onClick={() => paginate(number)}
                className={`${currentPage === number
                    ? "bg-orange-600 text-white"
                    : "bg-white text-rose-600 hover:bg-rose-100"
                  } px-4 py-2 rounded-md`}
              >
                {number}
              </Button>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center mt-10">
          <Button className="relative overflow-hidden bg-rose-600 text-white px-6 py-5 rounded-md group">
            <Link href="/events">
              <span className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10">See More Events</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
