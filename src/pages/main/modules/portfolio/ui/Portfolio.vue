<template>
<div class="portfolio">
    <div class="portfolio__sub-title-text fade-in" lng="portfolio_subtitle">Our Portfolio</div>
    <div class="portfolio__title-text fade-in" lng="portfolio_title">What do we do</div>
    <p class="portfolio__text fade-in" lng="portfolio_text">
        All projects that we have already done, proven can help to use more comfortably, then can be used by clients from our business.
    </p>
    <div class="portfolio__image-container">
            <img class="portfolio__overlay-image-1" src="/images/portfolio/portfolio-dots.svg">
            <img class="portfolio__overlay-image-2" src="/images/portfolio/portfolio-dots.svg">
    </div>
    <div class="portfolio__image-blocks fade-in">
        <div class="portfolio__image-block">
            <div class="portfolio__image">
                <img class="portfolio__images" src="/images/portfolio/furniture.png" alt="Design Furniture App">
                <div class="portfolio__image-text fade-in">Design Furniture App</div>
            </div>
            
        </div>

        <div class="portfolio__image-block">
            <div class="portfolio__image">
                <img class="portfolio__images" src="/images/portfolio/cloud.png" alt="Cloud App">
                <div class="portfolio__image-text fade-in">Cloud App</div>
            </div>
            
        </div>

        <div class="portfolio__image-block">
            <div class="portfolio__image">
                <img class="portfolio__images" src="/images/portfolio/design.png" alt="Design Byte App">
                <div class="portfolio__image-text fade-in">Design Byte App</div>
            </div>
           
        </div>
    </div>
    <a href="/portfolio">
        <button class="potfolio__button" lng="portfolio_button">See All Portfolio</button>
    </a>
</div>

</template>


<style lang="scss" scoped>
@import './style.scss';
</style>

