// clip plane equation `Ax + By + Cz = D`
uniform int clip_enabled;
uniform vec4 clip_bound;

#ifndef CLIPPLANE
#define CLIPPLANE
uniform vec4 clip_plane;
#endif
// 
void main(void) {
    if (clip_enabled == 1) {
        // if position is bellow clip plane
        // abs(vPositionW.x - clip_bound.x)< clip_bound.z && abs(vPositionW.z - clip_bound.y)< clip_bound.w && 
        if (dot(vec4(vPositionW, 1.0), clip_plane) < 0.0) {
            // do not render fragment
            discard;
        }
    
    }

    dDiffuseLight = vec3(0);
    dSpecularLight = vec3(0);
    dReflection = vec4(0);
    dSpecularity = vec3(0);


    