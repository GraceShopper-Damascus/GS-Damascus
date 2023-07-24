import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
  const { firstName, lastName } = useSelector((state) => state.auth.me);
  const isLoggedIn = useSelector((state) => !!state.auth.me);

  return (
    <div>
      <h3>
        {isLoggedIn ? `Welcome ${firstName} ${lastName},` : 'Welcome to SWEbay'}
      </h3>
      <p>
        Welcome to SWEbay - Your Ultimate Destination for Software Engineering
        Paraphernalia! 🎉 Discover a tech-tastic wonderland tailored exclusively
        for software engineers and tech aficionados! Here at SWEbay, we've
        gathered an eclectic assortment of clothing, trinkets, and even USB
        toothbrushes, all designed to celebrate your passion for coding and
        innovation. Are you on the hunt for witty and stylish apparel that
        showcases your love for programming? Look no further! Our exclusive
        collection features cleverly crafted designs that resonate with every
        developer's heart. From quirky coding puns to sleek tech-inspired
        graphics, you'll find the perfect attire to express your coding prowess.
        But that's not all - our trinkets and gadgets will delight every techie
        soul. Elevate your workspace with geek-chic accessories, adding a touch
        of flair to your programming haven. And don't miss out on our USB
        toothbrushes; because why not make every moment count - even while
        charging your devices? At SWEbay, we're committed to providing top-notch
        quality and exceptional service. We source our products from trusted
        suppliers, ensuring that every item exceeds your expectations. Your
        satisfaction is our top priority, and we'll go above and beyond to make
        your shopping experience truly seamless. Join our vibrant community of
        software engineers and indulge in a world of creativity, innovation, and
        boundless tech enthusiasm. SWEbay is more than just an ecommerce site;
        it's a celebration of all things software engineering! So, gear up, code
        on, and explore the wonders of SWEbay today! Happy shopping! 🚀
      </p>
    </div>
  );
};

export default Home;
