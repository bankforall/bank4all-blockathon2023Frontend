<template>
  <div class="how-it-works-4 screen">
    <div class="how-it-works-4-1">
      <div class="place-5 valign-text-middle inter-bold-black-29px">{{ place }}</div>
      <div class="overlap-group2">
        <div class="group-35-1">
          <div class="overlap-group1-2">
            <div class="ellipse-container-3">
              <div class="ellipse-1-8"></div>
              <img
                class="ellipse-5-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/ellipse-5.svg"
                alt="Ellipse 5"
              />
              <div class="ellipse-9-2"></div>
              <div class="ellipse-6-2"></div>
              <div class="ellipse-7-2"></div>
              <div class="ellipse-10-2"></div>
              <div class="ellipse-8-2"></div>
            </div>
            <p class="step-3-challenge-for montserrat-bold-black-32px">
              <span class="montserrat-bold-black-32px">{{ spanText1 }}</span
              ><span class="montserrat-normal-black-32px">{{ spanText2 }}</span
              ><span class="montserrat-bold-black-32px">{{ spanText3 }}</span>
            </p>
            <h1 class="float-pool-600 valign-text-middle" v-html="floatPool600"></h1>
          </div>
          <router-link to="/how-it-works-5">
            <div class="group-32-2">
              <div class="rectangle-62-2"></div>
              <div class="rectangle-63-2"></div></div
          ></router-link>
        </div>
        <div class="price-1 valign-text-middle inter-bold-black-20px">{{ price1 }}</div>
        <div class="price-2 valign-text-middle">{{ price2 }}</div>
        <div class="price-3 valign-text-middle inter-bold-black-20px">{{ price3 }}</div>
        <div class="price-4 valign-text-middle inter-bold-black-20px">{{ price4 }}</div>
        <div class="price-5 valign-text-middle inter-bold-black-20px">{{ price5 }}</div>
        <div class="price-6 valign-text-middle inter-bold-black-20px">{{ price6 }}</div>
        <img
          class="arrow-7"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/arrow-7.svg"
          alt="Arrow 7"
        />
      </div>
      <grou-p41 :className="group41Props.className" />
    </div>
  </div>
</template>

<script>
import GrouP41 from "./GrouP41";
export default {
  name: "HowItWorks4",
  components: {
    Group41,
  },
  props: [
    "place",
    "spanText1",
    "spanText2",
    "spanText3",
    "floatPool600",
    "price1",
    "price2",
    "price3",
    "price4",
    "price5",
    "price6",
    "group41Props",
  ],
};
</script>

<style>
.how-it-works-4 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  width: 1440px;
}

.how-it-works-4-1 {
  align-items: flex-end;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 731px;
  padding: 35px 34.2px;
  position: relative;
  width: 1440px;
}

.place-5 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 252.77px;
  margin-top: 36px;
  min-width: 118px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group2 {
  height: 515px;
  margin-top: 14px;
  position: relative;
  width: 1336px;
}

.group-35-1 {
  align-items: center;
  display: flex;
  gap: 45px;
  height: 515px;
  left: 0;
  min-width: 1336px;
  position: absolute;
  top: 0;
}

.overlap-group1-2 {
  align-self: flex-end;
  height: 515px;
  margin-bottom: 0;
  position: relative;
  width: 1255px;
}

.ellipse-container-3 {
  height: 515px;
  left: 787px;
  position: absolute;
  top: 0;
  width: 468px;
}

.ellipse-1-8 {
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

.ellipse-5-2 {
  height: 105px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-9-2 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 0;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-6-2 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 410px;
  width: 105px;
}

.ellipse-7-2 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-10-2 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-8-2 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 0;
  width: 105px;
}

.step-3-challenge-for {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 122px;
  width: 845px;
}

.float-pool-600 {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: 36px;
  font-weight: 700;
  height: 120px;
  left: 920px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 245px;
}

.group-32-2 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 17.53px;
  min-height: 86px;
  padding: 19.9px 0;
  width: 32px;
}

.rectangle-62-2 {
  background-color: var(--mist-gray);
  height: 7px;
  margin-left: -10.31px;
  margin-top: 2px;
  transform: rotate(57.94deg);
  width: 52px;
}

.rectangle-63-2 {
  background-color: var(--mist-gray);
  height: 8px;
  margin-left: -8.74px;
  transform: rotate(-57.94deg);
  width: 49px;
}

.price-1 {
  height: 24px;
  left: 822px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 145px;
  white-space: nowrap;
}

.price-2 {
  color: #f10e0e;
  font-family: var(--font-family-inter);
  font-size: 22px;
  font-weight: 700;
  height: 24px;
  left: 1004px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 40px;
  white-space: nowrap;
}

.price-3 {
  height: 24px;
  left: 1189px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 145px;
  white-space: nowrap;
}

.price-4 {
  height: 24px;
  left: 1194px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 346px;
  white-space: nowrap;
}

.price-5 {
  height: 24px;
  left: 1011px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 450px;
  white-space: nowrap;
}

.price-6 {
  height: 24px;
  left: 819px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 346px;
  white-space: nowrap;
}

.arrow-7 {
  height: 70px;
  left: 1013px;
  position: absolute;
  top: 140px;
  width: 22px;
}

#overlay-how-it-works-4 {
  align-items: center;
  background-color: #00000000;
  justify-content: center;
}
</style>
