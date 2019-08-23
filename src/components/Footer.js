import React, { Component } from 'react';
import '../components_css/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid">
                <div className="container">
                    <div className="row justify-content-between align-items-top p-3">
                        <div className="col-lg-2">
                            Copyright and shit
                        </div>
                        <p className="col-lg-5">
                            <span className="title">Title</span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic accusamus molestias minima maiores beatae voluptate velit deleniti? Blanditiis harum id nisi perspiciatis vel placeat dolore facilis, laboriosam culpa cupiditate maiores explicabo est enim deserunt dolorum autem consequatur odio architecto libero, dolor fugiat voluptatibus. Earum, dicta deserunt suscipit quasi quia eveniet?
                        </p>
                        <p className="col-lg-5">
                            <span className="title">Title</span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic accusamus molestias minima maiores beatae voluptate velit deleniti? Blanditiis harum id nisi perspiciatis vel placeat dolore facilis, laboriosam culpa cupiditate maiores explicabo est enim deserunt dolorum autem consequatur odio architecto libero, dolor fugiat voluptatibus. Earum, dicta deserunt suscipit quasi quia eveniet?
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;