export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 2) => ({
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};
export const american = [
  {
    text: "Get ready for game day with our high-performance American football uniforms.",
  },
  {
    text: "Make a statement on the field with our stylish and durable American football uniforms.",
  },
  {
    text: "Crafted with the latest technologies and materials, our American football uniforms are built to last.",
  },
  {
    text: "From practice to game day, our American football uniforms will keep you comfortable and focused.",
  },

  {
    text: "Our American football uniforms are trusted by top teams and players across the country.",
  },
  {
    text: "Designed with the athlete in mind, our American football uniforms will help you perform at your best.",
  },
  {
    text: "Get the complete American football uniform package jersey, pants, socks, and more.",
  },
  {
    text: "Join the ranks of elite players who trust our American football uniforms to help them succeed on the field.",
  },
  {
    text: "Experience the ultimate in comfort and style with our American football uniforms the perfect choice for any team.",
  },
  {
    text: "Step onto the field with confidence in our high-performance American football uniforms.",
  },
  {
    text: "Experience the ultimate comfort and durability with our American football uniforms.",
  },
  {
    text: "Designed for the modern athlete, our American football uniforms combine style and functionality.",
  },
  {
    text: "Our American football uniforms are trusted by top teams and players across the country.",
  },
  {
    text: "Get ready to dominate the competition with our top-quality American football uniforms.",
  },
  {
    text: "Our American football uniforms are built to withstand the toughest tackles and hits.",
  },
  {
    text: "Take your game to the next level with our advanced American football uniforms.",
  },
  {
    text: "Our American football uniforms are perfect for players of all skill levels and positions.",
  },
  {
    text: "Join the ranks of elite athletes who trust our American football uniforms to help them perform at their best.",
  },
];
export const baseball = [
  {
    text: "Experience the ultimate comfort and durability with our baseball uniforms.",
  },
  {
    text: "Designed for the modern athlete, our baseball uniforms combine style and functionality.",
  },
  {
    text: "Make a statement on the field with our bold and stylish baseball uniforms.",
  },
  {
    text: "Our baseball uniforms are trusted by top teams and players across the country.",
  },
  {
    text: "Get ready to dominate the competition with our top-quality baseball uniforms.",
  },
  {
    text: "Our baseball uniforms are built to withstand the rigors of the diamond.",
  },
  {
    text: "Take your game to the next level with our advanced baseball uniforms.",
  },
  {
    text: "Our baseball uniforms are perfect for players of all skill levels and positions.",
  },
  {
    text: "Join the ranks of elite athletes who trust our baseball uniforms to help them perform at their best.",
  },
  {
    text: "Look and feel your best on the diamond with our top-quality baseball uniforms.",
  },
  {
    text: "Experience the ultimate comfort and performance with our baseball uniforms.",
  },
  {
    text: "Designed for the modern player, our baseball uniforms combine style and functionality.",
  },
  {
    text: "Make a statement on the field with our bold and stylish baseball uniforms.",
  },
  {
    text: "Our baseball uniforms are trusted by top teams and players across the country.",
  },
  {
    text: "Get ready to dominate the competition with our top-of-the-line baseball uniforms.",
  },
  {
    text: "Our baseball uniforms are built to withstand the rigors of the game.",
  },
  {
    text: "Take your game to the next level with our advanced baseball uniforms.",
  },
  {
    text: "Our baseball uniforms are perfect for players of all skill levels and positions.",
  },
  {
    text: "Join the ranks of elite athletes who trust our baseball uniforms to help them perform at their best",
  },
];
export const basketball = [
  {
    text: "Perform at your best on the court with our top-quality basketball uniforms.",
  },
  {
    text: "Experience the ultimate comfort and performance with our basketball uniforms.",
  },
  {
    text: "Designed for the modern player, our basketball uniforms combine style and functionality.",
  },
  {
    text: "Make a statement on the court with our bold and stylish basketball uniforms.",
  },
  {
    text: "Our basketball uniforms are trusted by top teams and players across the country.",
  },
  {
    text: "Get ready to dominate the competition with our top-of-the-line basketball uniforms.",
  },
  {
    text: "Our basketball uniforms are built to withstand the demands of the game.",
  },
  {
    text: "Take your game to the next level with our advanced basketball uniforms.",
  },
  {
    text: "Our basketball uniforms are perfect for players of all skill levels and positions.",
  },
  {
    text: "Join the ranks of elite athletes who trust our basketball uniforms to help them perform at their best.",
  },
  {
    text: " Look and feel your best on the court with our top-quality basketball uniforms.",
  },
  {
    text: "Experience the ultimate comfort and performance with our basketball uniforms.",
  },
  {
    text: "Designed for the modern player, our basketball uniforms combine style and functionality.",
  },
  {
    text: "Make a statement on the court with our bold and stylish basketball uniforms.",
  },
  {
    text: "Our basketball uniforms are trusted by top teams and players around the world.",
  },
  {
    text: "Get ready to dominate the competition with our top-of-the-line basketball uniforms.",
  },
  {
    text: "Our basketball uniforms are built to withstand the rigors of the game.",
  },
  {
    text: "Take your game to the next level with our advanced basketball uniforms.",
  },
  {
    text: "Our basketball uniforms are perfect for players of all skill levels and positions.",
  },
  {
    text: "Join the ranks of elite athletes who trust our basketball uniforms to help them perform at their best.",
  },
];
export const hoodies = [
  {
    text: "Experience the ultimate comfort and durability with our hoodies.",
  },

  {
    text: "Make a statement with our bold and fashionable hoodies.",
  },

  {
    text: "Our hoodies are made with the highest-quality materials for lasting comfort and style.",
  },
  {
    text: "Get ready to conquer the cold with our top-of-the-line hoodies.",
  },
  {
    text: "Our hoodies are built to withstand the elements and keep you warm all season long.",
  },
  {
    text: "Elevate your everyday style with our advanced hoodies.",
  },
  {
    text: "Our hoodies come in a variety of sizes and styles, perfect for everyone.",
  },
  {
    text: "Join the ranks of fashion-forward individuals who trust our hoodies to keep them stylish and comfortable.",
  },
  {
    text: "Stay comfortable and fashionable no matter where you go with our advanced hoodies.",
  },
  {
    text: "Our hoodies are perfect for any occasion and any style.",
  },
  {
    text: "Join the ranks of satisfied customers who trust our hoodies to keep them warm and stylish.",
  },
];
export const tracksuits = [
  {
    text: "Designed for the modern lifestyle, our tracksuits combine fashion and function.",
  },
  {
    text: "Make a statement with our bold and stylish tracksuits.",
  },
  {
    text: "Our tracksuits are trusted by customers around the world.",
  },
  {
    text: "Get ready to upgrade your wardrobe with our top-of-the-line tracksuits.",
  },
  {
    text: "Our tracksuits are built to withstand the elements and last for years to come.",
  },

  {
    text: "Stay comfortable and fashionable no matter where you go with our advanced tracksuits.",
  },
  {
    text: "Our tracksuits are perfect for any occasion and any style.",
  },
  {
    text: "Join the ranks of satisfied customers who trust our tracksuits to keep them comfortable and stylish",
  },
];
