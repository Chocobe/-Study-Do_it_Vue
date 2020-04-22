<template>
  <div>
    달력: <input id="calendar">
  </div>
</template>


<script>
export default {
  mounted() {
    $("#calendar").datepicker();
    $("#calendar").datepicker("option", "showAnim", "bounce");
  }
}
</script>