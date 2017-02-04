import React, { PropTypes, Component } from 'react';

import classnames from 'classnames';
import TextField from 'material-ui/TextField';

import FlatButton from 'material-ui/FlatButton';

//styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import teacherBaseTheme from '../../teacherBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect } from 'react-redux';
import { addComment } from '../../actions/commentAction';
import { bindActionCreators } from 'redux';
import store from '../../store'
import { push } from 'react-router-redux'

import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/social/person';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

function mapStateToProps(state) {
  return {
      comments: state.commentReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      addComment: (a) => { dispatch(addComment(a)) }
  }
}

class CommentBox extends Component {
  
  constructor(props) {
    super(props);
     this.state = {
            commentValue: '',
            errorText: ''
        };
  }
  addComment(e) {
    e.preventDefault();
    let allComments = this.props.comments.comments.comments;
    allComments.push(this.state.commentValue);
    this.props.addComment(allComments);
  }
  /*addComment() {
    let commentsString = "";
      
      if (this.state.commentValue == "") {
          this.setState({ errorText: "Can't leave empty comment"})
      } else {
        this.setState({ errorText: '' })
        this.state.ope.comments.push(this.state.commentValue);
        for (var i = 0; i < this.state.ope.comments.length; i++) {
              commentsString = commentsString + this.state.ope.comments[i] + "||";
        }
        commentsString = commentsString.substring(0, commentsString.length - 2);

        console.log(this.state);
        //this.writeOpeData(this.state.id, this.state.ope.name, this.state.ope.rate, this.state.ope.votes, commentsString);
      }
  }*/

  onChange(e) {
      this.setState({ inputValue: e.target.value });
      console.log(this.state.inputValue);
  }

  handleChangeComment = (event) => {
      this.setState({commentValue: event.target.value});
  };
 
  render()   {
    const { className, ...props } = this.props;
    const style = {
        width: '90vw',
        minHeight: '85vh',
        marginLeft: '5vw',
        marginTop: '5vh',
        marginBottom: '5vh',
        textAlign: 'center',
        transitionDuration: '1s'
    };
    const styleComment = {
        textAlign: 'left',
        fontSize: '0.95em'

    };
    /*

     {
              
                this.props.comments.comments.comments.map((comment, i) =>
                <ListItem
                              primaryText={comment}
                              style={styleComment}
                              key={i}
                              leftAvatar={<Avatar icon={<Person />}/>}
                    />)
            
            }

    */

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(teacherBaseTheme)} >
        <div>
          
            <div style={{flex: 1, flexDirection: 'row'}}>
              <form onSubmit={this.addComment.bind(this)}>
                <TextField 
                  disabled={true}
                  hintText="Add comment"
                  value={this.state.commentValue}
                  onChange={this.handleChangeComment}
                  floatingLabelText="Comments disabled"
                  style={{width: "200px"}}
                  errorText= {this.state.errorText}
                  floatingLabelStyle={{fontSize: '0.9em'}}
                />       
                <FlatButton label="ADD" disabled={true} primary={true} onClick={this.addComment.bind(this)} style={{width: '30px'}}/>
              </form>

             

            </div>
            
          
          
        </div>
       </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);