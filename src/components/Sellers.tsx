import React from 'react'

const Sellers: React.FC = () => {

    return (
        <div>
            
            <div className="container">

                <h2 className="headline-md section-title text-center" id="sellers-label">Best Creators & Sellers</h2>

                <ul className="grid-list">

                    <li>
                        <div className="flex items-center gap-3 p-3">


                            <figure className="card-banner">
                                {/* <img src="./assets/images/avatar-1.jpg" width="64" height="64" loading="lazy"
                                    alt="Steven Townsend profile" /> */}

                                {/* <ion-icon name="checkmark-circle"></ion-icon> */}
                            </figure>

                            <div className="card-title-wrapper">
                                <h3 className="title-sm">
                                    <a href="#" className="link:hover">Steven Townsend</a>
                                </h3>

                                <p className="user-name label-md">@StreetBoy</p>
                            </div>

                            <button className="btn-icon outline" aria-label="Hire Steven Townsend">
                                {/* <ion-icon name="person-add-outline" aria-hidden="true"></ion-icon> */}
                            </button>

                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Sellers


// .seller-card {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     padding: 12px;
//   }
  
//   .seller-card .card-banner {
//     position: relative;
//     background-color: var(--oxford-blue);
//   }
  
//   .seller-card .card-banner img { border-radius: inherit; }
  
//   .seller-card .card-banner ion-icon {
//     position: absolute;
//     top: -4px;
//     right: -8px;
//     font-size: 2rem;
//     color: var(--green-cyan);
//   }
  
//   .seller-card .user-name { margin-block-start: 2px; }
  
//   .seller-card .btn-icon {
//     flex-shrink: 0;
//     margin-inline-start: auto;
//     border: 1px solid var(--blue-violet_a10);
//     background-color: var(--bg, var(--blue-violet_a5));
//     color: var(--color, var(--blue-violet));
//     transition: var(--transition-1);
//   }
  
//   .seller-card .btn-icon ion-icon {
//     color: var(--color);
//     --ionicon-stroke-width: 55px;
//   }
  
//   .seller-card .btn-icon:is(:hover, :focus-visible) {
//     --bg: var(--blue-violet);
//     --color: var(--white);
//   }
  
