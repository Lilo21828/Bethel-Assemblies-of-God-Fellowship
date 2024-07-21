/*Membership Js*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('membershipForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const formData = {
        name: form.name.value,
        surname: form.surname.value,
        phoneNumber: form.phoneNumber.value,
        homeAddress: form.homeAddress.value,
        idNumber: form.idNumber.value,
        occupation: form.occupation.value,
        dateOfBirth: form.dateOfBirth.value,
        gender: form.gender.value,
        maritalStatus: form.maritalStatus.value
      };
  
      fetch('/api/memberships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        displayMemberships();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  
    const displayMemberships = () => {
      fetch('/api/memberships')
        .then(response => response.json())
        .then(data => {
          const membershipsList = document.getElementById('membershipsList');
          membershipsList.innerHTML = '';
          data.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.textContent = `Name: ${member.name}, Surname: ${member.surname}, Phone: ${member.phoneNumber}, Address: ${member.homeAddress}, ID: ${member.idNumber}, Occupation: ${member.occupation}, DOB: ${member.dateOfBirth}, Gender: ${member.gender}, Marital Status: ${member.maritalStatus}`;
            membershipsList.appendChild(memberDiv);
          });
        });
    };
  
    displayMemberships();
  });

  
  /*Ministy JS */

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ministryForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const formData = {
        name: form.name.value,
        surname: form.surname.value,
        branch: form.branch.value,
        occupation: form.occupation.value
      };
  
      fetch('/api/ministries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        displayMinistries();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  
    const displayMinistries = () => {
      fetch('/api/ministries')
        .then(response => response.json())
        .then(data => {
          const ministriesList = document.getElementById('ministriesList');
          ministriesList.innerHTML = '';
          data.forEach(ministry => {
            const ministryDiv = document.createElement('div');
            ministryDiv.textContent = `Name: ${ministry.name}, Surname: ${ministry.surname}, Branch: ${ministry.branch}, Occupation: ${ministry.occupation}`;
            ministriesList.appendChild(ministryDiv);
          });
        });
    };
  
    displayMinistries();
});


/*=============================================================================================*/


        // Function to create sparkle effect
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = `${Math.random() * 100}vw`;
            sparkle.style.top = `${Math.random() * 100}vh`;
            document.querySelector('.sparkles').appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }

        // Create sparkles at intervals
        setInterval(createSparkle, 200);