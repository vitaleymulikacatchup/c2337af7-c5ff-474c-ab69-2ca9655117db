"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, Sparkles, Home, MessageCircle, Award, Calendar } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Luxe Hotel Logo"
          brandName="Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and world-class hospitality in the heart of the city. Where every detail is crafted for your ultimate comfort and satisfaction."
          tag="5-Star Experience"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxurious hotel lobby with elegant chandelier"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Exceptional Hospitality Since 1985"
          description={[
            "For nearly four decades, we have been the epitome of luxury hospitality, setting the standard for elegant accommodations and personalized service.",
            "Our commitment to excellence has earned us prestigious awards and the loyalty of discerning travelers from around the world who seek nothing but the finest."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities designed to exceed your expectations"
          tag="Premium Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Infinity Spa & Wellness",
              description: "Rejuvenate your body and soul in our award-winning spa featuring state-of-the-art treatments and serene relaxation areas.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa with infinity pool view",
              button: {
                text: "Book Treatment",
                href: "contact"
              }
            },
            {
              title: "Michelin-Star Dining",
              description: "Savor exquisite cuisine crafted by world-renowned chefs in our elegant fine dining restaurant with panoramic city views.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant with city views",
              button: {
                text: "Make Reservation",
                href: "contact"
              }
            },
            {
              title: "Rooftop Infinity Pool",
              description: "Unwind in our stunning infinity pool overlooking the city skyline, complete with poolside service and premium cabanas.",
              imageSrc: "https://images.pexels.com/photos/2736187/pexels-photo-2736187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop infinity pool with city skyline",
              button: {
                text: "Pool Access",
                href: "contact"
              }
            }
          ]}
          layout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Premium Rooms"
          tagIcon={Home}
          products={[
            {
              id: "deluxe-room",
              brand: "Luxe Collection",
              name: "Deluxe King Room",
              price: "$450/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe king room with city view"
            },
            {
              id: "ocean-suite",
              brand: "Premium Collection",
              name: "Ocean View Suite",
              price: "$750/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/12652920/pexels-photo-12652920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury suite with panoramic ocean views"
            },
            {
              id: "presidential-suite",
              brand: "Elite Collection",
              name: "Presidential Suite",
              price: "$1,200/night",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://images.pexels.com/photos/34516518/pexels-photo-34516518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite with premium amenities"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Exceptional Guest Experiences"
          description="Discover what our valued guests say about their stay with us"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7252253/pexels-photo-7252253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "David & Emma Chen",
              role: "Anniversary Guests",
              company: "Celebrating 10 Years",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7968288/pexels-photo-7968288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David and Emma Chen"
            },
            {
              id: "3",
              name: "James Rodriguez",
              role: "Business Traveler",
              company: "Global Consulting",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6475035/pexels-photo-6475035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Rodriguez"
            },
            {
              id: "4",
              name: "The Wilson Family",
              role: "Vacation Guests",
              company: "Family Getaway",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5764895/pexels-photo-5764895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of the Wilson family"
            },
            {
              id: "5",
              name: "Isabella Thompson",
              role: "Wellness Retreat",
              company: "Personal Journey",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6474586/pexels-photo-6474586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Thompson"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Global Hospitality Leaders"
          description="Join the network of world-class hotels that set the standard for luxury"
          tag="Industry Recognition"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/17394906/pexels-photo-17394906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Your Stay"
          title="Experience Luxury Awaits"
          description="Reserve your perfect getaway and discover unparalleled hospitality. Our dedicated team is ready to create an unforgettable experience tailored just for you."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Check Availability"
          termsText="By booking with us, you agree to our reservation terms and cancellation policy."
          imageSrc="https://images.pexels.com/photos/8667538/pexels-photo-8667538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional concierge desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "product"
                },
                {
                  label: "Amenities",
                  href: "feature"
                },
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Spa & Wellness",
                  href: "feature"
                },
                {
                  label: "Fine Dining",
                  href: "feature"
                },
                {
                  label: "Event Spaces",
                  href: "contact"
                },
                {
                  label: "Concierge",
                  href: "contact"
                }
              ]
            },
            {
              title: "Policies",
              items: [
                {
                  label: "Booking Terms",
                  href: "#"
                },
                {
                  label: "Cancellation",
                  href: "#"
                },
                {
                  label: "Privacy Policy",
                  href: "#"
                }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 | Luxe Hotel"
        />
      </div>
    </ThemeProvider>
  );
}