import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  levelText: {
    marginBottom: 20
  },
  controls: {
    padding: theme.spacing.unit
  },
  playIcon: {
    height: 42,
    width: 42
  },
  noteButton: {
    height: 64,
    width: 64,
    textAlign: 'center',
    lineHeight: '64px',
    margin: 10
  }
})

class QuizCard extends Component {

  handleButtonClick = (event) => {
    const selectedNote = event.target.id
    if (this.props.question.answer === selectedNote) {
      console.log('Correct answer')
    } else {
      console.log('Wrong answer')
    }
  }

  render () {
    const { classes } = this.props
    return (
      <Card className='quiz-card'>
        <CardContent>
          <Typography className={classes.levelText} variant='h5' component='h2'>
            {`Level: ${this.props.level}`}
          </Typography>
          <IconButton aria-label='Play Again'>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        </CardContent>
        <div className={classes.controls}>
          {
            this.props.question.notes.map(note => {
              return (
                <Button
                  className={classes.noteButton}
                  aria-label={note}
                  id={note}
                  key={note}
                  variant='fab'
                  color='primary'
                  onClick={this.handleButtonClick}
                >
                  {note.toUpperCase()}
                </Button>
              )
            })
          }
        </div>
      </Card>
    )
  }
}

QuizCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(QuizCard)
