import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class CoordinateAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            row: null,
            col: null,
            open: false
        }
    }

    handleClickOpen = () => { //팝업창 오픈버튼 누럿음션
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            id: null,
            name: '',
            row: null,
            col: null,
            open: false
        })


    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCoordinate()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            id: null,
            name: '',
            row: null,
            col: null,
            open: false
        })

    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    addCoordinate = () => {
        const url = '/api/coordinate';
        const formData = new FormData();
        formData.append('id', this.state.id);
        formData.append('name', this.state.name);
        formData.append('row', this.state.row);
        formData.append('col', this.state.col);
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return post(url, formData, config);
    }
    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>고객추가하기</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>좌표 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="번호" type="number" name="id" value={this.state.id} onChange={this.handleValueChange} /><br />
                        <TextField label="이름" type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br />
                        <TextField label="세로 위치" type="number" name="row" value={this.state.row} onChange={this.handleValueChange} /><br />
                        <TextField label="가로 위치" type="number" name="col" value={this.state.col} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default CoordinateAdd