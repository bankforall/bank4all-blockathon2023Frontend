<template>
  <div class="container-center-horizontal">
    <form class="create-room-1 screen" name="form7" action="form7" method="post">
      <header class="header-1">
        <div class="overlap-group1-4">
          <div class="discover-1 montserrat-medium-black-18px">{{ discover }}</div>
          <img
            class="line-1-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1.svg"
            alt="Line 1"
          />
          <div class="create-room-2 montserrat-medium-black-18px">{{ createRoom }}</div>
          <router-link to="/main">
            <div class="bank4all-1 montserrat-extra-bold-black-28px">{{ bank4All }}</div> </router-link
          ><img
            class="icon-search-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-1.svg"
            alt="icon-search"
          />
          <div class="me montserrat-medium-black-18px">{{ me }}</div>
          <router-link to="/how-it-works-6" className="align-self-flex-end">
            <div class="get-started-2">
              <div class="overlap-group-8">
                <div class="how-it-works-1 montserrat-medium-white-18px">{{ howItWorks }}</div>
              </div>
            </div></router-link
          >
        </div>
      </header>
      <div class="group-121">
        <div class="flex-row-6">
          <div class="flex-col">
            <h1 class="title inter-normal-black-36px">{{ title }}</h1>
            <div class="filter">
              <div class="group-name inter-normal-shuttle-gray-32px-2">{{ groupName }}</div>
              <div class="input">
                <div class="div">
                  <input
                    class="type-here-2 inter-normal-oil-32px"
                    name="typehere"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  /><img class="icons-5" :src="icons1" alt="Icons" />
                </div>
                <img
                  class="line-1-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1-2.svg"
                  alt="Line 1"
                />
              </div>
            </div>
            <div class="filter-1">
              <div class="detail inter-normal-shuttle-gray-32px-2">{{ detail }}</div>
              <div class="input">
                <div class="div-1">
                  <input
                    class="type-here-050"
                    name="typehere050"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  /><img class="icons-6" :src="icons2" alt="Icons" />
                </div>
                <img
                  class="line-1-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1-3.svg"
                  alt="Line 1"
                />
              </div>
            </div>
            <div class="type inter-normal-shuttle-gray-32px">{{ type }}</div>
            <div class="frame-34">
              <x-button :textButton="xButton1Props.textButton" />
              <x-button :textButton="xButton2Props.textButton" />
              <x-button :textButton="xButton3Props.textButton" :className="xButton3Props.className" />
              <x-button :textButton="xButton4Props.textButton" :className="xButton4Props.className" />
            </div>
            <div class="t-bidder-win-container inter-normal-shuttle-gray-16px">
              <div class="highest-bidder-win">{{ highestBidderWin }}</div>
              <div class="lowest-discount-bidder-win" v-html="lowestDiscountBidderWin"></div>
            </div>
            <div class="length-of-time inter-normal-shuttle-gray-32px">{{ lengthOfTime }}</div>
            <div class="frame-33">
              <x-button :textButton="xButton5Props.textButton" />
              <x-button :textButton="xButton6Props.textButton" />
              <x-button :textButton="xButton7Props.textButton" :className="xButton7Props.className" />
              <x-button :textButton="xButton8Props.textButton" />
            </div>
            <div class="filter-2">
              <div class="pool-size inter-normal-shuttle-gray-32px-2">{{ poolSize }}</div>
              <div class="input">
                <div class="div-2">
                  <input
                    class="type-here-2 inter-normal-oil-32px"
                    name="typehere"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  /><img class="icons-7" :src="icons3" alt="Icons" />
                </div>
                <img
                  class="line-1-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1-4.svg"
                  alt="Line 1"
                />
              </div>
            </div>
            <div class="flex-col-item inter-normal-shuttle-gray-32px">{{ underlyingAsset }}</div>
            <div class="frame-35">
              <x-button :textButton="xButton9Props.textButton" />
              <x-button :textButton="xButton10Props.textButton" :className="xButton10Props.className" />
            </div>
            <div class="flex-col-item inter-normal-shuttle-gray-32px">
              <span class="inter-normal-shuttle-gray-32px">{{ spanText1 }}</span
              ><span class="span1-1">{{ spanText2 }}</span>
            </div>
            <img
              class="line-22"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-22.svg"
              alt="Line 22"
            />
            <div class="number-2 valign-text-middle">{{ number1 }}</div>
          </div>
          <div class="flex-col-1">
            <div class="flex-row-7">
              <div class="start-date inter-normal-shuttle-gray-32px">{{ startDate }}</div>
              <img
                class="icon-calendar"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/calendar-today.svg"
                alt="icon-calendar"
              />
            </div>
            <div class="flex-col-2">
              <div class="overlap-group-container">
                <div class="overlap-group2-2">
                  <img
                    class="polygon-20"
                    src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/polygon-20.svg"
                    alt="Polygon 20"
                  />
                  <div class="december">{{ december }}</div>
                </div>
                <div class="overlap-group3-1">
                  <div class="number-3">{{ number2 }}</div>
                  <img
                    class="polygon-19"
                    src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/polygon-19.svg"
                    alt="Polygon 19"
                  />
                </div>
              </div>
              <div class="flex-row-8">
                <div class="flex-row-9">
                  <div class="flex-col-3">
                    <div class="place-6 poppins-normal-shark-28px">{{ place }}</div>
                    <div class="number-4">{{ number3 }}</div>
                    <div class="text-2 poppins-normal-shark-28px">{{ text2 }}</div>
                    <div class="number poppins-normal-shark-28px">{{ number4 }}</div>
                    <div class="number-5 poppins-normal-shark-28px">{{ number5 }}</div>
                    <div class="number-6 poppins-normal-shark-28px">{{ number6 }}</div>
                  </div>
                  <div class="flex-row-10">
                    <div class="flex-col-4 poppins-normal-shark-28px">
                      <div class="tu">{{ tu }}</div>
                      <div class="text-container">
                        <div class="text poppins-normal-shark-28px">{{ text }}</div>
                        <div class="text-6 poppins-normal-concord-28px">{{ text6 }}</div>
                      </div>
                      <div class="text-1">{{ text1 }}</div>
                      <div class="number">{{ number7 }}</div>
                      <div class="number-7">{{ number8 }}</div>
                      <div class="number-8">{{ number9 }}</div>
                    </div>
                    <div class="flex-col-5">
                      <div class="we poppins-normal-shark-28px">{{ we }}</div>
                      <div class="flex-col-item-1 poppins-normal-concord-28px">{{ text5 }}</div>
                      <div class="overlap-group4">
                        <div class="text-4">{{ text4 }}</div>
                      </div>
                      <div class="number-9 poppins-normal-shark-28px">{{ number10 }}</div>
                      <div class="number-10 poppins-normal-shark-28px">{{ number11 }}</div>
                      <div class="flex-col-item-1 poppins-normal-shark-28px">{{ number12 }}</div>
                    </div>
                    <div class="flex-col-6">
                      <div class="th poppins-normal-shark-28px">{{ th }}</div>
                      <div class="text-10 poppins-normal-concord-28px">{{ text10 }}</div>
                      <div class="number-11 poppins-normal-shark-28px">{{ number13 }}</div>
                      <div class="number poppins-normal-shark-28px">{{ number14 }}</div>
                      <div class="number-12 poppins-normal-shark-28px">{{ number15 }}</div>
                      <div class="number-13 poppins-normal-shark-28px">{{ number16 }}</div>
                    </div>
                    <div class="flex-col-7">
                      <div class="fr poppins-normal-shark-28px">{{ fr }}</div>
                      <div class="text-7 poppins-normal-concord-28px">{{ text7 }}</div>
                      <div class="number-14 poppins-normal-shark-28px">{{ number17 }}</div>
                      <div class="number-15 poppins-normal-shark-28px">{{ number18 }}</div>
                      <div class="number-16 poppins-normal-shark-28px">{{ number19 }}</div>
                      <div class="number-17 poppins-normal-shark-28px">{{ number20 }}</div>
                    </div>
                  </div>
                </div>
                <div class="flex-col-8 poppins-normal-shark-28px">
                  <div class="sa">{{ sa }}</div>
                  <div class="flex-col-item-2">{{ text3 }}</div>
                  <div class="number-1">{{ number21 }}</div>
                  <div class="number-18">{{ number22 }}</div>
                  <div class="number-1">{{ number23 }}</div>
                  <div class="flex-col-item-2">{{ number24 }}</div>
                </div>
                <div class="flex-col-9">
                  <div class="su poppins-normal-shark-28px">{{ su }}</div>
                  <div class="text-8 poppins-normal-shark-28px">{{ text8 }}</div>
                  <div class="number-19 poppins-normal-shark-28px">{{ number25 }}</div>
                  <div class="number-20 poppins-normal-shark-28px">{{ number26 }}</div>
                  <div class="number-21 poppins-normal-shark-28px">{{ number27 }}</div>
                  <div class="text-9">
                    <span class="poppins-normal-shark-28px">{{ spanText3 }}</span
                    ><span class="span1-2">{{ spanText4 }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="filter-3">
              <div class="start-time inter-normal-shuttle-gray-32px-2">{{ startTime }}</div>
              <div class="input">
                <div class="div-3">
                  <input
                    class="type-here-2 inter-normal-oil-32px"
                    name="typehere"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  /><img class="icons-8" :src="icons4" alt="Icons" />
                </div>
                <img
                  class="line-1-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1-4.svg"
                  alt="Line 1"
                />
              </div>
            </div>
            <div class="flex-col-item-3 inter-normal-shuttle-gray-32px">{{ collateral }}</div>
            <div class="frame-32">
              <x-button :textButton="xButton11Props.textButton" :className="xButton11Props.className" />
              <x-button :textButton="xButton12Props.textButton" />
              <x-button :textButton="xButton13Props.textButton" :className="xButton13Props.className" />
              <x-button :textButton="xButton14Props.textButton" :className="xButton14Props.className" />
            </div>
            <div class="text-button valign-text-middle">{{ textButton }}</div>
            <div class="currency inter-normal-shuttle-gray-32px">{{ currency }}</div>
            <div class="frame-30">
              <x-button :textButton="xButton15Props.textButton" />
              <x-button :textButton="xButton16Props.textButton" />
              <x-button :textButton="xButton17Props.textButton" />
              <x-button :textButton="xButton18Props.textButton" />
            </div>
            <div class="frame-31">
              <x-button :textButton="xButton19Props.textButton" />
              <x-button :textButton="xButton20Props.textButton" />
              <x-button :textButton="xButton21Props.textButton" />
              <x-button :textButton="xButton22Props.textButton" />
            </div>
            <div class="flex-col-item-3 inter-normal-shuttle-gray-32px">{{ roomType }}</div>
          </div>
        </div>
        <div class="flex-col-10">
          <div class="button-container">
            <x-button :textButton="xButton23Props.textButton" :className="xButton23Props.className" />
            <x-button :textButton="xButton24Props.textButton" :className="xButton24Props.className" />
          </div>
          <div class="frame-36">
            <x-button3 :textButton="xButton31Props.textButton" />
            <a href="javascript:SubmitForm('form7')">
              <div class="frame-29">
                <x-button3 :textButton="xButton32Props.textButton" :className="xButton32Props.className" /></div
            ></a>
          </div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </form>
  </div>
</template>

<script>
import XButton from "./XButton";
import xButton from "./xButton";
import xButton3 from "./xButton3";
import XFooter from "./XFooter";
export default {
  name: "CreateRoom",
  components: {
    XButton,
    xButton,
    xButton3,
    XFooter,
  },
  props: [
    "discover",
    "createRoom",
    "bank4All",
    "me",
    "howItWorks",
    "title",
    "groupName",
    "inputType1",
    "inputPlaceholder1",
    "icons1",
    "detail",
    "inputType2",
    "inputPlaceholder2",
    "icons2",
    "type",
    "highestBidderWin",
    "lowestDiscountBidderWin",
    "lengthOfTime",
    "poolSize",
    "inputType3",
    "inputPlaceholder3",
    "icons3",
    "underlyingAsset",
    "spanText1",
    "spanText2",
    "number1",
    "startDate",
    "december",
    "number2",
    "place",
    "number3",
    "text2",
    "number4",
    "number5",
    "number6",
    "tu",
    "text",
    "text6",
    "text1",
    "number7",
    "number8",
    "number9",
    "we",
    "text5",
    "text4",
    "number10",
    "number11",
    "number12",
    "th",
    "text10",
    "number13",
    "number14",
    "number15",
    "number16",
    "fr",
    "text7",
    "number17",
    "number18",
    "number19",
    "number20",
    "sa",
    "text3",
    "number21",
    "number22",
    "number23",
    "number24",
    "su",
    "text8",
    "number25",
    "number26",
    "number27",
    "spanText3",
    "spanText4",
    "startTime",
    "inputType4",
    "inputPlaceholder4",
    "icons4",
    "collateral",
    "textButton",
    "currency",
    "roomType",
    "xButton1Props",
    "xButton2Props",
    "xButton3Props",
    "xButton4Props",
    "xButton5Props",
    "xButton6Props",
    "xButton7Props",
    "xButton8Props",
    "xButton9Props",
    "xButton10Props",
    "xButton11Props",
    "xButton12Props",
    "xButton13Props",
    "xButton14Props",
    "xButton15Props",
    "xButton16Props",
    "xButton17Props",
    "xButton18Props",
    "xButton19Props",
    "xButton20Props",
    "xButton21Props",
    "xButton22Props",
    "xButton23Props",
    "xButton24Props",
    "xButton31Props",
    "xButton32Props",
    "xFooterProps",
  ],
};
</script>

<style>
.create-room-1 {
  align-items: flex-end;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 1762px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.header-1 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: flex-start;
  margin-right: -8px;
  min-width: 1448px;
  width: auto;
}

.overlap-group1-4 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 88px;
  min-width: 1440px;
  padding: 21px 17px;
}

.discover-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 90px;
}

.line-1-2 {
  align-self: flex-end;
  height: 40px;
  margin-left: 12px;
  object-fit: cover;
  width: 1px;
}

.create-room-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 23px;
  min-height: 22px;
  width: 141px;
}

.bank4all-1 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 405px;
  margin-top: 6px;
  min-height: 34px;
  width: 147px;
}

.icon-search-1 {
  height: 20px;
  margin-left: 274px;
  margin-top: 4px;
  width: 20px;
}

.me {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 24px;
  margin-top: 6px;
  min-height: 22px;
  width: 85px;
}

.get-started-2 {
  align-items: flex-start;
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  margin-left: 8px;
  min-width: 160px;
}

.overlap-group-8 {
  align-items: center;
  background-color: var(--fuscous-gray);
  border-radius: 6px;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  min-width: 158px;
  padding: 0 18.9px;
}

.how-it-works-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 119px;
}

.group-121 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 12px;
  margin-top: 70px;
  min-height: 1284px;
  width: 1335px;
}

.flex-row-6 {
  align-items: flex-start;
  display: flex;
  gap: 63px;
  height: 1066px;
  min-width: 1309px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1032px;
  width: 625px;
}

.title {
  letter-spacing: 0;
  line-height: normal;
  min-height: 68px;
  width: 481px;
}

.filter {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4.52px;
  margin-top: 5px;
  position: relative;
  width: 527px;
}

.group-name,
.detail,
.pool-size,
.start-time {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.38px;
  position: relative;
  text-align: justify;
  width: fit-content;
}

.input {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 3.01px;
  position: relative;
}

.div,
.div-1,
.div-2,
.div-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 3.01px;
  padding: 0px 1.51px;
  position: relative;
}

.type-here-2 {
  background-color: transparent;
  border: 0;
  flex: 1;
  height: 39px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.38px;
  min-width: 511.95px;
  padding: 0;
  position: relative;
}

.type-here-2::placeholder {
  color: #261c1599;
}

.icons-5 {
  height: 9.03px;
  margin-bottom: -69.5px;
  margin-left: -2236.04px;
  min-width: 9.03px;
  position: relative;
}

.line-1-1 {
  align-self: stretch;
  height: 1px;
  margin-bottom: -0.62px;
  min-width: 527px;
  position: relative;
}

.filter-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4.52px;
  margin-left: 2px;
  margin-top: 27px;
  position: relative;
  width: 527px;
}

.type-here-050 {
  background-color: transparent;
  border: 0;
  color: transparent;
  flex: 1;
  font-family: var(--font-family-inter);
  font-size: var(--font-size-m);
  font-weight: 400;
  height: 39px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.38px;
  min-width: 511.95px;
  padding: 0;
  position: relative;
}

.type-here-050::placeholder {
  color: transparent;
}

.icons-6 {
  height: 9.03px;
  margin-left: -2238.04px;
  margin-top: -13.53px;
  min-width: 9.03px;
  position: relative;
}

.type {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 6px;
  margin-top: 21px;
  min-height: 39px;
}

.frame-34 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 15px;
  margin-right: 1px;
  margin-top: 18px;
  position: relative;
  width: fit-content;
}

.t-bidder-win-container {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 17px;
  height: 38px;
  margin-right: 10px;
  margin-top: 3px;
  min-width: 279px;
}

.highest-bidder-win {
  letter-spacing: 0;
  line-height: normal;
  min-height: 19px;
  min-width: 143px;
  white-space: nowrap;
}

.lowest-discount-bidder-win {
  letter-spacing: 0;
  line-height: normal;
  min-height: 38px;
}

.length-of-time {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 7px;
  margin-top: 1px;
  min-height: 39px;
}

.frame-33 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 14px;
  margin-top: 23px;
  position: relative;
  width: fit-content;
}

.filter-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4.52px;
  margin-left: 2px;
  margin-top: 31px;
  position: relative;
  width: 527px;
}

.icons-7 {
  height: 9.03px;
  margin-left: -2238.04px;
  margin-top: -424.53px;
  min-width: 9.03px;
  position: relative;
}

.flex-col-item {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 8px;
  margin-top: 33px;
  min-height: 39px;
}

.frame-35 {
  align-items: flex-start;
  display: flex;
  gap: 14px;
  margin-left: 8px;
  margin-top: 25px;
  position: relative;
  width: fit-content;
}

.span1-1 {
  color: var(--shuttle-gray);
  font-family: var(--font-family-inter);
  font-size: 26px;
  font-weight: 400;
}

.line-22 {
  height: 27px;
  margin-left: 11.67px;
  margin-top: 61px;
  width: 463px;
}

.number-2 {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: 24px;
  font-weight: 700;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 15px;
  margin-top: 13px;
  min-width: 16px;
  text-align: center;
  white-space: nowrap;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1066px;
  width: 621px;
}

.flex-row-7 {
  align-items: flex-start;
  display: flex;
  gap: 18px;
  margin-left: 1px;
  min-width: 209px;
}

.start-date {
  letter-spacing: 0;
  line-height: normal;
  min-height: 39px;
  min-width: 152px;
}

.icon-calendar {
  height: 39px;
  width: 39px;
}

.flex-col-2 {
  align-items: flex-end;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0px 1px 4px #00000040;
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 4px;
  min-height: 483px;
  padding: 30.4px 43.5px;
  width: 606px;
}

.overlap-group-container {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 29px;
  margin-left: 22.4px;
  margin-top: 10px;
  min-width: 329px;
}

.overlap-group2-2 {
  height: 34px;
  position: relative;
  width: 194px;
}

.polygon-20 {
  height: 12px;
  left: 172px;
  position: absolute;
  top: 10px;
  width: 22px;
}

.december {
  color: var(--black);
  font-family: var(--font-family-poppins);
  font-size: 29px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 174px;
}

.overlap-group3-1 {
  height: 25px;
  margin-top: 0.89px;
  position: relative;
  width: 107px;
}

.number-3 {
  color: var(--shark);
  font-family: var(--font-family-poppins);
  font-size: 29px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 91px;
}

.polygon-19 {
  height: 12px;
  left: 85px;
  position: absolute;
  top: 14px;
  width: 22px;
}

.flex-row-8 {
  align-items: flex-start;
  display: flex;
  gap: 34px;
  min-width: 505px;
}

.flex-row-9 {
  align-items: flex-start;
  display: flex;
  gap: 29px;
  min-width: 355px;
}

.flex-col-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 343px;
  width: 48px;
}

.place-6,
.tu,
.th,
.sa {
  letter-spacing: 0;
  line-height: normal;
  min-height: 28px;
  white-space: nowrap;
}

.number-4 {
  color: var(--bombay);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
}

.text-2,
.number-5,
.text-1,
.number-7,
.number-11,
.number-12 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 37px;
  min-height: 28px;
  white-space: nowrap;
}

.number {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 39px;
  min-height: 28px;
  white-space: nowrap;
}

.number-6,
.number-8,
.text-10,
.number-13 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
}

.flex-row-10 {
  align-items: flex-start;
  display: flex;
  height: 343px;
  min-width: 278px;
}

.flex-col-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 343px;
  width: 36px;
}

.text-container {
  height: 28px;
  margin-top: 30px;
  position: relative;
  width: 36px;
}

.text {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 1px;
}

.text-6 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 36px;
}

.flex-col-5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 31px;
  min-height: 343px;
  width: 56px;
}

.we {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4.83px;
  min-height: 28px;
  white-space: nowrap;
  width: 51px;
}

.flex-col-item-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 7.24px;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
  width: 39px;
}

.overlap-group4 {
  align-items: flex-start;
  background-color: var(--alto);
  border-radius: 2px;
  display: flex;
  height: 41px;
  margin-top: 32px;
  min-width: 56px;
  padding: 4.1px 12.1px;
}

.text-4 {
  color: var(--black);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  min-height: 28px;
  white-space: nowrap;
}

.number-9 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2.41px;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
  width: 34px;
}

.number-10 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2.41px;
  margin-top: 37px;
  min-height: 28px;
  white-space: nowrap;
  width: 34px;
}

.flex-col-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 39px;
  min-height: 343px;
  width: 36px;
}

.flex-col-7 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 29px;
  min-height: 343px;
  width: 51px;
}

.fr {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0;
  min-height: 28px;
  white-space: nowrap;
  width: 31px;
}

.text-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 9.66px;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
  width: 41px;
}

.number-14 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0;
  margin-top: 37px;
  min-height: 28px;
  white-space: nowrap;
  width: 31px;
}

.number-15 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2.41px;
  margin-top: 39px;
  min-height: 28px;
  white-space: nowrap;
  width: 34px;
}

.number-16 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 9.66px;
  margin-top: 37px;
  min-height: 28px;
  white-space: nowrap;
  width: 41px;
}

.number-17 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 9.66px;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
  width: 41px;
}

.flex-col-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 343px;
  width: 43px;
}

.flex-col-item-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2.41px;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
}

.number-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2.41px;
  margin-top: 37px;
  min-height: 28px;
  white-space: nowrap;
}

.number-18 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2.41px;
  margin-top: 39px;
  min-height: 28px;
  white-space: nowrap;
}

.flex-col-9 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 343px;
  width: 39px;
}

.su {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0;
  min-height: 28px;
  white-space: nowrap;
  width: 39px;
}

.text-8 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
  width: 31px;
}

.number-19 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0;
  margin-top: 37px;
  min-height: 28px;
  white-space: nowrap;
  width: 36px;
}

.number-20 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0;
  margin-top: 39px;
  min-height: 28px;
  white-space: nowrap;
  width: 36px;
}

.number-21 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0;
  margin-top: 37px;
  min-height: 28px;
  white-space: nowrap;
  width: 39px;
}

.text-9 {
  color: transparent;
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0;
  margin-top: 30px;
  min-height: 28px;
  white-space: nowrap;
  width: 29px;
}

.span1-2 {
  color: var(--nobel);
}

.filter-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4.52px;
  margin-top: 20px;
  position: relative;
  width: 527px;
}

.icons-8 {
  height: 9.03px;
  margin-left: -2924.04px;
  margin-top: -373.53px;
  min-width: 9.03px;
  position: relative;
}

.flex-col-item-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 30px;
  min-height: 39px;
}

.frame-32 {
  align-items: flex-start;
  display: flex;
  gap: 14px;
  margin-top: 23px;
  position: relative;
  width: fit-content;
}

.text-button {
  color: #4f4f4f;
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxxxs);
  font-weight: 400;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 25px;
  min-width: 94px;
  text-align: center;
  white-space: nowrap;
}

.currency {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4px;
  min-height: 39px;
}

.frame-30 {
  align-items: flex-start;
  display: flex;
  gap: 14px;
  margin-top: 14px;
  position: relative;
  width: fit-content;
}

.frame-31 {
  align-items: flex-start;
  display: flex;
  gap: 15px;
  margin-top: 24px;
  position: relative;
  width: fit-content;
}

.flex-col-10 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 41px;
  margin-right: 54px;
  min-height: 206px;
  width: 699px;
}

.button-container {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 14px;
  height: 56px;
  min-width: 302px;
  position: relative;
}

.frame-36 {
  align-items: center;
  display: flex;
  gap: 22px;
  position: relative;
  width: fit-content;
}

.frame-29 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  position: relative;
  width: fit-content;
}
</style>
