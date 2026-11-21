import React from 'react';

const ICONS_CSS = `
.icons-container {
  position: fixed;
  bottom: 20px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.custom-icon, .whatsapp-icon { font-size: 32px; cursor: pointer; }
.custom-icon { color: #007bff; margin-left: 20px; }
.custom-icon:hover {
  box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.2);
  transition: 0.3s ease-in;
  transform: translateY(-8px);
}
.whatsapp-icon { margin-right: 20px; }
.whatsapp-icon:hover { transition: 0.3s ease-in; transform: translateY(-8px); }
.fa.fa-whatsapp {
  font-family: 'Font Awesome 5 Brands'; font-weight: 400;
  background-color: #25D366; color: #fff; border-radius: 24px; padding: 10px;
}
.google-icon { padding-bottom: 16px; }
.google-icon:hover { transition: 0.3s ease-in; transform: translateY(-8px); }
@media (max-width: 768px) {
  .google-icon { display: block; margin-left: 10px; }
  .whatsapp-icon { margin-right: 10px; }
  .custom-icon { display: none; }
}
@media (min-width: 769px) {
  .google-icon { display: none; }
}
`;

export default function FloatingIcons() {
  return (
    <>
      <style>{ICONS_CSS}</style>
      <div className="icons-container">
        <div className="custom-icon">
          <a href="https://www.google.com/search?client=firefox-b-d&q=jellygit#lrd=0x3962fc52eb245fd9:0x89093e6875e7217,1,,,," target="_blank" rel="noreferrer">
            <img src="/img/ratings container.png" alt="google-ratings" />
          </a>
        </div>
        <div className="google-icon">
          <a href="https://www.google.com/search?client=firefox-b-d&q=jellygit#lrd=0x3962fc52eb245fd9:0x89093e6875e7217,1,,,," target="_blank" rel="noreferrer">
            <img src="/img/googleicon.png" alt="google-icon" />
          </a>
        </div>
      </div>
    </>
  );
}
