<template>
  <form class="member-1 screen" name="form31" action="form31" method="post">
    <div class="member-2">
      <div class="overlap-group6-1">
        <div class="overlap-group1-14">
          <div class="add-member-512 inter-normal-black-23px">{{ addMember512 }}</div>
          <div class="overlap-group-container-3">
            <div class="overlap-group-24">
              <div class="first-name-1 inter-normal-black-23px">{{ firstName }}</div>
              <div class="rectangle-17-1"></div>
            </div>
            <div class="overlap-group-24">
              <div class="last-name-1 inter-normal-black-23px">{{ lastName }}</div>
              <div class="rectangle-17-1"></div>
            </div>
          </div>
          <div class="flex-row-18">
            <div class="overlap-group-container-4">
              <div class="overlap-group-25">
                <div class="email-2 inter-normal-black-23px">{{ email }}</div>
                <div class="rectangle-1-1"></div>
              </div>
              <div class="overlap-group-25 inter-normal-black-23px">
                <div class="copy-link">{{ copyLink }}</div>
                <div class="rectangle-1-1"></div>
                <div class="password123">{{ password123 }}</div>
              </div>
            </div>
            <a href="javascript:SubmitForm('form31')">
              <div class="group-99">
                <div class="overlap-group-26">
                  <div class="add inter-normal-black-23px">{{ add }}</div>
                </div>
              </div></a
            >
          </div>
        </div>
        <router-link to="/inroom">
          <div class="frame-39-1">
            <x-button :textButton="xButtonProps.textButton" :className="xButtonProps.className" /></div></router-link
        ><input
          class="type-here-8 inter-normal-shuttle-gray-23px"
          name="typehere"
          :placeholder="inputPlaceholder1"
          :type="inputType1"
          required
        /><input
          class="type-here-9 inter-normal-shuttle-gray-23px"
          name="typehere"
          :placeholder="inputPlaceholder2"
          :type="inputType2"
          required
        /><input
          class="type-here-10 inter-normal-shuttle-gray-23px"
          name="typehere"
          :placeholder="inputPlaceholder3"
          :type="inputType3"
          required
        />
      </div>
    </div>
  </form>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "Member",
  components: {
    xButton,
  },
  props: [
    "addMember512",
    "firstName",
    "lastName",
    "email",
    "copyLink",
    "password123",
    "add",
    "inputType1",
    "inputPlaceholder1",
    "inputType2",
    "inputPlaceholder2",
    "inputType3",
    "inputPlaceholder3",
    "xButtonProps",
  ],
};
</script>

<style>
.member-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  width: 638px;
}

.member-2 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  width: 638px;
}

.overlap-group6-1 {
  height: 340px;
  position: relative;
  width: 638px;
}

.overlap-group1-14 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 340px;
  padding: 14px 21px;
  position: absolute;
  top: 0;
  width: 638px;
}

.add-member-512 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 8px;
  min-height: 39px;
  width: 244px;
}

.overlap-group-container-3 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 25px;
  margin-right: 1px;
  margin-top: 4px;
  min-width: 593px;
}

.overlap-group-24 {
  height: 79px;
  position: relative;
  width: 284px;
}

.first-name-1,
.last-name-1,
.email-2,
.copy-link {
  left: 7px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 244px;
}

.rectangle-17-1 {
  background-color: var(--alto);
  height: 47px;
  left: 0;
  position: absolute;
  top: 32px;
  width: 284px;
}

.flex-row-18 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  gap: 42px;
  height: 165px;
  margin-top: 17px;
  min-width: 595px;
}

.overlap-group-container-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 165px;
  width: 455px;
}

.overlap-group-25 {
  height: 79px;
  position: relative;
  width: 455px;
}

.rectangle-1-1 {
  background-color: var(--alto);
  height: 47px;
  left: 0;
  position: absolute;
  top: 32px;
  width: 455px;
}

.password123 {
  left: 12px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 40px;
}

.group-99 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-bottom: 56px;
  min-width: 98px;
}

.overlap-group-26 {
  align-items: flex-end;
  background-color: var(--alto);
  display: flex;
  height: 47px;
  min-width: 96px;
  padding: 9px 15px;
}

.add {
  letter-spacing: 0;
  line-height: normal;
  min-height: 28px;
  min-width: 66px;
}

.frame-39-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 499px;
  padding: 10px;
  position: absolute;
  top: 261px;
  width: fit-content;
}

.type-here-8 {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 34px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 97px;
  width: 109px;
}

.type-here-8::placeholder,
.type-here-9::placeholder,
.type-here-10::placeholder {
  color: #62697199;
}

.type-here-9 {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 34px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 193px;
  width: 109px;
}

.type-here-10 {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 341px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 97px;
  width: 109px;
}

#overlay-member {
  align-items: center;
  background-color: #00000000;
  justify-content: center;
}
</style>
