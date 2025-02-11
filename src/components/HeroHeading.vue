<template>
  <div class="sect">
    <h1 class="head">
      ONE PIECE
      <img class="icon" src="/straw_hat.png" alt="red straw hat" />
    </h1>
    <p class="desc">GET TO KNOW THE FUTURE PIRATES KING</p>
  </div>
</template>

<style scoped>
.sect {
  position: absolute;
  top: 120px;
  right: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.head {
  position: relative;
  font-size: 8rem;
  font-weight: 700;
  line-height: 8rem;
  color: white;
  font-family: 'Poppins';
}

.icon {
  position: absolute;
  right: -56px;
  top: -24px;
}

.desc {
  font-size: 2rem;
  font-weight: 600;
  color: white;
  font-family: 'Poppins';
}

@media (max-width: 1366px) {
  .head {
    font-size: 7rem;
    line-height: 7rem;
  }
  .desc {
    font-size: 1.5rem;
  }
}

@media (min-width: 1920px) {
  .head {
    font-size: 11rem;
    line-height: 11rem;
  }
  .desc {
    font-size: 2.6rem;
  }
}
</style>
