# React Portfolio

- I created this while coding along this [video](https://www.youtube.com/watch?v=CKAn5dCK6RE&t=117s) from youtube
- I learned a lot of new things
  * Power of position: absolute;
  * `iconscout` library for icons
  * `framer-motion` library for animations
  * How to add beautiful blur circles. Below is the code
  ```html
    <div class="blur" style="background: skyblue"></div>
    ```
    ```css
   .blur {
      position: absolute;
      width: 22rem;
      height: 14rem;
      border-radius: 50%;
      background: #edd0ff;
      z-index: -9;
      top: -18%;
      left: 56%;
      filter: blur(72px);
    }
    ```
    **Note: Don't forget to position the blur cirlce at your desired place :)**
    
- I used **yarn** instead of **npm** first time
