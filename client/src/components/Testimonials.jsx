import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-slate-100 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <Title
          title="What Our Guests Say"
          subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl font-bold">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <StarRating />
            </div>
            <p className="text-gray-600 mt-6 leading-relaxed italic">
              "{testimonial.review}"
            </p>
            <div className="mt-4 h-1 w-12 bg-primary rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
