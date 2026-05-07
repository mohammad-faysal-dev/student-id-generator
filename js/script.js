document.addEventListener('DOMContentLoaded', () => {
    // Select inputs
    const nameInput = document.getElementById('name');
    const designationInput = document.getElementById('designation');
    const idInput = document.getElementById('student-id');
    const bloodInput = document.getElementById('blood-group');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    const profilePicInput = document.getElementById('profile-pic');
    
    // Select preview elements
    const viewName = document.getElementById('view-name');
    const viewDesignation = document.getElementById('view-designation');
    const viewId = document.getElementById('view-id');
    const viewBlood = document.getElementById('view-blood');
    const viewPhone = document.getElementById('view-phone');
    const viewEmail = document.getElementById('view-email');
    const viewAddress = document.getElementById('view-address');
    const previewImg = document.getElementById('preview-img');
    const backEmail = document.getElementById('back-email');
    const backPhone = document.getElementById('back-phone');

    // Live update functions
    nameInput.addEventListener('input', (e) => {
        viewName.textContent = e.target.value || 'JOHN SMITH';
    });

    designationInput.addEventListener('input', (e) => {
        viewDesignation.textContent = e.target.value || 'Graphics Designer';
    });

    idInput.addEventListener('input', (e) => {
        viewId.textContent = ': ' + (e.target.value || '0000000000');
    });

    bloodInput.addEventListener('input', (e) => {
        viewBlood.textContent = ': ' + (e.target.value || 'B+');
    });

    phoneInput.addEventListener('input', (e) => {
        const val = e.target.value || '+000-123-456-789';
        viewPhone.textContent = ': ' + val;
        backPhone.textContent = val;
    });

    emailInput.addEventListener('input', (e) => {
        const val = e.target.value || 'www.yourwebsite.com';
        viewEmail.textContent = ': ' + val;
        backEmail.textContent = val;
    });

    addressInput.addEventListener('input', (e) => {
        viewAddress.textContent = ': ' + (e.target.value || 'xyz Road,cty,country');
    });

    // Profile picture upload
    profilePicInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                previewImg.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Download functionality (Simulated)
    document.getElementById('download-btn').addEventListener('click', () => {
        alert('Downloading ID Card as Image...');
        // In a real implementation, we would use html2canvas or a similar library to capture the div.
    });
});
