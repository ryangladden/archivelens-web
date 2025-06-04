<script lang="ts">
	import { mdiEmail, mdiKey } from '@mdi/js';
    import '../../../../app.css';
	import TextInput from '$lib/components/login/TextInput.svelte';

    let email = '';
    let password = '';
    let confirmPassword = '';
    let first_name = '';
    let last_name = '';

    async function login(event: Event) {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords do not match")
        }
        var res = await fetch("/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password
            })
        })
        if (res.ok) {
            window.location.href = "/documents"
        } else {
            console.error("Login failed", res.status);
            alert("Login failed");
        }

    }
</script>

<div class="flex justify-center items-center h-screen w-screen">
    <div class="flex flex-col container w-md h-150 border-2 rounded-lg shadow-xl">
        <div class="flex flex-row justify-center items-center flex-1">
            <img src="/archive-lens.svg" alt="Archive Lens" class="h-24">
            <p class="font-mono pb-6 text-4xl">rchive Lens</p>
        </div>
        <form on:submit={login} class="flex flex-col items-center justify-center gap-2 m-4">
            <div class="flex flex-row gap-2">
                <TextInput type="text" bind:value={first_name} label="First name" size="1"/>
                <TextInput type="text" bind:value={last_name} label="Last name" size="1"/>
            </div>
            <TextInput type="email" bind:value={email} icon={ mdiEmail } label="Email"/>
            <div></div>
            <TextInput type="password" bind:value={password} icon={ mdiKey } label="Password"/>
            <TextInput type="password" bind:value={confirmPassword} icon={ mdiKey } label="Confirm password" />
            <button type="submit" class="bg-blue-200 rounded-2xl p-1 w-44 font-mono hover:bg-blue-400">Create Account</button>
        </form>
    </div>
</div>