
        const input = document.getElementById('barcode-scanner');
        const saveBtn = document.getElementById('barcode-save-btn')
        input.addEventListener('input', ev => {
            if(ev.target.value !== '')
                saveBtn.classList.remove('disabled');
            else
                saveBtn.classList.add('disabled');
        });