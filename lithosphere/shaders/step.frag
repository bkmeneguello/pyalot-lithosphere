/*
    :copyright: 2010 by Florian Boesch <pyalot@gmail.com>.
    :license: GNU AGPL v3 or later, see LICENSE for more details.
*/

#version 120 core

uniform sampler2D texture;
uniform float low, high;

void main(void){
    vec2 pos = gl_TexCoord[0].st; 
    vec4 height = texture2D(texture, pos);
    gl_FragColor = smoothstep(low, high, height);
}
