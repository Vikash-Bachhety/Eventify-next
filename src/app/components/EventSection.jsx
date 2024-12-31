"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { TypographyH2, TypographyParagraph } from "@/components/ui/typography";

export default function Home() {
    return (
        <>
            {/* Testimonials Section */}
            <section className="w-full py-16 text-white flex flex-col justify-center items-center min-h-92">
                <div className="text-center">
                    <TypographyH2 className="text-3xl font-bold">What People Are Saying</TypographyH2>
                    <TypographyParagraph className="text-lg mt-4 max-w-2xl mx-auto">
                        Hear from our customers and performers who have experienced our events firsthand.
                    </TypographyParagraph>
                </div>

                <div className="mt-8 w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Testimonial 1 */}
                    <div className="w-92 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <TypographyParagraph className="italic">"A truly unforgettable experience! The best music event I've ever been to."</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-400">Music Lover</p>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="w-92 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.unsplash.com/photo-1533689476487-034f57831a58?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <TypographyParagraph className="italic">"Amazing energy and incredible performances! Will definitely attend again."</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Jane Smith</p>
                            <p className="text-sm text-gray-400">Performer</p>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="w-92 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <TypographyParagraph className="italic">"A vibrant atmosphere with talented artists. Highly recommend it!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Alex Johnson</p>
                            <p className="text-sm text-gray-400">Event Attendee</p>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="w-92 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.unsplash.com/photo-1533689476487-034f57831a58?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <TypographyParagraph className="italic">"A vibrant atmosphere with talented artists. Highly recommend it!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Alex Johnson</p>
                            <p className="text-sm text-gray-400">Event Attendee</p>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="w-92 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <TypographyParagraph className="italic">"A vibrant atmosphere with talented artists. Highly recommend it!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Alex Johnson</p>
                            <p className="text-sm text-gray-400">Event Attendee</p>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="w-92 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.unsplash.com/photo-1533689476487-034f57831a58?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <TypographyParagraph className="italic">"A vibrant atmosphere with talented artists. Highly recommend it!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Alex Johnson</p>
                            <p className="text-sm text-gray-400">Event Attendee</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 w-full flex flex-col justify-center items-center">
                <div className="text-center p-8">
                    <TypographyH2 className="text-3xl font-bold text-gray-50">
                        Frequently Asked Questions
                    </TypographyH2>
                    <TypographyParagraph className="text-lg text-gray-50 mt-4 max-w-2xl mx-auto">
                        Have questions? We have answers! Here are some of the most common questions about our events.
                    </TypographyParagraph>
                </div>

                <div className="mt-8 space-y-6 w-3/4 md:w-1/3">
                    <Accordion type="single" collapsible className="space-y-4">
                        {/* Question 1 */}
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="bg-white p-4 shadow-lg rounded-t-md hover:bg-gray-200 transition-all">
                                How can I book tickets for an event?
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-gray-50 mt-0.5 rounded-b-lg">
                                You can book tickets directly on our website for the upcoming events. Simply browse through the events page and select the one you're interested in.
                            </AccordionContent>
                        </AccordionItem>

                        {/* Question 2 */}
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="bg-white p-4 shadow-lg rounded-t-md hover:bg-gray-200 transition-all">
                                Can I bring a guest to the event?
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-gray-50 mt-0.5 rounded-b-lg">
                                Yes, most events allow you to bring a guest. Please ensure you purchase additional tickets if required.
                            </AccordionContent>
                        </AccordionItem>

                        {/* Question 3 */}
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="bg-white p-4 shadow-lg rounded-t-md hover:bg-gray-200 transition-all">
                                Are the events available worldwide?
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-gray-50 mt-0.5 rounded-b-lg">
                                Currently, we offer events in select cities and regions. Check the event details for location availability.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    );
}
