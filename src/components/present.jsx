import { useEffect, useState } from "react";


export default function Present({ present }) {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  

  useEffect(() => {
    // Verifica si el objeto present existe y no está vacío
    if (present && Object.keys(present).length > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); 
    } else {
      setIsVisible(false);
    }
 }, [present]);
 
  useEffect(() => {
    if (isVisible) {
      const button = document.getElementById('btn-promo');
      if (button) {
        button.click(); // Simula un clic en el botón
      }
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
       
         
        <li className={`list-inline-item list_s  `}>
          <a
            href="#"
            id="btn-promo"
            className="btn "
            data-bs-toggle="modal"
            data-bs-target=".bd-example-modal-lg"
          >
            <span className={`present `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-gift-fill" viewBox="0 0 16 16">
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z"/>
              </svg>
            </span>
          </a>
        </li>
        
      )}
    </>
  );
}
