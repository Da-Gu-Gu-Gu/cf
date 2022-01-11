import react, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { DoubleSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Reflector} from 'three/examples/jsm/objects/Reflector'


const Canvas = () => {
    const montRef = useRef(null)

    useEffect(() => {
        const scene = new THREE.Scene()
        
        scene.background = new THREE.Color(0xa5515c)

        //fog
        const fog=new THREE.Fog(0xff0000,1,10)
        scene.add(fog)
        //render
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFShadowMap
        renderer.setClearColor(0xffffff)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.outputEncoding = THREE.sRGBEncoding
        montRef.current.appendChild(renderer.domElement)

        //camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(0, 5, 6.5)
        camera.lookAt(0,0.6,0)
        scene.add(camera)

        //light
        const ambientLight = new THREE.AmbientLight(0xffffff, 10)
        scene.add(ambientLight)

        const pointLight=new THREE.PointLight(0xffffff,1,100)
        scene.add(pointLight)

        const spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( 0, 15, 10 );
        scene.add( spotLight );

        const helper=new THREE.AxesHelper(5)
        scene.add(helper)

        //Model
        let model = null
        const loader = new GLTFLoader()
        loader.load('/heart.glb', (gltf) => {
            model = gltf
            model.scene.position.set(0, 1, 0)
            // model.scene.scale.set(0.25,0.25,0.25)
            scene.add(model.scene)
        })


        const mirror = new Reflector(
            new THREE.PlaneBufferGeometry(30, 30),
            {
                clipBias: 0.003,
                color: 0x889999,
                recursion: 1,
                textureWidth: window.innerWidth * window.devicePixelRatio,
                textureHeight: window.innerHeight * window.devicePixelRatio
            }
        )
        
        mirror.position.y = -1
        mirror.position.z = -1
        mirror.rotation.x=-Math.PI*0.5
        scene.add(mirror)


        const clock = new THREE.Clock()
        function animate() {
            const elapsedTime = clock.getElapsedTime()
            if(model){
                model.scene.rotation.y+=0.01
            }
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();


        //resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()

            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

    }, [])

    return (
        <div ref={montRef} className='canvas'></div>
    )
}

export default Canvas