<template>
  <footer :class="[`footer`, className || ``]">
    <div class="flex-row-1">
      <div class="projects">
        <div class="projects-1 montserrat-semi-bold-black-20px">Projects</div>
        <div class="peer-share montserrat-normal-black-16px">Peer share</div>
        <div class="micre-finance montserrat-normal-black-16px">Micre-finance</div>
        <div class="insurance montserrat-normal-black-16px">Insurance</div>
        <div class="investment montserrat-normal-black-16px">Investment</div>
      </div>
      <div class="about">
        <div class="about-1 montserrat-semi-bold-black-20px">About</div>
        <div class="about-us montserrat-normal-black-16px">About Us</div>
        <div class="explore montserrat-normal-black-16px">Explore</div>
        <div class="login montserrat-normal-black-16px">Login</div>
        <div class="place montserrat-normal-black-16px">Contact</div>
      </div>
      <div class="info">
        <div class="info-1 montserrat-semi-bold-black-20px">Info</div>
        <div class="legal-information montserrat-normal-black-16px">Legal information</div>
        <div class="x-policy montserrat-normal-black-16px">Fees Policy</div>
        <div class="x-policy montserrat-normal-black-16px">Privacy Policy</div>
        <div class="x-policy montserrat-normal-black-16px">Cookie Policy</div>
      </div>
      <div class="language-currency">
        <div class="langugae-currency montserrat-semi-bold-black-20px">Langugae &amp; Currency</div>
        <div class="overlap-group-2">
          <div class="language montserrat-medium-black-16px">English</div>
          <img
            class="bicaret-down-fill"
            src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/bi-caret-down-fill.svg"
            alt="bi:caret-down-fill"
          />
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="x2023-all-right-reserved montserrat-normal-black-12px">2023. All right reserved</div>
      <img
        class="icons"
        src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/icons@2x.png"
        alt="Icons"
      />
    </div>
  </footer>
</template>

<script>
export default {
  name: "XFooter",
  props: ["className"],
};
</script>

<style>
.footer {
  align-items: flex-end;
  background-color: var(--silver);
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  gap: 22px;
  height: auto;
  justify-content: flex-start;
  margin-top: 38px;
  min-height: 246px;
  padding: 29.6px 62px;
  width: 1440px;
}

.flex-row-1 {
  align-items: flex-end;
  display: flex;
  height: 143px;
  min-width: 1307px;
}

.projects {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.08px;
  min-height: 134px;
  width: 121px;
}

.projects-1,
.about-1,
.info-1,
.langugae-currency {
  letter-spacing: 0;
  line-height: normal;
  min-height: 19px;
  white-space: nowrap;
}

.peer-share,
.about-us {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0;
  margin-top: 16px;
  min-height: 16px;
  white-space: nowrap;
}

.micre-finance,
.investment,
.explore,
.login,
.place {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0;
  margin-top: 12px;
  min-height: 16px;
  white-space: nowrap;
}

.insurance {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1px;
  margin-top: 12px;
  min-height: 16px;
  white-space: nowrap;
}

.about {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 218px;
  min-height: 134px;
  width: 85px;
}

.info {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 211px;
  min-height: 134px;
  width: 153px;
}

.legal-information {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  min-height: 16px;
  white-space: nowrap;
}

.x-policy {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 12px;
  min-height: 16px;
  white-space: nowrap;
}

.language-currency {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 211px;
  min-height: 69px;
  width: 308px;
}

.overlap-group-2 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  gap: 204px;
  height: 34px;
  justify-content: flex-end;
  min-width: 306px;
  padding: 9.3px 12px;
}

.language {
  letter-spacing: 0;
  line-height: normal;
  min-height: 16px;
  white-space: nowrap;
  width: 61px;
}

.bicaret-down-fill {
  align-self: center;
  height: 12px;
  margin-bottom: 0;
  width: 16px;
}

.copyright {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 1055px;
  height: 22px;
  margin-right: 6px;
  min-width: 1298px;
}

.x2023-all-right-reserved {
  letter-spacing: 0;
  line-height: normal;
  min-height: 12px;
  white-space: nowrap;
  width: 137px;
}

.icons {
  align-self: flex-end;
  height: 19px;
  margin-bottom: 0;
  width: 104px;
}

.footer.footer-1 {
  margin-top: 74px;
}

.footer.footer-2 {
  margin-top: 29px;
}

.footer.footer-3 {
  margin-top: 91px;
}

.footer.footer-4 {
  margin-left: 6px;
  margin-top: 52px;
}
</style>
