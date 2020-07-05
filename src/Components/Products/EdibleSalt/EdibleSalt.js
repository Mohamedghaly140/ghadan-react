import React from 'react';

const EdibleSalt = () => {
  return (
    <div className="edible-salt text-center py-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className='pb-3 mb-2' style={{borderBottom: '2px solid #ce8d16', display: 'inline-block'}}>Edible Salt</h2>
                    <p>Iodized – Dried – Refined – fine</p>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Element</th>
                                <th>Results %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Moisture</td>
                                <td>0.09</td>
                            </tr>
                            <tr>
                                <td>Water Insoluble Matter</td>
                                <td>0.14</td>
                            </tr>
                            <tr>
                                <td>(Sodium Chloride) dry</td>
                                <td>99.42</td>
                            </tr>
                            <tr>
                                <td>(Sodium Chloride) wet</td>
                                <td>99.23</td>
                            </tr>
                            <tr>
                                <td>Ca(HcO3)2</td>
                                <td>0.064</td>
                            </tr>
                            <tr>
                                <td>Ca CO3</td>
                                <td>Absent</td>
                            </tr>
                            <tr>
                                <td>Ca SO4</td>
                                <td>0.109</td>
                            </tr>
                            <tr>
                                <td>Mg SO4</td>
                                <td>0.252</td>
                            </tr>
                            <tr>
                                <td>Mg Cl2</td>
                                <td>0.116</td>
                            </tr>
                            <tr>
                                <td>HCO3</td>
                                <td>0.023</td>
                            </tr>
                            <tr>
                                <td>SO4 --</td>
                                <td>0.28</td>
                            </tr>
                            <tr>
                                <td>Ca ++</td>
                                <td>0.048</td>
                            </tr>
                            <tr>
                                <td>Mg ++</td>
                                <td>0.08</td>
                            </tr>
                            <tr>
                                <td>Potassium Iodate</td>
                                <td>40 ppm</td>
                            </tr>
                            <tr>
                                <td>Sieve</td>
                            </tr>
                            <tr>
                                <td>1mm +</td>
                                <td>2.40%</td>
                            </tr>
                            <tr>
                                <td>1mm -</td>
                                <td>97.60%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EdibleSalt;