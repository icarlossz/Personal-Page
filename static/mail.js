const $contactForm = $('#Form')
const $alertContainer = $('.alertify-notifier')

$contactForm.submit((e) => {
	e.preventDefault()
	$.ajax({
		url: '//formspree.io/carlosszgreen@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		datatype: 'json',
		beforeSend: () => {
			console.log('Sending message')
			alertify.notify('Sending message...', 'warning', 5)
		},
		success: (data) => {
			$('.ajs-message').remove()
			alertify.notify('Message sent!', 'success', 5)
		},
		error: (err) => {
			$('.ajs-message').remove()
			alertify.notify('Ops, there was an error...', 'error', 5)
		}
	})
})
