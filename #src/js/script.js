@@include('jquery-3.6.0.min.js')
@@include('jquery.validate.min.js')
@@include('swiper-bundle.min.js')
@@include('popup.js')
@@include('swiper.js')

$('.popup__form-callback').validate({
	errorClass: 'invalid',
	messages: {
   	username: "Укажите ваше имя",
		usersurname:"Укажите ваше фамилия",
		userphone:"Укажите ваше номер телефона",
   	usermail: {
		required: "Укажите ваш адрес электронной почты",
		email: "Ваш адрес электронной почты должен быть в формате имя@домен.com"
    	}
  	}  
});

