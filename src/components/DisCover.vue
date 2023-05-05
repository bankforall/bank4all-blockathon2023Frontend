<template>
  <div class="container-center-horizontal">
    <form class="discover-2 screen" name="form11" action="form11" method="post">
      <div class="flex-col-11">
        <div class="overlap-group1-8">
          <div class="discover-3 montserrat-medium-black-18px">{{ discover }}</div>
          <img
            class="line-1-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-1.svg"
            alt="Line 1"
          />
          <router-link to="/create-room">
            <div class="create-room-3 montserrat-medium-black-18px">{{ createRoom }}</div> </router-link
          ><router-link to="/main">
            <div class="bank4all-2 montserrat-extra-bold-black-28px">{{ bank4All }}</div> </router-link
          ><img
            class="icon-search-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6453d37b63076cae904c72bd/img/bi-search-4.svg"
            alt="icon-search"
          />
          <div class="me-1 montserrat-medium-black-18px">{{ me }}</div>
          <router-link to="/how-it-works-6" className="align-self-flex-end">
            <div class="get-started-3">
              <div class="overlap-group-14">
                <div class="how-it-works-3 montserrat-medium-white-18px">{{ howItWorks }}</div>
              </div>
            </div></router-link
          >
        </div>
        <h1 class="title-2 inter-normal-black-36px">{{ title }}</h1>
      </div>
      <div class="flex-row-12">
        <img
          class="icon-search-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-2.svg"
          alt="icon-search"
        />
        <div class="overlap-group18">
          <div class="all raleway-normal-black-20-7px">{{ all }}</div>
          <img
            class="chevron"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/chevron.svg"
            alt="Chevron"
          />
        </div>
        <div class="flex-col-12">
          <div class="flex-row-13">
            <input
              class="seatch raleway-normal-black-20-7px"
              name="seatch"
              :placeholder="inputPlaceholder"
              :type="inputType"
            /><img
              class="icon-close"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/close.svg"
              alt="icon-close"
            />
            <img
              class="icon-search-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-3.svg"
              alt="icon-search"
            />
          </div>
          <img
            class="line-23"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/line-23.svg"
            alt="Line 23"
          />
        </div>
      </div>
      <div class="group-122">
        <div class="overlap-group-container-1">
          <div class="overlap-group2-3 raleway-bold-black-19-4px">
            <img
              class="icon-search-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6453d37b63076cae904c72bd/img/bi-search-5.svg"
              alt="icon-search"
            />
            <div class="overlap-group-10">
              <div class="room">{{ roomName }}</div>
              <div class="type-1">{{ type }}</div>
              <div class="place-7">{{ place1 }}</div>
              <div class="currency-1">{{ currency1 }}</div>
              <div class="overlap-group1-9 raleway-bold-black-19-4px">
                <div class="collateral">{{ collateral }}</div>
                <div class="place-8">{{ place2 }}</div>
              </div>
              <div class="name">{{ name1 }}</div>
              <div class="pool-size-1">{{ poolSize }}</div>
            </div>
            <div class="preference">
              <img
                class="vector"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/icons-2@2x.png"
                alt="Vector"
              />
              <img
                class="union"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/union.svg"
                alt="Union"
              />
            </div>
            <img
              class="vector-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/vector.svg"
              alt="Vector"
            />
            <div class="currency-2">{{ currency2 }}</div>
          </div>
          <div class="overlap-group3-2">
            <router-link to="/enter-password">
              <div class="group-71">
                <div class="overlap-group1-10">
                  <img
                    class="icon-search-2"
                    src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-6.svg"
                    alt="icon-search"
                  />
                  <div class="overlap-group-10 raleway-normal-black-19-4px">
                    <div class="room">{{ room1 }}</div>
                    <div class="float">{{ float1 }}</div>
                    <div class="daily">{{ daily1 }}</div>
                    <div class="price-8">{{ price1 }}</div>
                    <div class="date">{{ date1 }}</div>
                    <div class="place-9">{{ place3 }}</div>
                    <div class="text-11">{{ text11 }}</div>
                    <div class="text-12">{{ text12 }}</div>
                  </div>
                </div>
              </div></router-link
            >
            <div class="baht raleway-normal-black-19-4px">{{ baht1 }}</div>
            <img class="icon-lock" :src="iconLock1" alt="icon-lock" />
          </div>
          <div class="overlap-group12">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-7.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room2 }}</div>
                <div class="fix">{{ fix1 }}</div>
                <div class="monthly">{{ monthly1 }}</div>
                <div class="price-7">{{ price2 }}</div>
                <div class="date">{{ date2 }}</div>
                <div class="btc">{{ btc1 }}</div>
                <div class="number-22">{{ number1 }}</div>
                <div class="number-24">{{ number2 }}</div>
              </div>
              <div class="btc-1">{{ btc2 }}</div>
            </div>
            <img class="icon-lock-4" :src="iconLock2" alt="icon-lock" />
          </div>
          <div class="overlap-group4-1">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-8.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room3 }}</div>
                <div class="float-1">{{ float2 }}</div>
                <div class="weekly">{{ weekly1 }}</div>
                <div class="price-9">{{ price3 }}</div>
                <div class="date">{{ date3 }}</div>
                <div class="place-10">{{ place4 }}</div>
                <div class="number-22">{{ number3 }}</div>
                <div class="number-25">{{ number4 }}</div>
              </div>
              <div class="place-11">{{ place5 }}</div>
            </div>
            <img class="icon-lock" :src="iconLock3" alt="icon-lock" />
          </div>
          <div class="overlap-group-11">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-9.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room4 }}</div>
                <div class="float-2">{{ float3 }}</div>
                <div class="bi-weekly">{{ biWeekly }}</div>
                <div class="price-7">{{ price4 }}</div>
                <div class="date">{{ date4 }}</div>
                <div class="name-1">{{ name2 }}</div>
                <div class="number-22">{{ number5 }}</div>
                <div class="text-21">{{ text21 }}</div>
              </div>
              <div class="baht-1">{{ baht2 }}</div>
            </div>
            <img class="icon-lock-1" :src="iconLock4" alt="icon-lock" />
          </div>
          <div class="overlap-group-12">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-10.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room5 }}</div>
                <div class="fix-1">{{ fix2 }}</div>
                <div class="daily-1">{{ daily2 }}</div>
                <div class="price-10">{{ price5 }}</div>
                <div class="date">{{ date5 }}</div>
                <div class="place-12">{{ place6 }}</div>
                <div class="number-22">{{ number6 }}</div>
                <div class="text-13">{{ text13 }}</div>
              </div>
              <div class="baht-2">{{ baht3 }}</div>
            </div>
            <img class="icon-lock-5" :src="iconLock5" alt="icon-lock" />
          </div>
          <div class="overlap-group16">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-11.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room6 }}</div>
                <div class="float-3">{{ float4 }}</div>
                <div class="daily-2">{{ daily3 }}</div>
                <div class="price-11">{{ price6 }}</div>
                <div class="date">{{ date6 }}</div>
                <div class="btc-2">{{ btc3 }}</div>
                <div class="number-23">{{ number7 }}</div>
                <div class="text-20">{{ text20 }}</div>
              </div>
              <div class="usd">{{ usd1 }}</div>
            </div>
            <img class="icon-lock-2" :src="iconLock6" alt="icon-lock" />
          </div>
          <div class="overlap-group13">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6453d37b63076cae904c72bd/img/bi-search-16.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room7 }}</div>
                <div class="iscount">{{ discount1 }}</div>
                <div class="monthly-1">{{ monthly2 }}</div>
                <div class="price-12">{{ price7 }}</div>
                <div class="date">{{ date7 }}</div>
                <div class="place-13">{{ place7 }}</div>
                <div class="number-23">{{ number8 }}</div>
                <div class="text-17">{{ text17 }}</div>
              </div>
              <div class="baht-3">{{ baht4 }}</div>
            </div>
            <img class="icon-lock-3" :src="iconLock7" alt="icon-lock" />
          </div>
          <div class="overlap-group-13">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-13.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room8 }}</div>
                <div class="fix-2">{{ fix3 }}</div>
                <div class="daily-3">{{ daily4 }}</div>
                <div class="price-13">{{ price8 }}</div>
                <div class="date">{{ date8 }}</div>
                <div class="busd">{{ busd1 }}</div>
                <div class="number-22">{{ number9 }}</div>
                <div class="number-26">{{ number10 }}</div>
              </div>
              <div class="busd-1">{{ busd2 }}</div>
            </div>
            <img class="icon-lock-6" :src="iconLock8" alt="icon-lock" />
          </div>
          <div class="overlap-group-12">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-14.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room9 }}</div>
                <div class="float-4">{{ float5 }}</div>
                <div class="daily-4">{{ daily5 }}</div>
                <div class="price-14">{{ price9 }}</div>
                <div class="date">{{ date9 }}</div>
                <div class="baht-4">{{ baht5 }}</div>
                <div class="number-22">{{ number11 }}</div>
                <div class="text-19">{{ text19 }}</div>
              </div>
              <div class="baht-5">{{ baht6 }}</div>
            </div>
            <img class="icon-lock" :src="iconLock9" alt="icon-lock" />
          </div>
          <div class="overlap-group-11">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-15.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room10 }}</div>
                <div class="iscount">{{ discount2 }}</div>
                <div class="weekly-1">{{ weekly2 }}</div>
                <div class="price-15">{{ price10 }}</div>
                <div class="date">{{ date10 }}</div>
                <div class="place-14">{{ place8 }}</div>
                <div class="number-23">{{ number12 }}</div>
                <div class="text-14">{{ text14 }}</div>
              </div>
              <div class="baht-6">{{ baht7 }}</div>
            </div>
            <img class="icon-lock-1" :src="iconLock10" alt="icon-lock" />
          </div>
          <div class="overlap-group-11">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-16.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room11 }}</div>
                <div class="float-5">{{ float6 }}</div>
                <div class="daily-5">{{ daily6 }}</div>
                <div class="price-16">{{ price11 }}</div>
                <div class="date">{{ date11 }}</div>
                <div class="place-15">{{ place9 }}</div>
                <div class="number-23">{{ number13 }}</div>
                <div class="text-15">{{ text15 }}</div>
              </div>
              <div class="btc-3">{{ btc4 }}</div>
            </div>
            <img class="icon-lock-7" :src="iconLock11" alt="icon-lock" />
          </div>
          <div class="overlap-group-13">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-17.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room12 }}</div>
                <div class="float-6">{{ float7 }}</div>
                <div class="monthly-2">{{ monthly3 }}</div>
                <div class="price-17">{{ price12 }}</div>
                <div class="date">{{ date12 }}</div>
                <div class="place-16">{{ place10 }}</div>
                <div class="number-22">{{ number14 }}</div>
                <div class="text-18">{{ text18 }}</div>
              </div>
              <div class="usd-1">{{ usd2 }}</div>
            </div>
            <img class="icon-lock-2" :src="iconLock12" alt="icon-lock" />
          </div>
          <div class="overlap-group-12">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-18.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room13 }}</div>
                <div class="fix-3">{{ fix4 }}</div>
                <div class="daily-6">{{ daily7 }}</div>
                <div class="price-18">{{ price13 }}</div>
                <div class="date">{{ date13 }}</div>
                <div class="place-17">{{ place11 }}</div>
                <div class="number-22">{{ number15 }}</div>
                <div class="number-27">{{ number16 }}</div>
              </div>
              <div class="place-18">{{ place12 }}</div>
            </div>
            <img class="icon-lock-8" :src="iconLock13" alt="icon-lock" />
          </div>
          <div class="overlap-group-11">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-19.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room14 }}</div>
                <div class="float-7">{{ float8 }}</div>
                <div class="monthly-3">{{ monthly4 }}</div>
                <div class="price-19">{{ price14 }}</div>
                <div class="date">{{ date14 }}</div>
                <div class="place-19">{{ place13 }}</div>
                <div class="number-23">{{ number17 }}</div>
                <div class="text-16">{{ text16 }}</div>
              </div>
              <div class="baht-7">{{ baht8 }}</div>
            </div>
            <img class="icon-lock-9" :src="iconLock14" alt="icon-lock" />
          </div>
          <div class="overlap-group-11">
            <div class="overlap-group1-7 raleway-normal-black-19-4px">
              <img
                class="icon-search-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/6450946f6b9777a5bb505c3a/img/bi-search-20.svg"
                alt="icon-search"
              />
              <div class="overlap-group-10">
                <div class="room">{{ room15 }}</div>
                <div class="fix-4">{{ fix5 }}</div>
                <div class="weekly-2">{{ weekly3 }}</div>
                <div class="price-20">{{ price15 }}</div>
                <div class="date">{{ date15 }}</div>
                <div class="place-20">{{ place14 }}</div>
                <div class="number-23">{{ number18 }}</div>
                <div class="number-28">{{ number19 }}</div>
              </div>
              <div class="usd-2">{{ usd3 }}</div>
            </div>
            <img class="icon-lock-3" :src="iconLock15" alt="icon-lock" />
          </div>
        </div>
        <a href="javascript:SubmitForm('form11')">
          <div class="frame-28">
            <x-button :textButton="xButton1Props.textButton" :className="xButton1Props.className" /></div></a
        ><x-button :textButton="xButton2Props.textButton" :className="xButton2Props.className" />
      </div>
      <x-footer :className="xFooterProps.className" />
    </form>
  </div>
</template>

<script>
import xButton from "./xButton";
import XFooter from "./XFooter";
export default {
  name: "DisCover",
  components: {
    xButton,
    XFooter,
  },
  props: [
    "discover",
    "createRoom",
    "bank4All",
    "me",
    "howItWorks",
    "title",
    "all",
    "inputType",
    "inputPlaceholder",
    "roomName",
    "type",
    "place1",
    "currency1",
    "collateral",
    "place2",
    "name1",
    "poolSize",
    "currency2",
    "room1",
    "float1",
    "daily1",
    "price1",
    "date1",
    "place3",
    "text11",
    "text12",
    "baht1",
    "iconLock1",
    "room2",
    "fix1",
    "monthly1",
    "price2",
    "date2",
    "btc1",
    "number1",
    "number2",
    "btc2",
    "iconLock2",
    "room3",
    "float2",
    "weekly1",
    "price3",
    "date3",
    "place4",
    "number3",
    "number4",
    "place5",
    "iconLock3",
    "room4",
    "float3",
    "biWeekly",
    "price4",
    "date4",
    "name2",
    "number5",
    "text21",
    "baht2",
    "iconLock4",
    "room5",
    "fix2",
    "daily2",
    "price5",
    "date5",
    "place6",
    "number6",
    "text13",
    "baht3",
    "iconLock5",
    "room6",
    "float4",
    "daily3",
    "price6",
    "date6",
    "btc3",
    "number7",
    "text20",
    "usd1",
    "iconLock6",
    "room7",
    "discount1",
    "monthly2",
    "price7",
    "date7",
    "place7",
    "number8",
    "text17",
    "baht4",
    "iconLock7",
    "room8",
    "fix3",
    "daily4",
    "price8",
    "date8",
    "busd1",
    "number9",
    "number10",
    "busd2",
    "iconLock8",
    "room9",
    "float5",
    "daily5",
    "price9",
    "date9",
    "baht5",
    "number11",
    "text19",
    "baht6",
    "iconLock9",
    "room10",
    "discount2",
    "weekly2",
    "price10",
    "date10",
    "place8",
    "number12",
    "text14",
    "baht7",
    "iconLock10",
    "room11",
    "float6",
    "daily6",
    "price11",
    "date11",
    "place9",
    "number13",
    "text15",
    "btc4",
    "iconLock11",
    "room12",
    "float7",
    "monthly3",
    "price12",
    "date12",
    "place10",
    "number14",
    "text18",
    "usd2",
    "iconLock12",
    "room13",
    "fix4",
    "daily7",
    "price13",
    "date13",
    "place11",
    "number15",
    "number16",
    "place12",
    "iconLock13",
    "room14",
    "float8",
    "monthly4",
    "price14",
    "date14",
    "place13",
    "number17",
    "text16",
    "baht8",
    "iconLock14",
    "room15",
    "fix5",
    "weekly3",
    "price15",
    "date15",
    "place14",
    "number18",
    "number19",
    "usd3",
    "iconLock15",
    "xButton1Props",
    "xButton2Props",
    "xFooterProps",
  ],
};
</script>

<style>
.discover-2 {
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

.flex-col-11 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 71px;
  min-height: 218px;
  width: 1448px;
}

.overlap-group1-8 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 88px;
  min-width: 1440px;
  padding: 21px 17px;
}

.discover-3 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 90px;
}

.line-1-3 {
  align-self: flex-end;
  height: 40px;
  margin-left: 12px;
  object-fit: cover;
  width: 1px;
}

.create-room-3 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 23px;
  min-height: 22px;
  width: 141px;
}

.bank4all-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 405px;
  margin-top: 6px;
  min-height: 34px;
  width: 147px;
}

.icon-search-3 {
  height: 20px;
  margin-left: 274px;
  margin-top: 4px;
  width: 20px;
}

.me-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 24px;
  margin-top: 6px;
  min-height: 22px;
  width: 85px;
}

.get-started-3 {
  align-items: flex-start;
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  margin-left: 8px;
  min-width: 160px;
}

.overlap-group-14 {
  align-items: center;
  background-color: var(--fuscous-gray);
  border-radius: 6px;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  min-width: 158px;
  padding: 0 18.9px;
}

.how-it-works-3 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  width: 119px;
}

.title-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 117px;
  min-height: 59px;
  width: 351px;
}

.flex-row-12 {
  align-items: flex-end;
  display: flex;
  height: 31px;
  margin-left: 117px;
  margin-top: 23px;
  min-width: 624px;
}

.icon-search-4 {
  height: 26px;
  width: 26px;
}

.overlap-group18 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  gap: 12px;
  height: 26px;
  justify-content: flex-end;
  margin-left: 21px;
  min-width: 72px;
  padding: 0 7.8px;
}

.all {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 26px;
  white-space: nowrap;
}

.chevron {
  align-self: center;
  height: 7px;
  margin-top: 3px;
  width: 15px;
}

.flex-col-12 {
  align-items: flex-end;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 5px;
  min-height: 30px;
  width: 500px;
}

.flex-row-13 {
  align-items: flex-start;
  display: flex;
  height: 27px;
  min-width: 493px;
}

.seatch {
  align-self: flex-end;
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  white-space: nowrap;
  width: 78px;
}

.seatch::placeholder {
  color: #00000099;
}

.icon-close {
  height: 23px;
  margin-left: 354px;
  width: 23px;
}

.icon-search-5 {
  height: 26px;
  margin-left: 12px;
  width: 26px;
}

.line-23 {
  height: 1px;
  margin-right: 0.01px;
  object-fit: cover;
  width: 500px;
}

.group-122 {
  align-self: center;
  height: 1124px;
  margin-left: 27px;
  margin-top: 91px;
  position: relative;
  width: 1221px;
}

.overlap-group-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 1041px;
  position: absolute;
  top: 0;
  width: 1211px;
}

.overlap-group2-3 {
  height: 57px;
  margin-left: 1px;
  position: relative;
  width: 1210px;
}

.icon-search-2 {
  height: 26px;
  left: 1072px;
  position: absolute;
  top: 19px;
  width: 26px;
}

.overlap-group-10 {
  align-items: flex-end;
  background-color: var(--alto);
  display: flex;
  height: 57px;
  left: 0;
  min-width: 1210px;
  padding: 15px 16px;
  position: absolute;
  top: 0;
}

.room {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  min-height: 23px;
  white-space: nowrap;
  width: 117px;
}

.type-1,
.float,
.fix,
.float-1,
.float-2,
.fix-1,
.float-3,
.fix-2,
.float-4,
.float-5,
.float-6,
.fix-3,
.float-7,
.fix-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 62px;
  min-height: 23px;
  white-space: nowrap;
  width: 73px;
}

.place-7,
.daily,
.weekly,
.daily-1,
.daily-2,
.daily-3,
.daily-4,
.daily-5,
.daily-6,
.weekly-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 58px;
  min-height: 23px;
  white-space: nowrap;
  width: 73px;
}

.currency-1,
.price-8,
.price-9,
.price-10,
.price-11,
.price-13,
.price-14,
.price-15,
.price-16,
.price-18,
.price-20 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 39px;
  min-height: 23px;
  white-space: nowrap;
  width: 113px;
}

.overlap-group1-9 {
  height: 23px;
  margin-left: 35px;
  position: relative;
  width: 192px;
}

.collateral {
  left: 79px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 113px;
}

.place-8 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 113px;
}

.name {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 9px;
  min-height: 23px;
  white-space: nowrap;
  width: 134px;
}

.pool-size-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 8px;
  min-height: 23px;
  white-space: nowrap;
  width: 113px;
}

.preference {
  align-items: center;
  display: flex;
  gap: 4110px;
  height: 32px;
  left: 1161px;
  min-width: 31px;
  position: absolute;
  top: 13px;
}

.vector {
  align-self: flex-end;
  height: 32px;
  margin-bottom: -359px;
  margin-left: -4138px;
  width: 31px;
}

.union {
  height: 21px;
  margin-top: 0.67px;
  width: 24px;
}

.vector-1 {
  height: 27px;
  left: 1116px;
  position: absolute;
  top: 18px;
  width: 31px;
}

.currency-2 {
  left: 1022px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 21px;
  white-space: nowrap;
  width: 113px;
}

.overlap-group3-2 {
  height: 57px;
  margin-left: 1px;
  margin-top: 37px;
  position: relative;
  width: 1210px;
}

.group-71 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 57px;
  left: 0;
  min-width: 1210px;
  position: absolute;
  top: 0;
}

.overlap-group1-10 {
  height: 57px;
  position: relative;
  width: 1210px;
}

.date {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 11px;
  min-height: 23px;
  white-space: nowrap;
  width: 113px;
}

.place-9,
.btc,
.place-10,
.name-1,
.place-12,
.btc-2,
.place-13,
.busd,
.baht-4,
.place-14,
.place-15,
.place-16,
.place-17,
.place-19,
.place-20 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 23px;
  min-height: 23px;
  white-space: nowrap;
  width: 74px;
}

.text-11 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 53px;
  min-height: 23px;
  white-space: nowrap;
  width: 55px;
}

.text-12,
.number-24,
.number-25,
.text-21,
.text-13,
.text-20,
.text-17,
.number-26,
.text-19,
.text-14,
.text-15,
.text-18,
.number-27,
.text-16,
.number-28 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 54px;
  min-height: 23px;
  white-space: nowrap;
  width: 113px;
}

.baht,
.btc-1,
.place-11,
.baht-1,
.baht-2,
.busd-1,
.baht-5,
.usd-1,
.place-18 {
  left: 1056px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 17px;
  white-space: nowrap;
  width: 51px;
}

.icon-lock {
  height: 33px;
  left: 1167px;
  object-fit: cover;
  position: absolute;
  top: 14px;
  width: 33px;
}

.overlap-group12 {
  height: 57px;
  margin-left: 1px;
  margin-top: 6px;
  position: relative;
  width: 1210px;
}

.overlap-group1-7 {
  height: 57px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1210px;
}

.monthly,
.bi-weekly {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 58px;
  min-height: 23px;
  white-space: nowrap;
  width: 91px;
}

.price-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 21px;
  min-height: 23px;
  white-space: nowrap;
  width: 113px;
}

.number-22 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 70px;
  min-height: 23px;
  white-space: nowrap;
  width: 38px;
}

.icon-lock-4 {
  height: 33px;
  left: 1168px;
  object-fit: cover;
  position: absolute;
  top: 14px;
  width: 33px;
}

.overlap-group4-1 {
  height: 57px;
  margin-left: 1px;
  margin-top: 8px;
  position: relative;
  width: 1210px;
}

.overlap-group-11 {
  height: 57px;
  margin-top: 7px;
  position: relative;
  width: 1210px;
}

.icon-lock-1 {
  height: 33px;
  left: 1168px;
  object-fit: cover;
  position: absolute;
  top: 12px;
  width: 33px;
}

.overlap-group-12 {
  height: 57px;
  margin-left: 1px;
  margin-top: 7px;
  position: relative;
  width: 1210px;
}

.icon-lock-5 {
  height: 33px;
  left: 1167px;
  object-fit: cover;
  position: absolute;
  top: 11px;
  width: 33px;
}

.overlap-group16 {
  height: 57px;
  margin-top: 6px;
  position: relative;
  width: 1210px;
}

.number-23 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 71px;
  min-height: 23px;
  white-space: nowrap;
  width: 38px;
}

.usd,
.baht-3,
.baht-6,
.btc-3,
.baht-7,
.usd-2 {
  left: 1057px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 17px;
  white-space: nowrap;
  width: 51px;
}

.icon-lock-2 {
  height: 33px;
  left: 1169px;
  object-fit: cover;
  position: absolute;
  top: 14px;
  width: 33px;
}

.overlap-group13 {
  height: 57px;
  margin-top: 8px;
  position: relative;
  width: 1210px;
}

.iscount {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 62px;
  min-height: 23px;
  white-space: nowrap;
  width: 104px;
}

.monthly-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 27px;
  min-height: 23px;
  white-space: nowrap;
  width: 89px;
}

.price-12 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 23px;
  min-height: 23px;
  white-space: nowrap;
  width: 113px;
}

.icon-lock-3 {
  height: 33px;
  left: 1168px;
  object-fit: cover;
  position: absolute;
  top: 10px;
  width: 33px;
}

.overlap-group-13 {
  height: 57px;
  margin-left: 1px;
  margin-top: 4px;
  position: relative;
  width: 1210px;
}

.icon-lock-6 {
  height: 33px;
  left: 1167px;
  object-fit: cover;
  position: absolute;
  top: 15px;
  width: 33px;
}

.weekly-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 27px;
  min-height: 23px;
  white-space: nowrap;
  width: 73px;
}

.icon-lock-7 {
  height: 33px;
  left: 1168px;
  object-fit: cover;
  position: absolute;
  top: 13px;
  width: 33px;
}

.monthly-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 58px;
  min-height: 23px;
  white-space: nowrap;
  width: 88px;
}

.price-17 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 24px;
  min-height: 23px;
  white-space: nowrap;
  width: 113px;
}

.icon-lock-8 {
  height: 33px;
  left: 1167px;
  object-fit: cover;
  position: absolute;
  top: 13px;
  width: 33px;
}

.monthly-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 58px;
  min-height: 23px;
  white-space: nowrap;
  width: 92px;
}

.price-19 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 20px;
  min-height: 23px;
  white-space: nowrap;
  width: 113px;
}

.icon-lock-9 {
  height: 33px;
  left: 1168px;
  object-fit: cover;
  position: absolute;
  top: 15px;
  width: 33px;
}

.frame-28 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 1014px;
  padding: 10px;
  position: absolute;
  top: 1052px;
  width: fit-content;
}
</style>
