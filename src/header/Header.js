import React from "react";
import Button from "../button/button";
import "./Header.css";
import INR from '../header/images/inr.jpg';
import USD from '../header/images/usd.jpg';


const Header = (props)=>{

	const flag = props.flag==="usd"?USD:INR;

	const buttonValue=(()=>{
		return(
			<span>
				<span 
					className="glyphicon glyphicon-shopping-cart">
				</span>
				<span className="cartName">
					Cart
				</span>
				<span className="cartValue">
					({props.cartItem})
				</span>
			</span>
		)
	})();
	console.log(props.flag);
		return(<div className="header_wrapper">
				<div className="header_container">
				<div className="countryBtn">
					<img src={flag} alt="" width="40px" height="30px"/>
					<select onChange={props.handleFlagToggle} style={{border:"0"}}>
						<option>USD</option>
						<option>INR</option>
					</select>
				</div>
					<h1>BONFIRE</h1>
					<div className="addCartDiv">
					
						
						<Button 
							className="addCartBtn"
							value={buttonValue}
							clickFunc={props.showCart}/>	
					</div>
				</div>
			</div>
		);
}


export default Header;


	// newItemAdded=()=>{
	// 	this.setState({
	// 		noOfItemsInCart:this.state.noOfItemsInCart+1
	// 	})
	// }
	// <Button styles={addCartBtn} value="Add to Cart" clickFunc={this.newItemAdded}/>
	// const addCartBtn={
	// 		width:"120px",
	// 		height:"50px",
	// 		backgroundColor:"#000",
	// 		border:"2px solid black",
	// 		color:"#fff"
	// 	}