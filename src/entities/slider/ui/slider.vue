<template>
        <div class="slider__pannel">
          <div class="slider__pannel-image">
            <img class="slider__image" src="/images/testimonials/pannel-img.png" alt="Testimonial Panel Image">
            <div class="slider__pannel-title-block">
                <div lng="testimonials_pannel_title3" class="slider__pannel-title-text">Angel Rose</div>
                <div class="slider__pannel-subtitle-text" lng="testimonials_pannel_subtitle3" >Creative Manager</div>
            </div>
          </div>
          <p  class="slider__text" lng="testimonials_text3">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
        </div>
 

</template>


<style lang="scss" scoped>
@import './style.scss';


  .slider__pannel{
    display: block;
    grid-template-columns: repeat(2, 1fr);
    
    max-width: 400px;
    margin: auto;
    
    padding: 2rem 2rem 2rem 3rem;

    text-align: left;

    background-color: var(--testimonil-card-bk);
    border:1px solid var(--testimonil-card-border);
    border-radius: 1rem;
 }

  .slider__pannel-image{
    display: flex;
    flex-direction: row;
    gap:2.2rem;
    margin:0.2rem 0 2rem;
    object-fit: none;
   }
  
   .slider__image{
      object-fit: none;
     }
   
   
   .slider__pannel-title-block{
    margin:1rem 0;
    
    text-align: left;
   }
  
   .slider__pannel-title-text{
      @include font-styles('Quicksand',600, 1.25rem, 2.125rem, var(--light-blue));
   }
  
   .slider__text{
      @include font-styles('Quicksand',400, 1.125rem, 1.75rem, var(--description-light));
   }
  
   .slider__pannel-subtitle-text{
      @include font-styles('Quicksand',400, .6875rem, 2.125rem, var(--description-light));
   }

    
    @media(min-width:#{$br-tablet}px) {
        .slider__pannel-title-text{
            @include font-styles('Quicksand',600, 1.25rem, 2.125rem, var(--light-blue));
         }
        
         .slider__text{
            @include font-styles('Quicksand',400, 1.125rem, 1.75rem, var(--description-light));
         }
        
         .slider__pannel-subtitle-text{
            @include font-styles('Quicksand',400, .6875rem, 2.125rem, var(--description-light));
         }
    }
    
    @media(min-width:#{$br-desktop}px){
        .slider__pannel-image{
            margin: 1rem 0 0.1rem;
        }

        
      }

</style>
