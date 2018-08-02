export default function IEVersion() {
  const userAgent = navigator.userAgent;
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  const isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp.$1);
    return fIEVersion || 6;
  } else if (isEdge) {
    return 'edge';
  } else if (isIE11) {
    return 11;
  }
  return 9;
}
