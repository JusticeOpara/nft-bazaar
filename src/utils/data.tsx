import img01 from "../assets/images/img01.png"
import img02 from "../assets/images/img02.jpg";
import img03 from "../assets/images/img03.jpg";
import img04 from "../assets/images/img04.avif";
import img05 from "../assets/images/img05.avif";
import img06 from "../assets/images/img06.avif";
import img07 from "../assets/images/img07.avif";
import img08 from "../assets/images/img08.avif";
import img09 from "../assets/images/img15.avif";
import img10 from "../assets/images/im10.avif";
import img11 from "../assets/images/img11.avif";
import img12 from "../assets/images/img12.avif";
import img13 from "../assets/images/img13.webp";
import img20 from "../assets/images/blocknft.avif"
import img16 from "../assets/boredApe.png"
import azra from "../assets/images/Azra.webp"


import ava01 from "../assets/images/ava-01.png";
import ava02 from "../assets/images/ava-02.png";
import ava03 from "../assets/images/ava-03.png";
import ava04 from "../assets/images/ava-04.png";
import ava05 from "../assets/images/ava-05.png";
import ava06 from "../assets/images/ava-06.png";
import ava07 from "../assets/images/ava07.jpg"
import ava08 from "../assets/images/ava08.jpg"
import ava09 from "../assets/images/ava09.jpg"
import ava10 from "../assets/images/ava10.jpg"

import showcase01 from "../assets/images/showcase-1.jpg"
import showcase02 from "../assets/images/showcase-2.jpg"
import showcase03 from "../assets/images/showcase-3.jpg"
import showcase04 from "../assets/images/showcase-4.jpg"
import showcase05 from "../assets/images/showcase-5.jpg"
import showcase06 from "../assets/images/showcase-6.gif"
import showcase08 from "../assets/images/showcase-8.gif"




interface Category {
    id: string;
    title: string;
    imgUrl: string;
    price: number;
    creatorImg: string;
    currentBid: number;
}

export const Categories: Category[] = [

    {
        id: "01",
        title: "Travel Monkey Club",
        imgUrl: img01,
        price: 55.896,
        creatorImg: ava01,
        currentBid: 5.89,
    },

    {
        id: "02",
        title: "Sir Lion Swag",
        imgUrl: img02,
        price: 55.896,
        creatorImg: ava02,
        currentBid: 5.09,
    },

    {
        id: "03",
        title: "Civilian",
        imgUrl: img03,
        price: 55.896,
        creatorImg: ava03,
        currentBid: 6.89,
    },

    {
        id: "04",
        title: "Guard",
        imgUrl: img04,
        price: 55.896,
        creatorImg: ava04,
        currentBid: 7.89,
    },

    {
        id: "05",
        title: "Travel Monkey Club",
        imgUrl: img05,
        price: 55.896,
        creatorImg: ava10,
        currentBid: 4.89,
    },

    {
        id: "06",
        title: "Sir Lion Swag",
        imgUrl: img06,
        price: 55.896,
        creatorImg: ava06,
        currentBid: 4.89,
    },

    {
        id: "07",
        title: "Civilian",
        imgUrl: img07,
        price: 55.896,
        creatorImg: ava07,
        currentBid: 5.89,
    },

    {
        id: "08",
        title: "Guard",
        imgUrl: img08,
        price: 55.896,
        creatorImg: ava04,
        currentBid: 5.89,
    },

    {
        id: "09",
        title: "Travel Monkey Club",
        imgUrl: img10,
        price: 55.896,
        creatorImg: ava08,
        currentBid: 5.89,
    },
    {
        id: "09",
        title: "Travel Monkey Club",
        imgUrl: img11,
        price: 55.896,
        creatorImg: ava05,
        currentBid: 5.89,
    },
    {
        id: "09",
        title: "Travel Monkey Club",
        imgUrl: img09,
        price: 55.896,
        creatorImg: ava09,
        currentBid: 5.89,
    },
    {
        id: "04",
        title: "Guard",
        imgUrl: img12,
        price: 55.896,
        creatorImg: ava04,
        currentBid: 7.89,
    },

    {
        id: "05",
        title: "Travel Monkey Club",
        imgUrl: img20,
        price: 55.896,
        creatorImg: ava10,
        currentBid: 4.89,
    },
    {
        id: "04",
        title: "Guard",
        imgUrl: img13,
        price: 55.896,
        creatorImg: ava04,
        currentBid: 7.89,
    },

    {
        id: "05",
        title: "Travel Monkey Club",
        imgUrl: img16,
        price: 55.896,
        creatorImg: ava10,
        currentBid: 4.89,
    },


];


interface Nfts {
    title: string,
    imgUrl: string,
    floor: number,

}
export const Nfts: Nfts[] = [

    {
        title: "Azra Games - The Hopeful",
        imgUrl: showcase01,
        floor: 5.436
    },
    {
        title: "Azra Games - The Hopeful",
        imgUrl: showcase02,
        floor: 5.436
    },
    {
        title: "Azra Games - The Hopeful",
        imgUrl: showcase08,
        floor: 5.436
    },
    {
        title: "",
        imgUrl: showcase04,
        floor: 5.436
    },
    {
        title: "",
        imgUrl: showcase05,
        floor: 5.436
    },
    {
        title: "",
        imgUrl: showcase06,
        floor: 5.436
    },
    {
        title: "Azra Games - The Hopeful",
        imgUrl: showcase03,
        floor: 5.436
    },
    {
        title: "Azra Games - The Hopeful",
        imgUrl: azra,
        floor: 5.436
    },

];