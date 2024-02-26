$.fn.tabsBlock = function(){
    return this.each(function(){
        var $this = $(this),
            tabTitle = $this.find('.tabs-title li'),
            tabBlocks = $this.find('.tabs-block .tabs-b'),
            tabActive = 'active';

        tabTitle.on('click', onTabClick);

        function onTabClick(event){
            var target = $(event.target).closest('li'),
                index = target.index();

            tabTitle.removeClass(tabActive);
            target.addClass(tabActive);

            tabBlocks.removeClass(tabActive).eq(index).addClass(tabActive);
        }
    });
}

$(function(){
	$('.tab_block_product').tabsBlock();
    $('.tab_block_contacts').tabsBlock();

	var $body = $(document.body),
      	$html = $(document.documentElement);

    function formPopup($btn,$wrap){

    var closeForm = $('.formExtraWrapper .close-form'),
            formWrap = $($wrap),
            formBtn = $($btn),
            formOpened = 'opened',
            overflowHidden = 'oveflowHidden';

        closeForm.on('click', function() {
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
        });
        formBtn.on('click', function(event) {
            formWrap.addClass(formOpened);
            $html.toggleClass(overflowHidden);
            event.preventDefault();
        });

        $html.on('keyup', function(event) {
            if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
        $body.on('click touchstart', function(a) {
            if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
            if (formWrap.hasClass(formOpened)) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
    }

	formPopup('.form_btn','.form_popup');

    var menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });
});

const cityBtn = document.querySelector('.city_block .name');
if(cityBtn){
    cityBtn.addEventListener('click', function(){
        if(this.closest('.city_block').classList.contains('opened')) {
            this.closest('.city_block').classList.remove('opened');
        } else {
            this.closest('.city_block').classList.add('opened');
        }
    });
}

const soartBtn = document.querySelector('.soart_block .soart_name');
if(soartBtn){
    soartBtn.addEventListener('click', function(){
        if(this.closest('.soart_main').classList.contains('opened')) {
            this.closest('.soart_main').classList.remove('opened');
        } else {
            this.closest('.soart_main').classList.add('opened');
        }
    });
}

const filterBtn = document.querySelector('.filter_btn_mobile');
if(filterBtn){
    filterBtn.addEventListener('click', function(){
        if(this.closest('.filter_panel').classList.contains('opened')) {
            this.closest('.filter_panel').classList.remove('opened');
        } else {
            this.closest('.filter_panel').classList.add('opened');
        }
    });
}

const filterField = document.querySelectorAll('.filter_field_name');

if(filterField){
    filterField.forEach((btn) => {
        btn.addEventListener('click', function(){
            if(this.closest('.filter_field').classList.contains('active')) {
                this.closest('.filter_field').classList.remove('active');
            } else {
                this.closest('.filter_field').classList.add('active');
            }
        });
    });
}

const filterFieldHeandler = document.querySelectorAll('.filter_field label');
const filterResult = document.querySelector('.result_block');

if(filterFieldHeandler){
    filterFieldHeandler.forEach((btn) => {
        btn.addEventListener('click', function(){
            const parent = this.closest('.filter_field');
            const panelInner = document.querySelector('.filter_panel_inner');

            if(parent && panelInner){
                const rectParent = parent.getBoundingClientRect();
                const rectPanelInner = panelInner.getBoundingClientRect();
                const relativeTop = rectParent.top - rectPanelInner.top;

                filterResult.style.top = relativeTop + 'px';
                filterResult.classList.add('show');
            }            
        });
    });
}

const contactLi = document.querySelectorAll('.contacts_select li');
const contactSelect = document.querySelector('.contacts_select_name');

if(contactLi && contactSelect){
    contactSelect.addEventListener('click', function(){
        const parent = this.closest('.contacts_select');

        if(parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            parent.classList.add('active');
        }
    });

    contactLi.forEach((btn) => {
        btn.addEventListener('click', function(){
            const text = this.textContent;
            
            contactSelect.textContent = text;

            if(document.querySelector('.contacts_select').classList.contains('active')) {
                document.querySelector('.contacts_select').classList.remove('active');
            }
        });
    });
}

const paramLi = document.querySelectorAll('.params_size li');

if(paramLi){
    paramLi.forEach((btn) => {
        btn.addEventListener('click', function(){
            const siblings = this.parentNode.children;
            Array.from(siblings).forEach(function (sibling) {
                if (sibling !== this) {
                    sibling.classList.remove('select');
                }
            }, this);
            this.classList.add('select');
        });
    });
}

const cartCheck = document.querySelectorAll('.cart_product .check');

if(cartCheck){
    cartCheck.forEach((btn) => {
        btn.addEventListener('click', function(){
            if(this.closest('.cart_product').classList.contains('active')) {
                this.closest('.cart_product').classList.remove('active');
            } else {
                this.closest('.cart_product').classList.add('active');
            }
        });
    });
}

const newProductsSwiper = new Swiper('.mySwiper_images', {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    effect: "fade",
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    speed: 1000,
    lazy: true
});

const newBrendSwiper = new Swiper('.mySwiper_brend', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loopedSlides: 1,
    navigation: {
        nextEl: '.swiper-brend-next',
        prevEl: '.swiper-brend-prev',
    },
    breakpoints: {
        0: {
            spaceBetween: 10
        },
        768: {
            spaceBetween: 20
        }
    }
});

const newProductsImageSwiper = new Swiper('.mySwiper_product_image', {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 1,
    navigation: {
        nextEl: '.swiper-image-next',
        prevEl: '.swiper-image-prev',
    },
    speed: 1000,
    lazy: true
});
