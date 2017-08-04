import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import 'assets/theme.scss';

function Root(){
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          <Main />
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Root;
