import React from 'react';

const Footer = () => {
  return (
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <h4 class="footer-heading mb-4">About Ghadan</h4>
                    <p>Ghadan Company Started in 2009 as a promoting marketing organization in Egypt, and in short time
                        invaded many of the business regions, specially the minerals and fuel business. We developed our
                        business of salt rapidly, and succeeded to be among the well-known Salt Companies in Egypt, rock
                        salt, marine salt, siwa salt, Egyption rock salt.</p>
                </div>
                <div class="col-md-3">
                    <h4 class="footer-heading mb-4">NAVIGATIONS</h4>
                    <ul class="list-unstyled">
                        <li><a href="https://ghadansalt.com">Home</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="rock salt/index.html"> Rock salt </a>
                                <a class="dropdown-item" href="tablets salt/index.html"> Tablet Salt </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="edible salt/index.html"> Edible Salt </a>
                                <a class="dropdown-item" href="Industrial Salt/index.html"> Industrial Salt </a>
                                <a class="dropdown-item" href="solar salt/index.html">Solar Salt</a>
                            </div>
                        </li>
                        <li><a href="about/index.html">About</a></li>
                        <li><a href="#contact-us">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <div class="contact-us">
                        <h4 class="footer-heading mb-4">CONTACT US</h4>
                        <ul class="list-unstyled">
                            <li>
                                <i class="fas fa-phone-alt"></i> <span>+2 010 000 73381</span>
                            </li>
                            <li>
                                <i class="far fa-envelope"></i> &nbsp; <span>info@ghadan.co</span>
                            </li>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>
                                    1st Kafrawy st. New Demitta ,Demitta,Egypt
                                </span>
                            </li>
                        </ul>
                        <div class="icons">
                            <span><a href="https://www.facebook.com/ghadan.co/?ref=br_rs" target="_blank"><i id="icon"
                            class="fab fa-facebook-f"></i></a></span>
                            <span><a href="https://twitter.com/Salt_from_Egypt" target="_blank"><i id="icon"
                            class="fab fa-twitter"></i></a></span>
                            <span><a href="https://www.linkedin.com/company/egypt-rock-salt-ghadan/" target="_blank"><i id="icon"
                            class="fab fa-linkedin-in"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="copyright text-center">
                        <p>Copyright &copy; 2020 All rights reserved | <a href="https://ghadansalt.com"><span>Ghadan</span></a></p>
                    </div>
                </div>
            </div>
    </footer>
  );
}

export default Footer;