const ages =[12,14,15,16];
const ages2 = [16,15,10];

const ages3 = [33,45,3];

const allAges = ages.concat(ages2).concat(77).concat(ages3);

const allAges2 =[...ages,...ages2,77,...ages3];

// console.log(allAges2);

const busness = 650;
const minister = 450;
const shocib = 260;

const takaPoisa = [650,450,360,789];

// const maximum = Math.max(busness,minister,shocib);
const maximum =Math.max(...takaPoisa);
console.log(maximum);