import Vue from "vue";
import Router from "vue-router";
import HowItWorks5 from "./components/HowItWorks5";
import xMaiN from "./components/xMaiN";
import HowItWorks4 from "./components/HowItWorks4";
import LogiN from "./components/LogiN";
import CreateRoom from "./components/CreateRoom";
import HowItWorks2 from "./components/HowItWorks2";
import Payment from "./components/Payment";
import HowItWorks6 from "./components/HowItWorks6";
import DisCover from "./components/DisCover";
import DashboarD from "./components/DashboarD";
import InRoom from "./components/InRoom";
import RegisteR from "./components/RegisteR";
import EnterPassword from "./components/EnterPassword";
import Biding from "./components/Biding";
import Member from "./components/Member";
import HowItWorks3 from "./components/HowItWorks3";
import FramE1 from "./components/FramE1";
import FrameT1 from "./components/FrameT1";
import FramE12 from "./components/FramE12";
import {
  xMaiNData,
  howItWorks4Data,
  logiNData,
  createRoomData,
  howItWorks2Data,
  paymentData,
  howItWorks6Data,
  disCoverData,
  dashboarDData,
  inRoomData,
  registeRData,
  enterPasswordData,
  bidingData,
  memberData,
  howItWorks3Data,
  frameT1Data,
  frame12Data,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/how-it-works-5",
      component: HowItWorks5,
      props: {
        cannotBid: "cannot bid",
        spanText1: "Step 4",
        spanText2:
          " Withdrawal<br />The winner who won the challenge can<br />use that pool money spending or investing.<br />Do step 2 again<br /><br />",
        spanText3:
          "The member who receives the fund in a particular cycle cannot receive it again until all other members have received it.",
        price: "$615",
      },
    },
    {
      path: "/main",
      component: xMaiN,
      props: { ...xMaiNData },
    },
    {
      path: "/how-it-works-4",
      component: HowItWorks4,
      props: { ...howItWorks4Data },
    },
    {
      path: "/login",
      component: LogiN,
      props: { ...logiNData },
    },
    {
      path: "/create-room",
      component: CreateRoom,
      props: { ...createRoomData },
    },
    {
      path: "/how-it-works-2",
      component: HowItWorks2,
      props: {
        spanText1: "Step 1",
        spanText2:
          " Create room and choose<br />- Type of peer share<br />- Policies<br />- Length of time<br />- Currency<br />- Pool size<br />- People who can join",
        fixPeerShare6Mem: "Fix peer share<br />6 members<br />$100 per person<br />1 per month",
        group411Props: howItWorks2Data.group411Props,
        group412Props: howItWorks2Data.group412Props,
      },
    },
    {
      path: "/payment",
      component: Payment,
      props: { ...paymentData },
    },
    {
      path: "/how-it-works-6",
      component: HowItWorks6,
      props: {
        roscaIsTheCommon:
          "ROSCA is the common name of<br />Mexico: Tanda, Nigeria: Esusu, India: Chit Fund<br />South Africa: Stokvel, Philippines: Paluwagan<br />China: Hui and Thailand: Pia share<br />Peer lending circles have 3 type<br />- Fix<br />- Float<br />- Discount<br />Choose that suit with your lifestyle",
        group41Props: howItWorks6Data.group41Props,
      },
    },
    {
      path: "/discover",
      component: DisCover,
      props: { ...disCoverData },
    },
    {
      path: "/dashboard",
      component: DashboarD,
      props: { ...dashboarDData },
    },
    {
      path: "/inroom",
      component: InRoom,
      props: { ...inRoomData },
    },
    {
      path: "/register",
      component: RegisteR,
      props: { ...registeRData },
    },
    {
      path: "/enter-password",
      component: EnterPassword,
      props: {
        title: "Enter your password",
        inputType: "text",
        inputPlaceholder: "Type here",
        xButton1Props: enterPasswordData.xButton1Props,
        xButton2Props: enterPasswordData.xButton2Props,
      },
    },
    {
      path: "/biding",
      component: Biding,
      props: { ...bidingData },
    },
    {
      path: "/member",
      component: Member,
      props: { ...memberData },
    },
    {
      path: "/how-it-works-3",
      component: HowItWorks3,
      props: { ...howItWorks3Data },
    },
    {
      path: "/frame-1",
      component: FramE1,
      props: {
        checkmark:
          "https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450b4486b9777a5bb505c9a/img/checkmark@2x.png",
        ex:
          "https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450b4486b9777a5bb505c9a/img/ex@2x.png",
      },
    },
    {
      path: "/frame-12",
      component: FramE12,
      props: { submitProps: frame12Data.submitProps, submitProps2: frame12Data.submitProps2 },
    },
    {
      path: "*",
      component: FrameT1,
      props: { submitProps: frameT1Data.submitProps, submitProps2: frameT1Data.submitProps2 },
    },
  ],
});
