<template>
    <div class="profile-container">
        <UIImage
        :src="profileInfo.avatar"
        />
        <div class="profile-info">
            <div class="profile-input">
                <h2 class="input-margin">Username:</h2>
                <UIInput
                v-model="profileInfo.username"
                />
            </div>

            <div class="profile-input">
                <h2 class="input-margin">Login:</h2>
                <UIInput
                v-model="profileInfo.login"
                />
            </div>

            <div class="profile-input">
                <h2 class="input-margin">Avatar URL:</h2>
                <UIInput
                v-model="profileInfo.avatar"
                />
            </div>

            <div class="profile-buttons-container">
                <UIButton @click="saveProfile" :title="'Save Profile'"/>
                <UIButton @click="toProfilePage" :title="'Cancel'"/>
            </div>
        </div>
    </div>
</template>

<script>
import UIImage from "@/components/UI/UIImage.vue";
import UIButton from "@/components/UI/UIButton.vue";
import UIInput from "@/components/UI/UIInput.vue";
import axiosAgregator from "@/server/axiosAgregator.js";
import router from "@/router/router.js";

export default {
    created () {
        this.loadInfo();
    },
    methods: {
        async loadInfo() {
                axiosAgregator.sendGet("/api/profile/" + localStorage.getItem("userId"))
                .then(response => {
                    this.profileInfo.username = response.data.username;
                    this.profileInfo.login = response.data.login;
                    this.profileInfo.avatar = response.data.avatar ?? "https://priutnekrasovka.ru/public/images/no-avatar.png";
                });
        },
        
        async saveInfo() {
            await axiosAgregator.sendPut(
                "/api/profile/" + localStorage.getItem("userId"),
                this.profileInfo
            )
        },

        toProfilePage: function (event){
            router.push("/profile");
        },

        saveProfile: function (event){
            this.saveInfo().then(response => {
                router.push("/profile");
            });
        }
    },
    components: {
        UIImage,
        UIButton,
        UIInput
    },
    data () {
        return {
            profileInfo: {
                username: "Loading...",
                login: "Loading...",
                avatar: "https://priutnekrasovka.ru/public/images/no-avatar.png",
            }
        }
    },
}
</script>

<style scoped>
.profile-buttons-container{
    display: flex;
    justify-content: space-evenly;
}

.profile-input {
    display: flex;
    justify-content: space-between;
}

.input-margin{
    padding-right: 10px;
}
</style>