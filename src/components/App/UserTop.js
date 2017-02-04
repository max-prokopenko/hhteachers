import React from 'react';
import FlatButton from 'material-ui/FlatButton';



import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

//Avatar
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/social/person';
import Arrow from 'material-ui/svg-icons/navigation/expand-more';
import ArrowUp from 'material-ui/svg-icons/navigation/expand-less';

import Star1 from 'material-ui/svg-icons/toggle/star-border';
import Star2 from 'material-ui/svg-icons/toggle/star';

import FontIcon from 'material-ui/FontIcon';

import TextField from 'material-ui/TextField';
//Star
import Rater from '../Rater'
import './style.css';

import {
  orange50,
  deepOrange700,
} from 'material-ui/styles/colors';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Subheader from 'material-ui/Subheader';

import Snackbar from 'material-ui/Snackbar';

//redux
import { connect } from 'react-redux';
import { userLogin } from '../../actions/userAction';
import { bindActionCreators } from 'redux';
import store from '../../store'
import { push } from 'react-router-redux'

import CSSTransitionGroup from 'react-addons-css-transition-group' 

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
            		votes: null,
            		comments: []
           	 	},
           	dataSource: [],
           	edit: true,
           	open: false,
           	show: false,
           	expanded: false,
           	commentValue: '',
           	valueTemp: null,
           	rating: 0

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

    writeOpeData (userId, name, rate, votes, comments) {
			console.log(userId + ' ' + name + ' ' + rate + ' ' + votes);
		  firebase.database().ref('ope/' + this.state.id).set({
		    name: name,
		    rate: rate,
		    votes : votes,
		    comments: comments 
		  });
	}
    
    onStarClick = () => {
    	
    	if(this.state.edit) {
    		let ope = this.state.ope;
    	
	    	let rateSum = this.state.ope.rate;
	    
	    	let votesSum = this.state.ope.votes;
	    	let commentsString = "";
	    	
	    	ope.rate = this.state.rating + rateSum;
	    	
	    	ope.votes = votesSum + 1;
	    	

	       	this.setState({ope: ope});

	       	for (var i = 0; i < this.state.ope.comments.length; i++) {
	       		commentsString = commentsString + this.state.ope.comments[i] + "||";
	       	}

	        this.writeOpeData(this.state.id, this.state.ope.name, this.state.ope.rate, this.state.ope.votes, commentsString);

	        
	        this.setState({
				edit: false,
			   
			});
    	}
    	
        
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
       // let opeTemp = this.state.ope;
	    
	    let name = fb.database().ref('ope/' + this.state.id);
							name.on('value', function(snapshot) {
								console.log(snapshot);
								let opeTemp = snapshot.val();
								let comments = opeTemp.comments.split("||");
								opeTemp.comments = comments;
								that.setState({ope: opeTemp});
		});
		/*let rate = fb.database().ref('ope/' + this.state.id + '/rate');
							rate.on('value', function(snapshot) {
								opeTemp.rate = snapshot.val();
								that.setState({ope: opeTemp});
		});		
		let votes = fb.database().ref('ope/' + this.state.id + '/votes');
							votes.on('value', function(snapshot) {
								opeTemp.votes = snapshot.val();
								that.setState({ope: opeTemp});
		});*/
		let rateOpe = 0;
	    if(this.state.ope.votes > 0) {
		  	rateOpe = this.state.ope.rate / this.state.ope.votes;
		   	rateOpe = rateOpe.toFixed(0);
	    }
	    	
		this.setState({
			show: true,
			rating: rateOpe

		});							
	    console.log(this.state);
	    
	}
	addComment() {
		let commentsString = "";
    	
		this.state.ope.comments.push(this.state.commentValue);
		for (var i = 0; i < this.state.ope.comments.length; i++) {
       		commentsString = commentsString + this.state.ope.comments[i] + "||";
       	}
       	console.log(commentsString);
        this.writeOpeData(this.state.id, this.state.ope.name, this.state.ope.rate, this.state.ope.votes, commentsString);

	}
	onChange(e) {
	    this.setState({ inputValue: e.target.value });
	    console.log(this.state.inputValue);
	  }

	handleExpandChange = (expanded) => {
	    this.setState({expanded: expanded});
	  };

	  handleExpand = () => {
	    this.setState({expanded: true});
	  };

	  handleReduce = () => {
	    this.setState({expanded: false});
	  };

	  handleChangeComment = (event) => {
	    this.setState({commentValue: event.target.value});
	    
	  };

	 
	  handleRate = (e) => {
	  		if(this.state.edit) {	
		      this.setState({
		        rating: e.rating
		      })
		      // lastRating is not undefined,
		      // which means user have rated
		      if (e.type === 'click') {
	   		       console.log('You rated ' + e.rating)
		      }
		    }
	    };
	 
	render() {
		let commentInput = <TextField 
				      hintText="Add comment"
				      value={this.state.commentValue}
				      onChange={this.handleChangeComment}
				      floatingLabelText="What you think about this teacher"
				      style={{width: "70%"}}
				      floatingLabelStyle={{fontSize: '0.9em'}}
				    />;
		let ope = this.state.ope;
		let opeId = this.state.id;
		let styleTextField = {
			postion: 'absolute',
			top: this.state.show ? '{300}' : '35vh'
			
		};
	  	let style = {
	        marginTop: '10vh',
	        display: this.state.show ? 'inline-flex' : 'none',
	        textAlign: 'center',
	    };
	    const center = {
	        textAlign: 'center',
	        flex: 1,
	        justifyContent: 'center'
	    };
	    const styleText = {
	        marginTop: '3vh',
	        color: '#565F66',
	        fontSize: '1.3em'
	    };
	    let styleDiv = {
	        marginTop: '3vh',
	        textAlign: 'center',
	        fontSize: '3.5em',
	        display: this.state.show ? 'block' : 'none'
	    };

	    const styleMain = {
        width: '90vw',
        minHeight: '85vh',
        marginLeft: '5vw',
        marginTop: '5vh',
        marginBottom: '5vh',
        textAlign: 'center',
       
    };
    const styleComment = {
        textAlign: 'left',
        fontSize: '0.95em'

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
	    		<div style={center}>
	    		
	    		<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={styleMain}>
           		 <CardText>
	    			<AutoComplete
			          hintText="Type teacher's name here"
			          dataSource={this.state.dataSource}
			          filter={AutoComplete.caseInsensitiveFilter}
			          onNewRequest={this.handleNewRequest}
			          maxSearchResults={5}
			          style={styleTextField}
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
				       <div style={styleDiv} onClick={this.onStarClick.bind(this)}>    
					      	
					        <Rater rating={this.state.rating} onRate={this.handleRate.bind(this)} interactive={this.state.edit}/>
						</div>
					
					<Snackbar
			          open={this.state.open}
			          message="Your rating is saved"
			          autoHideDuration={2000}
			          
			        />  

					
					</CardText>
		             <CardText expandable={true}>
		             <List>
		                <Subheader>Comments</Subheader>
		               	 {commentInput}
					    <FlatButton label="Add" primary={true} onClick={this.addComment.bind(this)}/>
					   	{
					   	this.state.ope.comments.map((comment, i) =>
						 	<ListItem
					                  primaryText={comment}
					                  style={styleComment}
					                  key={i}
					                  leftAvatar={<Avatar icon={<Person />}/>}
					        />)
						}
		              </List>
		            </CardText>
		            <CardActions>
		            {this.state.expanded && <ArrowUp onTouchTap={this.handleReduce} />}
		            {!this.state.expanded && this.state.show && <Arrow onTouchTap={this.handleExpand} />}
              
              
            </CardActions>
          </Card>   

				   
				</div>
	    	);
	    } 
	    return (
	    	<User />
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTop);