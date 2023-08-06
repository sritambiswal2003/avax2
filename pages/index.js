// Import statements remain the same

export default function HomePage() {
  // State and other functions remain the same

  return (
    <main className="container">
      <header>
        <img src="header_image.png" alt="Header" className="header-image" />
        <h1 className="header-title">Welcome to the Ashish Store</h1>
      </header>
      <div className="content">
        <div className="box">{initUser()}</div>
      </div>
      <style jsx>{`
        /* Other styles remain the same */

        /* New styles for the header */
        .header-image {
          max-width: 100%;
          height: auto;
        }

        .header-title {
          text-align: center;
          font-family: "Arial", sans-serif;
          font-size: 24px;
          margin: 10px 0;
          color: #333;
        }

        /* Update button and input styles */
        .connect-button,
        .deposit-button,
        .withdraw-button {
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .connect-button {
          background-color: #3a7bd5;
          color: #fff;
        }

        .connect-button:hover {
          background-color: #2765b0;
        }

        .deposit-button {
          background-color: #27ae60;
          color: #fff;
        }

        .deposit-button:hover {
          background-color: #1f8d4e;
        }

        .withdraw-button {
          background-color: #e74c3c;
          color: #fff;
        }

        .withdraw-button:hover {
          background-color: #c93226;
        }

        /* Update input styles */
        input {
          padding: 8px;
          border: 2px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
      `}</style>
    </main>
  );
}
