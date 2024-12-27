"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { TypographyH2 } from "@/components/ui/typography";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

export default function EventRegistrationForm() {
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    event: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/events/registerEvent", formData);
      const result = await response.data;
      console.log(result);
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-teal-500 to-sky-500">
      <div className="w-full max-w-xl mx-auto shadow-lg rounded-md bg-white p-6 mt-16">
        <TypographyH2 className="text-center text-2xl mb-4">Event Registration</TypographyH2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              className="mt-1"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <Label htmlFor="gender">Gender</Label>
            <Select
              name="gender"
              value={formData.gender}
              onValueChange={(value) =>
                setFormData((prevState) => ({ ...prevState, gender: value }))
              }
              className="mt-1"
              required
            >
              <SelectTrigger className="w-full">
                <span>{formData.gender || "Select Gender"}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* City */}
          <div className="mb-4">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              className="mt-1"
              required
            />
          </div>

          {/* Event Selection */}
          <div className="mb-4">
            <Label htmlFor="Event">Select Event</Label>
            <Select
              name="event"
              value={formData.event}
              onValueChange={(value) =>
                setFormData((prevState) => ({ ...prevState, event: value }))
              }
              className="mt-1"
              required
            >
              <SelectTrigger className="w-full">
                <span>{formData.event || "Select Event"}</span>
              </SelectTrigger>
              <SelectContent>
                {events.map((event) => (
                  <SelectItem key={event._id} value={event.eventName}>
                    {event.eventName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Event Price */}
          {formData.event && (
            <div>
              {events
                .filter((event) => event.eventName === formData.event)
                .map((event) => (
                  <div
                    key={event._id}
                    className="flex items-center justify-center"
                  >
                    <span className="animate-bounce text-white bg-rose-600 rounded-full px-4 py-2 text-md font-semibold mb-2">
                      ${event.ticketPrice}
                    </span>
                  </div>
                ))}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition"
          >
            Register for Event
          </Button>
        </form>
      </div>
    </div>
  );
}
