<script lang="ts">
  import Logo from "../assets/login_logo.png";
  import { Input, Card, Button } from "../components/login";
  let username: string = "";
  let email: string = "";
  let firstname: string = "";
  let lastname: string = "";
  let password: string = "";
  let passwordAgain: string = "";
  const register = () => {
    let test = password == passwordAgain ? true : false;
    if (!test) {
      alert("Passwords doesn't match. Please try again.");
      return false;
    }
  };
</script>

<main class="h-full w-full flex items-center justify-center">
  <form id="registerForm" on:submit|preventDefault={register}>
    <Card class="border border-red-400">
      <img src={Logo} alt="" class="w-48" />
      <Input
        bind:value={username}
        name="username"
        label="Username"
        patter="[a-zA-Z0-9]"
        minLength="8"
        maxLength="16"
        required
      />
      <Input
        bind:value={email}
        label="Email"
        type="email"
        required
        title="Enter valid Email"
      />
      <Input bind:value={firstname} label="Firstname" required />
      <Input bind:value={lastname} label="Lastname" required />
      <Input bind:value={password} type="password" label="Password" required />
      <Input
        bind:value={passwordAgain}
        type="password"
        label="Password Again"
        required
      />
      <Button>Register</Button>
      <a href="/login" class="text-center text-blue-500">
        Do you have an account? Login.!
      </a>
    </Card>
  </form>
</main>
