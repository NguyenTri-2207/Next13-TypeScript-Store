import {
  FaDrone,
  FaMobileAlt,
  FaTabletAlt,
  FaClock,
  FaLaptop,
  FaHeadphones,
  FaCamera,
  FaGamepad,
  FaHeartbeat,
  FaHome,
  FaPaintRoller,
  FaExchangeAlt,
  FaShoppingCart,
  FaShieldAlt,
  FaWrench,
  FaShoppingBag,
  FaBookOpen,
  FaNewspaper,
  FaTools,
  FaBalanceScale,
  FaRecycle,
  FaPhoenixSquadron,
} from "react-icons/fa";
import React from "react";
const dataMenu = [
  {
    id: 1,
    name: "Products",
    url: "/products",
    subMenu: [
      {
        label: "Smartphones",
        icon: <FaMobileAlt />,
        url: "/products/smartphones",
        desc: "Explore our latest collection of high-performance smartphones with cutting-edge technology.",
      },
      {
        label: "Tablets",
        icon: <FaTabletAlt />,
        url: "/products/tablets",
        desc: "Discover powerful and versatile tablets for work, entertainment, and creativity.",
      },
      {
        label: "Smartwatches",
        icon: <FaClock />,
        url: "/products/smartwatches",
        desc: "Stay connected and track your fitness with our range of stylish and functional smartwatches.",
      },
      {
        label: "Laptops",
        icon: <FaLaptop />,
        url: "/products/laptops",
        desc: "Enhance your productivity with our high-performance laptops designed for every task.",
      },
      {
        label: "Headphones",
        icon: <FaHeadphones />,
        url: "/products/headphones",
        desc: "Immerse yourself in crystal-clear sound with our premium range of headphones and earphones.",
      },
      {
        label: "Cameras",
        icon: <FaCamera />,
        url: "/products/cameras",
        desc: "Capture life's moments in stunning detail with our advanced digital cameras and accessories.",
      },
      {
        label: "Gaming Consoles",
        icon: <FaGamepad />,
        url: "/products/gaming-consoles",
        desc: "Experience the thrill of gaming with our cutting-edge gaming consoles and accessories.",
      },
      {
        label: "Fitness Trackers",
        icon: <FaHeartbeat />,
        url: "/products/fitness-trackers",
        desc: "Achieve your fitness goals with our range of advanced fitness trackers and accessories.",
      },
      {
        label: "Home Automation",
        icon: <FaHome />,
        url: "/products/home-automation",
        desc: "Make your home smarter with our innovative home automation devices and solutions.",
      },
      {
        label: "Drones",
        icon: <FaPhoenixSquadron />,
        url: "/products/drones",
        desc: "Explore the skies and capture breathtaking aerial footage with our range of drones.",
      },
    ],
  },
  {
    id: 2,
    name: "Services",
    url: "/services",
    subMenu: [
      {
        label: "Device Repair",
        icon: <FaWrench />,
        url: "/services/device-repair",
        desc: "Expert repairs for smartphones, tablets, laptops, and other electronic devices with a focus on quality and efficiency.",
      },
      {
        label: "Warranty Services",
        icon: <FaShieldAlt />,
        url: "/services/warranty-services",
        desc: "Comprehensive warranty services to protect your electronic devices and provide peace of mind for your customers.",
      },
      {
        label: "E-Commerce Solutions",
        icon: <FaShoppingCart />,
        url: "/services/e-commerce",
        desc: "Efficient and secure e-commerce solutions tailored for selling electronic devices and accessories online.",
      },
      {
        label: "Device Trade-In",
        icon: <FaExchangeAlt />,
        url: "/services/device-trade-in",
        desc: "Trade in old devices for new ones with our convenient and eco-friendly device trade-in services.",
      },
      {
        label: "Device Customization",
        icon: <FaPaintRoller />,
        url: "/services/device-customization",
        desc: "Personalize your electronic devices with our customization services, offering unique designs and features.",
      },
    ],
  },
  {
    id: 3,
    name: "Resources",
    url: "/resources",
    subMenu: [
      {
        label: "Buying Guide",
        icon: <FaShoppingBag />,
        url: "/resources/buying-guide",
        desc: "Explore our comprehensive buying guide to make informed decisions when purchasing electronic devices.",
      },
      {
        label: "Product Manuals",
        icon: <FaBookOpen />,
        url: "/resources/product-manuals",
        desc: "Access user manuals and guides for our electronic products to optimize their usage and functionality.",
      },
      {
        label: "Tech News",
        icon: <FaNewspaper />,
        url: "/resources/tech-news",
        desc: "Stay updated on the latest trends, innovations, and news in the world of technology and electronics.",
      },
      {
        label: "Troubleshooting Tips",
        icon: <FaTools />,
        url: "/resources/troubleshooting-tips",
        desc: "Find helpful tips and solutions for common issues with electronic devices in our troubleshooting section.",
      },
      {
        label: "Product Comparison",
        icon: <FaBalanceScale />,
        url: "/resources/product-comparison",
        desc: "Compare features, specifications, and reviews to find the perfect electronic device for your needs.",
      },
      {
        label: "E-Waste Recycling",
        icon: <FaRecycle />,
        url: "/resources/e-waste-recycling",
        desc: "Learn about the importance of e-waste recycling and discover responsible disposal options for electronic devices.",
      },
    ],
  },
  {
    id: 4,
    name: "About",
    url: "/about",
  },
];

export default dataMenu;
