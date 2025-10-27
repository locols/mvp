import './App.css'
import { Analytics } from "@vercel/analytics/next"
 
function App() {
  return (
    <>
      <div id="row">
        <div className="row-item item-1">
          <div>
            <h1>Join now our waitlist</h1>
            <p>Buy access to our waitlist to get early access, perks, and updates to our product.</p>
          </div>
          <div>
            <p><b>$20</b></p>
            <button>Coming soon</button> 
          </div>
        </div>
        <div className="row-item"></div>
        <div className="row-item item-2">
          <h2>Nurture your ideas</h2>
          <p>Collaborate towards the future we want to exist <br />Allocate funds to those who are building this future</p>
        </div>
      </div>

      <div id="row"></div>

      <div id="row">
        <div className="row-item item-3">
          <p>
            Locol is a communication platform built for early-stage products, 
            where we help teams create what they want to exist while removing external factors and distractions, 
            by providing a place where they’ll be able to build publicly alongside their users and 
            let them easily bootstrap capital and early users. 
          </p>
          <div className="links">
            <a href="https://locol.garden">→ locol.garden</a>
            <a href="https://x.com/locolised">→ x.com/locolised</a>
          </div>
        </div>
        <div className="row-item item-4">
        <p>
          Jam is the founder of Locol, who has previously worked as a designer. 
          With his several years of design experience he had the opportunity to have work with a variety of startups
          who focused on things such as automation software, crypto, and artificial intelligence.
        </p>
            <a href="https://locol.garden">→ x.com/consistncy</a>
        </div>
      </div>
      
      <img src="../src/assets/uh.png" alt="" />
    </>
  )
}

 export default App;