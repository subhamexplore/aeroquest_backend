exports.ContactHtml = (fname, lname, email, message) => {
  return `     <div
          class="container p-5"
          style="padding: 0px 0px; text-align: justify;line-height: 25px;"
        >
            <div style="display: flex; align-items: center;">
                <div style="font-weight: 600">First Name:</div>
                <div style="font-weight: 500; margin-left: 3px;">${fname}</div>
            </div>
            <div style="display: flex; align-items: center;">
                <div style="font-weight: 600">Last Name:</div>
                <div style="font-weight: 500; margin-left: 3px;">${lname}</div>
            </div>
            <div style="display: flex; align-items: center;">
                <div style="font-weight: 600">Email:</div>
                <div style="font-weight: 500; margin-left: 3px;">${email}</div>
            </div>
            <div style="display: flex; align-items: center;">
                <div style="font-weight: 600">Message:</div>
                <div style="font-weight: 500; margin-left: 3px;">${message}</div>
            </div>
        </div>`;
};
