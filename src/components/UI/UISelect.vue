<template>
    <select v-model="selectedValue" @change="emitChange">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
</template>
  
<script>
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
      value: {
        type: [String, Number],
        required: false,
      },
      label: {
        type: String,
        default: '',
      }
    },
    data() {
      return {
        selectedValue: this.value,
      };
    },
    methods: {
      emitChange() {
        this.$emit('input', this.selectedValue);
      },
    },
    watch: {
      value(newVal) {
        this.selectedValue = newVal;
      },
    },
  };
  </script>
  
  <style scoped>

  select {
    padding: 0.5rem;
    border: 0;
    border-radius: 15px;
    background-color: #5cdb95;
    transition-duration: 0.2s;
    font-size: 20px;
  }

  select:hover {
    background-color: #EDF5E1;
    color: #05386b;
  }

  select:focus {
    background-color: #EDF5E1;
    color: #05386b;
  }

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  </style>
  