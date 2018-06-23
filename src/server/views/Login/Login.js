import React from "react";
import { Card, Button, Checkbox, Form } from 'semantic-ui-react'

 const Login = () => (
    <Card >
    <Form>
    <Form.Field>
      <label>User name</label>
      <input placeholder='User name' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password'  type="password"/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <div style={{
        display: "flex",
        justifyContent: "center"
    }}>
    <Button type='submit'>Sign In</Button>
    <Button type='submit'>Sign Up</Button>
    </div>
  </Form>
  </Card>
);

export default Login;