import React from 'react';

import tablesSalt1 from '../../../assets/images/salt_tablets/Salt Tablets.jpg';
import tablesSalt2 from '../../../assets/images/salt_tablets/salt tablets 2.jpg';

const TabletSalt = () => {
  return (
    <div className="salt-tablets text-center py-5 my-3">
        <div className="container">
            <h2 className='mb-4 pb-3' style={{borderBottom: '2px solid #ce8d16', display: 'inline-block'}}>Salt Tablets</h2>
            <div className="row">
                <div className="col-md-4">
                    <img className="img-thumbnail" src={tablesSalt1} alt="Salt Tablets" title="Salt Tablets" />
                    <img className="img-thumbnail" src={tablesSalt2} alt="Salt Tablets" title="Salt Tablets" />
                </div>
                <div className="col-md-8 text-center">
                    <h3 className="text-uppercase">SALT TABLETS TECHNICAL DATA SPECIFICATION</h3>
                    <p className="text-uppercase">CONFORMS EN973 STANDARDS </p>
                    <p>Sodium chloride tablets are premium quality compacted salt, this product used for water softener regeneration</p>
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Unit</th>
                                <th>Specification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Appearanet</td>
                                <td></td>
                                <td>white</td>
                            </tr>
                            <tr>
                                <td>Assay</td>
                                <td>% W/W NaCl</td>
                                <td>99.5 min</td>
                            </tr>
                            <tr>
                                <td>Moisture</td>
                                <td>%W/W H2O</td>
                                <td>0.30 max</td>
                            </tr>
                            <tr>
                                <td>Insoluble matter</td>
                                <td>% W/W</td>
                                <td>(0.15%) max</td>
                            </tr>
                            <tr>
                                <td>Total Hardeness</td>
                                <td>Mg /Kg</td>
                                <td>ppm 2000</td>
                            </tr>
                            <tr>
                                <td>Ph of 1% solution</td>
                                <td></td>
                                <td>7.0 ± 0.5</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-md-6 text-left">
                            <p className="lead">All values except moisture are calculated on dry basis.</p>
                            <p>Pilow Shape and Round Shap.</p>
                            <p>TYPICAL PHYSICAL CHARACTERISTICS.</p>
                        </div>
                        <div className="col-md-6">
                            <table className="table table-striped table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Tablet weight</td>
                                        <td>Appr. 12grams</td>
                                    </tr>
                                    <tr>
                                        <td>Tablet diameter (Ø)</td>
                                        <td>25 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Tablet thickness</td>
                                        <td>14 mm – 17 mm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TabletSalt;