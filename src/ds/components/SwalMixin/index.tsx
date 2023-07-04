import Swal from 'sweetalert2';

const SwalMixin = Swal.mixin({
    customClass: {
        title: 'my-swal-title',
        container: 'my-swal-container',
        confirmButton: 'my-swal-confirm-button',
        cancelButton: 'my-swal-cancel-button',
    },
});

export default SwalMixin;