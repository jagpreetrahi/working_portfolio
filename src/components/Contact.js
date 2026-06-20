"use client";

import { useState } from "react";

export default function Contact() {
  const [toastVisible, setToastVisible] = useState(false);
  const email = "jagpreet1615@gmail.com";

  function copyEmail() {
    navigator.clipboard?.writeText(email).catch(() => {});
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  }

  return (
    <>
      <section className="section" id="contact">
        <div className="contact-box">
          <h2>Got something worth building?</h2>
          <p>
            I&apos;m open to full-time roles and the occasional freelance
            project that doesn&apos;t involve &quot;just a quick logo
            change.&quot;
          </p>
          <div className="contact-ctas">
            <button className="btn btn-light" onClick={copyEmail}>
              copy my email
            </button>
            <a className="btn btn-outline-light" href="singh_jagpreet_resume.pdf" target="_blank" rel="noreferrer">
              view résumé 
            </a>
          </div>
        </div>
      </section>

      <div className={`copy-toast${toastVisible ? " show" : ""}`}>
        copied: {email}
      </div>
    </>
  );
}
