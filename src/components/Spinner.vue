<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
.spin{
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: teal;
    -webkit-animation: spin 1s ease infinite;
    animation: spin 1s ease infinite;
  
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotateZ(360deg); }
 
}

@keyframes spin {
    /* Z axis */
  to { transform: rotateZ(360deg); }
  
}
</style>