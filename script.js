document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const greetings = [
      { text: "नमस्कार", font: "'Baloo Tamma 2', cursive" }, // Marathi
      { text: "Hello", font: "Roboto, sans-serif" },
      { text: "Hola", font: "'Dancing Script', cursive" },
      { text: "Bonjour", font: "'Montserrat', sans-serif" },
      { text: "こんにちは", font: "'Noto Sans JP', sans-serif" },
      { text: "Ciao", font: "'Dancing Script', cursive" },
      { text: "안녕하세요", font: "'Noto Sans JP', sans-serif" },
      { text: "Hallo", font: "Roboto, sans-serif" },
      { text: "Olá", font: "'Montserrat', sans-serif" },
      { text: "Привет", font: "Roboto, sans-serif" },
      { text: "你好", font: "'Noto Sans JP', sans-serif" },
      { text: "नमस्ते", font: "'Baloo Tamma 2', cursive" } // Hindi
    ];
  
    let index = 0;
    let isAdding = true;
    let greetingIndex = 0;
  
    function type() {
      const greeting = greetings[greetingIndex];
      nameElement.style.fontFamily = greeting.font;
  
      if (isAdding) {
        if (index < greeting.text.length) {
          nameElement.textContent += greeting.text[index++];
          setTimeout(type, 200);
        } else {
          isAdding = false;
          setTimeout(type, 2000);
        }
      } else {
        if (index > 0) {
          nameElement.textContent = greeting.text.substring(0, --index);
          setTimeout(type, 100);
        } else {
          isAdding = true;
          greetingIndex = (greetingIndex + 1) % greetings.length;
          setTimeout(type, 200);
        }
      }
    }
  
    type();
  
    // Fetch and display server info
    fetch('/api/server-info')
      .then(response => response.json())
      .then(data => {
        document.getElementById('server-info').textContent = `Server Uptime: ${data.uptime}, 
        Load Average: ${data.load.join(', ')}, 
        Memory: ${data.memory.free} / ${data.memory.total}, 
        CPU: ${data.cpu}`;
       
      })
      .catch(error => {
        console.error('Error fetching server info:', error);
        document.getElementById('server-info').textContent = 'Error fetching server info';
      });
  });
  