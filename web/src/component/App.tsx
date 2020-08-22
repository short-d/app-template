import React, {Component} from 'react';
import styles from './App.module.scss';
import {SampleAppGraphqlService} from '../service/sampleapp.graphql.service';
import {Change} from '../entity/change';

interface IProps {
  sampleAppGraphQLService: SampleAppGraphqlService;
}

interface IProps {
  sampleAppGraphQLService: SampleAppGraphqlService;
}

interface IState {
  changes: Change[];
}

export class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      changes: []
    };
  }

  async componentDidMount() {
    const changeLog = await this.props.sampleAppGraphQLService.getChangeLog();
    this.setState({
      changes: changeLog.changes
    });
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Frontend Works!</h1>
        <h2>Change Log</h2>
        <ul className={styles.ChangeLog}>
          {this.state.changes.map(change =>
            <li>
              {`${change.title}`}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
