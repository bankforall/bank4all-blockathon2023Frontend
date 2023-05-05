<template>
  <div class="container-center-horizontal">
    <form class="dashboard screen" name="form23" action="form23" method="post">
      <header class="header-2">
        <div class="overlap-group1-11">
          <div class="discover-4 montserrat-medium-black-18px">{{ discover }}</div>
          <img
            class="line-1-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1.svg"
            alt="Line 1"
          />
          <router-link to="/create-room">
            <div class="create-room-4 montserrat-medium-black-18px">{{ createRoom }}</div>
          </router-link>
          <div class="bank4all-3 montserrat-extra-bold-black-28px">{{ bank4All }}</div>
          <img
            class="bisearch"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6453d37b63076cae904c72bd/img/bi-search-21.svg"
            alt="bi:search"
          />
          <div class="me-2 montserrat-medium-black-18px">{{ me }}</div>
          <div class="overlap-group-15">
            <div class="how-it-works-7 montserrat-medium-white-18px">{{ howItWorks }}</div>
          </div>
        </div>
      </header>
      <div class="dashboard-1 montserrat-bold-black-32px">{{ dashboard }}</div>
      <div class="total-balance-container montserrat-bold-black-32px">
        <div class="total-balance-cash" v-html="totalBalanceCash"></div>
        <div class="total-balance-token">{{ totalBalanceToken }}</div>
      </div>
      <div class="navbar-link-container montserrat-bold-black-60px">
        <h1 class="navbar-link-text-22">{{ navbarLinkText22 }}</h1>
        <div class="navbar-link-price">{{ navbarLinkPrice }}</div>
        <div class="navbar-link-text-23">{{ navbarLinkText23 }}</div>
        <div class="navbar-link-btc">{{ navbarLinkBtc }}</div>
      </div>
      <div class="line-container">
        <img
          class="line-24"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6453d37b63076cae904c72bd/img/line-24.svg"
          alt="Line 24"
        />
        <img
          class="line-25"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6453d37b63076cae904c72bd/img/line-25.svg"
          alt="Line 25"
        />
      </div>
      <div class="frame-container">
        <div class="frame-36-1">
          <x-button :textButton="xButton1Props.textButton" :className="xButton1Props.className" />
          <a href="javascript:SubmitForm('form23')">
            <div class="frame-29-1">
              <x-button :textButton="xButton2Props.textButton" :className="xButton2Props.className" /></div></a
          ><a href="javascript:SubmitForm('form23')">
            <div class="frame-30-1">
              <x-button :textButton="xButton3Props.textButton" :className="xButton3Props.className" /></div
          ></a>
        </div>
        <div class="frame-36-1">
          <x-button :textButton="xButton4Props.textButton" :className="xButton4Props.className" />
          <a href="javascript:SubmitForm('form23')">
            <div class="frame-29-1">
              <x-button :textButton="xButton5Props.textButton" :className="xButton5Props.className" /></div></a
          ><a href="javascript:SubmitForm('form23')">
            <div class="frame-30-1">
              <x-button :textButton="xButton6Props.textButton" :className="xButton6Props.className" /></div
          ></a>
        </div>
      </div>
      <div class="recent-transactions montserrat-bold-black-32px">{{ recentTransactions }}</div>
      <div class="flex-row-14 montserrat-bold-black-32px">
        <div class="transfer-out-transfer-in-transfer-in">{{ transferOutTransferInTransferIn }}</div>
        <p class="x5000-5-may-2023-2">
          <span class="montserrat-bold-black-32px">{{ spanText1 }}</span
          ><span class="montserrat-normal-black-32px">{{ spanText2 }}</span
          ><span class="montserrat-bold-black-32px">{{ spanText3 }}</span
          ><span class="montserrat-normal-black-32px">{{ spanText4 }}</span
          ><span class="montserrat-bold-black-32px">{{ spanText5 }}</span
          ><span class="montserrat-normal-black-32px">{{ spanText6 }}</span>
        </p>
      </div>
      <div class="recent-groups montserrat-bold-black-32px">{{ recentGroups }}</div>
      <div class="button-container-1">
        <x-button3 :textButton="xButton31Props.textButton" :className="xButton31Props.className" />
        <x-button3 :textButton="xButton32Props.textButton" :className="xButton32Props.className" />
      </div>
      <x-footer :className="xFooterProps.className" />
    </form>
  </div>
</template>

<script>
import xButton from "./xButton";
import xButton3 from "./xButton3";
import XFooter from "./XFooter";
export default {
  name: "DashboarD",
  components: {
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
    "dashboard",
    "totalBalanceCash",
    "totalBalanceToken",
    "navbarLinkText22",
    "navbarLinkPrice",
    "navbarLinkText23",
    "navbarLinkBtc",
    "recentTransactions",
    "transferOutTransferInTransferIn",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "recentGroups",
    "xButton1Props",
    "xButton2Props",
    "xButton3Props",
    "xButton4Props",
    "xButton5Props",
    "xButton6Props",
    "xButton31Props",
    "xButton32Props",
    "xFooterProps",
  ],
};
</script>

<style>
.dashboard {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 1762px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.header-2 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: flex-start;
  min-width: 1448px;
  width: auto;
}

.overlap-group1-11 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 88px;
  min-width: 1440px;
  padding: 21px 22px;
}

.discover-4 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 90px;
}

.line-1-4 {
  align-self: flex-end;
  height: 40px;
  margin-left: 7px;
  object-fit: cover;
  width: 1px;
}

.create-room-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 23px;
  min-height: 22px;
  width: 141px;
}

.bank4all-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 405px;
  margin-top: 6px;
  min-height: 34px;
  width: 147px;
}

.bisearch {
  height: 20px;
  margin-left: 274px;
  margin-top: 4px;
  width: 20px;
}

.me-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 24px;
  margin-top: 6px;
  min-height: 22px;
  width: 85px;
}

.overlap-group-15 {
  align-items: center;
  align-self: flex-end;
  background-color: var(--fuscous-gray);
  border-radius: 6px;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  margin-left: 8px;
  min-width: 158px;
  padding: 0 18.9px;
}

.how-it-works-7 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 119px;
}

.dashboard-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 67px;
  margin-top: 38px;
  min-height: 39px;
}

.total-balance-container {
  align-items: flex-start;
  display: flex;
  gap: 384px;
  height: 39px;
  margin-left: 83px;
  margin-top: 59px;
  min-width: 1082px;
}

.total-balance-cash {
  letter-spacing: 0;
  line-height: normal;
  min-height: 39px;
  min-width: 339px;
}

.total-balance-token {
  letter-spacing: 0;
  line-height: normal;
  min-height: 39px;
}

.navbar-link-container {
  align-items: flex-start;
  display: flex;
  height: 73px;
  margin-left: 84px;
  margin-top: 72px;
  min-width: 1017px;
}

.navbar-link-text-22 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 73px;
  min-width: 137px;
}

.navbar-link-price {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 31px;
  min-height: 73px;
  min-width: 132px;
}

.navbar-link-text-23 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 423px;
  min-height: 73px;
  min-width: 137px;
}

.navbar-link-btc {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 31px;
  min-height: 73px;
}

.line-container {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 169px;
  margin-left: 39px;
  margin-top: 53px;
  min-width: 1331px;
}

.line-24 {
  height: 1px;
  object-fit: cover;
  width: 554px;
}

.line-25 {
  height: 1px;
  object-fit: cover;
  width: 608px;
}

.frame-container {
  align-items: center;
  align-self: center;
  display: flex;
  gap: 182px;
  height: 101px;
  margin-right: 2px;
  margin-top: 47px;
  min-width: 1332px;
  padding: 0 10px;
}

.frame-36-1 {
  align-items: center;
  display: flex;
  gap: 22px;
  position: relative;
  width: fit-content;
}

.frame-29-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  position: relative;
  width: 183px;
}

.frame-30-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  position: relative;
  width: fit-content;
}

.recent-transactions {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 100px;
  margin-top: 58px;
  min-height: 39px;
}

.flex-row-14 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 520px;
  height: 234px;
  margin-left: 36px;
  margin-top: 72px;
  min-width: 1176px;
}

.transfer-out-transfer-in-transfer-in {
  letter-spacing: 0;
  line-height: normal;
  min-height: 195px;
  width: 328px;
}

.x5000-5-may-2023-2 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 234px;
  width: 328px;
}

.recent-groups {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 96px;
  margin-top: 33px;
  min-height: 39px;
}

.button-container-1 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 41px;
  height: 89px;
  margin-right: 65px;
  margin-top: 251px;
  min-width: 683px;
  position: relative;
}
</style>
