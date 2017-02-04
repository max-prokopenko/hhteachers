import React from 'react';
import FlatButton from 'material-ui/FlatButton';

//Avatar
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/social/person';
import FontIcon from 'material-ui/FontIcon';


//Star
import StarRatingComponent from 'react-star-rating-component';

import {
  orange50,
  deepOrange700,
} from 'material-ui/styles/colors';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import Snackbar from 'material-ui/Snackbar';

//redux
import { connect } from 'react-redux';
import { userLogin } from '../../actions/userAction';
import { bindActionCreators } from 'redux';
import store from '../../store'
import { push } from 'react-router-redux'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

import AutoComplete from 'material-ui/AutoComplete';

import tap from 'react-tap-event-plugin';

import * as firebase from 'firebase';

tap();

// Make sure you swap this out with your Firebase app's config
const config = {
    apiKey: "AIzaSyCI_Qv6b6FTsCsIirwJ18d4hxw2qnQmAoM",
    authDomain: "hhteacher-ce1ce.firebaseapp.com",
    databaseURL: "https://hhteacher-ce1ce.firebaseio.com",
    storageBucket: "hhteacher-ce1ce.appspot.com",
    messagingSenderId: "572098130583"
  };

const fb = firebase  
  .initializeApp(config);

const style = {
	
};

function mapStateToProps(state) {
  return {
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      //userLogin: (a) => { dispatch(userLogin(a)) }
  }
}





class UserTop extends React.Component {
	constructor(props) {
        super(props);
        
        this.state = {
        	id: 0,          
            ope:{
            		name: '',
            		rate: null,
            		votes: null
           	 	},
           	dataSource: [],
           	edit: true,
           	open: false,

        };

        //http://hhmoodle.haaga-helia.fi/pluginfile.php/1461/user/icon/decaf/f1?rev=2665990
        /*let that = this;
        let opeTemp = this.state.ope;
        var name = fb.database().ref('ope/' + this.state.id + '/name');
							name.on('value', function(snapshot) {
								opeTemp.name = snapshot.val();
		});
		var rate = fb.database().ref('ope/' + this.state.id + '/rate');
							rate.on('value', function(snapshot) {
								opeTemp.rate = snapshot.val();
								that.setState({ope: opeTemp});
		});		
		var votes = fb.database().ref('ope/' + this.state.id + '/votes');
							votes.on('value', function(snapshot) {
								opeTemp.votes = snapshot.val();
								that.setState({ope: opeTemp});
		});	*/
		let that = this;
		var opes = fb.database().ref('ope/');
							opes.on('value', function(snapshot) {
								let data = snapshot.val();
								let dataNames = [];
								for (var i = 0; i < data.length; i++) {
									 dataNames.push({
								        text: data[i].name,
								        value: i
								    });
									
								}
								that.setState({dataSource: dataNames});
								console.log(dataNames); 

		});						

			
		
		
    }

    writeOpeData (userId, name, rate, votes) {
			console.log(userId + ' ' + name + ' ' + rate + ' ' + votes);
		  firebase.database().ref('ope/' + this.state.id).set({
		    name: name,
		    rate: rate,
		    votes : votes
		  });
	}
    
    onStarClick(nextValue, prevValue, name) {
    	
    	let ope = this.state.ope;
    	console.log(ope);
    	let rateSum = this.state.ope.rate;
    	let votesSum = this.state.ope.votes;
    	
    	ope.rate = nextValue + rateSum;
    	ope.votes = votesSum + 1;
    	

       	this.setState({ope: ope});
        this.writeOpeData(this.state.id, this.state.ope.name, this.state.ope.rate, this.state.ope.votes);

        
        this.setState({
			edit: false,
		    open: true,
		});
        
        /*let opeId = this.state.id + 1;
        

        this.setState({id: opeId});

        let that = this;
        let opeTemp = this.state.ope;

        
        var name = fb.database().ref('ope/' + opeId + '/name');
							name.on('value', function(snapshot) {
								opeTemp.name = snapshot.val();
		});
		var rate = fb.database().ref('ope/' + opeId + '/rate');
							rate.on('value', function(snapshot) {
								opeTemp.rate = snapshot.val();
								that.setState({ope: opeTemp});
		});		
		var votes = fb.database().ref('ope/' + opeId + '/votes');
							votes.on('value', function(snapshot) {
								opeTemp.votes = snapshot.val();
								that.setState({ope: opeTemp});
		});


	*/

        
    }

    handleNewRequest = (index) => {
    	let id = index.value;
	    this.setState({
	      id: id,
	      open: false,
	      edit: true
	    });

	    let that = this;
        let opeTemp = this.state.ope;
	    
	    let name = fb.database().ref('ope/' + this.state.id + '/name');
							name.on('value', function(snapshot) {
								opeTemp.name = snapshot.val();
		});
		let rate = fb.database().ref('ope/' + this.state.id + '/rate');
							rate.on('value', function(snapshot) {
								opeTemp.rate = snapshot.val();
								that.setState({ope: opeTemp});
		});		
		let votes = fb.database().ref('ope/' + this.state.id + '/votes');
							votes.on('value', function(snapshot) {
								opeTemp.votes = snapshot.val();
								that.setState({ope: opeTemp});
		});
	    console.log(this.state);
	    
	}

	render() {

		let ope = this.state.ope;
		let opeId = this.state.id;
	  	const style = {
	        marginTop: '10vh'
	    };
	    const styleText = {
	        marginTop: '3vh',
	        color: '#565F66',
	        fontSize: '1.3em'
	    };
	    const styleDiv = {
	        marginTop: '3vh',
	        textAlign: 'center',
	        fontSize: '3.5em'
	    };

	    const User = () => {
	    	console.log('snapshot', this.state.propsUser);
	    	let rateOpe;
	    	if(this.state.ope.votes > 0) {
		    	rateOpe = this.state.ope.rate / this.state.ope.votes;
		    	rateOpe = rateOpe.toFixed(0);
	    	}
	    	else {
	    		rateOpe = 0; 
	    	}
	    	return (
	    		<div >

	    			<AutoComplete
			          hintText="Type teacher's name here"
			          dataSource={this.state.dataSource}
			          filter={AutoComplete.caseInsensitiveFilter}
			          onNewRequest={this.handleNewRequest}
			          maxSearchResults={5}
			        />
			    	<Avatar 
						            color={deepOrange700}
						            backgroundColor={orange50}
						            icon={<Person />}
						            size={250}
						            style={style}
						            
					/>
				            <p style={styleText}>
							      {this.state.ope.name}
					        </p>
				    	
				    <div style={styleDiv}>    
				        
				        <StarRatingComponent 
		                    name="rate1" 
		                    starCount={5}
		                    starColor={deepOrange700}
		                    value={rateOpe}
		                    editing={this.state.edit}
		                    onStarClick={this.onStarClick.bind(this)}
		                />
					</div>

					<Snackbar
			          open={this.state.open}
			          message="Your rating is saved"
			          autoHideDuration={2000}
			          
			        />  

					
					    

				   
				</div>
	    	);
	    } 
	    return (
	    	<User />
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTop);