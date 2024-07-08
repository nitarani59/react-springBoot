import "./Home.css"
function Home() {
    return (
        <div>
            <h1 className= "title">Offering every tool you need to efficiently format, transform, and clean your data with ease.</h1>
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div class="card" style={{ width: '20rem', height: '20rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Json Formatter</h5>
                            <p class="card-text">Offering a user-friendly interface to enhance productivity and accuracy in handling JSON datasets.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div class="card" style={{ width: '20rem', height: '20rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Remove Space</h5>
                            <p class="card-text">Streamlined page layout that eliminates unnecessary whitespace and condenses content into a single line for enhanced readability and efficiency.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div class="card" style={{ width: '20rem', height: '20rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Convert Case</h5>
                            <p class="card-text">Offering a streamlined case converter tool for instant text transformation between uppercase, lowercase, title case, sentence case, and invert case formats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;