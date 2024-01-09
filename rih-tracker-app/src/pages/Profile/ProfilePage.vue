<template>
    <div class="profile-container">
        <UIImage
        :src="this.profileInfo.avatar"
        />
        <div class="profile-info">
            <h1>{{this.profileInfo.username}}{{this.profileInfo.id}}</h1>
            <h2>Логин: {{this.profileInfo.login}}</h2>
            <div class="profile-buttons-container">
                <UIButton v-on:click="toEditPage" :title="'Редактировать'"/>
                <UIButton v-on:click="logout" :title="'Выйти'"/>
            </div>
        </div>
    </div>
</template>

<script>
import UIImage from "@/components/UI/UIImage.vue";
import UIButton from "@/components/UI/UIButton.vue";
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
                this.profileInfo.id = response.data.id;
                this.profileInfo.username = response.data.username + "@";
                this.profileInfo.login = response.data.login;
                this.profileInfo.avatar = response.data.avatar ?? "https://priutnekrasovka.ru/public/images/no-avatar.png";
            });
        },

        toEditPage: function (event){
            router.push("/profile/edit");
        },

        logout: function (event){
            localStorage.removeItem("jwt");
            localStorage.removeItem('userId');
            router.push("/login");
        }
    },
    components: {
        UIImage,
        UIButton
    },
    data () {
        return {
            profileInfo: {
                username: 0,
                username: "Загрузка...",
                login: "Загрузка...",
                avatar: "https://priutnekrasovka.ru/public/images/no-avatar.png",
            }
        }
    },
}
</script>

<style>
.profile-container {
    display: flex;
}

.profile-info {
    padding-top: 50px;
}

.profile-buttons-container {
    display: flex;
    margin: 20px;
}

h1 {
    font-size: 50px;
}
</style>