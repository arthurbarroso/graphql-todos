import React from 'react';
import { Link } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';
//@ts-ignore
import environment from '../../relay/environment';

import { Container, Content } from './styles';


const query = graphql`
    query TodoListQuery {
      todos {
        edges {
        node {
          id
          title
          content
          done
        }
      }
      }
    }
`;
const TodoList = () => (
  <Container>
    <Content>
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error! {JSON.stringify(error)}</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          //@ts-ignore
          const { todos } = props;



          return (
            <div>
              {
                //@ts-ignore
                todos.edges.map(node => (
                  <div key={node.node.id}>
                    <h1>{node.node.title} {node.node.content} {node.node.done ? 'done' : 'not done'}</h1>
                  </div>
                ))
              }
            </div>
          )
        }}
      />
      <Link to="/create">
        <button type="button">NEW TODO
        </button>
      </Link>
      <button type="button">
        LOGOUT
      </button>
    </Content>
  </Container>
);
export default TodoList;