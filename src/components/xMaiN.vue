<template>
  <div class="container-center-horizontal">
    <form class="main screen" name="form1" action="form1" method="post">
      <header class="header">
        <div class="overlap-group1-1">
          <div class="discover montserrat-medium-black-18px">{{ discover }}</div>
          <img
            class="line-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1.svg"
            alt="Line 1"
          />
          <router-link to="/create-room">
            <div class="create-room montserrat-medium-black-18px">{{ createRoom }}</div>
          </router-link>
          <div class="bank4all montserrat-extra-bold-black-28px">{{ bank4All }}</div>
          <img
            class="icon-search"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search.svg"
            alt="icon-search"
          />
          <router-link to="/login">
            <div class="sign-in montserrat-medium-black-18px">{{ signIn }}</div> </router-link
          ><a href="#group-34" className="align-self-flex-end">
            <div class="get-started">
              <div class="overlap-group">
                <div class="how-it-works montserrat-medium-white-18px">{{ howItWorks }}</div>
              </div>
            </div></a
          >
        </div>
      </header>
      <div class="group-5">
        <div class="group-3">
          <h1 class="bank4all-peer-lending-circles-rosca inter-bold-black-48px">
            <span class="inter-bold-black-48px">{{ spanText1 }}</span
            ><span class="span1">{{ spanText2 }}</span>
          </h1>
          <p class="solution-for-the-tra">{{ solutionForTheTra }}</p>
          <a href="javascript:SubmitForm('form1')">
            <div class="get-started-1">
              <div class="overlap-group-1">
                <div class="lets-peer-share valign-text-middle">{{ letsPeerShare }}</div>
              </div>
            </div></a
          >
        </div>
        <div class="ellipse-container-1">
          <div class="ellipse-1-7"></div>
          <img
            class="ellipse-5-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/ellipse-5-1.svg"
            alt="Ellipse 5"
          />
          <div class="ellipse-9-1"></div>
          <div class="ellipse-6-1"></div>
          <div class="ellipse-7-1"></div>
          <div class="ellipse-10-1"></div>
          <div class="ellipse-8-1"></div>
        </div>
      </div>
      <div class="group-34" id="group-34">
        <div class="flex-row">
          <p class="rosca-is-the-common montserrat-normal-black-32px" v-html="roscaIsTheCommon"></p>
          <div class="ellipse-container-2">
            <div class="ellipse-1-7"></div>
            <img
              class="ellipse-5-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/ellipse-5.svg"
              alt="Ellipse 5"
            />
            <div class="ellipse-9-1"></div>
            <div class="ellipse-6-1"></div>
            <div class="ellipse-7-1"></div>
            <div class="ellipse-10-1"></div>
            <div class="ellipse-8-1"></div>
          </div>
          <router-link to="/how-it-works-2">
            <div class="group-32-1">
              <div class="rectangle-62-1"></div>
              <div class="rectangle-63-1"></div></div
          ></router-link>
        </div>
        <grou-p41 :className="group41Props.className" />
      </div>
      <x-footer />
    </form>
  </div>
</template>

<script>
import GrouP41 from "./GrouP41";
import XFooter from "./XFooter";
export default {
  name: "xMaiN",
  components: {
    Group41,
    XFooter,
  },
  props: [
    "discover",
    "createRoom",
    "bank4All",
    "signIn",
    "howItWorks",
    "spanText1",
    "spanText2",
    "solutionForTheTra",
    "letsPeerShare",
    "roscaIsTheCommon",
    "group41Props",
  ],
};
</script>

<style>
.main {
  align-items: center;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 1762px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.header {
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

.overlap-group1-1 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 88px;
  min-width: 1440px;
  padding: 21px 22px;
}

.discover {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 90px;
}

.line-1 {
  align-self: flex-end;
  height: 40px;
  margin-left: 7px;
  object-fit: cover;
  width: 1px;
}

.create-room {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 23px;
  min-height: 22px;
  width: 141px;
}

.bank4all {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 405px;
  margin-top: 6px;
  min-height: 34px;
  width: 147px;
}

.icon-search {
  height: 20px;
  margin-left: 274px;
  margin-top: 4px;
  width: 20px;
}

.sign-in {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 24px;
  margin-top: 6px;
  min-height: 22px;
  width: 85px;
}

.get-started {
  align-items: flex-start;
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  margin-left: 8px;
  min-width: 160px;
}

.overlap-group {
  align-items: center;
  background-color: var(--fuscous-gray);
  border-radius: 6px;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  min-width: 158px;
  padding: 0 18.9px;
}

.how-it-works {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 119px;
}

.group-5 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-right: 52px;
  margin-top: 52px;
  min-width: 1254px;
}

.group-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 32.06px;
  min-height: 377px;
  width: 738px;
}

.bank4all-peer-lending-circles-rosca {
  letter-spacing: 0;
  line-height: normal;
  min-height: 150px;
  width: 734px;
}

.span1 {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: 48px;
  font-weight: 400;
}

.solution-for-the-tra {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1px;
  margin-top: 7px;
  min-height: 107px;
  width: 659px;
}

.get-started-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-left: 1px;
  margin-top: 30px;
  min-width: 423px;
}

.overlap-group-1 {
  align-items: center;
  background-color: var(--fuscous-gray);
  border-radius: 6px;
  display: flex;
  height: 83px;
  justify-content: flex-end;
  min-width: 421px;
  padding: 0 50.6px;
}

.lets-peer-share {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 24px;
  font-weight: 500;
  height: 46px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 317px;
}

.ellipse-container-1 {
  align-self: flex-end;
  height: 515px;
  margin-bottom: 0;
  position: relative;
  width: 468px;
}

.ellipse-1-7 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black);
  border-radius: 204.93px;
  height: 410px;
  left: 32px;
  position: absolute;
  top: 53px;
  width: 410px;
}

.ellipse-5-1 {
  height: 105px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-9-1 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 0;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-6-1 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 410px;
  width: 105px;
}

.ellipse-7-1 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-10-1 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-8-1 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 0;
  width: 105px;
}

.group-34 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 39px;
  margin-left: 30.77px;
  margin-top: 253px;
  min-height: 570px;
  position: relative;
  width: 1337px;
}

.flex-row {
  align-items: center;
  display: flex;
  margin-right: 2px;
  min-width: 1335px;
}

.rosca-is-the-common {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 80.06px;
  min-height: 351px;
  width: 748px;
}

.ellipse-container-2 {
  height: 515px;
  margin-left: 39px;
  position: relative;
  width: 468px;
}

.group-32-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 48px;
  margin-top: 17.53px;
  min-height: 86px;
  padding: 19.9px 0;
  width: 32px;
}

.rectangle-62-1 {
  background-color: var(--mist-gray);
  height: 7px;
  margin-left: -10.31px;
  margin-top: 2px;
  transform: rotate(57.94deg);
  width: 52px;
}

.rectangle-63-1 {
  background-color: var(--mist-gray);
  height: 8px;
  margin-left: -8.74px;
  transform: rotate(-57.94deg);
  width: 49px;
}
</style>
