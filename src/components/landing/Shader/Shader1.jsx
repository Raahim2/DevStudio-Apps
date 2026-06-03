"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function Shader1() {
  // TypeScript type annotation removed for JS/JSX compatibility
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let isMounted = true
    let animationId = 0

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        
        for(int i = 0; i < 5; i++) {
          float fi = float(i);
          float intensity = lineWidth * (fi * fi);
          
          // Channel R (j = 0)
          color.r += intensity / abs(fract(t - 0.00 + fi * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
          
          // Channel G (j = 1)
          color.g += intensity / abs(fract(t - 0.01 + fi * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
          
          // Channel B (j = 2)
          color.b += intensity / abs(fract(t - 0.02 + fi * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
        }
        
        gl_FragColor = vec4(color, 1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.set(
        renderer.domElement.width,
        renderer.domElement.height
      )
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop (checks isMounted to prevent memory leak)
    const animate = () => {
      if (!isMounted) return
      animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      isMounted = false
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", onWindowResize)

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }

      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        background: "#000",
        overflow: "hidden",
      }}
    />
  )
}