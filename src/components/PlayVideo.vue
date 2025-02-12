<script setup lang="ts">
import PlayButton from './svgs/PlayButton.vue'
</script>

<template>
  <div class="video">
    <div class="video-wrapper">
      <img class="video-img" src="/video_bg.png" alt="background asset" />
      <div class="video-content">
        <div class="content-container">
          <img src="/one_piece_logo.png" alt="One Piece logo" />
          <p class="content-desc">FAN WEBSITE</p>
        </div>
        <PlayButton />
      </div>
    </div>
  </div>
</template>

<style scoped>
.video {
  position: absolute;
  bottom: 56px;
  left: 46px;
}

.video-wrapper {
  position: relative;
  height: 148px;
  width: 389px;
}

.video-content {
  height: 100%;
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.video-content .content-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
}

.video-content .content-desc {
  font-size: 14px;
  color: #d92332;
  font-family: 'Poppins';
  font-weight: 700;
}

.video-img {
  position: absolute;
  object-fit: cover;
}
</style>
