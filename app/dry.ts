import { RxDashboard } from "react-icons/rx";
import { HiOutlineTrash } from "react-icons/hi";
import { AiFillFolder } from "react-icons/ai";
import { IconType } from "react-icons";
import { BsCardImage } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";

export const sidebar: {
  isReactIcons: boolean;
  icon: any;
  text: string;
  url: string;
}[] = [
  {
    isReactIcons: true,
    icon: RxDashboard,
    text: "Dashboard",
    url: "/",
  },
  {
    isReactIcons: false,
    icon: {
      d1: "M14.855 8.35499C14.8085 8.30812 14.7532 8.27092 14.6923 8.24554C14.6313 8.22016 14.566 8.20709 14.5 8.20709C14.434 8.20709 14.3686 8.22016 14.3077 8.24554C14.2468 8.27092 14.1915 8.30812 14.145 8.35499L12.5 9.99999L12.5 4.99998C12.5 4.86738 12.4473 4.7402 12.3535 4.64643C12.2598 4.55266 12.1326 4.49998 12 4.49998C11.8674 4.49998 11.7402 4.55266 11.6464 4.64643C11.5526 4.7402 11.5 4.86738 11.5 4.99998L11.5 9.99999L9.85497 8.35499C9.80849 8.30812 9.75319 8.27092 9.69226 8.24554C9.63133 8.22016 9.56597 8.20709 9.49997 8.20709C9.43396 8.20709 9.36861 8.22016 9.30768 8.24554C9.24675 8.27092 9.19145 8.30812 9.14497 8.35499C9.05184 8.44867 8.99957 8.57539 8.99957 8.70749C8.99957 8.83958 9.05184 8.9663 9.14497 9.05999L11.295 11.205C11.4816 11.3928 11.7352 11.4989 12 11.5V11.5C12.263 11.4976 12.5145 11.3916 12.7 11.205L14.85 9.05999C14.9438 8.96697 14.9969 8.84061 14.9979 8.70852C14.9988 8.57642 14.9474 8.44933 14.855 8.35499V8.35499Z",
      clipPath: "url(#clip0_862_550)",
      d2: "M22.459 8.10012L15.535 1.46412C14.5966 0.535612 13.3307 0.0135603 12.0106 0.0107536C10.6905 0.00794686 9.4223 0.524611 8.48 1.44912L1.54 8.10012C1.05461 8.56761 0.668162 9.12792 0.403609 9.74773C0.139055 10.3675 0.00180022 11.0342 0 11.7081L0 19.0001C0.00158786 20.3257 0.528882 21.5966 1.46622 22.5339C2.40356 23.4712 3.6744 23.9985 5 24.0001H19C20.3256 23.9985 21.5964 23.4712 22.5338 22.5339C23.4711 21.5966 23.9984 20.3257 24 19.0001V11.7081C23.9982 11.0341 23.8609 10.3673 23.5962 9.74751C23.3314 9.12767 22.9447 8.56743 22.459 8.10012V8.10012ZM9.879 2.87812C10.446 2.31611 11.213 2.00213 12.0113 2.00513C12.8097 2.00813 13.5742 2.32787 14.137 2.89412L20.884 9.35812L14.121 16.1221C13.5493 16.6671 12.7898 16.9711 12 16.9711C11.2102 16.9711 10.4507 16.6671 9.879 16.1221L3.115 9.35812L9.879 2.87812ZM22 19.0001C22 19.7958 21.6839 20.5588 21.1213 21.1214C20.5587 21.684 19.7956 22.0001 19 22.0001H5C4.20435 22.0001 3.44129 21.684 2.87868 21.1214C2.31607 20.5588 2 19.7958 2 19.0001V11.7081C2.00101 11.514 2.02077 11.3204 2.059 11.1301L8.465 17.5361C9.40572 18.4676 10.6761 18.9902 12 18.9902C13.3239 18.9902 14.5943 18.4676 15.535 17.5361L21.941 11.1301C21.9792 11.3204 21.999 11.514 22 11.7081V19.0001Z",
      clipPathId: "clip0_862_550",
    },
    text: "Surat Masuk",
    url: "/incoming",
  },
  {
    isReactIcons: false,
    icon: {
      d1: "M9.14503 7.645C9.19151 7.69186 9.24681 7.72906 9.30774 7.75445C9.36867 7.77983 9.43403 7.7929 9.50003 7.7929C9.56604 7.7929 9.63139 7.77983 9.69232 7.75445C9.75325 7.72906 9.80855 7.69186 9.85503 7.645L11.5 6L11.5 11C11.5 11.1326 11.5527 11.2598 11.6465 11.3536C11.7402 11.4473 11.8674 11.5 12 11.5C12.1326 11.5 12.2598 11.4473 12.3536 11.3536C12.4474 11.2598 12.5 11.1326 12.5 11L12.5 6L14.145 7.645C14.1915 7.69186 14.2468 7.72906 14.3077 7.75445C14.3687 7.77983 14.434 7.7929 14.5 7.7929C14.566 7.7929 14.6314 7.77983 14.6923 7.75445C14.7532 7.72906 14.8085 7.69186 14.855 7.645C14.9482 7.55132 15.0004 7.42459 15.0004 7.2925C15.0004 7.16041 14.9482 7.03368 14.855 6.94L12.705 4.795C12.5184 4.60721 12.2648 4.50112 12 4.5V4.5C11.737 4.50243 11.4855 4.60842 11.3 4.795L9.15003 6.94C9.05624 7.03302 9.00307 7.15937 9.00213 7.29147C9.00119 7.42356 9.05257 7.55066 9.14503 7.645V7.645Z",
      clipPath: "url(#clip0_618_580)",
      d2: "M22.459 8.10012L15.535 1.46412C14.5966 0.535612 13.3307 0.0135603 12.0106 0.0107536C10.6905 0.00794686 9.4223 0.524611 8.48 1.44912L1.54 8.10012C1.05461 8.56761 0.668162 9.12792 0.403609 9.74773C0.139055 10.3675 0.00180022 11.0342 0 11.7081L0 19.0001C0.00158786 20.3257 0.528882 21.5966 1.46622 22.5339C2.40356 23.4712 3.67441 23.9985 5 24.0001H19C20.3256 23.9985 21.5964 23.4712 22.5338 22.5339C23.4711 21.5966 23.9984 20.3257 24 19.0001V11.7081C23.9982 11.0341 23.8609 10.3673 23.5962 9.74751C23.3314 9.12767 22.9447 8.56742 22.459 8.10012ZM9.879 2.87812C10.446 2.31611 11.213 2.00213 12.0113 2.00513C12.8097 2.00813 13.5742 2.32787 14.137 2.89412L20.884 9.35812L14.121 16.1221C13.5493 16.6671 12.7898 16.9711 12 16.9711C11.2102 16.9711 10.4507 16.6671 9.879 16.1221L3.115 9.35812L9.879 2.87812ZM22 19.0001C22 19.7958 21.6839 20.5588 21.1213 21.1214C20.5587 21.684 19.7956 22.0001 19 22.0001H5C4.20435 22.0001 3.44129 21.684 2.87868 21.1214C2.31607 20.5588 2 19.7958 2 19.0001V11.7081C2.00101 11.514 2.02077 11.3204 2.059 11.1301L8.465 17.5361C9.40572 18.4676 10.6761 18.9902 12 18.9902C13.3239 18.9902 14.5943 18.4676 15.535 17.5361L21.941 11.1301C21.9792 11.3204 21.999 11.514 22 11.7081V19.0001Z",
      clipPathId: "clip0_618_580",
    },
    text: "Surat Keluar",
    url: "/outgoing",
  },
  {
    isReactIcons: true,
    icon: HiOutlineTrash,
    text: "Surat Inaktif",
    url: "/inactive",
  },
];

export const quickAccess = [
  {
    folderName: "Unpad",
    numOfFiles: 4,
    size: 23.2,
  },
  {
    folderName: "Institut Teknologi Bandung",
    numOfFiles: 2,
    size: 13.2,
  },
  {
    folderName: "Universitas Pendidikan Indonesia",
    numOfFiles: 6,
    size: 30,
  },
  {
    folderName: "UNIKOM",
    numOfFiles: 1,
    size: 5,
  },
  {
    folderName: "Unpas",
    numOfFiles: 3,
    size: 17,
  },
];

export const recentFiles: {
  icon: {
    type: IconType;
    color: string;
  };
  name: string;
  details?: {
    items: number;
    size: number;
  };
}[] = [
  {
    icon: {
      type: AiFillFolder,
      color: "#012970",
    },
    name: "UNIKOM",
    details: {
      items: 5,
      size: 512,
    },
  },
  {
    icon: {
      type: AiFillFolder,
      color: "#012970",
    },
    name: "Unpad",
    details: {
      items: 13,
      size: 956,
    },
  },
  {
    icon: {
      type: AiFillFolder,
      color: "#012970",
    },
    name: "Institut Teknologi Bandung",
    details: {
      items: 1,
      size: 20,
    },
  },
  {
    icon: {
      type: BsCardImage,
      color: "#BE63F9",
    },
    name: "img.png",
  },
  {
    icon: {
      type: IoDocumentTextSharp,
      color: "#FF9900",
    },
    name: "document.docx",
  },
  {
    icon: {
      type: BsCardImage,
      color: "#BE63F9",
    },
    name: "image-2.jpg",
  },
];

export const list = {
  th: ["Nama", "Diubah", "Ukuran File"],
  body: [
    {
      name: "Unpad",
      lastChanged: "2 jam yang lalu",
      size: "512 MB",
    },
    {
      name: "UNIKOM",
      lastChanged: "1 jam yang lalu",
      size: "12 MB",
    },
    {
      name: "ISBI",
      lastChanged: "10 menit yang lalu",
      size: "1 KB",
    },
    {
      name: "Universitas Pendidikan Indonesia",
      lastChanged: "52 detik yang lalu",
      size: "72 KB",
    },
    {
      name: "Institut Teknologi Bandung",
      lastChanged: "10 detik yang lalu",
      size: "1 B",
    },
  ],
};
