import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux';
import * as userinfoActionsFromOtherFile from '../actions/userinfo'
import {connect} from 'react-redux'

class App extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			initDone:false
		}
	}
	render(){
		return(
			<div>
			{
				this.state.initDone
				?<p>Wanghui</p>
				:'Loading....'
			}
			</div>
		)
	}
	componentDidMount(){
		let cityName = '北京'
		this.props.userinfoActions.update({cityName:cityName})
		setTimeout(()=>{
			this.setState({initDone:true})
		},5000)
	}
}

function mapStateToProps(state){
	return{value:state.value}
}
function mapDispatchToProps(dispatch){
	return {userinfoActions:bindActionCreators(userinfoActionsFromOtherFile,dispatch)}
}

export default 
connect(
	mapStateToProps,
	mapDispatchToProps
)(App)