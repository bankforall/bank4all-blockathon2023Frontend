<template>
  <div class="container-center-horizontal">
    <div class="how-it-works-6 screen">
      <div class="flex-row-11">
        <h1 class="rosca-is-the-common-1 montserrat-normal-black-32px" v-html="roscaIsTheCommon"></h1>
        <div class="ellipse-container-5">
          <div class="ellipse-1-10"></div>
          <img
            class="ellipse-5-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/ellipse-5.svg"
            alt="Ellipse 5"
          />
          <div class="ellipse-9-4"></div>
          <div class="ellipse-6-4"></div>
          <div class="ellipse-7-4"></div>
          <div class="ellipse-10-4"></div>
          <div class="ellipse-8-4"></div>
        </div>
        <router-link to="/how-it-works-2">
          <div class="group-32-4">
            <div class="rectangle-62-4"></div>
            <div class="rectangle-63-4"></div></div
        ></router-link>
      </div>
      <grou-p41 :className="group41Props.className" />
    </div>
  </div>
</template>

<script>
import GrouP41 from "./GrouP41";
export default {
  name: "HowItWorks6",
  components: {
    Group41,
  },
  props: ["roscaIsTheCommon", "group41Props"],
};
</script>

<style>
.how-it-works-6 {
  align-items: flex-end;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 39px;
  height: 731px;
  padding: 35px 52.2px;
  position: relative;
  width: 1440px;
}

.flex-row-11 {
  align-items: center;
  display: flex;
  margin-top: 91px;
  min-width: 1335px;
}

.rosca-is-the-common-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 80.06px;
  min-height: 351px;
  width: 748px;
}

.ellipse-container-5 {
  height: 515px;
  margin-left: 39px;
  position: relative;
  width: 468px;
}

.ellipse-1-10 {
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

.ellipse-5-4 {
  height: 105px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-9-4 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 0;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-6-4 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 410px;
  width: 105px;
}

.ellipse-7-4 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-10-4 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-8-4 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 0;
  width: 105px;
}

.group-32-4 {
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

.rectangle-62-4 {
  background-color: var(--mist-gray);
  height: 7px;
  margin-left: -10.31px;
  margin-top: 2px;
  transform: rotate(57.94deg);
  width: 52px;
}

.rectangle-63-4 {
  background-color: var(--mist-gray);
  height: 8px;
  margin-left: -8.74px;
  transform: rotate(-57.94deg);
  width: 49px;
}
</style>
