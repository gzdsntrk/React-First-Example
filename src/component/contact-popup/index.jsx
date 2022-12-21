import React from 'react'

function ContactPopup({popupPassiveClick,contactText}) {
    return (
    <>
            <div class="lb"></div>
            <div class="lb-content">
                <div class="lb-title">
                    {contactText}
                </div>
                <div class="lb-form">
                    <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Surname" />
                            <textarea placeholder="Message"></textarea>
                            <button>Submit</button>


                        </div>
                        <span class="close" onClick={()=>popupPassiveClick()}>X</span>
                </div>
            </>
            )
}

            export default ContactPopup