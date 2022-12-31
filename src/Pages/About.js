import React from 'react'
import "../Styles/About.css"
const About = () => {
  return (
    <div className="About">
      <div className='container'>
        <div className='container-top'>
          <div className='about-images'>
            <div className='left-img'></div>
            <div className='right-img'></div>
          </div>
          <div className='about-details'>
          <h2 className='animate__backInLeft'>About Work</h2>
            <br/>
            <p>
            Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.
            </p>
            <br/>
            <br/>
            <span>He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</span>
          </div>
        </div>
        <div className='container-bottom'>
          <div className='features-1'>
          <i class="fi-cnsux6-map-marker"></i>
          <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          </div>
          <div className='features-2'>
          <i class="fi-cnsux6-smartphone-solid"></i>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          </div>
        </div>
      </div>

      {/* ABOUT TEAM */}
      
      <div className="about-team">
      <h1 className="heading">Our Team</h1>
      <p className="heading-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="card-container">
        <div className="card p-3" style={{backgroundColor: '#E6F2FF'}}>
            <div className='dp kunal-dp mb-5'></div>
            <h3>Kunal Markam</h3>
            <h4 className="designation">Frontend Developer</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
  <table class="table">
    <tbody>
      <tr>
      <th scope="row"><a href='linkedin'><i class="fa-brands fa-linkedin"></i></a></th>
      <td><a href='linkedin'><i class="fa-solid fa-link "></i></a></td>
      <td><a href='linkedin'><i class="fa-solid fa-envelope "></i></a></td>
      <td><a href='linkedin'><i class="fa-brands fa-facebook "></i></a></td>
    </tr>
   
    </tbody>
</table>
{/* 
            <i className="fi-snsuxl-linkedin"></i>
            <i class="fi-xwsuxl-envelope-solid"></i> */}
        </div>
        <div className="card p-3"  style={{backgroundColor: '#E6F2FF'}}>
            <div className='dp rahul-dp mb-5'></div>
            <h3>Rahul Verma</h3>
            <h4 className="designation">Frontend Developer</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            <table class="table">
    <tbody>
      <tr>
      <th scope="row"><a href='linkedin'><i class="fa-brands fa-linkedin"></i></a></th>
      <td><a href='linkedin'><i class="fa-solid fa-link "></i></a></td>
      <td><a href='linkedin'><i class="fa-solid fa-envelope "></i></a></td>
      <td><a href='linkedin'><i class="fa-brands fa-facebook "></i></a></td>
    </tr>
   
    </tbody>
</table>
        </div>
        <div className="card p-3" style={{backgroundColor: '#E6F2FF'}}>
            <div className='dp aarti-dp mb-5'></div>
            <h3>Aarti Verma</h3>
            <h4 className="designation">Backend Developer</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            <table class="table">
    <tbody>
      <tr>
      <th scope="row"><a href='linkedin'><i class="fa-brands fa-linkedin"></i></a></th>
      <td><a href='linkedin'><i class="fa-solid fa-link "></i></a></td>
      <td><a href='linkedin'><i class="fa-solid fa-envelope "></i></a></td>
      <td><a href='linkedin'><i class="fa-brands fa-facebook "></i></a></td>
    </tr>
   
    </tbody>
</table>
        </div>

      </div>
    </div>

    </div>
  )
}

export default About