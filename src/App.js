import './App.css';

import Records from './src/Records.json';

function App() {
    return (
        <div className=" App ">
            <br />
            <div>

                <amp-story standalone>

                    <amp-story-page id="cover-1">

                        <amp-story-grid-layer template="fill">
                            <amp-img animate-in="drop" src={record.icon} width="1080px" height="1920px" layout="responsive"></amp-img>

                        </amp-story-grid-layer>

                        <amp-story-grid-layer template="thirds">
                            <div grid-area="upper-third">
                                <h1 animate-in="drop" style="color: white;">Flowers</h1>
                                <p style="color:dark-black;"><b>Today , we are exploring different types of flowers.</b></p>
                            </div>
                        </amp-story-grid-layer>

                    </amp-story-page>

 

                    <amp-story-page id="cover-2" style="background-color: lightcoral;">
                        <amp-story-grid-layer template="vertical">
                            <div>
                                <h2 animate-in="drop">Different Types of Flowers</h2>
                                <br />
                                <div style="margin-top: 2px; margin-bottom:2px;">
                                    <h3 animate-in="fade-in">Aconite</h3>

                                    <p animate-in="fade-in">Aconite flowers are also known as winter aconite. They spread easily and
                                        can be planted as
                                        tubers or seeds. Aconite is often found growing in patches and is spring’s first flower.</p>
                                    <button><a href="https://www.flowerglossary.com/types-of-flowers/">See More</a></button>
                                </div>

                                <br />

                                <div style="margin-top: 2px; margin-bottom:2px;">
                                    <h3 animate-in="fade-in">Begonia</h3>

                                    <p animate-in="fade-in">Begonia is an easy-to-grow flower that does great in many different
                                        conditions. They come in
                                        many different shapes, sizes, and colors. It’s a perennial plant.

                                        Plant in full sun or partial shade.
                                        Needs well-drained soil.
                                        Blooms in late spring to early fall.</p>
                                    <button><a href="https://www.flowerglossary.com/types-of-flowers/">See More</a></button>
                                </div>

                                <br />

                                <div style="margin-top: 2px; margin-bottom:2px;">
                                    <h3 animate-in="fade-in">Bellflower plant</h3>

                                    <p animate-in="fade-in">Bellflowers are known for their resemblance to bells and are also called
                                        Campanula. These
                                        flowers come in many sizes and varieties.</p>
                                    <button><a href="https://www.flowerglossary.com/types-of-flowers/">See More</a></button>
                                </div>

                            </div>




                        </amp-story-grid-layer>
                    </amp-story-page>


                    <amp-story-page id="cover-3">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="./img/11.png" width="1080px" height="1920px" layout="responsive"></amp-img>
                        </amp-story-grid-layer>

                        <amp-story-grid-layer template="thirds">
                            <div grid-area="upper-third">
                                <h1 animate-in="fade-in" style="color: white;">Dahlia </h1>
                                <p animate-in="whoosh-in-left" style="color:dark-black;"><b>It is a popular tubular flower that has
                                    42 different species and
                                    grows in a variety of bright colors.
                                    Its native to Central America and Mexico and grows from small tubers.</b></p>

                            </div>


                        </amp-story-grid-layer>
                    </amp-story-page>


                    <amp-story-page id="cover-4">

                        <amp-story-grid-layer template="fill" class="noedge">
                            <div class="wrapper">
                                <amp-img src="./img/13.png" animate-in="fade-in" width="1080px" height="1920px" layout="responsive"
                                    alt="...">
                                </amp-img>

                            </div>
                        </amp-story-grid-layer>

                        <amp-story-grid-layer template="thirds">
                            <div grid-area="lower-third">
                                <h1 animate-in="drop" style="color: white;">Beauty of Flowers</h1>
                            </div>
                        </amp-story-grid-layer>


                    </amp-story-page>


                    <amp-story-page id="cover-5">

                        <amp-story-grid-layer template="fill" class="noedge">
                            <div class="wrapper">
                                <amp-img src="./img/12.png" animate-in="fade-in" width="1080px" height="1920px" layout="responsive"
                                    alt="...">
                                </amp-img>

                            </div>
                        </amp-story-grid-layer>

                        <amp-story-grid-layer template="thirds">
                            <div grid-area="upper-third">
                                <h1 animate-in="rotate-in-right" style="color: black;">Daisy</h1>
                                <p animate-in="fade-in"><b>Is an easy to grow flower that is instantly recognizable.
                                    Brightly-colored Gerbera daisies are our absolute favorites, but there are numerous other types of daisies.</b></p>
                                <p>
                                    <b>
                                        <ul>
                                            <li>Plant in full sun.</li>
                                            <li>Needs well-drained soil.</li>
                                            <li>Blooms in mid-summer to early fall.</li>
                                        </ul>
                                    </b>
                                </p>

                                <h3><a href="https://www.flowerglossary.com/types-of-flowers/#Daffodil">To know More</a></h3>
                            </div>
                        </amp-story-grid-layer>


                    </amp-story-page>


                </amp-story>
            </div>



            <br />

            <div className="inner">
                {
                    Records && Records.map(record => {
                        return (
                            <div className="box" key={record.id}>
                                <img src="{ record.icon}" />

                                <br />

                                {record.caption}

                            </div>)
                    })
                }
            </div>

            <br />

        </div>
    )
}

export default App;