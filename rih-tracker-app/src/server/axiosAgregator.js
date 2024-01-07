import axios from 'axios';

const apiPath = "http://localhost:8080";

export default {
    sendGet: async function (path) {
        var headers = {}
        if (localStorage.getItem("jwt") !== null){
            headers = {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            };
        }
        return await axios
            .get(
                apiPath + path,
                {
                    headers: headers,
                }
            );
    },
    sendPost: async function (path, data) {
        var headers = {}
        if (localStorage.getItem("jwt") !== null){
            headers = {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            };
        }
        return await axios
            .post(
                apiPath + path,
                data,
                {
                    headers: headers,
                }
            );
    },
    sendPut: async function (path, data) {
        var headers = {}
        if (localStorage.getItem("jwt") !== null){
            headers = {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            };
        }
        return await axios
            .put(
                apiPath + path,
                data,
                {
                    headers: headers,
                }
            );
    },
    sendDelete: async function (path) {
        var headers = {}
        if (localStorage.getItem("jwt") !== null){
            headers = {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            };
        }
        return await axios
            .delete(
                apiPath + path,
                {
                    headers: headers,
                }
            );
    },
};