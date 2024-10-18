import SectorBody from "./Sectors/SectorBody";
import "./Sectors.css";
import DroneNavbar from './Navbar/DroneNavbar'
import Footer from './Footer/Footer'

const Sectors = () => {
  return (
    <>
     <DroneNavbar />
     <div className="sectors2">
     <div className="sectors-header">
     <img
      className="bgn-image"
      alt=""
      src={require('../Assets/sectors_bgn.png')}
      />
      </div>
      <div className="sectors-child" />
      <main className="body">
        <section className="body-content">
          <SectorBody />
          <div className="sectors-container">
            <div className="sectors-content">
              <div className="sectors3">
                <div className="component1">
                  <div className="sector-item-containers">
                    <img
                      className="agriculture-3-icon"
                      loading="lazy"
                      alt=""
                      src={require('../Assets/agriculture-2@2x.png')}
                    />
                    <div className="sector-item-containers-child" />
                  </div>
                  <div className="other-sectors">
                    <div className="other-sectors-child" />


                    <div className="other-sector-labels">
                      <div className="heading-2">Surveillance</div>
                      <div className="solar-power-plant-mapping-surv-wrapper">
                        <div className="solar-power-plant-container">
                          <p className="solar-power-plant">
                            - Solar power plant mapping survey
                          </p>
                          <p className="solar-power-plant">
                            - Power Transmission and Distribution Mapping Survey
                          </p>
                          <p className="solar-power-plant">
                            - Roads And Highways Mapping Survey
                          </p>
                          <p className="solar-power-plant">
                            - Railroad And Metro Mapping Survey
                          </p>
                          <p className="solar-power-plant">
                            - General Insurance Data Services
                          </p>
                          <p className="solar-power-plant">
                            - Thermal Power Inspection
                          </p>
                          <p className="solar-power-plant">
                            - Oil And Gas Pipeline Inspection
                          </p>
                          <p className="solar-power-plant">
                            - Mining Site Inspection
                          </p>
                          <p className="solar-power-plant">
                            - Manufacturing Plant Inspection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="other-sector-learn-more">
                      <div className="other-sector-learn-more-child" />
                      <a className="learn-more">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="component1">
                  <div className="rectangle-parent21">
                    <div className="frame-child97" />
                    <div className="li-d-a-r-sectors-wrapper">
                      <div className="li-d-a-r-sectors">
                        <div className="li-d-a-r-sector-labels">
                          <div className="heading-2">Agriculture</div>
                          <div className="yield-prediction">
                            <div className="yield-prediction-crop-container">
                              <p className="solar-power-plant">
                                · Yield Prediction
                              </p>
                              <p className="solar-power-plant">
                                · Crop Monitoring
                              </p>
                              <p className="solar-power-plant">
                                · Input Management
                              </p>
                              <p className="solar-power-plant">
                                · Water Management
                              </p>
                              <p className="solar-power-plant">
                                · Plant Counting
                              </p>
                              <p className="solar-power-plant">
                                · Damage Assessment
                              </p>
                              <p className="solar-power-plant">· Research</p>
                            </div>
                          </div>
                        </div>
                        <div className="other-sector-learn-more">
                          <div className="other-sector-learn-more-child" />
                          <a className="learn-more">Learn more</a>
                        </div>
                      </div>
                    </div>
                    <div className="frame-child98" />
                  </div>
                  <img
                    className="agriculture-2-icon"
                    loading="lazy"
                    alt=""
                    src={require('../Assets/agriculture-2@2x.png')}
                  />
                </div>
                <div className="component3">
                  <div className="agriculture-1-parent">
                    <img
                      className="agriculture-1-icon"
                      loading="lazy"
                      alt=""
                      src={require('../Assets/agriculture-2@2x.png')}
                    />
                    <div className="frame-child99" />
                  </div>
                  <div className="rectangle-parent22">
                    <div className="frame-child100" />
                    <div className="other-sector-labels">
                      <div className="heading-22">{`Utilities & Power`}</div>
                      <div className="lidar-mapping-of-power-line-wrapper">
                        <div className="lidar-mapping-of-container">
                          <p className="solar-power-plant">
                            - Lidar Mapping Of Power Line
                          </p>
                          <p className="solar-power-plant">
                            - Power Line Corridor Mapping
                          </p>
                          <p className="solar-power-plant">
                            - Visual Inspection and Anomaly Detection
                          </p>
                          <p className="solar-power-plant">
                            - Thermal/IR Inspection and Fault Detection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="other-sector-learn-more">
                      <div className="other-sector-learn-more-child" />
                      <a className="learn-more">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="component1">
                  <div className="rectangle-parent24">
                    <div className="frame-child97" />
                    <div className="li-d-a-r-sectors-wrapper">
                      <div className="li-d-a-r-sector-labels">
                        <div className="heading-23">Infrastructure</div>
                        <div className="frame-parent12">
                          <div className="drones-have-made-it-safer-fas-wrapper">
                            <div className="drones-have-made">
                              Drones have made it safer, faster, and less
                              expensive to collect geospatial data. From the
                              early pre-construction phase to tracking weekly
                              material inventories, drones have made it easier
                              for surveyors, engineers, and project managers to
                              work smarter with greater productivity and
                              efficiency.
                            </div>
                          </div>
                          <div className="other-sector-learn-more">
                            <div className="other-sector-learn-more-child" />
                            <a className="learn-more">Learn more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-child98" />
                  </div>
                  <img
                    className="agriculture-2-icon"
                    loading="lazy"
                    alt=""
                    src={require('../Assets/agriculture-2@2x.png')}
                  />
                </div>
                <div className="component1">
                  <div className="agriculture-1-parent">
                    <img
                      className="agriculture-1-icon"
                      loading="lazy"
                      alt=""
                      src={require('../Assets/agriculture-2@2x.png')}
                    />
                    <div className="frame-child99" />
                  </div>
                  <div className="rectangle-parent26">
                    <div className="frame-child106" />
                    <div className="other-sector-labels">
                      <div className="heading-24">Public Safety</div>
                      <div className="lidar-mapping-of-power-line-wrapper">
                        <div className="tactical-mapping-intelligenc-container">
                          <p className="solar-power-plant">
                            · Tactical Mapping
                          </p>
                          <p className="solar-power-plant">
                            · Intelligence Gathering
                          </p>
                          <p className="solar-power-plant">· Reconnaissance</p>
                          <p className="solar-power-plant">
                            · Area Obstacles Analysis
                          </p>
                          <p className="solar-power-plant">
                            · Mobility Corridor Mapping
                          </p>
                          <p className="solar-power-plant">
                            · Road Network Assessment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="other-sector-learn-more">
                      <div className="other-sector-learn-more-child" />
                      <a className="learn-more">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="component1">
                  <div className="rectangle-parent28">
                    <div className="frame-child108" />
                    <div className="frame-child109" />
                    <div className="li-d-a-r-sector-labels">
                      <div className="heading-25">{`Research & Education`}</div>
                      <div className="environment">
                        <div className="solar-power-plant-container">
                          <p className="solar-power-plant">
                            · Environmental Science and Ecology Studies
                          </p>
                          <p className="solar-power-plant">
                            · Wildlife Monitoring and Conservation
                          </p>
                          <p className="solar-power-plant">
                            · Geographical and Geological Surveys
                          </p>
                          <p className="solar-power-plant">
                            · Marine and Coastal Research
                          </p>
                          <p className="solar-power-plant">
                            · Architectural and Archaeological Documentation
                          </p>
                          <p className="solar-power-plant">
                            · Meteorological and Atmospheric Studies
                          </p>
                          <p className="solar-power-plant">
                            · Remote Sensing and GIS Applications
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="other-sector-learn-more">
                      <div className="other-sector-learn-more-child" />
                      <a className="learn-more">Learn more</a>
                    </div>
                  </div>
                  <img
                    className="agriculture-2-icon"
                    loading="lazy"
                    alt=""
                    src={require('../Assets/agriculture-2@2x.png')}
                  />
                </div>
                <div className="component3">
                  <div className="agriculture-1-parent">
                    <img
                      className="agriculture-1-icon"
                      loading="lazy"
                      alt=""
                      src={require('../Assets/agriculture-2@2x.png')}
                    />
                    <div className="frame-child99" />
                  </div>
                  <div className="rectangle-parent29">
                    <div className="frame-child100" />
                    <div className="other-sector-labels">
                      <div className="heading-2">{`Oil & Gas`}</div>
                      <div className="general-insurance-data-service-wrapper">
                        <div className="general-insurance-data-container">
                          <p className="solar-power-plant">
                            - General Insurance Data Services
                          </p>
                          <p className="solar-power-plant">
                            - Visual Inspection and Anomaly Detection
                          </p>
                          <p className="solar-power-plant">
                            - Thermal/IR Inspection and Fault Detection
                          </p>
                          <p className="solar-power-plant">
                            - Oil And Gas Pipeline Inspection
                          </p>
                          <p className="solar-power-plant">
                            - Lidar Mapping Of Oil And Gas Pipeline
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="other-sector-learn-more">
                      <div className="other-sector-learn-more-child" />
                      <a className="learn-more">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="component1">
                  <div className="rectangle-parent24">
                    <div className="frame-child97" />
                    <div className="li-d-a-r-sectors-wrapper">
                      <div className="frame-parent13">
                        <div className="li-d-a-r-sector-labels">
                          <div className="heading-27">Public Safety</div>
                          <div className="search-and-rescue-missions-t-wrapper">
                            <div className="search-and-rescue-container">
                              <p className="solar-power-plant">
                                · Search and Rescue Missions
                              </p>
                              <p className="solar-power-plant">
                                · Tracking And Monitoring
                              </p>
                              <p className="solar-power-plant">
                                · Package Delivery
                              </p>
                              <p className="solar-power-plant">
                                · Firefighting and Land Management
                              </p>
                              <p className="solar-power-plant">
                                · Disaster Response
                              </p>
                              <p className="solar-power-plant">
                                · Border Security and Patrol
                              </p>
                              <p className="solar-power-plant">
                                · Utility and Infrastructure Assessments
                              </p>
                              <p className="solar-power-plant">
                                · Accident and Crime Scene Reconstruction
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="other-sector-learn-more">
                          <div className="other-sector-learn-more-child" />
                          <a className="learn-more">Learn more</a>
                        </div>
                      </div>
                    </div>
                    <div className="frame-child98" />
                  </div>
                  <img
                    className="agriculture-2-icon"
                    loading="lazy"
                    alt=""
                    src={require('../Assets/agriculture-2@2x.png')}
                  />
                </div>
                <div className="component1">
                  <div className="agriculture-1-parent">
                    <img
                      className="agriculture-1-icon"
                      loading="lazy"
                      alt=""
                      src={require('../Assets/agriculture-2@2x.png')}
                    />
                    <div className="frame-child99" />
                  </div>
                  <div className="rectangle-parent33">
                    <div className="frame-child106" />
                    <div className="heading-2-lidar-parent4">
                      <div className="heading-28">{`Mining & Aggregates`}</div>
                      <div className="mining-site-inspection-manuf-wrapper">
                        <div className="mining-site-inspection-container">
                          <p className="solar-power-plant">
                            - Mining Site Inspection
                          </p>
                          <p className="solar-power-plant">
                            - Manufacturing Plant Inspection
                          </p>
                          <p className="solar-power-plant">
                            - Including pit walls, haul roads, and tailings dams
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="other-sector-learn-more">
                      <div className="other-sector-learn-more-child" />
                      <div className="learn-more8">Learn more</div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </section>
      </main>
      <div className="footer">
        <div className="divsite-below-footer-wrap">
          <div className="copyright-2024">
            Copyright © 2024 D Aerospace | Powered by D Aerospace
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sectors;
