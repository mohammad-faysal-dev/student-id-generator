document.addEventListener('DOMContentLoaded', () => {
    // Select inputs
    const inputs = {
        name: document.getElementById('name'),
        id: document.getElementById('student-id'),
        class: document.getElementById('class-grade'),
        section: document.getElementById('section'),
        blood: document.getElementById('blood-group'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email'),
        dob: document.getElementById('dob'),
        father: document.getElementById('father-name'),
        mother: document.getElementById('mother-name'),
        issue: document.getElementById('issue-date'),
        expiry: document.getElementById('expiry-date'),
        schoolName: document.getElementById('school-name'),
        schoolAddress: document.getElementById('school-address'),
        schoolPhone: document.getElementById('school-phone'),
        profilePic: document.getElementById('profile-pic')
    };
    
    // Select preview elements
    const views = {
        name: document.getElementById('view-name'),
        id: document.getElementById('view-id'),
        class: document.getElementById('view-class'),
        section: document.getElementById('view-section'),
        blood: document.getElementById('view-blood'),
        phone: document.getElementById('view-phone'),
        email: document.getElementById('view-email'),
        dob: document.getElementById('view-dob'),
        father: document.getElementById('view-father'),
        mother: document.getElementById('view-mother'),
        dates: document.getElementById('view-dates'),
        previewImg: document.getElementById('preview-img'),
        backSchoolName: document.getElementById('back-school-name'),
        backSchoolAddress: document.getElementById('back-school-address'),
        backSchoolPhone: document.getElementById('back-school-phone')
    };

    // Helper to format date
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-GB').replace(/\//g, '-'); // DD-MM-YYYY
    };

    const formatShortDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return (d.getMonth() + 1).toString().padStart(2, '0') + '/' + d.getFullYear(); // MM/YYYY
    };

    const updateValidity = () => {
        const issue = formatShortDate(inputs.issue.value);
        const expiry = formatShortDate(inputs.expiry.value);
        views.dates.textContent = (issue || 'MM/YYYY') + ' - ' + (expiry || 'MM/YYYY');
    };

    // Live update functions
    inputs.name.addEventListener('input', (e) => views.name.textContent = e.target.value || 'JOHN SMITH');
    inputs.id.addEventListener('input', (e) => views.id.textContent = (e.target.value || '0000000000'));
    inputs.class.addEventListener('input', (e) => views.class.textContent = (e.target.value || 'Grade 10'));
    inputs.section.addEventListener('input', (e) => views.section.textContent = (e.target.value || 'Blue'));
    inputs.blood.addEventListener('input', (e) => views.blood.textContent = (e.target.value || 'B+'));
    inputs.phone.addEventListener('input', (e) => views.phone.textContent = (e.target.value || '+000-123-456-789'));
    inputs.email.addEventListener('input', (e) => views.email.textContent = (e.target.value || 'john@example.com'));
    inputs.dob.addEventListener('input', (e) => views.dob.textContent = (formatDate(e.target.value) || '01-01-2010'));
    inputs.father.addEventListener('input', (e) => views.father.textContent = (e.target.value || 'Robert Smith'));
    inputs.mother.addEventListener('input', (e) => views.mother.textContent = (e.target.value || 'Maria Smith'));
    
    inputs.issue.addEventListener('input', updateValidity);
    inputs.expiry.addEventListener('input', updateValidity);

    inputs.schoolName.addEventListener('input', (e) => {
        const val = e.target.value || 'School Name';
        views.backSchoolName.textContent = val;
        document.getElementById('front-school-name').textContent = val;
    });
    inputs.schoolAddress.addEventListener('input', (e) => {
        const val = e.target.value || 'Address Line 1, City';
        views.backSchoolAddress.textContent = val;
        document.getElementById('front-school-address').textContent = val;
    });
    inputs.schoolPhone.addEventListener('input', (e) => views.backSchoolPhone.textContent = 'Phone: ' + (e.target.value || '+000-000-000'));

    // Profile picture upload
    inputs.profilePic.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                views.previewImg.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Download functionality (Simulated)
    document.getElementById('download-btn').addEventListener('click', () => {
        alert('Downloading Premium Student ID Card...');
    });
});
