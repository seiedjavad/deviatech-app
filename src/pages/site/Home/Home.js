import React from 'react';
import '../../../assets/css/style.css'
import '../../../assets/css/bootstrap.css';
import "../../../assets/css/bootstrap-rtl.min.css"
import "../../../assets/css/reset.css"
// import "../../../assets/css/style.css"
import "../../../assets/css/animate.css"
import "../../../assets/css/owl.carousel.css"
import "../../../assets/css/magnific-popup.css"

// import images
import profile from '../../../assets/images/profile-2.jpg'
import work1 from '../../../assets/images/work-1.jpg'
import work2 from '../../../assets/images/work-2.jpg'
import work3 from '../../../assets/images/work-3.jpg'
import work4 from '../../../assets/images/work-4.jpg'
import work5 from '../../../assets/images/work-5.jpg'
import work6 from '../../../assets/images/work-6.jpg'

const Home = () => {
    return (
        <>
             {/*HOME*/}
            <section class="home" id="home">
                <div class="home-content" style={{height:'100vh'}}>
                    <div class="container">
                        <h1>ما  <span class="element" data-text1="توانمند هستیم" data-text2="خلاق هستیم" data-loop="true" data-backdelay="3000"></span></h1>
                        <div class="social">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>  </a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i>  </a>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>  </a>
                            <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i>  </a>
                            <a href="#"><i class="fa fa-behance" aria-hidden="true"></i>  </a>
                            <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i>  </a>
                        </div>
                        <a class="home-down bounce" href="#about"><i class="fa fa-angle-down"></i></a>
                    </div>
                </div>
                <svg class="diagonal home-left" width="21%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                    <path d="M0 100 L100 100 L0 10 Z"></path>
                </svg>
                <svg class="diagonal home-right" width="80%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                    <path d="M0 100 L100 100 L100 10 Z"></path>
                </svg>
            </section>


            {/*ABOUT*/}
            <section class="about dgray-bg" id="about">
                <div class="about type-1 padbot_120">
                    <div class="container">
                         {/*about image */}
                        <div class="col-md-4 col-sm-12 about-image top_30 wow fadeInUp"  data-wow-delay="0.4s">
                            <div class="row">
                                <img src={profile} alt=""/>
                            </div>
                        </div>
                         {/*about text */}
                        <div class="col-md-7 col-md-offset-1 col-sm-12 about-text wow fadeInUp"  data-wow-delay="0.6s">
                            <div class="section-title dleft bottom_30">
                                <br/>
                                    <h2>درباره ما</h2>
                            </div>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                                <br/><br/>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                            </p>
                        </div>

                         {/*work areas*/}
                        <div class="work-areas top_120 bottom_120 wow fadeInUp">
                             {/*an area */}
                            <div className="area col-md-4 item">
                                <div class="icon">
                                    <i data-icon="1" class="icon"></i>
                                </div>
                                <div class="text">
                                    <h6>طراحی سایت</h6>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و.</p>
                                </div>
                            </div>
                            {/*an area*/}
                            <div className="area col-md-4 item">
                                <div class="icon">
                                    <i data-icon="!" class="icon"></i>
                                </div>
                                <div class="text">
                                    <h6>هویت نام تجاری</h6>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها</p>
                                </div>
                            </div>
                            {/*an area*/}
                            <div className="area col-md-4 item">
                                <div className="icon">
                                    <i data-icon="1" className="icon"></i>
                                </div>
                                <div className="text">
                                    <h6>طراحی سایت</h6>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و.</p>
                                </div>
                            </div>
                            {/*an area */}

                        </div>

                    </div>
                    <svg class="diagonal-gray" width="100%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                        <path d="M0 0 L70 100 L100 0 Z"></path>
                    </svg>
                </div>
            </section>

            {/*PORTFOLIO*/}
            <section class="portfolio" id="portfolio">
                <div class="container">
                    <div class="section-title dleft top_120 bottom_90">
                        <h2> نمونه کارها</h2>
                        <div class="portfolio_filter">
                            <ul>
                                <li class="select-cat" data-filter="*"> همه</li>
                                <li data-filter=".web-design">طراحی سایت</li>
                                <li data-filter=".aplication"> نرم افزار</li>
                                <li data-filter=".development"> موبایل</li>
                            </ul>
                        </div>
                    </div>
                    {/*Portfolio Items*/}
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="isotope_items row">
                                {/*Item*/}
                                <a href="//www.youtube.com/watch@v=M-M3rdL_WLQ" class="popup-youtube single_item link development col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <i class="fa fa-play" aria-hidden="true"></i>
                                    <img src={work1} alt=""/>
                                </a>
                                 {/*Item*/}
                                <a href="images/work-2.jpg" class="single_item link aplication col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                    <img src={work2} alt=""/>
                                </a>
                                 {/*Item*/}
                                <a href="images/work-3.jpg" class="single_item link development col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                                    <img src={work3} alt=""/>
                                </a>
                                 {/*Item*/}
                                <a href="images/work-4.jpg" class="single_item link web-design col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="1.2s">
                                    <img src={work4} alt=""/>
                                </a>
                                 {/*Item*/}
                                <a href="images/work-5.jpg" class="single_item link aplication col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="1.5s">
                                    <img src={work5} alt=""/>
                                </a>
                                 {/*Item*/}
                                <a href="images/work-6.jpg" class="single_item link aplication col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="1.8s">
                                    <img src={work6} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <svg class="diagonal-white" width="100%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                    <path d="M0 0 L30 100 L100 0 Z"></path>
                </svg>
            </section>


            {/*BLOG*/}
            <section class="blog" id="blog">
                <div class="container-fluid dgray-bg padbot_200">
                    <div class="container">
                        <div class="section-title dright top_120 bottom_45">
                            <h2>آخرین مطالب</h2>
                        </div>
                        {/*Blogs*/}
                        <div class="row">
                            <a href="single-blog.html" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-content wow fadeInUp" data-wow-delay="0.4s">
                                <div class="blog-image">
                                    <img src="images/blog-1.jpg"/>
                                </div>
                                <h2 class="blog-title">لورم ایپسوم متن ساختگی با تولید</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و  </p>
                                <span class="blog-info"><span>علی احمدی</span> 10 بهمن 96 </span>
                            </a>
                            <a href="single-blog.html" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-content wow fadeInUp" data-wow-delay="0.6s">
                                <div class="blog-image">
                                    <img src="images/blog-2.jpg"/>
                                </div>
                                <h2 class="blog-title">لورم ایپسوم متن ساختگی با تولید</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و  </p>
                                <span class="blog-info"><span>علی احمدی</span> 10 بهمن 96 </span>
                            </a>
                            <a href="single-blog.html" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-content wow hidden-sm fadeInUp" data-wow-delay="0.8s">
                                <div class="blog-image">
                                    <img src="images/blog-3.jpg"/>
                                </div>
                                <h2 class="blog-title">لورم ایپسوم متن ساختگی با تولید </h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و  </p>
                                <span class="blog-info"><span>علی احمدی</span> 10 بهمن 96 </span>
                            </a>
                            <a href="blog-page.html" class="sitebtn pull-right top_45">بیشتر</a>
                        </div>
                    </div>
                    <svg class="diagonal-gray" width="100%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                        <path d="M0 0 L70 100 L100 0 Z"></path>
                    </svg>
                </div>
            </section>
        </>
    );
};

export default Home;