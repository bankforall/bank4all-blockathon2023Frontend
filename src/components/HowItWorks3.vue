<template>
  <div class="how-it-works-3-1 screen">
    <div class="how-it-works-3-2 inter-bold-black-20px">
      <div class="price-21 valign-text-middle">{{ price1 }}</div>
      <div class="overlap-group1-15">
        <div class="group-35-3">
          <p class="step-2-contribution montserrat-bold-black-32px">
            <span class="montserrat-bold-black-32px">{{ spanText1 }}</span
            ><span class="montserrat-normal-black-32px">{{ spanText2 }}</span>
          </p>
          <div class="overlap-group-27">
            <div class="ellipse-1-13"></div>
            <h1 class="price-22 valign-text-middle inter-bold-black-46px">{{ price2 }}</h1>
            <img
              class="ellipse-5-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/ellipse-5.svg"
              alt="Ellipse 5"
            />
            <div class="ellipse-9-6"></div>
            <div class="ellipse-6-6"></div>
            <div class="ellipse-7-6"></div>
            <div class="ellipse-10-6"></div>
            <div class="ellipse-8-6"></div>
          </div>
          <router-link to="/how-it-works-4">
            <div class="group-32-5">
              <div class="rectangle-62-5"></div>
              <div class="rectangle-63-5"></div></div
          ></router-link>
        </div>
        <div class="price-23 valign-text-middle inter-bold-black-20px">{{ price3 }}</div>
        <div class="price-24 valign-text-middle inter-bold-black-20px">{{ price4 }}</div>
        <div class="price-25 valign-text-middle inter-bold-black-20px">{{ price5 }}</div>
        <div class="price-26 valign-text-middle inter-bold-black-20px">{{ price6 }}</div>
        <img
          class="arrow-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/arrow-1.svg"
          alt="Arrow 1"
        />
        <img
          class="arrow-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/arrow-7.svg"
          alt="Arrow 2"
        />
        <img
          class="arrow-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/arrow-3.svg"
          alt="Arrow 3"
        />
        <img
          class="arrow-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/arrow-4.svg"
          alt="Arrow 4"
        />
        <img
          class="arrow-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/arrow-5.svg"
          alt="Arrow 5"
        />
        <img
          class="arrow-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/arrow-6.svg"
          alt="Arrow 6"
        />
      </div>
      <div class="price-27 valign-text-middle">{{ price7 }}</div>
      <grou-p41 :className="group41Props.className" />
    </div>
  </div>
</template>

<script>
import GrouP41 from "./GrouP41";
export default {
  name: "HowItWorks3",
  components: {
    Group41,
  },
  props: [
    "price1",
    "spanText1",
    "spanText2",
    "price2",
    "price3",
    "price4",
    "price5",
    "price6",
    "price7",
    "group41Props",
  ],
};
</script>

<style>
.how-it-works-3-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  width: 1440px;
}

.how-it-works-3-2 {
  align-items: flex-end;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 731px;
  padding: 35px 36.2px;
  position: relative;
  width: 1440px;
}

.price-21 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 283.77px;
  margin-top: 35px;
  min-width: 51px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group1-15 {
  height: 515px;
  margin-top: 15px;
  position: relative;
  width: 1334px;
}

.group-35-3 {
  align-items: center;
  display: flex;
  height: 515px;
  left: 0;
  min-width: 1334px;
  position: absolute;
  top: 0;
}

.step-2-contribution {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 114.94px;
  min-height: 156px;
  width: 734px;
}

.overlap-group-27 {
  align-self: flex-end;
  height: 515px;
  margin-bottom: 0;
  margin-left: 53px;
  position: relative;
  width: 468px;
}

.ellipse-1-13 {
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

.price-22 {
  height: 24px;
  left: 175px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 233px;
  white-space: nowrap;
}

.ellipse-5-6 {
  height: 105px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-9-6 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 0;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-6-6 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 410px;
  width: 105px;
}

.ellipse-7-6 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-10-6 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-8-6 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 0;
  width: 105px;
}

.group-32-5 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 45px;
  margin-top: 17.53px;
  min-height: 86px;
  padding: 19.9px 0;
  width: 32px;
}

.rectangle-62-5 {
  background-color: var(--mist-gray);
  height: 7px;
  margin-left: -10.31px;
  margin-top: 2px;
  transform: rotate(57.94deg);
  width: 52px;
}

.rectangle-63-5 {
  background-color: var(--mist-gray);
  height: 8px;
  margin-left: -8.74px;
  transform: rotate(-57.94deg);
  width: 49px;
}

.price-23 {
  height: 24px;
  left: 815px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 68px;
  white-space: nowrap;
}

.price-24 {
  height: 24px;
  left: 1177px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 68px;
  white-space: nowrap;
}

.price-25 {
  height: 24px;
  left: 815px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 424px;
  white-space: nowrap;
}

.price-26 {
  height: 24px;
  left: 1177px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 424px;
  white-space: nowrap;
}

.arrow-1 {
  height: 70px;
  left: 1013px;
  position: absolute;
  top: 109px;
  width: 22px;
}

.arrow-2 {
  height: 70px;
  left: 1013px;
  position: absolute;
  top: 296px;
  width: 22px;
}

.arrow-3 {
  height: 48px;
  left: 895px;
  position: absolute;
  top: 272px;
  width: 55px;
}

.arrow-4 {
  height: 48px;
  left: 892px;
  position: absolute;
  top: 181px;
  width: 55px;
}

.arrow-5 {
  height: 48px;
  left: 1098px;
  position: absolute;
  top: 190px;
  width: 55px;
}

.arrow-6 {
  height: 55px;
  left: 1103px;
  position: absolute;
  top: 267px;
  width: 48px;
}

.price-27 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 283.77px;
  margin-top: 13px;
  min-width: 51px;
  text-align: center;
  white-space: nowrap;
}

#overlay-how-it-works-3 {
  align-items: center;
  background-color: #00000000;
  justify-content: center;
}
</style>
