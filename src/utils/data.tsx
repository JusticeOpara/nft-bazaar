import img01 from "../assets/images/img01.png"
import img02 from "../assets/images/img02.jpg";
import img03 from "../assets/images/img03.jpg";
import img04 from "../assets/images/img04.avif";
import img05 from "../assets/images/img05.avif";
import img06 from "../assets/images/img06.avif";
import img07 from "../assets/images/img07.avif";
import img08 from "../assets/images/img08.avif";
import img09 from "../assets/images/img15.avif";
import img10 from "../assets/images/im10.avif"
import img11 from "../assets/images/img11.avif"


import ava01 from "../assets/images/ava-01.png";
import ava02 from "../assets/images/ava-02.png";
import ava03 from "../assets/images/ava-03.png";
import ava04 from "../assets/images/ava-04.png";
import ava05 from "../assets/images/ava-05.png";
import ava06 from "../assets/images/ava-06.png";

 interface Category {
    id: string;
    title: string;
    imgUrl: string;
    creator: string;
    creatorImg: string;
    currentBid: number;
  }

export const Categories:Category[]= [

    {
        id: "01",
        title: "Travel Monkey Club",
        imgUrl: img01,
        creator: "Trista Francis",
        creatorImg: ava01,
        currentBid: 5.89,
    },

    {
        id: "02",
        title: "Sir Lion Swag",
        imgUrl: img02,
        creator: "Trista Francis",
        creatorImg: ava02,
        currentBid: 5.09,
    },

    {
        id: "03",
        title: "Civilian",
        imgUrl: img03,
        creator: "Trista Francis",
        creatorImg: ava03,
        currentBid: 6.89,
    },

    {
        id: "04",
        title: "Guard",
        imgUrl: img04,
        creator: "Trista Francis",
        creatorImg: ava04,
        currentBid: 7.89,
    },

    {
        id: "05",
        title: "Travel Monkey Club",
        imgUrl: img05,
        creator: "Trista Francis",
        creatorImg: ava05,
        currentBid: 4.89,
    },

    {
        id: "06",
        title: "Sir Lion Swag",
        imgUrl: img06,
        creator: "Trista Francis",
        creatorImg: ava06,
        currentBid: 4.99,
    },

    {
        id: "07",
        title: "Civilian",
        imgUrl: img07,
        creator: "Trista Francis",
        creatorImg: ava03,
        currentBid: 5.89,
    },

    {
        id: "08",
        title: "Guard",
        imgUrl: img08,
        creator: "Trista Francis",
        creatorImg: ava04,
        currentBid: 5.89,
    },

    {
        id: "09",
        title: "Travel Monkey Club",
        imgUrl: img10,
        creator: "Trista Francis",
        creatorImg: ava05,
        currentBid: 5.89,
    },
    {
        id: "09",
        title: "Travel Monkey Club",
        imgUrl: img11,
        creator: "Trista Francis",
        creatorImg: ava05,
        currentBid: 5.89,
    },
    {
        id: "09",
        title: "Travel Monkey Club",
        imgUrl: img09,
        creator: "Trista Francis",
        creatorImg: ava05,
        currentBid: 5.89,
    },
];