<script setup lang="ts">
defineProps<{
	exerciseId: string
}>()
</script>

<template>
	<div class="exercise-animation">
		<svg
			v-if="exerciseId === 'eye-far-near'"
			viewBox="0 0 100 100"
			class="anim-svg"
		>
			<path
				d="M 10 50 Q 50 10 90 50 Q 50 90 10 50 Z"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
			/>
			<circle
				cx="50"
				cy="50"
				fill="currentColor"
			>
				<animate
					attributeName="r"
					values="6;20;6"
					dur="4s"
					repeatCount="indefinite"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
				/>
			</circle>
		</svg>

		<svg
			v-else-if="exerciseId === 'eye-circles'"
			viewBox="0 0 100 100"
			class="anim-svg"
		>
			<path
				d="M 10 50 Q 50 10 90 50 Q 50 90 10 50 Z"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
			/>
			<circle
				r="12"
				fill="currentColor"
			>
				<animateMotion
					path="M 50,30 A 20,20 0 1,1 49.9,30"
					dur="4s"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>

		<svg
			v-else-if="exerciseId === 'eye-blink'"
			viewBox="0 0 100 100"
			class="anim-svg"
		>
			<path
				d="M 10 50 Q 50 90 90 50"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				fill="none"
			/>
			<path
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				fill="none"
			>
				<animate
					attributeName="d"
					values="M 10 50 Q 50 10 90 50; M 10 50 Q 50 90 90 50; M 10 50 Q 50 10 90 50"
					dur="1.5s"
					repeatCount="indefinite"
					keyTimes="0;0.1;0.2"
					calcMode="linear"
				/>
			</path>
			<circle
				cx="50"
				cy="50"
				r="16"
				fill="currentColor"
			>
				<animate
					attributeName="opacity"
					values="1;0;1"
					dur="1.5s"
					repeatCount="indefinite"
					keyTimes="0;0.1;0.2"
					calcMode="linear"
				/>
			</circle>
		</svg>

		<svg
			v-else-if="exerciseId === 'eye-squeeze'"
			viewBox="0 0 100 100"
			class="anim-svg"
		>
			<path
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
			>
				<animate
					attributeName="d"
					values="M 10 50 Q 50 10 90 50 Q 50 90 10 50 Z; M 10 50 Q 50 48 90 50 Q 50 52 10 50 Z; M 10 50 Q 50 -10 90 50 Q 50 110 10 50 Z; M 10 50 Q 50 10 90 50 Q 50 90 10 50 Z"
					dur="6s"
					repeatCount="indefinite"
					keyTimes="0;0.1;0.5;0.6"
				/>
			</path>
			<circle
				cx="50"
				cy="50"
				r="16"
				fill="currentColor"
			>
				<animate
					attributeName="opacity"
					values="1;0;1;1"
					dur="6s"
					repeatCount="indefinite"
					keyTimes="0;0.1;0.5;0.6"
				/>
			</circle>
			<g
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
			>
				<animate
					attributeName="opacity"
					values="0;1;0;0"
					dur="6s"
					repeatCount="indefinite"
					keyTimes="0;0.1;0.5;0.6"
				/>
				<path
					d="M 30 25 L 40 35 M 70 25 L 60 35 M 30 75 L 40 65 M 70 75 L 60 65"
				/>
			</g>
		</svg>

		<svg
			v-else-if="exerciseId === 'neck-retraction'"
			viewBox="0 0 100 100"
			class="anim-svg"
		>
			<g>
				<animateTransform
					attributeName="transform"
					type="translate"
					values="0 0; -18 0; 0 0; 0 0"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0;0.2;0.5;1"
				/>
				<circle
					cx="50"
					cy="30"
					r="16"
					stroke="currentColor"
					stroke-width="5"
					fill="none"
				/>
				<path
					d="M 66 30 L 76 35 L 66 40"
					stroke="currentColor"
					stroke-width="5"
					fill="none"
					stroke-linejoin="round"
				/>
			</g>
			<path
				d="M 50 46 L 50 85"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
			/>
			<path
				d="M 30 85 L 70 85"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
			/>
			<g
				opacity="0.3"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M 25 30 L 10 30 M 15 20 L 5 30 L 15 40" />
			</g>
		</svg>

		<svg
			v-else-if="exerciseId === 'neck-tilt'"
			viewBox="0 0 100 100"
			class="anim-svg"
		>
			<path
				d="M 20 85 Q 50 65 80 85"
				stroke="currentColor"
				stroke-width="5"
				fill="none"
				stroke-linecap="round"
			/>
			<g>
				<animateTransform
					attributeName="transform"
					type="rotate"
					values="0 50 65; 25 50 65; 0 50 65; -25 50 65; 0 50 65"
					dur="6s"
					repeatCount="indefinite"
				/>
				<path
					d="M 50 65 L 50 46"
					stroke="currentColor"
					stroke-width="5"
					stroke-linecap="round"
				/>
				<circle
					cx="50"
					cy="30"
					r="16"
					stroke="currentColor"
					stroke-width="5"
					fill="none"
				/>
				<g
					stroke="currentColor"
					stroke-width="4"
					stroke-linecap="round"
				>
					<animate
						attributeName="opacity"
						values="0;1;0;0;0;0"
						dur="6s"
						repeatCount="indefinite"
						keyTimes="0; 0.1; 0.4; 0.5; 0.51; 1"
					/>
					<path
						d="M 15 5 L 35 20"
						opacity="0.6"
					/>
				</g>
				<g
					stroke="currentColor"
					stroke-width="4"
					stroke-linecap="round"
				>
					<animate
						attributeName="opacity"
						values="0;0;0;0;1;0"
						dur="6s"
						repeatCount="indefinite"
						keyTimes="0; 0.5; 0.51; 0.6; 0.9; 1"
					/>
					<path
						d="M 85 5 L 65 20"
						opacity="0.6"
					/>
				</g>
			</g>
		</svg>

		<svg
			v-else-if="exerciseId === 'neck-turn'"
			viewBox="0 0 100 100"
			class="anim-svg"
		>
			<path
				d="M 20 85 Q 50 65 80 85"
				stroke="currentColor"
				stroke-width="5"
				fill="none"
				stroke-linecap="round"
			/>
			<g>
				<animateTransform
					attributeName="transform"
					type="rotate"
					values="0 50 65; 30 50 65; 0 50 65; -30 50 65; 0 50 65"
					dur="8s"
					repeatCount="indefinite"
				/>
				<path
					d="M 50 65 L 50 46"
					stroke="currentColor"
					stroke-width="5"
					stroke-linecap="round"
				/>
				<circle
					cx="50"
					cy="30"
					r="16"
					stroke="currentColor"
					stroke-width="5"
					fill="none"
				/>
				<g>
					<animateTransform
						attributeName="transform"
						type="translate"
						values="0 0; 8 8; 0 0; -8 8; 0 0"
						dur="8s"
						repeatCount="indefinite"
					/>
					<path
						d="M 43 27 L 43 27 M 57 27 L 57 27"
						stroke="currentColor"
						stroke-width="6"
						stroke-linecap="round"
					/>
					<path
						d="M 50 30 L 50 36"
						stroke="currentColor"
						stroke-width="4"
						stroke-linecap="round"
					/>
				</g>
			</g>
		</svg>

		<svg
			v-else-if="exerciseId === 'shoulder-roll'"
			viewBox="0 0 100 100"
			class="anim-svg"
		>
			<circle
				cx="50"
				cy="25"
				r="16"
				stroke="currentColor"
				stroke-width="5"
				fill="none"
			/>
			<path
				d="M 50 41 L 50 90"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
			/>
			<g
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				fill="none"
			>
				<animateTransform
					attributeName="transform"
					type="translate"
					values="-5 5; -5 -5; 5 -5; 5 5; -5 5"
					dur="3s"
					repeatCount="indefinite"
				/>
				<path d="M 20 55 Q 50 35 80 55" />
				<path d="M 20 55 L 20 90 M 80 55 L 80 90" />
			</g>
			<g
				stroke="currentColor"
				stroke-width="3"
				fill="none"
				opacity="0.4"
			>
				<path
					d="M 85 45 A 12 12 0 1 1 85 65"
					stroke-dasharray="4 4"
				/>
				<path d="M 80 45 L 85 45 L 85 50" />
				<path
					d="M 15 45 A 12 12 0 1 0 15 65"
					stroke-dasharray="4 4"
				/>
				<path d="M 20 45 L 15 45 L 15 50" />
			</g>
		</svg>
	</div>
</template>

<style scoped>
.exercise-animation {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	min-height: 120px;
}

.anim-svg {
	width: 120px;
	height: 120px;
	color: var(--accent-color);
	filter: drop-shadow(0 0 8px rgba(79, 172, 254, 0.4));
}
</style>
