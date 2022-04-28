import react from 'react';
import './App.css';
function App() {
    return (
        <div>
          <nav class="navbar background">
          <ul class="nav-list">
            <div class="logo"
                <img src="https://image.shutterstock.com/image-vector/vector-logo-concept-book-club-600w-1643005387.jpg"/>
                  </div>
                    <li><a href=#"https://reedsy.com/discovery/book/black-thumb-greenhouse-how-to-take-your-self-sufficient-homestead-from-dream-to-reality-an-introduction-to-greenhouse-gardening-even-cactus-killers-can-complete-jd-isaly">first weeks book</a></li>
                    <li><a href=#"https://reedsy.com/discovery/book/the-book-of-briars-c-j-bernstein">second weeks book</a></li>
                    <li><a href=#"https://reedsy.com/discovery/book/annabel-pickering-and-the-sky-pirates-the-fantastical-contraption-bretigne-shaffer">third weeks book</a></li>
                    </ul>

<div class="rightNav">
     <input type="text" name="search" id="search" />
       <button class="btn btn-sm">Search</button>
          </div>
          </nav>

          <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                          The most exclusive bookclub in town where we read all fantasy books weekly and discuss it at the end of the week.
                        </h1>
                        <p>
                        This book club will bring an amazing feel to this new e-book reading society.We will experience adventures through reading these physical books. 
                        </p>
                        </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                          The weekly plan
                        </h1>
                        <p>
                          First week we'll pick one lady to read for us , then at the end of the week we get a weekly review of everyone's opinion.
                          Second week we'll pick another club member to read the second weeks book so we can review it by the end of the week , and so on.
                        </p>
                        </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  export default