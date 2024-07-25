import man_1 from '../Assets/men-1.webp';
import man_2 from '../Assets/men-2.webp';
import man_3 from '../Assets/men-3.webp';
import man_4 from '../Assets/men-4.webp';
import man_5 from '../Assets/men-5.webp';
import man_6 from '../Assets/men-6.webp';
import man_7 from '../Assets/men-7.webp';
import man_8 from '../Assets/men-8.webp';
import man_9 from '../Assets/men-9.webp';
import man_10 from '../Assets/men-10.webp';
import man_11 from '../Assets/men-11.webp';
import man_12 from '../Assets/men-12.webp';
import women_1 from '../Assets/women-1.webp';
import women_2 from '../Assets/women-2.webp';
import women_3 from '../Assets/women-3.webp';
import women_4 from '../Assets/women-4.webp';
import women_5 from '../Assets/women-5.webp';
import women_6 from '../Assets/women-6.webp';
import women_7 from '../Assets/women-7.webp';
import women_8 from '../Assets/women-8.webp';
import women_9 from '../Assets/women-9.webp';
import women_10 from '../Assets/women-10.webp';
import women_11 from '../Assets/women-11.webp';
import women_12 from '../Assets/women-12.webp';
import kid_1 from '../Assets/kid-1.webp';
import kid_2 from '../Assets/kid-2.webp';
import kid_3 from '../Assets/kid-3.webp';
import kid_4 from '../Assets/kid-4.webp';
import kid_5 from '../Assets/kid-5.webp';
import kid_6 from '../Assets/kid-6.webp';
import kid_7 from '../Assets/kid-7.webp';
import kid_8 from '../Assets/kid-8.webp';
import kid_9 from '../Assets/kid-9.webp';
import kid_10 from '../Assets/kid-10.webp';
import kid_11 from '../Assets/kid-11.webp';
import kid_12 from '../Assets/kid-12.webp';

const all_products=[
    {
        id:1,
        name:"Men Checkered Hooded",
        category:"men",
        image:man_1,
        new_price:449,
        old_price:1999
    },
    {
        id:2,
        name:"Polo Neck Cotton Blend Green T-Shirt",
        category:"men",
        image:man_2,
        new_price:299,
        old_price:1000,
    },
    {
        id:3,
        name:"Spread Collar Formal Shirt",
        category:"men",
        image:man_3,
        new_price:349,
        old_price:1999
    },
    {
        id:4,
        name:"Solid Formal Shirt",
        category:"men",
        image:man_4,
        new_price:349,
        old_price:1999
    },
    {
        id:5,
        name:"Grey Hooded Sweatshirt",
        category:"men",
        image:man_5,
        new_price:789,
        old_price:1499,
    },
    {
        id:6,
        name:"Printed Hooded Sweatshirt",
        category:"men",
        image:man_6,
        new_price:499,
        old_price:1499,
    },
    {
        id:7,
        name:"Full Sleeve Solid Sweatshirt",
        category:"men",
        image:man_7,
        new_price:567,
        old_price:1999,
    },
    {
        id:8,
        name:"Men Cargos",
        category:"men",
        image:man_8,
        new_price:383,
        old_price:1299,
    },
    {
        id:9,
        name:"Grey Moveo for Men Cargos",
        category:"men",
        image:man_9,
        new_price:1754,
        old_price:3899,
    },
    {
        id:10,
        name:"Men Solid Puffer Jacket",
        category:"men",
        image:man_10,
        new_price:1287,
        old_price:2999,
    },
    {
        id:11,
        name:"Men Solid Denim Jacket",
        category:"men",
        image:man_11,
        new_price:849,
        old_price:2459,
    },
    {
        id:12,
        name:"Men Solid Casual Jacket",
        category:"men",
        image:man_12,
        new_price:589,
        old_price:2000,
    },
    {
        id:13,
        name:" Rayon Anarkali Kurta ",
        category:"women",
        image:women_1,
        new_price:453,
        old_price:1567,
    },
    {
        id:14,
        name:"Embroidered Red Kurta",
        category:"women",
        image:women_2,
        new_price:789,
        old_price:1229,
    },
    {
        id:15,
        name:"Stitched Lehenga Choli",
        category:"women",
        image:women_3,
        new_price:542,
        old_price:2099,
    },
    {
        id:16,
        name:"Maroon Lehenga Choli",
        category:"women",
        image:women_4,
        new_price:675,
        old_price:1599,
    },
    {
        id:17,
        name:"Pink Anarkali Gown",
        category:"women",
        image:women_5,
        new_price:240,
        old_price:1589,
    },
    {
        id:18,
        name:"Women Blue Jeans",
        category:"women",
        image:women_6,
        new_price:340,
        old_price:789,
    },
    {
        id:19,
        name:"Women Black Jeans",
        category:"women",
        image:women_7,
        new_price:299,
        old_price:765,
    },
    {
        id:20,
        name:"Women winter jacket",
        category:"women",
        image:women_8,
        new_price:1499,
        old_price:2789,
    },
    {
        id:21,
        name:"Maroon Skirt",
        category:"women",
        image:women_9,
        new_price:342,
        old_price:576,
    },
    {
        id:22,
        name:"Black Skirt",
        category:"women",
        image:women_10,
        new_price:321,
        old_price:674,
    },
    {
        id:23,
        name:"Net Saree",
        category:"women",
        image:women_11,
        new_price:1299,
        old_price:3489,
    },
    {
        id:24,
        name:"Red Cotton Silk Saree",
        category:"women",
        image:women_12,
        new_price:1200,
        old_price:2768,
    },
    {
        id:25,
        name:"Pure Cotton T Shirt",
        category:"kid",
        image:kid_1,
        new_price:800,
        old_price:1259,
    },
    {
        id:26,
        name:" Striped Pure Cotton T Shirt ",
        category:"kid",
        image:kid_2,
        new_price:337,
        old_price:995,
    },
    {
        id:27,
        name:"Cotton Blend T Shirt(3)",
        category:"kid",
        image:kid_3,
        new_price:457,
        old_price:2297,
    },
    {
        id:28,
        name:"Boys Festive & Party Kurta",
        category:"kid",
        image:kid_4,
        new_price:337,
        old_price:700,
    },
    {
        id:29,
        name:"Self Design Sherwani",
        category:"kid",
        image:kid_5,
        new_price:324,
        old_price:789,
    },
    {
        id:30,
        name:"Full Sleeve Printed Hooded Sweatshirt",
        category:"kid",
        image:kid_6,
        new_price:845,
        old_price:1999,
    },
    {
        id:31,
        name:"Block Hooded Sweatshirt",
        category:"kid",
        image:kid_7,
        new_price:654,
        old_price:1200,
    },
    {
        id:32,
        name:"Graphic Print Hooded Sweatshirt",
        category:"kid",
        image:kid_8,
        new_price:1200,
        old_price:2567,
    },
    {
        id:33,
        name:"Girls Solid Quilted Jacket",
        category:"kid",
        image:kid_9,
        new_price:897,
        old_price:1400,
    },
    {
        id:34,
        name:"Boys Solid Casual Jacket",
        category:"kid",
        image:kid_10,
        new_price:1234,
        old_price:1564,
    },
    {
        id:35,
        name:"Spread Collar Casual Shirt",
        category:"kid",
        image:kid_11,
        new_price:567,
        old_price:1143,
    },
    {
        id:36,
        name:"Boys Colorblock Casual Jacket",
        category:"kid",
        image:kid_12,
        new_price:445,
        old_price:769,
    }
     
];
export default all_products;
