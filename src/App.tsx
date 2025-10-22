import React, { useState } from "react";

// --- STYLES ---
// We create a simple component to hold all our styles in a <style> tag.
// This includes the body styles (from index.css) and component styles (from App.css).
const AppStyles: React.FC = () => (
  <style>{`
    /* Global Styles (from index.css) */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

    body {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* background-color: #1a221f; */ /* Darker green background from image */
      background: radial-gradient(ellipse at center, #2a322f 0%, #1a221f 70%, #1a221f 100%); /* New gradient background */
      display: grid;
      place-items: center;
      min-height: 100vh;
      padding: 20px;
      box-sizing: border-box;
      color: #e0e0e0; /* Lighter text for dark background */
    }

    /* Animation for the pledge text */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Component Styles (from App.css) */
    .pledge-card {
      background-color: #2b3a35; /* Dark card background */
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* More prominent shadow */
      padding: 40px;
      max-width: 600px;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #4a5c55; /* Subtle border */
    }

    .pledge-card h1 {
      font-size: 2.5rem;
      font-weight: 900;
      color: #90ee90; /* Lighter green for main heading */
      margin-top: 0;
      margin-bottom: 8px;
    }

    .pledge-card .subtitle {
      font-size: 1.1rem;
      color: #a0c2a0; /* Lighter green for subtitle */
      margin-top: 0;
      margin-bottom: 30px;
    }

    .pledge-display {
      margin: 30px 0;
    }

    #pledge-text {
      font-size: 1.5rem;
      font-weight: 500;
      color: #c0fcc0; /* Bright green for pledge text */
      line-height: 1.6;
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* Apply the animation */
      animation: fadeIn 0.5s ease-out;
    }

    .helper-text {
      font-size: 0.9rem;
      color: #88a888; /* Muted green for helper text */
      margin-bottom: 30px;
    }

    .button-group {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 35px;
      flex-wrap: wrap;
    }

    .button-group button {
      background-color: #4a5c55; /* Dark green button */
      color: #d0fcd0; /* Light green text */
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      font-size: 1rem;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    }

    .button-group button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      background-color: #5b7067; /* Slightly lighter on hover */
    }

    .button-group button:active {
      transform: translateY(0);
      background-color: #3f4f48; /* Slightly darker on active */
    }

    .footer-text {
      font-size: 0.85rem;
      color: #708a70; /* Muted green for footer */
      line-height: 1.5;
    }

    .footer-link {
      color: #90ee90; /* Use the bright heading color for the link */
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .footer-link:hover {
      color: #c0fcc0; /* Use the pledge text color on hover */
      text-decoration: underline;
    }
  `}</style>
);

// --- PLEDGE DATA ---
const PLEDGES: string[] = [
  "“I commit to a ritual of growth and community empowerment.”",
  "“Today I take a ritualized stance for integrity and compassion.”",
  "“I pledge to engage in a ritual of kindness, every day.”",
  "“My path is ritualized by service, honesty, and connection.”",
  "“I affirm a ritual of awareness and mindful action.”",
  "“I dedicate myself to a ritualized journey of respect and collaboration.”",
  "“This pledge is my ritual to uplift others and build trust.”",
  "“I embrace a ritualized practice of learning and sharing.”",
  "“I vow to a ritual of accountability and generosity.”",
  "“My commitment: a ritualized effort toward positive change.”",
  "“I enter into a ritual that honors transparency and goodwill.”",
  "“I adopt a ritualized promise to seek truth and assist others.”",
  "“This is my ritual of solidarity, strength, and authenticity.”",
  "“I take part in a ritualized dedication to collective well-being.”",
  "“I stand in a ritual of purpose, unity, and empowerment.”",
  "“I pledge a ritualized devotion to community, respect, and growth.”",
  "“My ritual: act with integrity, inspire others, and nurture trust.”",
  "“I commence a ritualized commitment to fairness, courage, and kindness.”",
  "“I promise a ritual of action, empathy, and lasting impact.”",
  "“This pledge marks a ritualized step toward shared progress and hope.”",
];

// Helper function to get a random pledge
const getRandomPledge = (): string => {
  const randomIndex = Math.floor(Math.random() * PLEDGES.length);
  return PLEDGES[randomIndex];
};

// --- APP COMPONENT ---
const App: React.FC = () => {
  const [currentPledge, setCurrentPledge] = useState<string>(getRandomPledge());
  // We add a 'key' state to force React to re-render the text element, triggering the animation
  const [pledgeKey, setPledgeKey] = useState(0);

  const handleRefresh = () => {
    let newPledge = getRandomPledge();
    // Ensure the new pledge is different from the current one
    while (newPledge === currentPledge && PLEDGES.length > 1) {
      newPledge = getRandomPledge();
    }
    setCurrentPledge(newPledge);
    // Increment the key to trigger the re-render and animation
    setPledgeKey((prevKey) => prevKey + 1);
  };

  const handlePostToX = () => {
    const tweetText = `${currentPledge} 🌿 #RitualPledge`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* This component injects all the styles */}
      <AppStyles />

      {/* This is the main UI card */}
      <div className="pledge-card">
        <h1>Take the Ritual Pledge</h1>
        <p className="subtitle">Make your mark. Stand with the ritual.</p>

        <div className="pledge-display">
          {/* We apply the 'key' prop here */}
          <p id="pledge-text" key={pledgeKey}>
            {currentPledge} 🌿
          </p>
        </div>

        <p className="helper-text">
          (Not satisfied? Refresh to find your ritual.)
        </p>

        <div className="button-group">
          <button onClick={handleRefresh}>Refresh Pledge</button>
          <button onClick={handlePostToX}>Ready to Post on X</button>
        </div>

        <p className="footer-text">
          Built for the Ritual community. No gimmicks; just purpose.
          <br />
          Crafted with conviction by{" "}
          <a
            href="https://x.com/MohdSarim0"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            @MohdSarim0{" "}
          </a>
          • Discord: sarimbby
        </p>
      </div>
    </>
  );
};

export default App;
