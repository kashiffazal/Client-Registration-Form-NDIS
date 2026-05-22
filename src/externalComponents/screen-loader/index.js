import React, { Component } from 'react';
import './styles.css';
class ScreenLoader extends Component {
    render() {
			const { active, children } = this.props;
        return (
					<span className="c_k_screenLoader_0">
						
							<div className={active ? "container" : "container hide"}>
								<div className="content">

									<div className="text-center">
										<img src={require('./328.svg')} width="80px" alt=""/>
									</div>

									<div className="label">
										{children ? children : <span>Loading,<br/> Please wait.....</span>}
									</div>
								</div>
							</div>

					</span>
        );
    }
}

export default ScreenLoader;