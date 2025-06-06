<template>
 <div class="servises">
    <div class="servises__text-block fade-in">
        <h2 class="servises__sub-title-text" lng="services_subtitle">Our Services</h2>
        <h2 class="servises__title-text" lng="services_title">Perfect and Fast Movement</h2>
        <p class="servises__text" lng="services_text">
            We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
        </p>
        <div class="read">
            <div class="read__link">
            <a href="/project" lng="services_read" class="servises__read-text">Read More
                <svg width="24" height="24" viewBox="0 0 24 24" fill='var(--pure-white)' xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L21 12L15 6" stroke="var(--light-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 12H20" stroke="var(--light-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12H20" stroke="var(--light-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            </div>
        </div>
    </div>

    <div class="servises__panel-block fade-in">
        <ServicePannel title="Social Media" subtitle="Management" />
        <ServicePannel title="Search Engine" subtitle="Optimization"  img-bk="/images/services/ellipse-red.svg" img-over="/images/services/settings.svg"/>
        <ServicePannel title="Design" img-bk="/images/services/ellipse-green.svg" img-over="/images/services/pen-tool.svg" />
        <ServicePannel title="Ads" img-bk="/images/services/ellipse-yellow.svg" img-over="/images/services/tv.svg" />
    </div>
</div>

</template>

  
<style lang="scss" scoped>
@import './style.scss';
</style>


<script setup lang="ts">
import ServicePannel from "@entities/services-pannel/ui/ServicesPannel.vue";
</script>