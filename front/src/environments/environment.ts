export const environment = {
  production: false,
  URI: 'http://18.231.172.141/api/',
  MSG: {
    INF_DELETE: 'Esta seguro que desea eliminar el registro?',
    INF_DUPLIC: 'El registro seleccioando ya fue agregado.',

    ERR_SAVE: 'Tuvimos problemas al guardar el registro, vuelva a intentar.',
    ERR_DOWN: 'Tuvimos problemas al descargar el archivo, vuelva a intentar.',
    ERR_DELE: 'Tuvimos problemas al eliminar el registro, vuelva a intentar.',
    ERR_404: 'El archivo seleccioando no se encuentra disponible.',
    ERR_NET: 'El servicio no se encuentra disponible, intentelo más tarde.',

    SUC_SAVE: 'El registro fue guardado correctamente.',
    SUC_DELE: 'El registro fue eliminado correctamente.',
  
    CONFIRM: 'Confirmación!',
    ALERTA: 'Alerta!',
    GENIAL: 'Genial!',

    CLOSE_SESSION: 'Estas seguro que deseas cerrar sesión?',
    EXPIRED_SESSION: 'Su sessión a expirado, vuelva a ingresar!',
    DOWN_SESSION: 'Su sessión se cerrará en <b></b> segundos.'
  },
  STORE: {
    USER: 'user',
    TOKEN: 'token'
  }
};
