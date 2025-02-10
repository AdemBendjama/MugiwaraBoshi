<template>
  <section class="wrapper">
    <img class="main-bg" src="/main_bg.png" alt="straw hat luffy" />
    <div class="main-sect">
      <h1 class="main-head">
        ONE PIECE
        <img class="main-icon" src="/straw_hat.png" alt="red straw hat" />
      </h1>
      <p class="main-desc">GET TO KNOW THE FUTURE PIRATES KING</p>
    </div>
  </section>
</template>

<style scope>
.wrapper {
  position: relative;
}

.main-bg {
  width: 100%;
}

.main-sect {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.main-head {
  position: relative;
  font-size: 128px;
  font-weight: 700;
  line-height: 128px;
  color: white;
  font-family: 'Poppins';
}

.main-icon {
  position: absolute;
  right: -56px;
  top: -24px;
}

.main-desc {
  font-size: 31px;
  font-weight: 600;
  color: white;
  font-family: 'Poppins';
}
</style>
