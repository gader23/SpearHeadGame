const Application = PIXI.Application;

const app= new Application({
    width:750,
    height:500,
    transparent:false,
    antialias:true
});

app.renderer.backgroundColor = 0x02AE39;

app.renderer.view.style.position='absoulte';

document.body.appendChild(app.view);

const style=new PIXI.TextStyle({
    fontFamily:'Montserrat',
    fontSize:48,
    fill: 'deepskyblue',
    stroke: '#ffffff',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur:4,
    dropShadowColor:'#000000'
});

const myText = new PIXI.Text('SpearHead Game!', style);
myText.x=200;

app.stage.addChild(myText);
