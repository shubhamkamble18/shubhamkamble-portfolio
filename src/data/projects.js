/**
 * Projects Data
 * Update with your actual projects, GitHub links, and live demo URLs.
 * Fields marked with "YOUR_" are placeholders.
 */
import hoodieImage from "../images/Hoodie.png";
import queueLessImage from "../images/QueueLess.png";
import tickerDadaImage from "../images/TickerDada.png";
import booksImage from "../images/books.png";
import expenseTrackerImage from "../images/expensetraker.png";
import jobPortalImage from "../images/jobportal.jpeg";
import movieImage from "../images/movie.jpeg";
import realEstateImage from "../images/realstate.png";


export const projects = [

  {
    id: 1,
    title: "Real Estate Property Website",
    description:
      "A modern and responsive real estate website designed to showcase residential and commercial properties. Includes property listings, search functionality, attractive property cards, and detailed property information to improve the property browsing experience.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],
    category: "JavaScript",
    image: realEstateImage,
    github: "https://github.com/shubhamkamble18/real_estate",
    liveDemo: "https://shubhamkamble18.github.io/real_estate/",
    features: [
      "Responsive property listing pages",
      "Property search functionality",
      "Modern property cards",
      "Property information sections",
      "Mobile-friendly design",
    ],
    featured: true,
  },

  {
    id: 2,
    title: "MyBookStore – Online Book Selling",
    description:
      "A full-stack online bookstore application that allows users to explore books, browse available products, and manage their shopping experience. Developed with a modern web development stack, focusing on frontend functionality and backend integration.",
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "JavaScript",
      "React",
      "Python",
      "Flask",
    ],
    category: "React",
    image: booksImage,
    github: "https://github.com/shubhamkamble18/mybookstore",
    liveDemo: "#",
    features: [
      "Browse and explore books",
      "Book listing and product details",
      "Responsive user interface",
      "Full-stack application architecture",
      "Frontend and backend integration",
    ],
    featured: true,
  },

  {
    id: 3,
    title: "QueueLess – Digital Queue Management System",
    description:
      "A digital queue management platform that helps customers join queues online and receive tokens without waiting in physical lines. Provides administrators with tools to manage queues, serve or skip customers, monitor waiting times, and generate reports with Excel export.",
    technologies: [
      "React.js",
      "JavaScript",
      "Firebase",
      "TailWind Css",
      "Excel Export",
      "FireStore",
    ],
    category: "React",
    image: queueLessImage,
    github: "https://github.com/bhushank45/QueueLess",
    liveDemo: "https://queue-less-react.vercel.app/",
    features: [
      "Online queue joining and token generation",
      "Real-time queue position tracking",
      "Estimated waiting time calculation",
      "Admin queue management dashboard",
      "Serve and skip customer functionality",
      "Queue reports with Excel export",
    ],
    featured: true,
  },

 
{
  id: 4,
  title: "TickitDada – Movie Ticket Booking Platform",

  description:
    "A modern and responsive movie ticket booking web application that allows users to explore movies, view movie details, check available showtimes, select preferred seats, and book movie tickets through an intuitive interface. Designed to provide a smooth and convenient online movie booking experience.",

  technologies: [
    "React.js",
    "React Router",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
  ],

  category: "React",
  image: tickerDadaImage,

  github: "https://github.com/shubhamkamble18/moviebooking",
  liveDemo: "https://ticketdada.netlify.app/",

  features: [
    "Browse and explore available movies",
    "View detailed movie information",
    "Check available theatres and showtimes",
    "Interactive movie seat selection",
    "Online ticket booking workflow",
    "Booking confirmation interface",
    "Responsive design for mobile and desktop",
    "Smooth navigation and user-friendly interface",
  ],

  featured: true,
},

  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A personal expense management application designed to help users record, organize, and monitor their daily income and expenses. Provides a simple dashboard to understand spending habits and manage personal finances more effectively.",
    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Python",
      "Flask"
    ],
    category: "React",
    image: expenseTrackerImage,
    github: "https://github.com/shubhamkamble18/exptraker",
    liveDemo: "https://expense-tracker-app-6y3g.onrender.com",
    features: [
      "Add and manage transactions",
      "Track income and expenses",
      "View transaction history",
      "Expense categorization",
      "Simple financial dashboard",
    ],
    featured: false,
  },

  {
    id: 6,
    title: "Job Portal – Online Recruitment Platform",
    description:
      "A job portal application designed to connect job seekers with employment opportunities. Provides an interface for browsing job listings, viewing job details, and managing job applications while helping employers organize recruitment activities.",
    technologies: [
      "React.js",
      "JavaScript",
      "BootStrap",
      "HTML",
      "CSS",
    ],
    category: "React",
    image: jobPortalImage,
    github: "https://github.com/shubhamkamble18/job_portal-",
    liveDemo: "https://shubhamkamble18.github.io/job_portal-/",
    features: [
      "Browse available job opportunities",
      "Search and filter job listings",
      "View detailed job descriptions",
      "Job seeker and employer workflows",
      "Responsive recruitment interface",
    ],
    featured: false,
  },
];

export const projectFilters = [
  "All",
  "React",
  "JavaScript",
  "PHP",
  "Other",
];
