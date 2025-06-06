<template>    
<footer class="footer">
    <div class="footer__container">
        <div class="footer__logo-top">
            <div class="footer__top">

                    <FooterLogo/>
                
            </div>
            <div class="footer__body">
                <div v-for="section in footerBodyList" :key="section.title" class="footer__column">
                    <div>{{ section.title }}</div>
                    <div v-for="item in section.items" :key="item.label">
                        <q-btn class='footer__q-btn'
                            stretch
                            flat 
                            :label="item.label"
                            :to="item.link"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__img-box">
            <div class="footer__img-block">
                <a href="/project">
                    <img class="fade-in" src="/images/footer/facebook.svg" alt="Facebook">
                </a>
                <a href="/project">
                    <img class="fade-in" src="/images/footer/insta.svg" alt="Instagram">
                </a>
                <a href="/project">
                    <img class="fade-in" src="/images/footer/in.svg" alt="LinkedIn">
                </a>
                <a href="/project">
                    <img class="fade-in" src="/images/footer/mail.svg" alt="Mail">
                </a>
                <a href="/project">
                    <img class="fade-in" src="/images/footer/twitter.svg" alt="Twitter">
                </a>
            </div>
        </div>

        <div class="footer__img-box-text">
            <p class="footer__text fade-in">Copyright &copy; 2022 Agency Creative. All Rights Reserved.</p>
        </div>
    </div>
</footer>
</template>

<script setup lang="ts">
import './style.scss';


import { footerBodyList } from '../config/config';
import FooterLogo from 'src/widgets/mainFooter/footerLogo/ui/FooterLogo.vue';
</script>