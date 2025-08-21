<script lang="ts">
	import { Avatar as AvatarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	const colors = [
		"#06b6d4",
		"#0ea5e9",
		"#3b82f6",
		"#6366f1",
		"#8b5cf6",
		"#a855f7",
		"#d946ef",
		"#ec4899",
		"#f43f5e",
		"#ef4444",
		"#dc2626",
		"#fb923c",
		"#f97316",
		"#fbbf24",
		"#facc15",
		"#84cc16",
		"#22c55e",
		"#10b981",
		"#14b8a6",
	];

	const getHash = (string: string) => {
		let hash = 0
		for (const char of string) {
			hash = (hash << 5) - hash + char.charCodeAt(0);
			hash |= 0;
		}
		return hash
	};

	const getColor = (string: string) => {
		let hash = Math.abs(getHash(string));
		return colors[hash % 19]
	}


	let {
		ref = $bindable(null),
		class: className,
		initials = '',
		...restProps
	}: AvatarPrimitive.FallbackProps & { initials?: string } = $props();
</script>

<AvatarPrimitive.Fallback
	bind:ref
	data-slot="avatar-fallback"
	class={cn(`flex size-full items-center justify-center rounded-full`, className)}
	style={`background-color: ${getColor(initials)}; color: white`}
	{...restProps}
/>
