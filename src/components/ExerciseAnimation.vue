<script setup lang="ts">
defineProps<{
	exerciseId: string
}>()
</script>

<template>
	<div class="exercise-animation">
		<!-- EYE FAR NEAR -->
		<svg
			v-if="exerciseId === 'eye-far-near'"
			viewBox="0 0 200 200"
			class="anim-svg"
		>
			<g
				stroke="#5D6D7E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="M 30 100 Q 60 70 90 100 Q 60 130 30 100 Z"
					fill="#FFFFFF"
				/>
				<path
					d="M 110 100 Q 140 70 170 100 Q 140 130 110 100 Z"
					fill="#FFFFFF"
				/>
			</g>

			<!-- Left Pupil -->
			<circle
				r="8"
				fill="#5D6D7E"
			>
				<animate
					attributeName="cx"
					values="60; 75; 60; 60"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.375; 0.75; 1"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 1 0 1 1"
				/>
				<animate
					attributeName="cy"
					values="100; 105; 100; 100"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.375; 0.75; 1"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 1 0 1 1"
				/>
			</circle>
			<!-- Right Pupil -->
			<circle
				r="8"
				fill="#5D6D7E"
			>
				<animate
					attributeName="cx"
					values="140; 125; 140; 140"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.375; 0.75; 1"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 1 0 1 1"
				/>
				<animate
					attributeName="cy"
					values="100; 105; 100; 100"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.375; 0.75; 1"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 1 0 1 1"
				/>
			</circle>

			<!-- Distance marker lines -->
			<g
				stroke="#A8C8F0"
				stroke-width="3"
				stroke-linecap="round"
				fill="none"
				opacity="0.5"
			>
				<path d="M 85 50 L 115 50 M 90 60 L 110 60 M 95 70 L 105 70" />
			</g>

			<!-- Moving target dot -->
			<circle
				fill="#6B9FD4"
				cx="100"
			>
				<animate
					attributeName="cy"
					values="50; 140; 50; 50"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.375; 0.75; 1"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 1 0 1 1"
				/>
				<animate
					attributeName="r"
					values="4; 16; 4; 4"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.375; 0.75; 1"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 1 0 1 1"
				/>
			</circle>
			<!-- Focus circle on target -->
			<circle
				fill="none"
				stroke="#D4E1F9"
				stroke-width="2"
				cx="100"
			>
				<animate
					attributeName="cy"
					values="50; 140; 50; 50"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.375; 0.75; 1"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 1 0 1 1"
				/>
				<animate
					attributeName="r"
					values="8; 24; 8; 8"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.375; 0.75; 1"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 1 0 1 1"
				/>
			</circle>
		</svg>

		<!-- EYE CIRCLES -->
		<svg
			v-else-if="exerciseId === 'eye-circles'"
			viewBox="0 0 200 200"
			class="anim-svg"
		>
			<g
				stroke="#5D6D7E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="M 30 100 Q 60 50 90 100 Q 60 150 30 100 Z"
					fill="#FFFFFF"
				/>
				<path
					d="M 110 100 Q 140 50 170 100 Q 140 150 110 100 Z"
					fill="#FFFFFF"
				/>
			</g>

			<!-- Motion track -->
			<path
				d="M 60 85 A 15 15 0 1 1 59 85"
				fill="none"
				stroke="#A8C8F0"
				stroke-width="2"
				stroke-dasharray="4 4"
			/>
			<path
				d="M 140 85 A 15 15 0 1 1 139 85"
				fill="none"
				stroke="#A8C8F0"
				stroke-width="2"
				stroke-dasharray="4 4"
			/>

			<!-- Direction arrows -->
			<path
				d="M 75 95 L 75 102 L 68 100"
				fill="none"
				stroke="#A8C8F0"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<path
				d="M 155 95 L 155 102 L 148 100"
				fill="none"
				stroke="#A8C8F0"
				stroke-width="2"
				stroke-linecap="round"
			/>

			<!-- Left Pupil -->
			<circle
				r="8"
				fill="#6B9FD4"
			>
				<animateMotion
					path="M 60 85 A 15 15 0 1 1 59.9 85"
					dur="3s"
					repeatCount="indefinite"
				/>
			</circle>
			<!-- Right Pupil -->
			<circle
				r="8"
				fill="#6B9FD4"
			>
				<animateMotion
					path="M 140 85 A 15 15 0 1 1 139.9 85"
					dur="3s"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>

		<!-- EYE BLINK -->
		<svg
			v-else-if="exerciseId === 'eye-blink'"
			viewBox="0 0 200 200"
			class="anim-svg"
		>
			<g
				stroke="#5D6D7E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<!-- Left eye -->
				<path fill="#FFFFFF">
					<animate
						attributeName="d"
						values="M 30 100 Q 60 60 90 100 Q 60 140 30 100 Z; M 30 100 Q 60 100 90 100 Q 60 100 30 100 Z; M 30 100 Q 60 60 90 100 Q 60 140 30 100 Z"
						dur="0.4s"
						repeatCount="indefinite"
						keyTimes="0; 0.5; 1"
					/>
				</path>
				<!-- Right eye -->
				<path fill="#FFFFFF">
					<animate
						attributeName="d"
						values="M 110 100 Q 140 60 170 100 Q 140 140 110 100 Z; M 110 100 Q 140 100 170 100 Q 140 100 110 100 Z; M 110 100 Q 140 60 170 100 Q 140 140 110 100 Z"
						dur="0.4s"
						repeatCount="indefinite"
						keyTimes="0; 0.5; 1"
					/>
				</path>
			</g>

			<!-- Left pupil -->
			<circle
				cx="60"
				cy="100"
				r="8"
				fill="#6B9FD4"
			>
				<animate
					attributeName="opacity"
					values="1; 0; 1"
					dur="0.4s"
					repeatCount="indefinite"
					keyTimes="0; 0.5; 1"
				/>
			</circle>
			<!-- Right pupil -->
			<circle
				cx="140"
				cy="100"
				r="8"
				fill="#6B9FD4"
			>
				<animate
					attributeName="opacity"
					values="1; 0; 1"
					dur="0.4s"
					repeatCount="indefinite"
					keyTimes="0; 0.5; 1"
				/>
			</circle>

			<!-- Soft motion blur -->
			<g
				stroke="#A8C8F0"
				stroke-width="3"
				stroke-linecap="round"
			>
				<animate
					attributeName="opacity"
					values="0; 1; 0"
					dur="0.4s"
					repeatCount="indefinite"
					keyTimes="0; 0.5; 1"
				/>
				<line
					x1="60"
					y1="80"
					x2="60"
					y2="70"
				/>
				<line
					x1="45"
					y1="85"
					x2="40"
					y2="75"
				/>
				<line
					x1="75"
					y1="85"
					x2="80"
					y2="75"
				/>

				<line
					x1="140"
					y1="80"
					x2="140"
					y2="70"
				/>
				<line
					x1="125"
					y1="85"
					x2="120"
					y2="75"
				/>
				<line
					x1="155"
					y1="85"
					x2="160"
					y2="75"
				/>
			</g>
		</svg>

		<!-- EYE SQUEEZE -->
		<svg
			v-else-if="exerciseId === 'eye-squeeze'"
			viewBox="0 0 200 200"
			class="anim-svg"
		>
			<g
				stroke="#5D6D7E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<!-- Left eye -->
				<path fill="#FFFFFF">
					<animate
						attributeName="d"
						values="M 30 100 Q 60 70 90 100 Q 60 130 30 100 Z; M 30 100 Q 60 110 90 100 Q 60 110 30 100 Z; M 30 100 Q 60 110 90 100 Q 60 110 30 100 Z; M 30 100 Q 60 30 90 100 Q 60 170 30 100 Z; M 30 100 Q 60 70 90 100 Q 60 130 30 100 Z; M 30 100 Q 60 70 90 100 Q 60 130 30 100 Z"
						dur="4s"
						repeatCount="indefinite"
						keyTimes="0; 0.15; 0.775; 0.875; 0.95; 1"
					/>
				</path>
				<!-- Right eye -->
				<path fill="#FFFFFF">
					<animate
						attributeName="d"
						values="M 110 100 Q 140 70 170 100 Q 140 130 110 100 Z; M 110 100 Q 140 110 170 100 Q 140 110 110 100 Z; M 110 100 Q 140 110 170 100 Q 140 110 110 100 Z; M 110 100 Q 140 30 170 100 Q 140 170 110 100 Z; M 110 100 Q 140 70 170 100 Q 140 130 110 100 Z; M 110 100 Q 140 70 170 100 Q 140 130 110 100 Z"
						dur="4s"
						repeatCount="indefinite"
						keyTimes="0; 0.15; 0.775; 0.875; 0.95; 1"
					/>
				</path>
			</g>

			<!-- Pupils -->
			<circle
				cx="60"
				cy="100"
				fill="#6B9FD4"
			>
				<animate
					attributeName="r"
					values="8; 0; 0; 14; 8; 8"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.15; 0.775; 0.875; 0.95; 1"
				/>
			</circle>
			<circle
				cx="140"
				cy="100"
				fill="#6B9FD4"
			>
				<animate
					attributeName="r"
					values="8; 0; 0; 14; 8; 8"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.15; 0.775; 0.875; 0.95; 1"
				/>
			</circle>

			<!-- Tension lines (appear when squeezed) -->
			<g
				stroke="#D4E1F9"
				stroke-width="3"
				stroke-linecap="round"
			>
				<animate
					attributeName="opacity"
					values="0; 1; 1; 0; 0; 0"
					dur="4s"
					repeatCount="indefinite"
					keyTimes="0; 0.15; 0.775; 0.825; 0.95; 1"
				/>
				<path d="M 20 90 L 10 85 M 15 100 L 5 100 M 20 110 L 10 115" />
				<path d="M 100 90 L 95 80 M 100 110 L 95 120" />
				<path d="M 180 90 L 190 85 M 185 100 L 195 100 M 180 110 L 190 115" />
			</g>
		</svg>

		<!-- NECK RETRACTION -->
		<svg
			v-else-if="exerciseId === 'neck-retraction'"
			viewBox="0 0 200 200"
			class="anim-svg"
		>
			<g
				stroke="#5D6D7E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<!-- Shoulders / Torso base -->
				<path
					d="M 80 160 C 130 160 170 170 170 190 L 30 190 C 30 170 60 160 80 160 Z"
					fill="#D4E1F9"
				/>

				<!-- Moving Head Profile -->
				<g>
					<animateTransform
						attributeName="transform"
						type="translate"
						values="0 0; -20 0; -20 0; 0 0"
						dur="4s"
						repeatCount="indefinite"
						keyTimes="0; 0.15; 0.775; 1"
						calcMode="spline"
						keySplines="0.4 0 0.2 1; 1 0 1 1; 0.4 0 0.2 1"
					/>

					<!-- Head/Neck Silhouette -->
					<path
						d="M 120 40 
                   C 140 40 150 70 150 90 
                   C 150 110 130 130 110 140
                   C 105 142 90 160 90 180 
                   L 70 180
                   C 70 140 90 135 70 120
                   C 60 110 80 100 90 85
                   C 80 60 100 40 120 40 Z"
						fill="#FFFFFF"
					/>

					<!-- Profile lines (Ear, Jaw hint) -->
					<path
						d="M 120 90 L 120 105"
						fill="none"
					/>
					<path
						d="M 100 120 Q 115 130 130 115"
						fill="none"
					/>
				</g>
			</g>

			<!-- Motion Arrows -->
			<g
				stroke="#6B9FD4"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
			>
				<path d="M 170 100 L 180 100 M 175 95 L 180 100 L 175 105" />
				<path d="M 30 100 L 20 100 M 25 95 L 20 100 L 25 105" />
				<line
					x1="40"
					y1="100"
					x2="160"
					y2="100"
					stroke-width="2"
					stroke-dasharray="4 6"
					opacity="0.3"
				/>
			</g>
		</svg>

		<!-- NECK TILT -->
		<svg
			v-else-if="exerciseId === 'neck-tilt'"
			viewBox="0 0 200 200"
			class="anim-svg"
		>
			<g
				stroke="#5D6D7E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<!-- Torso -->
				<path
					d="M 80 150 L 120 150 L 160 190 L 40 190 Z"
					fill="#D4E1F9"
				/>

				<!-- Animated Head & Hand -->
				<g>
					<animateTransform
						attributeName="transform"
						type="rotate"
						values="0 100 150; 25 100 150; 25 100 150; 0 100 150"
						dur="5s"
						repeatCount="indefinite"
						keyTimes="0; 0.16; 0.56; 0.68"
					/>

					<!-- Neck -->
					<path
						d="M 85 110 L 85 150 M 115 110 L 115 150"
						fill="#FFFFFF"
					/>

					<!-- Head -->
					<ellipse
						cx="100"
						cy="70"
						rx="35"
						ry="45"
						fill="#FFFFFF"
					/>

					<!-- Guiding Hand -->
					<g>
						<animate
							attributeName="opacity"
							values="0; 1; 1; 0"
							dur="5s"
							repeatCount="indefinite"
							keyTimes="0; 0.1; 0.8; 0.9"
						/>
						<path
							d="M 125 0 Q 80 -10 60 40 C 60 60 70 80 75 60"
							fill="#E8EDF5"
							stroke="#5D6D7E"
						/>
					</g>
				</g>
			</g>

			<!-- Stretch Indicator & Arrow -->
			<g
				stroke="#A8C8F0"
				stroke-width="3"
				stroke-linecap="round"
				fill="none"
			>
				<animate
					attributeName="opacity"
					values="0; 1; 1; 0"
					dur="5s"
					repeatCount="indefinite"
					keyTimes="0; 0.16; 0.56; 0.68"
				/>

				<!-- Arrow -->
				<path
					d="M 100 15 A 60 60 0 0 1 150 45"
					stroke="#6B9FD4"
				/>
				<path
					d="M 140 37 L 150 45 L 140 50"
					stroke="#6B9FD4"
				/>

				<!-- Tension Arcs on left neck -->
				<path d="M 75 120 Q 60 135 75 150" />
				<path
					d="M 65 120 Q 50 135 65 150"
					opacity="0.6"
				/>
			</g>
		</svg>

		<!-- NECK TURN -->
		<svg
			v-else-if="exerciseId === 'neck-turn'"
			viewBox="0 0 200 200"
			class="anim-svg"
		>
			<g
				stroke="#5D6D7E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<!-- Torso -->
				<path
					d="M 80 150 L 120 150 L 170 190 L 30 190 Z"
					fill="#D4E1F9"
				/>
				<!-- Static Neck -->
				<path
					d="M 85 110 L 85 150 M 115 110 L 115 150"
					fill="#FFFFFF"
				/>

				<!-- Rotating/Nodding Head -->
				<g>
					<animateTransform
						attributeName="transform"
						type="rotate"
						values="0 100 140; -15 100 140; -15 100 140; 0 100 140"
						dur="5s"
						repeatCount="indefinite"
						keyTimes="0; 0.14; 0.64; 0.8"
					/>

					<ellipse
						cx="100"
						cy="70"
						rx="35"
						ry="45"
						fill="#FFFFFF"
					>
						<!-- Semi-profile effect (flattening + shifting) -->
						<animate
							attributeName="rx"
							values="35; 28; 28; 35"
							dur="5s"
							repeatCount="indefinite"
							keyTimes="0; 0.14; 0.64; 0.8"
						/>
						<animate
							attributeName="cx"
							values="100; 94; 94; 100"
							dur="5s"
							repeatCount="indefinite"
							keyTimes="0; 0.14; 0.64; 0.8"
						/>
					</ellipse>

					<!-- Nose/Profile Indicator -->
					<path fill="none">
						<animate
							attributeName="d"
							values="M 100 65 L 100 80; M 122 65 L 122 80; M 122 65 L 122 80; M 100 65 L 100 80"
							dur="5s"
							repeatCount="indefinite"
							keyTimes="0; 0.14; 0.64; 0.8"
						/>
					</path>

					<!-- Guiding Hand -->
					<g>
						<animate
							attributeName="opacity"
							values="0; 1; 1; 0"
							dur="5s"
							repeatCount="indefinite"
							keyTimes="0; 0.14; 0.64; 0.8"
						/>
						<path
							d="M 60 -10 Q 50 15 65 35 C 75 50 70 70 65 50"
							fill="#E8EDF5"
							stroke="#5D6D7E"
						/>
					</g>
				</g>
			</g>

			<!-- Gaze Line & Turn Arrow -->
			<g
				stroke="#6B9FD4"
				stroke-width="3"
				stroke-linecap="round"
				fill="none"
			>
				<animate
					attributeName="opacity"
					values="0; 1; 1; 0"
					dur="5s"
					repeatCount="indefinite"
					keyTimes="0; 0.14; 0.64; 0.8"
				/>
				<path
					d="M 115 85 Q 160 120 160 170"
					stroke-dasharray="6 6"
					stroke="#A8C8F0"
				/>
				<!-- Turn arrow -->
				<path d="M 130 50 A 40 10 0 0 1 110 55" />
				<path d="M 115 50 L 110 55 L 118 60" />
			</g>
		</svg>

		<!-- SHOULDER ROLL -->
		<svg
			v-else-if="exerciseId === 'shoulder-roll'"
			viewBox="0 0 200 200"
			class="anim-svg"
		>
			<g
				stroke="#5D6D7E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<ellipse
					cx="100"
					cy="50"
					rx="25"
					ry="35"
					fill="#FFFFFF"
				/>
				<path
					d="M 90 85 L 90 120 M 110 85 L 110 120"
					fill="#FFFFFF"
				/>

				<!-- Moving Shoulders/Torso -->
				<path fill="#D4E1F9">
					<animate
						attributeName="d"
						values="M 90 120 Q 100 125 110 120 Q 150 140 150 190 L 50 190 Q 50 140 90 120 Z;
                    M 90 120 Q 100 115 110 120 Q 150 120 160 190 L 40 190 Q 50 120 90 120 Z;
                    M 90 120 Q 100 135 110 120 Q 140 115 150 190 L 50 190 Q 60 115 90 120 Z;
                    M 90 120 Q 100 125 110 120 Q 150 140 150 190 L 50 190 Q 50 140 90 120 Z"
						dur="3s"
						repeatCount="indefinite"
						keyTimes="0; 0.25; 0.6; 1"
					/>
				</path>
			</g>

			<!-- Rotation Arrows -->
			<g
				stroke="#6B9FD4"
				stroke-width="3"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				opacity="0.8"
			>
				<!-- Left Shoulder -->
				<path
					d="M 60 135 A 20 20 0 1 1 59 135"
					stroke-dasharray="6 6"
				/>
				<path d="M 72 120 L 63 115 L 60 124" />

				<!-- Right Shoulder -->
				<path
					d="M 140 135 A 20 20 0 1 1 139 135"
					stroke-dasharray="6 6"
				/>
				<path d="M 128 120 L 137 115 L 140 124" />
			</g>

			<!-- Chest Expansion -->
			<g
				stroke="#A8C8F0"
				stroke-width="3"
				stroke-linecap="round"
				fill="none"
			>
				<animate
					attributeName="opacity"
					values="0; 0; 1; 0.5; 0"
					dur="3s"
					repeatCount="indefinite"
					keyTimes="0; 0.4; 0.6; 0.7; 1"
				/>
				<path d="M 100 130 L 100 170" />
				<path d="M 95 140 L 80 135 M 105 140 L 120 135" />
				<path d="M 95 155 L 75 160 M 105 155 L 125 160" />
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
	min-height: 200px;
}

.anim-svg {
	width: 200px;
	height: 200px;
	max-width: 100%;
}
</style>
