window.onscroll = function() {
    var scrolled = window.scrollY;
    var movingObject = document.querySelector('.img');
    var movingText1 = document.querySelector('.p');
    var movingText2 = document.querySelector('.q');
    var movingText3 = document.querySelector('.r');
    var movingText4 = document.querySelector('.s');
    var movingText5 = document.querySelector('.scr');
    var movingText6 = document.querySelector('.about-p1');
    var movingText7 = document.querySelector('.about-p2');
    var movingText8 = document.querySelector('.about-header');
    var movingText9 = document.querySelector('.more');
    var movingText10 = document.querySelector('.mini-menu-container');
    var movingText11 = document.querySelector('.more2');
    var movingText12 = document.querySelector('.menu-container');
    var movingText13 = document.querySelector('.red');
    var movingText14 = document.querySelector('.yellow');


    // Adjust the scroll speed by changing the factor (e.g., 0.1 for slower scroll)
    var scrollFactor = 0.1;
    var scrollFactor2 = 1.3;
    var scrollFactor3 = 0.4;
    var scrollFactor4 = 0.13;

    movingObject.style.transform = 'translateY(' + (scrolled * scrollFactor) + 'px) rotate(' + (scrolled * scrollFactor) + 'deg) ';

    // Reduce the opacity of text elements as you scroll
    var opacity = 1 - scrolled / 500; // Change 500 to adjust when the opacity reduction starts
    opacity = Math.max(0, opacity); // Ensure opacity doesn't go below 0

    var opacity1 = scrolled / 900; // Change 500 to adjust when the opacity increase starts
    opacity1 = Math.min(1, opacity1); // Ensure opacity doesn't go abo

    var opacity4 = scrolled / 600; // Change 500 to adjust when the opacity increase starts
    opacity4 = Math.min(1, opacity4); // Ensure opacity doesn't go abo


    var opacity2 = scrolled / 1000; // Change 500 to adjust when the opacity increase starts
    opacity2 = Math.min(1, opacity2); // Ensure opacity doesn't go abo

    var opacity3 = (scrolled / 1) * 20; // Change 500 to adjust when the opacity increase starts
    opacity3 = Math.min(350, opacity3); // Ensure opacity doesn't go abo

    var width10 = (scrolled / 200) * 12 * scrollFactor2;  // Change 500 to adjust when the opacity increase starts
    width10 = Math.min(100, width10); // Ensure opacity doesn't go abo

    var width = (scrolled / 200) * 12 * scrollFactor2;  // Change 500 to adjust when the opacity increase starts
    width = Math.min(100, width); // Ensure opacity doesn't go abo
    
    // Increase the height of elements as you scroll
    var height = (scrolled / 300) * 4 * scrollFactor2; // Adjust divisor and multiplier for a larger height increase
    height = Math.min(100, height); // Ensure height doesn't go above 100

    var width1 = (scrolled / 200) * 18 * scrollFactor3;  // Change 500 to adjust when the opacity increase starts
    width1 = Math.min(100, width1); // Ensure opacity doesn't go abo
    
    // Increase the height of elements as you scroll
    var height1 = (scrolled / 300) * 8 * scrollFactor3; // Adjust divisor and multiplier for a larger height increase
    height1 = Math.min(100, height1); // Ensure height doesn't go above 100

    var width2 = (scrolled / 200) * 20 * scrollFactor4;  // Change 500 to adjust when the opacity increase starts
    width = Math.min(10, width); // Ensure opacity doesn't go abo

    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
    
        // Assuming you have an element with the class .your-element
        var yourElement = document.querySelector('.activity');
    
        if (scrolled > 2800) {
            // If scrolled past 3000 pixels, set position to relative and adjust other styles
            yourElement.style.position = 'relative';
        } else {
            // If not scrolled past 3000 pixels, set position to sticky and adjust other styles
            yourElement.style.position = 'sticky';
            yourElement.style.top = '0'; // Adjust other styles as needed

        }
    });


    // window.addEventListener('scroll', function () {
    //     var scrolled = window.scrollY;
    
    //     // Assuming you have an element with the class .your-element
    //     var Element = document.querySelector('.ping');
    
    //     if (scrolled > 4200) {
    //         // If scrolled past 3000 pixels, set position to relative and adjust other styles
    //         Element.style.opacity = '1';
    //         Element.style.width = '100%'; 
    //     } else {
    //         // If not scrolled past 3000 pixels, set position to sticky and adjust other styles
    //         Element.style.opacity = '0';
    //         Element.style.width = '50%'; // Adjust other styles as needed

    //     }
    //     Element.style.transition = 'opacity 1s ease, width 1s ease';
    // });

// Assuming you have an element with the class .sponsors
var Element = document.querySelector('.sponsors');

var options = {
    threshold: 0.1 // Adjust the threshold as needed
};

var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        // If the element is in the viewport, set position to relative and adjust other styles
        Element.style.opacity = '1';
        Element.style.width = '100%';
    } else {
        // If the element is not in the viewport, set position to sticky and adjust other styles
        Element.style.opacity = '0';
        Element.style.width = '50%'; // Adjust other styles as needed
    }
    Element.style.transition = 'opacity 1s ease, width 1s ease';
}, options);

observer.observe(Element);

var Element2 = document.querySelector('.ping');

var options = {
    threshold: 0.5 // Adjust the threshold as needed
};

var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        // If the element is in the viewport, set position to relative and adjust other styles
        Element2.style.opacity = '1';
        Element2.style.width = '100%';
    } else {
        // If the element is not in the viewport, set position to sticky and adjust other styles
        Element2.style.opacity = '0';
        Element2.style.width = '50%';
    }
    Element2.style.transition = 'opacity 1s ease, width 1s ease';
}, options);

observer.observe(Element2);


    
    movingText1.style.opacity = opacity;
    movingText2.style.opacity = opacity;
    movingText3.style.opacity = opacity;
    movingText4.style.opacity = opacity;
    movingText5.style.opacity = opacity;
    movingText6.style.opacity = opacity1;
    movingText7.style.opacity = opacity1;
    movingText8.style.opacity = opacity1;
    movingText9.style.width = width10 +'%';
    movingText9.style.height = height +'%';
    movingText9.style.fontSize = opacity3 + '%';
    movingText10.style.opacity = opacity4;
    movingText11.style.width = width1 +'%';
    movingText11.style.height = height1 +'%';
    movingText12.style.opacity = opacity;
    movingText13.style.width = width2 + '%';
    movingText14.style.width = width2 + '%';
};

// let prevScrollPos = window.pageYOffset;

// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;

//     if (currentScrollPos === 0) {
//         // At the top of the page
//         document.querySelector('.menu-container').style.opacity = '1';
//         document.querySelector('.mini-menu-container').style.opacity = '0';
//     } else if (prevScrollPos > currentScrollPos) {
//         // Scrolling up
//         // document.querySelector('.menu-con').style.opacity = '1';
//         if (currentScrollPos === 0) {
//             document.querySelector('.mini-menu-container').style.opacity = '0';
//         }
//     } else {
//         // Scrolling down
//         document.querySelector('.menu-container').style.opacity = '0'; // Adjust this value based on your design
//         document.querySelector('.mini-menu-container').style.opacity = '1';
//     }

//     prevScrollPos = currentScrollPos;
// }


function product(){
    window.location.href = 'products.html'
}

function analytics(){
    window.location.href = 'analytics.html'
}

function wins(){
    window.location.href = 'wins.html'
}

function training(){
    window.location.href = 'trainings.html'
}

function annualdinner(){
    window.location.href = 'annualdinner.html'
}

function news(){
  window.location.href = 'news.html'
}

function login(){
  window.location.href = 'login.html'
}

function joinapusite() {
  window.location.href = 'register.html';
}

function joinapubc() {
  window.open('https://studentaffairold.sites.apiit.edu.my/sports/', '_blank');
}

function sukma(){
  window.location.href = 'sukma.html'
}

function sea(){
  window.location.href = 'sea.html'
}

function selangor(){
  window.location.href = 'selangor.html'
}

function asean(){
  window.location.href = 'asean.html'
}

function opens(){
  window.location.href = 'open.html'
}

function apusite() {
  window.open('https://new.apu.edu.my/', '_blank');
}

function ins(){
  window.open('https://www.instagram.com/asiapacificuniversity/?hl=en', '_blank');
}

function fb(){
  window.open('https://www.facebook.com/apubadmintonclub/', '_blank');
}

function email(){
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=admin@apu.edu.my');
}




  document.addEventListener('DOMContentLoaded', function () {
    const svg = document.querySelector('.svg');
    const path = svg.querySelector('path');

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      const percentage = distance / totalDistance;
      const pathLength = path.getTotalLength();

      // Increase the speed by multiplying percentage by a larger factor (e.g., 2)
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage )}`;
    };

    scroll();
    window.addEventListener('scroll', scroll);
  });

  function toggleSubmenu() {
    var submenu = document.getElementById('exploreSubmenu');

    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';

    } else {
        submenu.style.display = 'none';
    }
}

setTimeout(function(){
    $('.loader_bg').fadeToggle();
},3000);

  
  function toggleIcon() {
    const buyButton = document.querySelector('.buy');
    buyButton.classList.toggle('clicked');
}


function toggleIcon2() {
    const Button = document.querySelector('.buy2');
    Button.classList.toggle('clicked');
}

function toggleIcon3() {
    const Button1 = document.querySelector('.buy3');
    Button1.classList.toggle('clicked');
}

function toggleIcon4() {
    const Button2 = document.querySelector('.buy4');
    Button2.classList.toggle('clicked');
}


function changeImage(newSrc) {
    document.querySelector('.userimg').src = newSrc;
}

function changeImage2(newSrc) {
    document.querySelector('.userimg-mini').src = newSrc;
}


// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
    series: [
      {
        data: [10, 8, 6, 4, 2],
        name: 'Products',
      },
    ],
    chart: {
      type: 'bar',
      background: 'transparent',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: true,
      position: 'top',
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2,
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
    xaxis: {
      categories: ['Tournaments', 'League', 'Casual', 'Open', 'Sukma'],
      title: {
        style: {
          color: '#f5f7ff',
        },
      },
      axisBorder: {
        show: true,
        color: '#55596e',
      },
      axisTicks: {
        show: true,
        color: '#55596e',
      },
      labels: {
        style: {
          colors: '#f5f7ff',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Count',
        style: {
          color: '#f5f7ff',
        },
      },
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        style: {
          colors: '#f5f7ff',
        },
      },
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );
  barChart.render();
  
  // AREA CHART
  const areaChartOptions = {
    series: [
      {
        name: 'Girls',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Boys',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#00ab57', '#d50000'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical',
      },
      type: 'gradient',
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: true,
      position: 'top',
    },
    markers: {
      size: 6,
      strokeColors: '#1b2635',
      strokeWidth: 3,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          colors: '#f5f7ff',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Registers',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Gender',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();
  


