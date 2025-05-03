import React from "react";
import Title from "../components/Title";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "With over 15 years in hospitality, Sarah founded LuxStay to reimagine the hotel booking experience.",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Michael ensures that every property in our collection meets our exacting standards for comfort and luxury.",
    },
    {
      name: "Elena Rodriguez",
      role: "Customer Experience",
      image:
        "https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Elena leads our customer support team, ensuring every guest enjoys a seamless and memorable stay.",
    },
    {
      name: "David Kim",
      role: "Technology Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "David oversees our digital platform, making booking your perfect getaway as simple as possible.",
    },
  ];

  const values = [
    {
      title: "Excellence",
      icon: "https://cdn-icons-png.flaticon.com/512/2451/2451158.png",
      description:
        "We strive for excellence in every aspect of our service, from the properties we list to the support we provide.",
    },
    {
      title: "Authenticity",
      icon: "https://cdn-icons-png.flaticon.com/512/3100/3100213.png",
      description:
        "We believe in authentic experiences that connect travelers with the heart and soul of their destinations.",
    },
    {
      title: "Hospitality",
      icon: "https://cdn-icons-png.flaticon.com/512/2956/2956744.png",
      description:
        "True hospitality means anticipating needs and exceeding expectations at every opportunity.",
    },
    {
      title: "Innovation",
      icon: "https://cdn-icons-png.flaticon.com/512/1007/1007699.png",
      description:
        "We continuously innovate to enhance the travel experience for our guests and property partners.",
    },
  ];

  return (
    <div className="py-28 md:py-32 px-6 md:px-10 lg:px-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden mb-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-6">
              Redefining Luxury Hospitality
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded with a passion for exceptional experiences, we connect
              travelers with the world's most remarkable accommodations. Our
              curated collection represents the pinnacle of comfort, design, and
              service.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 active:scale-95 transition-all text-white rounded-lg px-8 py-4 text-base font-bold shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                Our Story
              </button>
              <button className="bg-white border border-primary text-primary hover:bg-primary/5 active:scale-95 transition-all rounded-lg px-8 py-4 text-base font-bold shadow-sm hover:shadow-md transform hover:-translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Luxury hotel lobby"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10 mb-16">
        <Title
          align="center"
          font="Outfit"
          title="Our Story"
          subTitle="How we became a leading name in luxury hospitality"
        />

        <div className="mt-10 text-gray-700 leading-relaxed">
          <p className="mb-6">
            Our journey began in 2015 with a simple vision: to create a platform
            that connects discerning travelers with exceptional accommodations
            that tell a story and create lasting memories.
          </p>

          <div className="relative my-12 px-6">
            <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-primary -translate-x-2 -translate-y-2"></div>
            <p className="italic text-xl md:text-2xl font-playfair text-center text-gray-800">
              "We believe that where you stay is more than just
              accommodation—it's an integral part of your travel experience."
            </p>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-primary translate-x-2 translate-y-2"></div>
          </div>

          <p className="mb-6">
            What started as a boutique collection of properties in major
            European cities has grown into a global network of over 1,000
            carefully selected hotels, resorts, and vacation rentals. Throughout
            our growth, we've maintained our commitment to quality,
            authenticity, and exceptional service.
          </p>

          <p>
            Today, we're proud to be trusted by millions of travelers worldwide
            who seek more than just a place to sleep—they seek experiences that
            enrich their journeys and create stories worth telling.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto mb-16">
        <Title
          align="center"
          font="Outfit"
          title="Our Values"
          subTitle="The principles that guide everything we do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full">
                <img
                  src={value.icon}
                  alt={`${value.title} icon`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="max-w-7xl mx-auto mb-16">
        <Title
          align="center"
          font="Outfit"
          title="Meet Our Team"
          subTitle="The passionate people behind our success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all group">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
              1,000+
            </p>
            <p className="text-gray-600">Luxury Properties</p>
          </div>
          <div className="p-6">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
              50+
            </p>
            <p className="text-gray-600">Countries</p>
          </div>
          <div className="p-6">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
              2M+
            </p>
            <p className="text-gray-600">Happy Guests</p>
          </div>
          <div className="p-6">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
              4.9
            </p>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto mb-16">
        <Title
          align="center"
          font="Outfit"
          title="Guest Testimonials"
          subTitle="What our guests say about their experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Guest"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold">Rebecca Moore</p>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The attention to detail was remarkable. From the moment I booked
              until checkout, every interaction exceeded my expectations. I've
              already recommended LuxStay to all my colleagues."
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Guest"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold">James Wilson</p>
                <p className="text-sm text-gray-500">London, UK</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The property was even better than the stunning photos suggested.
              The concierge service was particularly helpful with arranging
              local experiences that we would never have discovered otherwise."
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Guest"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold">Sophia Martinez</p>
                <p className="text-sm text-gray-500">Barcelona, Spain</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "I've used many booking platforms before, but none have matched
              the personal touch and quality of properties that LuxStay offers.
              It truly felt like a home away from home."
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-orange-400 rounded-2xl shadow-lg p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
          Ready to Experience the Difference?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you're planning your next getaway or interested in listing
          your property, we'd love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-primary hover:bg-gray-100 active:scale-95 transition-all rounded-lg px-8 py-4 text-base font-bold shadow-lg hover:shadow-white/30 transform hover:-translate-y-1">
            Contact Us
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 active:scale-95 transition-all rounded-lg px-8 py-4 text-base font-bold shadow-lg hover:shadow-white/30 transform hover:-translate-y-1">
            Join Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
