<template>
  <div class="profile-container">
    <UIImage :src="this.profileInfo.avatar" />
    <div class="profile-info">
      <h1>{{ this.profileInfo.username }}{{ this.profileInfo.id }}</h1>
      <h2>Login: {{ this.profileInfo.login }}</h2>
      <div class="profile-buttons-container">
        <UIButton v-on:click="toEditPage" :title="'Edit Profile'" />
        <UIButton v-on:click="logout" :title="'Sign out'" />
      </div>
    </div>
  </div>
</template>

<script>
import UIImage from "@/components/UI/UIImage.vue";
import UIButton from "@/components/UI/UIButton.vue";
import UISelect from "@/components/UI/UISelect.vue";
import axiosAgregator from "@/server/axiosAgregator.js";
import router from "@/router/router.js";

export default {
  created() {
    this.loadInfo();
  },
  methods: {
    async loadInfo() {
      axiosAgregator
        .sendGet("/api/profile/" + localStorage.getItem("userId"))
        .then((response) => {
          this.profileInfo.id = response.data.id;
          this.profileInfo.username = response.data.username + "@";
          this.profileInfo.login = response.data.login;
          this.profileInfo.avatar =
            response.data.avatar ??
            "https://priutnekrasovka.ru/public/images/no-avatar.png";
        });

      axiosAgregator.sendGet("/api/project").then((response) => {
        let data = response.data.data;
        this.selectOptions = data.map((elem) => {
          return {
            value: elem.id,
            text: elem.title,
          };
        });

        this.selectedOption = this.selectOptions[1].value;
      });
    },

    toEditPage: function (event) {
      router.push("/profile/edit");
    },

    logout: function (event) {
      localStorage.removeItem("jwt");
      localStorage.removeItem("userId");
      router.push("/login");
    },
  },
  components: {
    UIImage,
    UIButton,
    UISelect,
  },
  data() {
    return {
      selectOptions: [],
      selectedOption: "",
      profileInfo: {
        username: 0,
        username: "Loading...",
        login: "Loading...",
        avatar: "https://priutnekrasovka.ru/public/images/no-avatar.png",
      },
    };
  },
};
</script>

<style>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-buttons-container {
  display: flex;
  margin: 20px;
}
</style>
