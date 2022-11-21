<script lang="ts">
  import Logo from "../assets/login_logo.png";
  import { Input, Card, Button } from "../components/login";
  let email: string = "";
  let password: string = "";
  let passwordAgain: string = "";
  const submitForm = () => {
    let test = password == passwordAgain ? true : false;
    console.log(test);
    return test;
  };
</script>

<main class="h-full w-full flex items-center justify-center">
  <form id="loginForm" class="m-8" on:submit|preventDefault={submitForm}>
    <Card>
      <img src={Logo} alt="" class="w-48" />
      <Input
        bind:value={email}
        label="Email"
        type="email"
        required
        title="Enter valid Email"
      />

      <Input bind:value={password} type="password" label="Password" required />
      <Button>Login</Button>
      <a href="/register" class="text-center text-blue-500">
        Dont you have an account? Register.!
      </a>
    </Card>
  </form>
</main>
