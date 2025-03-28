// Network Visualization Effect
document.addEventListener("DOMContentLoaded", () => {
    // Check if the network container exists
    const networkContainer = document.getElementById("network-container")
    if (!networkContainer) return
  
    // Canvas setup
    const canvas = document.createElement("canvas")
    networkContainer.appendChild(canvas)
    const ctx = canvas.getContext("2d")
  
    // Set canvas size
    function resizeCanvas() {
      canvas.width = networkContainer.offsetWidth
      canvas.height = networkContainer.offsetHeight
    }
  
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
  
    // Node class
    class Node {
      constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
      }
  
      update() {
        // Boundary check and position update
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.vx = -this.vx
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.vy = -this.vy
        }
  
        this.x += this.vx
        this.y += this.vy
      }
  
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
      }
    }
  
    // Create nodes
    const nodes = []
    const nodeCount = 30
    const colors = ["#1a2b5f", "#4169e1", "#6a5acd", "#8a2be2"]
  
    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 3 + 2
      const x = Math.random() * (canvas.width - radius * 2) + radius
      const y = Math.random() * (canvas.height - radius * 2) + radius
      const color = colors[Math.floor(Math.random() * colors.length)]
  
      nodes.push(new Node(x, y, radius, color))
    }
  
    // Create central graduation cap node
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
  
    // Draw graduation cap icon
    function drawGraduationCap(x, y, size) {
      ctx.fillStyle = "#c1272d"
  
      // Draw the cap
      ctx.beginPath()
      ctx.moveTo(x - size, y)
      ctx.lineTo(x + size, y)
      ctx.lineTo(x + size / 2, y - size / 2)
      ctx.lineTo(x - size / 2, y - size / 2)
      ctx.closePath()
      ctx.fill()
  
      // Draw the tassel
      ctx.beginPath()
      ctx.arc(x, y - size / 2, size / 4, 0, Math.PI * 2)
      ctx.fill()
  
      // Draw the base
      ctx.fillRect(x - size / 2, y, size, size / 4)
    }
  
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
  
      // Draw connections between nodes
      ctx.strokeStyle = "rgba(193, 39, 45, 0.2)"
      ctx.lineWidth = 0.5
  
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
  
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
  
        // Connect some nodes to the center
        const dxCenter = nodes[i].x - centerX
        const dyCenter = nodes[i].y - centerY
        const distanceToCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter)
  
        if (distanceToCenter < 150) {
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(centerX, centerY)
          ctx.stroke()
        }
      }
  
      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })
  
      // Draw graduation cap
      drawGraduationCap(centerX, centerY, 15)
  
      requestAnimationFrame(animate)
    }
  
    animate()
  })
  
  