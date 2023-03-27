#ifdef MAPCOLOR
uniform vec3 material_diffuse;
#endif
void getAlbedo() {
    dAlbedo = vec3(1.0);
#ifdef MAPCOLOR
    dAlbedo *= material_diffuse.rgb;
#endif
#ifdef MAPTEXTURE
    vec3 albedoBase = $DECODE(texture2DBias($SAMPLER, $UV, textureBias)).$CH;
    dAlbedo *= addAlbedoDetail(albedoBase);
#endif
#ifdef MAPVERTEX
    dAlbedo *= gammaCorrectInput(saturate(vVertexColor.$VC));
#endif
    if( !gl_FrontFacing){
        dAlbedo = vec3(0.0);
    }
}
