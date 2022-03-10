import React from "react";

import MainLayout from "../layouts/MainLayout";
import Select from "../components/select/select";
import Option from "../components/select/option";
import Input from "../components/Input";
import NFTCard from "../partials/NFTCard";

const NFTs = () => {
  return (
    <MainLayout rootClassName="nfts" title="NFT'S">
      <div className="section filter-container">
        <div className="page-container">
          <div className="hero-bottom-displaced">
            <div className="inputs">
              <Select
                rootClassName="flex-shrink-0"
                placeholder="Select Collection"
              >
                <Option value="Collection 1">Collection 1</Option>
                <Option value="Collection 2">Collection 2</Option>
                <Option value="Collection 3">Collection 3</Option>
              </Select>

              <Input id="search" placeholder="Search nft's" />

              <div className="range-container">
                <Input id="min" type="number" placeholder="Min Price" />
                <div className="to">To</div>
                <Input id="max" type="number" placeholder="Max Price" />
              </div>

              <button className="btn btn-gradient">Search</button>
              <button className="btn btn-grey d-flex justify-content-center align-items-center">
                <img src="./assets/imgs/cart.png" alt="cart" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section products">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="cards-sm">
              <div className="main-row row gy-5">
                {[
                  {
                    id: 1,
                    img: "./assets/imgs/product-1.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 2,
                    img: "./assets/imgs/product-2.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 3,
                    img: "./assets/imgs/product-3.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 4,
                    img: "./assets/imgs/product-3.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 5,
                    half: true,
                    img: "./assets/imgs/product-4.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 6,
                    half: true,
                    img: "./assets/imgs/product-4.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                ].map((el, idx) => {
                  return <NFTCard key={el.id} {...el} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section availability">
        <div className="bg"></div>
        <div className="page-container">
          <h2 className="text-center">Limited Membership Availablility</h2>

          <div className="container-fluid px-0 mt-4 list-container">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section benefits">
        <div className="page-container">
          <h2>Membership Benefits</h2>

          <div className="container-fluid px-0 mt-4 list-container">
            <div className="row">
              <div className="col-md-6">
                <ul className="styled-list-2">
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="styled-list-2">
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section membership">
        <div className="bg"></div>

        <div className="page-container">
          <div className="text-center">
            <h2>DAO Membership Opens</h2>

            <h6 className="mt-5">
              March 4, 2022 - 8:00 AM Mountain Standard Time (MST) (Denver,
              Colorado, USA)
            </h6>

            <div className="timer-lg mt-5">
              <div>
                <div className="txt">03 Day</div>
              </div>
              <div>
                <div className="txt">03 Hrs</div>
              </div>
              <div className="active">
                <div className="txt">03 Min</div>
              </div>
              <div>
                <div className="txt">03 Sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section roadmap">
        <div className="page-container">
          <h2 className="title">
            <span className="text-start">Roadmap</span>
            <span className="text-end"> ... To Success</span>
          </h2>

          <p className="text-light-2 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen a book.
          </p>

          <div className="roadmap-main">
            <div className="container-fluid px-0">
              <div className="row main-row">
                <div className="col-lg-3">
                  <div className="item">
                    <img
                      className="bg"
                      src="./assets/imgs/bg-roadmap-1.png"
                      alt="bg"
                    />

                    <div className="text">
                      <div className="triangle-container">
                        <div className="triangle"></div>
                      </div>
                      <img
                        src="./assets/imgs/roadmap-timer-1.png"
                        alt="roadmap-timer"
                      />

                      <ul className="styled-list-2">
                        <li>Lorem Ipsum is simply</li>
                        <li>dummy text of the</li>
                        <li>printing &amp; typesetting</li>
                        <li>industry. Lorem Ipsum</li>
                        <li>has been the industry's </li>
                        <li>Lorem Ipsum is simply </li>
                        <li>dummy text of the </li>
                      </ul>

                      <h3 className="date">Mid 2022</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="item">
                    <img
                      className="bg"
                      src="./assets/imgs/bg-roadmap-2.png"
                      alt="bg"
                    />

                    <div className="text">
                      <div className="triangle-container">
                        <div className="triangle"></div>
                      </div>
                      <img
                        src="./assets/imgs/roadmap-timer-2.png"
                        alt="roadmap-timer"
                      />

                      <ul className="styled-list-2">
                        <li>Lorem Ipsum is simply</li>
                        <li>dummy text of the</li>
                        <li>printing &amp; typesetting</li>
                        <li>industry. Lorem Ipsum</li>
                        <li>has been the industry's </li>
                        <li>Lorem Ipsum is simply </li>
                        <li>dummy text of the </li>
                      </ul>

                      <h3 className="date text-white">Mid 2022</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="item">
                    <img
                      className="bg"
                      src="./assets/imgs/bg-roadmap-3.png"
                      alt="bg"
                    />

                    <div className="text">
                      <div className="triangle-container">
                        <div className="triangle"></div>
                      </div>
                      <img
                        src="./assets/imgs/roadmap-timer-3.png"
                        alt="roadmap-timer"
                      />

                      <ul className="styled-list-2">
                        <li>Lorem Ipsum is simply</li>
                        <li>dummy text of the</li>
                        <li>printing &amp; typesetting</li>
                        <li>industry. Lorem Ipsum</li>
                        <li>has been the industry's </li>
                        <li>Lorem Ipsum is simply </li>
                        <li>dummy text of the </li>
                      </ul>

                      <h3 className="date">Late 2022</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="item">
                    <img
                      className="bg"
                      src="./assets/imgs/bg-roadmap-1.png"
                      alt="bg"
                    />

                    <div className="text">
                      <div className="triangle-container">
                        <div className="triangle"></div>
                      </div>
                      <img
                        src="./assets/imgs/roadmap-timer-1.png"
                        alt="roadmap-timer"
                      />

                      <ul className="styled-list-2">
                        <li>Lorem Ipsum is simply</li>
                        <li>dummy text of the</li>
                        <li>printing &amp; typesetting</li>
                        <li>industry. Lorem Ipsum</li>
                        <li>has been the industry's </li>
                        <li>Lorem Ipsum is simply </li>
                        <li>dummy text of the </li>
                      </ul>

                      <h3 className="date">2023</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NFTs;
