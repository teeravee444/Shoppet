const API = [
    {
      name: "Kiwi",
      price: 19.99,
      quantity: 1,
      inCart: false,
      src:
        "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      name: "Watermelon",
      price: 14.99,
      quantity: 1,
      inCart: false,
      src:
        "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      name: "Cherry",
      price: 8.99,
      quantity: 1,
      inCart: false,
      src:
        "https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      name: "Avacado",
      price: 6.99,
      quantity: 1,
      inCart: false,
      src:
        "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      name: "Apple",
      price: 5.99,
      quantity: 1,
      inCart: false,
      src:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      name: "Strawberry",
      price: 11.99,
      quantity: 1,
      inCart: false,
      src:
        "https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      name: "pork",
      price: 20.99,
      quantity: 1,
      inCart: false,
      src:
        "https://image.makewebeasy.net/makeweb/0/S6LGMsen6/TRICK/%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AB%E0%B8%A1%E0%B8%B9.jpg"
    },
    {
      name: "tenderloin",
      price: 25.99,
      quantity: 1,
      inCart: false,
      src:
        "https://st.depositphotos.com/1821481/1833/i/600/depositphotos_18330137-stock-photo-a-large-piece-of-pork.jpg"
    },
    {
      name: "Pork Neck",
      price: 19.99,
      quantity: 1,
      inCart: false,
      src:
        "http://thaifreshx.com/wp-content/uploads/2020/05/%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B8%84%E0%B8%AD%E0%B8%AB%E0%B8%A1%E0%B8%B9.png"
    },
    {
      name: "whole chicken",
      price: 18.99,
      quantity: 1,
      inCart: false,
      src:
        "https://www.kasethub.co.th/pic/bigpic/c85b5212a8f84c947135d44119356fcf.jpg"
    },
    {
      name: "chicken breast",
      price: 13.99,
      quantity: 1,
      inCart: false,
      src:
        "https://www.kasethub.co.th/pic/bigpic/6784dd31078ec5acace23427b49d50a8.jpg"
    },
    {
      name: "beef",
      price: 25.99,
      quantity: 1,
      inCart: false,
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBO3xDTG8isDQygSJwHIfjcu3FMm4W2rYfHw&usqp=CAU"
    },
    {
      name: "Croissant",
      price: 3.99,
      quantity: 1,
      inCart: false,
      src:
        "https://ireview.in.th/wp-content/uploads/2021/06/%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%9B%E0%B9%89%E0%B8%B2-3-%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B9%80%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88-%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B9%88%E0%B8%87-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%AD%E0%B8%87-1.jpg"
    },
    {
      name: "Strawberry Cake",
      price: 8.99,
      quantity: 1,
      inCart: false,
      src:
        "https://nuengteerapong507.files.wordpress.com/2013/01/21.jpg"
    },
    {
      name: "chocolate cake",
      price: 9.99,
      quantity: 1,
      inCart: false,
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03diUInwWvoXhLNO7Wte2pSa6MYne-P2WJw&usqp=CAU"
    },
    {
      name: "pancake",
      price: 6.99,
      quantity: 1,
      inCart: false,
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLvj9fT_vN-2CARtOYndR9lPJjEdSUP2a6A&usqp=CAU"
    },
    {
      name: "cake",
      price: 4.99,
      quantity: 1,
      inCart: false,
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYvmUOqileKjaNOJ0OvjlCMf7BIWNJnR0sGCILMoVBXhkkNonEM-5_6QjuOtB0Z2peJ0&usqp=CAU"
    },
    {
      name: "chocolate cake",
      price: 5.99,
      quantity: 1,
      inCart: false,
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HboJkQ13ngWOtwlh_STR08JadBGUmL1ExA&usqp=CAU"
    },
 
    
  ];
  export default API;
  