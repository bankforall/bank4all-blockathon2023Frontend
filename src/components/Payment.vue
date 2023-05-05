<template>
  <form class="payment screen" name="form9" action="form9" method="post">
    <div class="payment-1">
      <div class="overlap-group1-6">
        <div class="group-100">
          <div class="overlap-group-9">
            <h1 class="title-1">{{ title }}</h1>
          </div>
          <x-button :textButton="xButton1Props.textButton" :className="xButton1Props.className" />
          <x-button :textButton="xButton2Props.textButton" :className="xButton2Props.className" />
        </div>
        <div class="the-payment-this-peroid inter-normal-black-23px">{{ thePaymentThisPeroid }}</div>
        <img class="bitmap-copy-2" :src="bitmapCopy2" alt="Bitmap Copy 2" /><img
          class="bitmap-copy"
          :src="bitmapCopy"
          alt="Bitmap Copy"
        />
        <div class="pay-with">{{ payWith }}</div>
        <div class="due-date-before-3052023">
          <span class="span0-2">{{ spanText1 }}</span
          ><span class="span1-3">{{ spanText2 }}</span>
        </div>
        <img class="download-1" :src="download1" alt="download 1" />
      </div>
    </div>
  </form>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "Payment",
  components: {
    xButton,
  },
  props: [
    "title",
    "thePaymentThisPeroid",
    "bitmapCopy2",
    "bitmapCopy",
    "payWith",
    "spanText1",
    "spanText2",
    "download1",
    "xButton1Props",
    "xButton2Props",
  ],
};
</script>

<style>
.payment {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  width: 638px;
}

.payment-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  overflow: hidden;
  width: 638px;
}

.overlap-group1-6 {
  height: 340px;
  position: relative;
  width: 640px;
}

.group-100 {
  height: 340px;
  left: 0;
  position: absolute;
  top: 0;
  width: 640px;
}

.overlap-group-9 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  height: 340px;
  justify-content: flex-end;
  left: 0;
  min-width: 638px;
  padding: 56px 163px;
  position: absolute;
  top: 0;
}

.title-1 {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: 44px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  min-height: 64px;
  width: 282px;
}

.the-payment-this-peroid {
  left: 29px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 13px;
  width: 305px;
}

.bitmap-copy-2 {
  height: 50px;
  left: 316px;
  position: absolute;
  top: 189px;
  width: 51px;
}

.bitmap-copy {
  height: 51px;
  left: 247px;
  position: absolute;
  top: 189px;
  width: 51px;
}

.pay-with {
  color: var(--midnight);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xs);
  font-weight: 700;
  left: 146px;
  letter-spacing: 0;
  line-height: 22px;
  position: absolute;
  top: 153px;
  white-space: nowrap;
}

.due-date-before-3052023 {
  color: transparent;
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  left: 176px;
  letter-spacing: 0;
  line-height: 22px;
  position: absolute;
  top: 113px;
  white-space: nowrap;
}

.span0-2 {
  color: var(--midnight);
}

.span1-3 {
  color: #979797;
}

.download-1 {
  height: 50px;
  left: 385px;
  object-fit: cover;
  position: absolute;
  top: 189px;
  width: 50px;
}

#overlay-payment {
  align-items: center;
  background-color: #00000000;
  justify-content: center;
}
</style>
