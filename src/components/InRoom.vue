<template>
  <div class="container-center-horizontal">
    <div class="inroom screen">
      <header class="header-3">
        <div class="overlap-group-17">
          <div class="discover-5 montserrat-medium-black-18px">{{ discover }}</div>
          <img
            class="line-1-5"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1.svg"
            alt="Line 1"
          />
          <router-link to="/create-room">
            <div class="create-room-5 montserrat-medium-black-18px">{{ createRoom }}</div> </router-link
          ><router-link to="/main">
            <div class="bank4all-4 montserrat-extra-bold-black-28px">{{ bank4All }}</div> </router-link
          ><img
            class="icon-search-6"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6453d37b63076cae904c72bd/img/bi-search-22.svg"
            alt="icon-search"
          />
          <div class="me-3 montserrat-medium-black-18px">{{ me }}</div>
          <router-link to="/how-it-works-6" className="align-self-flex-end">
            <div class="get-started-4">
              <div class="frame-1-1">
                <div class="how-it-works-8 montserrat-medium-white-18px">{{ howItWorks }}</div>
              </div>
            </div></router-link
          >
        </div>
      </header>
      <div class="group-123">
        <div class="flex-row-15">
          <div class="flex-col-13">
            <div class="overlap-group6">
              <div class="peer-share-rosca inter-normal-black-36px">{{ peerShareRosca }}</div>
              <div class="welcome-to-room-1">{{ welcomeToRoom1 }}</div>
            </div>
            <div class="flex-row-16">
              <div class="detail-1 inter-normal-black-23px">{{ detail }}</div>
              <div class="overlap-group16-1">
                <router-link to="/member">
                  <div class="member inter-normal-black-23px">{{ member }}</div> </router-link
                ><router-link to="/biding">
                  <div class="biding inter-normal-black-23px">{{ biding }}</div>
                </router-link>
              </div>
              <router-link to="/payment">
                <div class="payment-2 inter-normal-black-23px">{{ payment }}</div>
              </router-link>
            </div>
            <div class="overlap-group2-4 inter-bold-black-23px">
              <div class="rectangle-180"></div>
              <div class="group-102 inter-normal-black-23px">
                <div class="peer-share-type">{{ peerShareType }}</div>
                <div class="group-102-item">{{ paymentAmount }}</div>
                <div class="payment-frequency">{{ paymentFrequency }}</div>
                <div class="overlap-group-18 inter-normal-black-23px">
                  <div class="maximum-member">{{ maximumMember }}</div>
                  <div class="pool-size-2">{{ poolSize }}</div>
                </div>
                <div class="start-date-1">{{ startDate }}</div>
                <div class="collateral-1">{{ collateral }}</div>
                <div class="group-102-item">{{ currency }}</div>
              </div>
              <div class="float-8">{{ float }}</div>
              <div class="text-24">{{ text24 }}</div>
              <div class="daily-7">{{ daily }}</div>
              <div class="text-25">{{ text25 }}</div>
              <div class="number-29">{{ number }}</div>
              <div class="address-1">{{ address1 }}</div>
              <div class="place-21">{{ place }}</div>
              <div class="baht-8">{{ baht }}</div>
            </div>
            <h1 class="title-3 inter-normal-black-36px">{{ title }}</h1>
          </div>
          <div class="overlap-group1-12 raleway-normal-black-13-4px">
            <div class="group-2">
              <div class="organizer">{{ organizer }}</div>
              <div class="overlap-group-19">
                <div class="ellipse-1-12"></div>
                <div class="ellipse-2"></div>
                <div class="ellipse-3"></div>
                <div class="ellipse-4"></div>
                <div class="ellipse-5-5"></div>
                <div class="ellipse-6-5"></div>
                <div class="pending">{{ pending1 }}</div>
                <div class="ellipse-7-5"></div>
                <div class="ellipse-8-5"></div>
                <div class="ellipse-9-5"></div>
                <div class="ellipse-10-5"></div>
                <div class="ellipse-11"></div>
                <div class="ellipse-12"></div>
                <div class="ellipse-13"></div>
              </div>
            </div>
            <div class="you">{{ you }}</div>
            <div class="pending-1">{{ pending2 }}</div>
            <div class="name-1-1">{{ name1 }}</div>
            <div class="name-2">{{ name2 }}</div>
            <div class="name-3">{{ name3 }}</div>
            <div class="name-4">{{ name4 }}</div>
            <div class="pending-2">{{ pending3 }}</div>
            <div class="pending-3">{{ pending4 }}</div>
            <div class="pending-4">{{ pending5 }}</div>
            <div class="pending-5">{{ pending6 }}</div>
            <div class="pending-6">{{ pending7 }}</div>
          </div>
        </div>
        <div class="address-container raleway-normal-black-19-4px">
          <div class="address-2">{{ address2 }}</div>
          <div class="address-3">{{ address3 }}</div>
          <div class="address-4">{{ address4 }}</div>
          <div class="address-5">{{ address5 }}</div>
          <div class="address-6">{{ address6 }}</div>
          <div class="address-7">{{ address7 }}</div>
          <div class="address-8">{{ address8 }}</div>
          <div class="address-9">{{ address9 }}</div>
          <div class="address-10">{{ address10 }}</div>
          <div class="address-11">{{ address11 }}</div>
          <div class="address">{{ address12 }}</div>
          <div class="address">{{ address13 }}</div>
        </div>
        <div class="frame-container-1 raleway-normal-black-13-4px">
          <frame15 :round1="frame151Props.round1" />
          <frame15 :round1="frame152Props.round1" :className="frame152Props.className" />
          <frame15 :round1="frame153Props.round1" :className="frame153Props.className" />
          <frame15 :round1="frame154Props.round1" :className="frame154Props.className" />
          <frame15 :round1="frame155Props.round1" :className="frame155Props.className" />
          <frame15 :round1="frame156Props.round1" :className="frame156Props.className" />
          <frame15 :round1="frame157Props.round1" :className="frame157Props.className" />
          <frame15 :round1="frame158Props.round1" :className="frame158Props.className" />
          <frame15 :round1="frame159Props.round1" :className="frame159Props.className" />
          <div class="frame-24">
            <div class="round-1">{{ round10 }}</div>
          </div>
          <frame15 :round1="frame1510Props.round1" :className="frame1510Props.className" />
          <div class="frame-26">
            <div class="round-1">{{ round12 }}</div>
          </div>
        </div>
        <div class="flex-row-17">
          <div class="frame-37 raleway-normal-black-13-4px">
            <frame2 :name1="frame21Props.name1" />
            <frame2 :name1="frame22Props.name1" />
            <frame2 :name1="frame23Props.name1" :className="frame23Props.className" />
            <frame2 :name1="frame24Props.name1" />
            <frame6 :name5="frame61Props.name5" />
            <frame6 :name5="frame62Props.name5" :className="frame62Props.className" />
            <frame6 :name5="frame63Props.name5" :className="frame63Props.className" />
            <frame6 :name5="frame64Props.name5" :className="frame64Props.className" />
            <div class="frame-1">
              <div class="ellipse-1-11"></div>
              <div class="name-9">{{ name9 }}</div>
            </div>
            <div class="frame-12">
              <div class="frame-11">
                <div class="ellipse-1-11"></div>
                <div class="name-10">{{ name10 }}</div>
              </div>
            </div>
            <div class="frame-13">
              <div class="ellipse-15"></div>
              <div class="name-11">{{ name11 }}</div>
            </div>
            <div class="frame-1">
              <div class="ellipse-1-11"></div>
              <div class="name-12">{{ name12 }}</div>
            </div>
          </div>
          <div class="overlap-group9">
            <img class="crown-1" :src="crown1" alt="crown 1" /><img
              class="checkmark-2"
              :src="checkmark1"
              alt="checkmark"
            /><img class="checkmark" :src="checkmark2" alt="checkmark" /><img
              class="checkmark-1"
              :src="checkmark3"
              alt="checkmark"
            /><img class="checkmark-3" :src="checkmark4" alt="checkmark" /><img
              class="checkmark-4"
              :src="checkmark5"
              alt="checkmark"
            /><img class="checkmark-5" :src="checkmark6" alt="checkmark" /><img
              class="checkmark"
              :src="checkmark7"
              alt="checkmark"
            /><img class="checkmark-6" :src="checkmark8" alt="checkmark" /><img
              class="checkmark-7"
              :src="checkmark9"
              alt="checkmark"
            /><img class="checkmark-1" :src="checkmark10" alt="checkmark" /><img
              class="checkmark-1"
              :src="checkmark11"
              alt="checkmark"
            />
          </div>
          <div class="overlap-group4-2"><img class="group" :src="group87" alt="Group 87" /></div>
          <div class="overlap-group15"><img class="group" :src="group88" alt="Group 88" /></div>
          <div class="overlap-group3-3"><img class="group-89" :src="group89" alt="Group 89" /></div>
          <div class="overlap-group13-1"><img class="group" :src="group90" alt="Group 90" /></div>
          <div class="overlap-group10"><img class="group-91" :src="group91" alt="Group 91" /></div>
          <div class="overlap-group7"><img class="group" :src="group92" alt="Group 92" /></div>
          <div class="overlap-group8"><img class="group" :src="group93" alt="Group 93" /></div>
          <div class="overlap-group-16"><img class="group-9" :src="group94" alt="Group 94" /></div>
          <div class="overlap-group11"><img class="group-9" :src="group95" alt="Group 95" /></div>
          <div class="overlap-group14"><img class="group-9" :src="group96" alt="Group 96" /></div>
          <div class="overlap-group-16"><img class="group-9" :src="group97" alt="Group 97" /></div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Frame15 from "./Frame15";
import Frame2 from "./Frame2";
import Frame6 from "./Frame6";
import XFooter from "./XFooter";
export default {
  name: "InRoom",
  components: {
    Frame15,
    Frame2,
    Frame6,
    XFooter,
  },
  props: [
    "discover",
    "createRoom",
    "bank4All",
    "me",
    "howItWorks",
    "peerShareRosca",
    "welcomeToRoom1",
    "detail",
    "member",
    "biding",
    "payment",
    "peerShareType",
    "paymentAmount",
    "paymentFrequency",
    "maximumMember",
    "poolSize",
    "startDate",
    "collateral",
    "currency",
    "float",
    "text24",
    "daily",
    "text25",
    "number",
    "address1",
    "place",
    "baht",
    "title",
    "organizer",
    "pending1",
    "you",
    "pending2",
    "name1",
    "name2",
    "name3",
    "name4",
    "pending3",
    "pending4",
    "pending5",
    "pending6",
    "pending7",
    "address2",
    "address3",
    "address4",
    "address5",
    "address6",
    "address7",
    "address8",
    "address9",
    "address10",
    "address11",
    "address12",
    "address13",
    "round10",
    "round12",
    "name9",
    "name10",
    "name11",
    "name12",
    "crown1",
    "checkmark1",
    "checkmark2",
    "checkmark3",
    "checkmark4",
    "checkmark5",
    "checkmark6",
    "checkmark7",
    "checkmark8",
    "checkmark9",
    "checkmark10",
    "checkmark11",
    "group87",
    "group88",
    "group89",
    "group90",
    "group91",
    "group92",
    "group93",
    "group94",
    "group95",
    "group96",
    "group97",
    "frame151Props",
    "frame152Props",
    "frame153Props",
    "frame154Props",
    "frame155Props",
    "frame156Props",
    "frame157Props",
    "frame158Props",
    "frame159Props",
    "frame1510Props",
    "frame21Props",
    "frame22Props",
    "frame23Props",
    "frame24Props",
    "frame61Props",
    "frame62Props",
    "frame63Props",
    "frame64Props",
    "xFooterProps",
  ],
};
</script>

<style>
.inroom {
  align-items: center;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 2098px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.header-3 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: flex-start;
  margin-left: 8px;
  min-width: 1448px;
  width: auto;
}

.overlap-group-17 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 88px;
  min-width: 1440px;
  padding: 21px 17px;
}

.discover-5 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 90px;
}

.line-1-5 {
  align-self: flex-end;
  height: 40px;
  margin-left: 12px;
  object-fit: cover;
  width: 1px;
}

.create-room-5 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 23px;
  min-height: 22px;
  width: 141px;
}

.bank4all-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 405px;
  margin-top: 6px;
  min-height: 34px;
  width: 147px;
}

.icon-search-6 {
  height: 20px;
  margin-left: 274px;
  margin-top: 4px;
  width: 20px;
}

.me-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 24px;
  margin-top: 6px;
  min-height: 22px;
  width: 85px;
}

.get-started-4 {
  align-items: flex-start;
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  height: 40px;
  margin-left: 8px;
  min-width: 157px;
}

.frame-1-1 {
  align-items: flex-start;
  background-color: var(--fuscous-gray);
  border-radius: 6px;
  display: flex;
  gap: 10px;
  overflow: hidden;
  padding: 9px 19px;
  position: relative;
  width: fit-content;
}

.how-it-works-8 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.group-123 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 2.63px;
  margin-top: 26px;
  min-height: 1686px;
  width: 1387px;
}

.flex-row-15 {
  align-items: flex-start;
  display: flex;
  gap: 93px;
  height: 796px;
  margin-left: 12px;
  min-width: 1307px;
}

.flex-col-13 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 796px;
  width: 646px;
}

.overlap-group6 {
  align-self: center;
  height: 78px;
  margin-right: 69px;
  position: relative;
  width: 351px;
}

.peer-share-rosca {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 351px;
}

.welcome-to-room-1 {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: 27px;
  font-weight: 400;
  left: 42px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 45px;
}

.flex-row-16 {
  align-items: flex-end;
  display: flex;
  height: 40px;
  margin-left: 14px;
  margin-top: 35px;
  min-width: 450px;
}

.detail-1 {
  -webkit-text-stroke: 1px var(--black);
  align-self: flex-start;
  letter-spacing: 0;
  line-height: normal;
  min-height: 39px;
  width: 91px;
}

.overlap-group16-1 {
  height: 39px;
  margin-left: 15px;
  position: relative;
  width: 218px;
}

.member {
  cursor: pointer;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 126px;
}

.biding {
  cursor: pointer;
  left: 120px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 98px;
}

.payment-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  min-height: 39px;
  width: 126px;
}

.overlap-group2-4 {
  align-self: flex-end;
  height: 358px;
  margin-top: 14px;
  position: relative;
  width: 638px;
}

.rectangle-180 {
  background-color: var(--concrete);
  height: 355px;
  left: 0;
  position: absolute;
  top: 0;
  width: 638px;
}

.group-102 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 29px;
  min-height: 345px;
  position: absolute;
  top: 13px;
  width: 260px;
}

.peer-share-type {
  letter-spacing: 0;
  line-height: normal;
  min-height: 41px;
  width: 244px;
}

.group-102-item {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 2px;
  min-height: 41px;
  width: 244px;
}

.payment-frequency {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 7px;
  min-height: 41px;
  width: 244px;
}

.overlap-group-18 {
  height: 80px;
  margin-top: 1px;
  position: relative;
  width: 244px;
}

.maximum-member {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 40px;
  width: 244px;
}

.pool-size-2 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 244px;
}

.start-date-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 3px;
  min-height: 41px;
  width: 244px;
}

.collateral-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4px;
  min-height: 41px;
  width: 244px;
}

.float-8 {
  left: 480px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 14px;
  width: 85px;
}

.text-24 {
  left: 479px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 56px;
  width: 85px;
}

.daily-7 {
  left: 479px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 104px;
  width: 85px;
}

.text-25 {
  left: 479px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 146px;
  width: 85px;
}

.number-29 {
  left: 479px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 190px;
  width: 85px;
}

.address-1 {
  left: 479px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 229px;
  width: 85px;
}

.place-21 {
  left: 479px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 274px;
  width: 85px;
}

.baht-8 {
  left: 479px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 315px;
  width: 85px;
}

.title-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 203px;
  min-height: 68px;
  width: 189px;
}

.overlap-group1-12 {
  height: 582px;
  margin-top: 53px;
  position: relative;
  width: 568px;
}

.group-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 582px;
  padding: 0 0px;
  position: absolute;
  top: 0;
  width: 568px;
}

.organizer {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.59px;
  min-height: 18px;
  width: 70px;
}

.overlap-group-19 {
  height: 564px;
  margin-right: 4px;
  position: relative;
  width: 564px;
}

.ellipse-1-12 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black);
  border-radius: 244.24px;
  height: 488px;
  left: 38px;
  position: absolute;
  top: 38px;
  width: 488px;
}

.ellipse-2 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 245px;
  position: absolute;
  top: 0;
  width: 75px;
}

.ellipse-3 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 245px;
  position: absolute;
  top: 488px;
  width: 75px;
}

.ellipse-4 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 488px;
  position: absolute;
  top: 245px;
  width: 75px;
}

.ellipse-5-5 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 0;
  position: absolute;
  top: 245px;
  width: 75px;
}

.ellipse-6-5 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 124px;
  position: absolute;
  top: 38px;
  width: 75px;
}

.pending {
  left: 135px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 67px;
  width: 60px;
}

.ellipse-7-5 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 38px;
  position: absolute;
  top: 121px;
  width: 75px;
}

.ellipse-8-5 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 38px;
  position: absolute;
  top: 368px;
  width: 75px;
}

.ellipse-9-5 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 124px;
  position: absolute;
  top: 451px;
  width: 75px;
}

.ellipse-10-5 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 366px;
  position: absolute;
  top: 451px;
  width: 75px;
}

.ellipse-11 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 461px;
  position: absolute;
  top: 368px;
  width: 75px;
}

.ellipse-12 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 461px;
  position: absolute;
  top: 121px;
  width: 75px;
}

.ellipse-13 {
  background-color: var(--alto);
  border-radius: 37.58px;
  height: 75px;
  left: 366px;
  position: absolute;
  top: 38px;
  width: 75px;
}

.you {
  left: 272px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 47px;
  width: 28px;
}

.pending-1 {
  left: 50px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 169px;
  width: 60px;
}

.name-1-1 {
  left: 52px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 417px;
  width: 55px;
}

.name-2 {
  left: 137px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 500px;
  width: 56px;
}

.name-3 {
  left: 378px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 500px;
  width: 56px;
}

.name-4 {
  left: 474px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 416px;
  width: 56px;
}

.pending-2 {
  left: 380px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 85px;
  width: 60px;
}

.pending-3 {
  left: 257px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 535px;
  width: 60px;
}

.pending-4 {
  left: 498px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 292px;
  width: 60px;
}

.pending-5 {
  left: 10px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 293px;
  width: 60px;
}

.pending-6 {
  left: 471px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 169px;
  width: 60px;
}

.address-container {
  align-items: flex-end;
  display: flex;
  height: 25px;
  margin-left: 15.37px;
  margin-top: 6px;
  min-width: 1194px;
}

.address-2 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: normal;
  min-height: 23px;
  min-width: 53px;
  white-space: nowrap;
}

.address-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 52px;
  min-height: 23px;
  min-width: 54px;
  white-space: nowrap;
}

.address-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 45px;
  min-height: 23px;
  min-width: 54px;
  white-space: nowrap;
}

.address-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 51px;
  min-height: 23px;
  min-width: 54px;
  white-space: nowrap;
}

.address-6 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 51px;
  min-height: 23px;
  min-width: 55px;
  white-space: nowrap;
}

.address-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 41px;
  min-height: 23px;
  min-width: 54px;
  white-space: nowrap;
}

.address-8 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 52px;
  min-height: 23px;
  min-width: 55px;
  white-space: nowrap;
}

.address-9 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 50px;
  min-height: 23px;
  min-width: 55px;
  white-space: nowrap;
}

.address-10 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 46px;
  min-height: 23px;
  min-width: 63px;
  white-space: nowrap;
}

.address-11 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 41px;
  min-height: 23px;
  min-width: 60px;
  white-space: nowrap;
}

.address {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 42px;
  min-height: 23px;
  min-width: 62px;
  white-space: nowrap;
}

.frame-container-1 {
  align-items: flex-start;
  display: flex;
  height: 32px;
  margin-left: 10.37px;
  margin-top: 14px;
  min-width: 1229px;
  position: relative;
}

.frame-24 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-left: 9px;
  padding: 8px 7px;
  position: relative;
  width: 93px;
}

.round-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-26 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-left: 9px;
  padding: 8px 10px;
  position: relative;
  width: 94px;
}

.flex-row-17 {
  align-items: flex-end;
  align-self: flex-start;
  display: flex;
  height: 812px;
  margin-top: 1px;
  min-width: 1313px;
}

.frame-37 {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 4px;
  position: relative;
  width: fit-content;
}

.frame-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  width: fit-content;
}

.ellipse-1-11 {
  background-color: var(--alto);
  border-radius: 23.5px/22.5px;
  height: 45px;
  min-width: 47px;
  position: relative;
}

.name-9 {
  height: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: 50px;
}

.frame-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  position: relative;
  width: fit-content;
}

.frame-11 {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
}

.name-10 {
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: 58px;
}

.frame-13 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: fit-content;
}

.ellipse-15 {
  background-color: var(--alto);
  border-radius: 23.5px/23px;
  height: 46px;
  min-width: 47px;
  position: relative;
}

.name-11 {
  height: 19px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 54px;
}

.name-12 {
  height: 20px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 58px;
}

.overlap-group9 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  min-height: 811px;
  padding: 19px 27px;
  width: 94px;
}

.crown-1 {
  height: 32px;
  object-fit: cover;
  width: 32px;
}

.checkmark-2 {
  align-self: center;
  height: 15px;
  margin-right: 12px;
  margin-top: 35px;
  object-fit: cover;
  width: 16px;
}

.checkmark {
  align-self: center;
  height: 15px;
  margin-right: 12px;
  margin-top: 50px;
  object-fit: cover;
  width: 16px;
}

.checkmark-1 {
  align-self: center;
  height: 15px;
  margin-right: 12px;
  margin-top: 54px;
  object-fit: cover;
  width: 16px;
}

.checkmark-3 {
  height: 15px;
  margin-left: 5px;
  margin-top: 51px;
  object-fit: cover;
  width: 16px;
}

.checkmark-4 {
  height: 15px;
  margin-left: 4px;
  margin-top: 58px;
  object-fit: cover;
  width: 16px;
}

.checkmark-5 {
  height: 15px;
  margin-left: 5px;
  margin-top: 52px;
  object-fit: cover;
  width: 16px;
}

.checkmark-6 {
  height: 15px;
  margin-left: 4px;
  margin-top: 54px;
  object-fit: cover;
  width: 16px;
}

.checkmark-7 {
  height: 15px;
  margin-left: 5px;
  margin-top: 50px;
  object-fit: cover;
  width: 16px;
}

.overlap-group4-2 {
  align-items: flex-start;
  align-self: flex-start;
  background-color: var(--alto);
  display: flex;
  height: 811px;
  justify-content: flex-end;
  margin-left: 10px;
  min-width: 94px;
  padding: 28px 31px;
}

.group {
  height: 751px;
  width: 32px;
}

.overlap-group15 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  height: 811px;
  justify-content: flex-end;
  margin-left: 10px;
  min-width: 94px;
  padding: 27px 29px;
}

.overlap-group3-3 {
  align-items: flex-end;
  background-color: var(--alto);
  display: flex;
  height: 811px;
  justify-content: flex-end;
  margin-left: 8px;
  min-width: 94px;
  padding: 24px 31px;
}

.group-89 {
  height: 760px;
  width: 32px;
}

.overlap-group13-1 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  height: 811px;
  margin-left: 9px;
  min-width: 94px;
  padding: 27px 28px;
}

.overlap-group10 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  height: 811px;
  margin-left: 10px;
  min-width: 94px;
  padding: 31px 28px;
}

.group-91 {
  height: 747px;
  width: 32px;
}

.overlap-group7 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  height: 811px;
  margin-left: 9px;
  min-width: 94px;
  padding: 27px 27px;
}

.overlap-group8 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  height: 811px;
  justify-content: flex-end;
  margin-left: 9px;
  min-width: 94px;
  padding: 27px 31px;
}

.overlap-group-16 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  height: 811px;
  justify-content: flex-end;
  margin-left: 9px;
  min-width: 94px;
  padding: 19px 31px;
}

.group-9 {
  height: 759px;
  width: 32px;
}

.overlap-group11 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  height: 811px;
  justify-content: flex-end;
  margin-left: 9px;
  min-width: 93px;
  padding: 19px 30px;
}

.overlap-group14 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  height: 811px;
  justify-content: flex-end;
  margin-left: 10px;
  min-width: 94px;
  padding: 19px 27px;
}
</style>
