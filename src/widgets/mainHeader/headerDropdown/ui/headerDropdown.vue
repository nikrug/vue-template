<template>
  <div>
    <burger :isOpen="isOpen" @toggle="toggleDropdown" />
    <div class="dropdown" :class="{ show: isOpen }">
            <ul class="dropdown-list">
                <li >Home</li>
                <li >About</li>
                <li >Services</li>
                <li >Projects</li>
                <div class="langg gtranslate_wrapper"></div>
                <Popup buttonText="Contact Us"></Popup>
                  <div class='nav-img'>
              <a href="/facebook">
                <svg  class='header-drop-menu__svg'  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="var(--svg-header)"/>
                    <path d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="/instagram">
                <svg class='header-drop-menu__svg' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="18" cy="17.9999" rx="18" ry="18.0036" fill="var(--svg-header)"/>
                        <g clip-path="url(#clip0_202_337)">
                        <path d="M22.5 8.1189H13.5C11.0147 8.1189 9 10.1336 9 12.6189V21.6189C9 24.1042 11.0147 26.1189 13.5 26.1189H22.5C24.9853 26.1189 27 24.1042 27 21.6189V12.6189C27 10.1336 24.9853 8.1189 22.5 8.1189Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.5986 16.5522C21.7096 17.3012 21.5817 18.0662 21.2329 18.7383C20.8842 19.4104 20.3324 19.9554 19.656 20.2959C18.9797 20.6363 18.2132 20.7548 17.4656 20.6345C16.718 20.5142 16.0273 20.1612 15.4919 19.6258C14.9565 19.0904 14.6035 18.3998 14.4832 17.6522C14.3629 16.9046 14.4814 16.1381 14.8219 15.4617C15.1623 14.7853 15.7073 14.2335 16.3795 13.8848C17.0516 13.536 17.8165 13.4081 18.5656 13.5192C19.3296 13.6325 20.0369 13.9885 20.5831 14.5346C21.1292 15.0808 21.4853 15.7881 21.5986 16.5522Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.9492 12.1692H22.9582" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_202_337">
                        <rect width="21.6" height="21.6" fill="var(--svg-header)" transform="translate(7.19922 6.31909)"/>
                        </clipPath>
                        </defs>
                </svg>
              </a>
              <a href="/in">
                <svg class='header-drop-menu__svg' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="18" cy="17.9999" rx="18" ry="18.0036" fill="var(--svg-header)"/>
                    <path d="M21.5992 13.519C23.0314 13.519 24.4049 14.088 25.4176 15.1007C26.4303 16.1134 26.9992 17.4869 26.9992 18.919V25.219H23.3992V18.919C23.3992 18.4417 23.2096 17.9838 22.872 17.6463C22.5344 17.3087 22.0766 17.119 21.5992 17.119C21.1218 17.119 20.664 17.3087 20.3264 17.6463C19.9889 17.9838 19.7992 18.4417 19.7992 18.919V25.219H16.1992V18.919C16.1992 17.4869 16.7681 16.1134 17.7808 15.1007C18.7935 14.088 20.167 13.519 21.5992 13.519V13.519Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.6 14.4192H9V25.2192H12.6V14.4192Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.8 11.7189C11.7941 11.7189 12.6 10.913 12.6 9.9189C12.6 8.92478 11.7941 8.1189 10.8 8.1189C9.80589 8.1189 9 8.92478 9 9.9189C9 10.913 9.80589 11.7189 10.8 11.7189Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="/email">
                <svg class='header-drop-menu__svg' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="18" cy="17.9999" rx="18" ry="18.0036" fill="var(--svg-header)"/>
                    <path d="M10.8 9.91919H25.2C26.19 9.91919 27 10.7292 27 11.7192V22.5192C27 23.5092 26.19 24.3192 25.2 24.3192H10.8C9.81 24.3192 9 23.5092 9 22.5192V11.7192C9 10.7292 9.81 9.91919 10.8 9.91919Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27 11.719L18 18.019L9 11.719" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a> 
              <a href="https://x.com/i/flow/login">
                <svg class='header-drop-menu__svg' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="18" cy="17.9999" rx="18" ry="18.0036" fill="var(--svg-header)"/>
                            <g clip-path="url(#clip0_202_354)">
                            <path d="M27.8977 9.01906C27.0358 9.62699 26.0816 10.092 25.0717 10.3961C24.5296 9.77282 23.8093 9.33108 23.008 9.13059C22.2067 8.9301 21.3632 8.98054 20.5915 9.27507C19.8199 9.5696 19.1573 10.094 18.6933 10.7774C18.2294 11.4608 17.9866 12.2702 17.9977 13.0961V13.9961C16.416 14.0371 14.8488 13.6863 13.4356 12.975C12.0223 12.2636 10.8069 11.2138 9.89766 9.91906C9.89766 9.91906 6.29766 18.0191 14.3977 21.6191C12.5441 22.8772 10.3361 23.5081 8.09766 23.4191C16.1977 27.9191 26.0977 23.4191 26.0977 13.0691C26.0968 12.8184 26.0727 12.5683 26.0257 12.3221C26.9442 11.4162 27.5924 10.2725 27.8977 9.01906V9.01906Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        <defs>
                            <clipPath id="clip0_202_354">
                            <rect width="21.6" height="21.6" fill="var(--svg-header)" transform="translate(7.19922 6.31909)"/>
                            </clipPath>
                        </defs>
                </svg>
              </a>
                  </div>
            </ul>

            </div>
  </div>
</template>

<script lang="ts">
import './style.scss';
import { defineComponent, ref } from 'vue';
import burger from 'src/widgets/mainHeader/burger/ui/burger.vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
export default defineComponent({
  components: {
    burger,
    Popup,
  },
  setup() {
    const isOpen = ref(false);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };


    return {
      isOpen,
      toggleDropdown,
    };
  },
});
</script>

<style>

.langg a{
    display: inline-block;
    color:black;
    font-size: 16px;
}

.langg {
    margin: 4rem 0;
}

</style>
