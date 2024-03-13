function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const assets = importAll(
  require.context("../../assets/", false, /\.(png|jpe?g|svg)$/)
);

const resAssets = importAll(
  require.context("../../assets/res", false, /\.(png|jpe?g|svg)$/)
);

export const content = [
  {
    id: "1",
    url: `${assets["BigSave.jpg"]}`,
    vendor: "Big Save",
    location: "Potheri",
    endingDate: "2024/03/24",
    discount: 80,
    items: "Dairy Items",
  },
  {
    id: "2",
    url: `${assets["RelianceMart.jpg"]}`,
    vendor: "Reliance Mart",
    location: "Potheri",
    endingDate: "2024/04/24",
    discount: 70,
    items: "Chips and Crackers",
  },
  {
    id: "3",
    url: `${assets["GoldenDepartmentalStore.jpg"]}`,
    vendor: "Golden Departmental Store",
    location: "Potheri",
    endingDate: "2024/05/25",
    discount: 75,
    items: "Confectionaries",
  },
  {
    id: "4",
    url: `${assets["amuthamdepartmentstore.jpg"]}`,
    vendor: "amutham department store.jpg",
    location: "Potheri",
    endingDate: "2024/04/26",
    discount: 80,
    items: "Fresh Produce",
  },
  {
    id: "5",
    url: `${assets["dummy5.jpg"]}`,
    vendor: "Jio Mart",
    location: "Potheri",
    endingDate: "2024/04/27",
    discount: 70,
    items: "Masala Items",
  },
];

export const res_content = [
  {
    id: "1",
    url: `${resAssets["Golcondas .jpg"]}`,
    vendor: "Golcondas",
    location: "Gst Food street",
    endingDate: "2022/03/24 8 PM to 10 PM",
    discount: 100,
    items: "Leftover Items",
  },
  {
    id: "2",
    url: `${resAssets["Table9restro.jpg"]}`,
    vendor: "Table 9",
    location: "Potheri",
    endingDate: "2024/03/24 after 9 PM",
    discount: 100,
    items: "Leftover Items",
  },
  {
    id: "3",
    url: `${resAssets["thearkbistro.jpg"]}`,
    vendor: "Ark Bistro",
    location: "abode valley after 9 PM",
    endingDate: "2024/03/25",
    discount: 100,
    items: "Leftover Items",
  },
  {
    id: "4",
    url: `${resAssets["malabarcamboose.jpg"]}`,
    vendor: "Malabar Camboose",
    location: "GST food street",
    endingDate: "2024/03/26 from 8 PM to 9 PM",
    discount: 100,
    items: "Leftover Items",
  },
];
