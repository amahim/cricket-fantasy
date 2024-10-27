// import './App.css';
// import Header from './Components/Header/Header';
// import Players from './Components/Players/Players';
// import Footer from './Components/Footer/Footer';
// import Selected from './Components/Selected/Selected';
// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [choosePlayer, setChoosePlayer] = useState([]);
//   const [showPlayers, setShowPlayers] = useState(true);
//   const [coin, setCoin] = useState(0);
//   const [deletePlayer, setDeletePlayer] = useState([]);
//   const [claimedCoin, setClaimedCoin] = useState(false);

//   const notify = (name) => {
//     toast.error(
//       <div>
//         <strong>{name}</strong> is already in your squad
//       </div>,
//       {
//         position: "top-center",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//   };

//   const notify1 = (name) => {
//     toast.error(
//       <div>
//         Not enough coins to buy <strong>{name}</strong>
//       </div>, 
//       {
//         position: "top-center",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//   }; 

//   const notify2 = (name) => {
//     toast.success(
//       <div>
//         Congrats! <strong>{name}</strong> have been added to your squad
//       </div>, 
//       {
//         position: "top-center",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//   };

//   const notify3 = () => {
//     toast.error(
//       <div>
//         Your squad is full!
//       </div>, 
//       {
//         position: "top-center",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//   }; 

//   const notify4 = (name) => {
//     toast.error(
//       <div>
//         <strong>{name}</strong> have been removed from your squad
//       </div>, 
//       {
//         position: "top-center",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//   }; 

//   const notify5 = () => {
//     toast.error(
//       <div>
//         You have already claimed free credits
//       </div>, 
//       {
//         position: "top-center",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//   }; 

//   const notify6 = () => {
//     toast.success(
//       <div>
//         Congrats! <strong>20000000</strong> credit have been added to your account
//       </div>,
//       {
//         position: "top-center",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//   };

//   // player dlt from sqd
//   const deletePlayerBtn = (id, name, price) => {
//     const rmvPlayer = choosePlayer.find(players => players.id === id);
//     const updatedSquad = choosePlayer.filter(players => players.id !== id);
//     setChoosePlayer(updatedSquad);
//     setDeletePlayer([...deletePlayer, rmvPlayer]);
//     setCoin(coin + price / 2); // after deleting a player, user can get 50% of his price back
//     notify4(name);
//   };

//   // claim btn
//   const claimBtn = () => {
//     if (!claimedCoin) {
//       setCoin(coin + 20000000);
//       setClaimedCoin(true);
//       notify6();
//     } else {
//       notify5();
//     }
//   };

//   // Choose player button
//   const handleChoosePlayer = (player) => {
//     const alreadyAdded = choosePlayer.find(playerAdded => playerAdded.id === player.id);
//     if (choosePlayer.length >= 6) {
//       notify3();
//     } else if (alreadyAdded) {
//       notify(player.name);
//     } else if (player.price > coin) {
//       notify1(player.name);
//     } else {
//       setChoosePlayer([...choosePlayer, player]);
//       setCoin(coin - player.price);
//       notify2(player.name);
//     }
//   };

//   // toggle btns
//   const showPlayersSection = () => {
//     setShowPlayers(true);
//   };

//   const showSelectedSection = () => {
//     setShowPlayers(false);
//   };

//   return (
//     <>
//       {/* header */}
//       <Header claimBtn={claimBtn} coin={coin} />

//       {/* main */}
//       {showPlayers ? (
//         <Players 
//           handleChoosePlayer={handleChoosePlayer} 
//           choosePlayer={choosePlayer} 
//           showSelectedSection={showSelectedSection}
//           coin={coin}
//         />
//       ) : (
//         <Selected 
//           choosePlayer={choosePlayer} 
//           showPlayersSection={showPlayersSection} 
//           deletePlayerBtn={deletePlayerBtn}
//         />
//       )}

//       {/* footer */}
//       <Footer />
//       <ToastContainer />
//     </>
//   );
// }

// export default App;

import './App.css';
import Header from './Components/Header/Header';
import Players from './Components/Players/Players';
import Footer from './Components/Footer/Footer';
import Selected from './Components/Selected/Selected';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [choosePlayer, setChoosePlayer] = useState(() => {
    const savedPlayers = localStorage.getItem('choosePlayer');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  const [showPlayers, setShowPlayers] = useState(true);
  const [coin, setCoin] = useState(() => {
    const savedCoin = localStorage.getItem('coin');
    return savedCoin ? JSON.parse(savedCoin) : 0;
  });
  
  const [deletePlayer, setDeletePlayer] = useState([]);
  const [claimedCoin, setClaimedCoin] = useState(() => {
    const savedClaimedCoin = localStorage.getItem('claimedCoin');
    return savedClaimedCoin ? JSON.parse(savedClaimedCoin) : false;
  });

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('choosePlayer', JSON.stringify(choosePlayer));
    localStorage.setItem('coin', JSON.stringify(coin));
    localStorage.setItem('claimedCoin', JSON.stringify(claimedCoin));
  }, [choosePlayer, coin, claimedCoin]);

  const notify = (name) => {
    toast.error(
      <div>
        <strong>{name}</strong> is already in your squad
      </div>,
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const notify1 = (name) => {
    toast.error(
      <div>
        Not enough coins to buy <strong>{name}</strong>
      </div>, 
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }; 

  const notify2 = (name) => {
    toast.success(
      <div>
        Congrats! <strong>{name}</strong> have been added to your squad
      </div>, 
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const notify3 = () => {
    toast.error(
      <div>
        Your squad is full!
      </div>, 
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }; 

  const notify4 = (name) => {
    toast.error(
      <div>
        <strong>{name}</strong> have been removed from your squad
      </div>, 
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }; 

  const notify5 = () => {
    toast.error(
      <div>
        You have already claimed free credits
      </div>, 
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }; 

  const notify6 = () => {
    toast.success(
      <div>
        Congrats! <strong>20000000</strong> credit have been added to your account
      </div>,
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  // player dlt from sqd
  const deletePlayerBtn = (id, name, price) => {
    const rmvPlayer = choosePlayer.find(players => players.id === id);
    const updatedSquad = choosePlayer.filter(players => players.id !== id);
    setChoosePlayer(updatedSquad);
    setDeletePlayer([...deletePlayer, rmvPlayer]);
    setCoin(coin + price / 2); // after deleting a player, user can get 50% of his price back
    notify4(name);
  };

  // claim btn
  const claimBtn = () => {
    if (!claimedCoin) {
      setCoin(coin + 20000000);
      setClaimedCoin(true);
      notify6();
    } else {
      notify5();
    }
  };

  // Choose player button
  const handleChoosePlayer = (player) => {
    const alreadyAdded = choosePlayer.find(playerAdded => playerAdded.id === player.id);
    if (choosePlayer.length >= 6) {
      notify3();
    } else if (alreadyAdded) {
      notify(player.name);
    } else if (player.price > coin) {
      notify1(player.name);
    } else {
      setChoosePlayer([...choosePlayer, player]);
      setCoin(coin - player.price);
      notify2(player.name);
    }
  };

  // toggle btns
  const showPlayersSection = () => {
    setShowPlayers(true);
  };

  const showSelectedSection = () => {
    setShowPlayers(false);
  };

  return (
    <>
      {/* header */}
      <Header claimBtn={claimBtn} coin={coin} />

      {/* main */}
      {showPlayers ? (
        <Players 
          handleChoosePlayer={handleChoosePlayer} 
          choosePlayer={choosePlayer} 
          showSelectedSection={showSelectedSection}
          coin={coin}
        />
      ) : (
        <Selected 
          choosePlayer={choosePlayer} 
          showPlayersSection={showPlayersSection} 
          deletePlayerBtn={deletePlayerBtn}
        />
      )}

      {/* footer */}
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;


