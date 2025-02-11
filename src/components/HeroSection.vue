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
    <img class="gear-5" src="/gear_5_luffy.png" alt="gear 5 luffy one piece" />
  </section>
</template>

<style scope>
.wrapper {
  position: relative;
  overflow: hidden;
}

.main-bg {
  width: 100%;
}

.main-sect {
  position: absolute;
  top: 120px;
  right: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.main-head {
  position: relative;
  font-size: 8rem;
  font-weight: 700;
  line-height: 8rem;
  color: white;
  font-family: 'Poppins';
}

.main-icon {
  position: absolute;
  right: -56px;
  top: -24px;
}

.main-desc {
  font-size: 2rem;
  font-weight: 600;
  color: white;
  font-family: 'Poppins';
}

.gear-5 {
  position: absolute;
  bottom: -100px;
  right: 0;
  animation-name: Bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes Bounce {
  0% {
    transform: translateY(0) rotate(5deg);
  }

  100% {
    transform: translateY(-50px) rotate(0deg);
  }
}

@media (max-width: 1366px) {
  .gear-5 {
    width: 600px;
  }
  .main-head {
    font-size: 7rem;
    line-height: 7rem;
  }
  .main-desc {
    font-size: 1.5rem;
  }
}

@media (min-width: 1920px) {
  .gear-5 {
    width: 850px;
  }
  .main-head {
    font-size: 11rem;
    line-height: 11rem;
  }
  .main-desc {
    font-size: 2.6rem;
  }
}
</style>
