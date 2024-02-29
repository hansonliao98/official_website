import React, { useEffect } from "react";
import tents from "../images/tents.png";
import forest from "../images/forest.png";
import BlogCard from "../Components/Blog_components/BlogCard.tsx";

type Article = {
  title: string;
  body: string;
  image?: string;
  tags: string[];
};

const DUMMYDATA: Article[] = [
  {
    title:
      "Responsive Design 2.0: The Future of Front-End Development Unveiled",
    body: "Front-end development is hurtling towards a new horizon with Responsive Design 2.0, a groundbreaking paradigm shift that promises to redefine user experiences across all devices. As an expert in the field, its time to buckle up for the ride of a lifetime as we explore the next chapter in web development evolution. Gone are the days of static layouts and fixed breakpoints. Responsive Design 2.0 embraces fluidity, adaptability, and dynamic content presentation like never before. With the rise of diverse device form factors, from foldables to wearables, the need for a more sophisticated approach to responsiveness has never been more urgent. Enter Responsive Design 2.0, armed with cutting-edge techniques such as CSS Grid, Flexbox, and viewport units, empowering developers to craft seamless experiences that effortlessly scale across devices of all shapes and sizes. Embracing a mobile-first mindset is no longer sufficient; its time to adopt a device-agnostic philosophy that puts user needs front and center, from pixel-perfect typography to fluid animations and grid-based layouts, Responsive Design 2.0 is the cornerstone of modern web development, ensuring that your creations shine on every screen, every time. Join the revolution, master the art of Responsive Design 2.0, and cement your status as a trailblazer in the ever-evolving world of front-end development. The future is fluid—embrace it!",
    image: tents,
    tags: ["FrontEndDevelopment", "UserExperience", "Flexbox"],
  },
  {
    title:
      "Harnessing the Power of Progressive Web Apps: Revolutionizing User Engagement",
    body: "In the dynamic realm of web development, Progressive Web Apps (PWAs) have emerged as the game-changer, redefining how users interact with online experiences. As a front-end developer seeking to stay ahead in this fast-paced industry, understanding and leveraging PWAs is non-negotiable. PWAs combine the best of web and mobile applications, offering users a seamless, app-like experience directly within their browsers. With features like offline functionality, push notifications, and smooth performance, PWAs bridge the gap between native apps and traditional websites, captivating audiences like never before. The rise of PWAs isnt just a trend; its a paradigm shift in user engagement and retention. By harnessing service workers, cache APIs, and responsive design principles, developers can create immersive experiences that load instantly and work reliably, even in uncertain network conditions. The benefits are clear: increased user engagement, higher conversion rates, and enhanced brand loyalty. From e-commerce giants to news outlets and beyond, businesses across industries are embracing PWAs as the future of digital interaction. Front-end developers play a pivotal role in this revolution. By mastering the intricacies of PWAs and adopting progressive enhancement strategies, they empower brands to deliver unparalleled user experiences that resonate in today's mobile-first world. Join the movement, unlock the potential of PWAs, and propel your front-end development skills to new heights. Embrace innovation, captivate audiences, and shape the future of web development—one progressive web app at a time.",
    image: forest,
    tags: ["ProgressiveWebApps", "MobileFirst", "DigitalInnovation"],
  },
  {
    title: "The Rise of Headless CMS: Unleashing Front-End Freedom",
    body: "In the ever-evolving landscape of content management systems (CMS), the rise of Headless CMS is disrupting traditional approaches and empowering front-end developers like never before. As the digital realm continues to expand, understanding the ins and outs of Headless CMS is paramount for staying ahead in the game. \nUnlike traditional monolithic CMS platforms, Headless CMS decouples the content management backend from the presentation layer, providing developers with unprecedented flexibility and control over the user experience. With Headless CMS, front-end developers are no longer constrained by the limitations of pre-defined templates and themes. \nBy leveraging APIs, developers can seamlessly integrate content into any front-end framework or platform, from React and Vue.js to Angular and beyond. This freedom enables the creation of highly customized and interactive user interfaces that resonate with modern audiences. \nThe benefits are manifold: enhanced scalability, improved performance, and streamlined workflows. With Headless CMS, content creators can focus on producing high-quality content, while developers craft immersive experiences tailored to specific user needs. \nFrom dynamic websites to progressive web apps and beyond, Headless CMS is the catalyst for innovation in front-end development. By embracing this paradigm shift, developers unlock endless possibilities to create compelling digital experiences that captivate and engage audiences across devices. \nSeize the opportunity, dive into the world of Headless CMS, and liberate your front-end development endeavors. Embrace flexibility, embrace creativity, and embrace the future of content management in the digital age.",
    image: tents,
    tags: ["React", "HeadlessCMS", "API"],
  },
];

const Blog = () => {
  useEffect(() => {
    fetch("")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-slate-900">
      <div className="bg-intro-Image bg-cover h-72 flex flex-col-reverse text-center">
        <h1 className="text-4xl m-4 uppercase">Blogs</h1>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        {DUMMYDATA.map((article) => (
          <BlogCard
            title={article.title}
            body={article.body}
            tags={article.tags}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
