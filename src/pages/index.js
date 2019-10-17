import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { requestPeople } from '../store/actions/people'

function Index(props){
    const { requestPeople } = props

    useEffect(() => {
        requestPeople()
    }, [requestPeople])

    
    return <h1>olá</h1>
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestPeople }, dispatch);

const mapStateToProps = state => ({
    filtro: state.people.filtro,
    people: state.people.people
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
