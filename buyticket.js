var fullName = 'Ngo Minh Dong';
alert('Wellcome' +' '+ fullName);

// <!-- Xử lý buy ticket --> 

        const buyBtns = document.querySelectorAll('.js-buy-ticket');
        const model = document.querySelector('.js-model');
        const modelContainer = document.querySelector('.js-model-container');
        const modelClose = document.querySelector('.model-close');

        // Hàm hiển thị mua vé (thêm class open vào model)
        function showBuyTicket() {
            model.classList.add('open');
        }
        // Hàm ẩn model mua vé (remove class open khỏi model)
        function hideBuyTicket() {
            model.classList.remove('open');
        }

            // Lặp qua từng thẻ button và nghe hành vi click
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTicket);
        }
        // Nghe hành vi click vào button close
        modelClose.addEventListener('click', hideBuyTicket);

        model.addEventListener('click', hideBuyTicket)

        modelContainer.addEventListener('click', function (event) {
            event.stopPropagation();
        })