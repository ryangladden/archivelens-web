<script lang="ts">
	import { mdiEmail, mdiKey } from '@mdi/js';
    import '../../../../app.css';
	import TextInput from '$lib/components/login/TextInput.svelte';

    let email = '';
    let password = '';

    async function login(event: Event) {
        event.preventDefault()
        var res = await fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
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
    <div class="flex flex-col container w-sm h-100 border-2 rounded-lg shadow-xl">
        <div class="flex flex-row justify-center items-center flex-1">
            <img src="/archive-lens.svg" alt="Archive Lens" class="h-24">
            <p class="font-mono pb-6 text-4xl">rchive Lens</p>
        </div>
        <form on:submit={login} class="flex flex-col items-center justify-center gap-2 m-4">
            <TextInput type="email" bind:value={email} icon={ mdiEmail } />
            <TextInput type="password" bind:value={password} icon={ mdiKey } />
            <button type="submit" class="bg-blue-200 rounded-2xl p-1 w-20 font-mono hover:bg-blue-400">Login</button>
        </form>
    </div>
</div>