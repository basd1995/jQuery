$('.tabs>li').on('click', function(){
	var $this = $(this);
	var index = $this.index();
	var $li = $('.panels>li')
	$this.addClass('active').siblings().removeClass('active');
	$li.eq(index).addClass('active').siblings().removeClass('active');
	$('.panels').animate({
		left: 0-$li.width()*index
	})
	console.log(index);
	console.log($('.panels>li').eq(index));
})