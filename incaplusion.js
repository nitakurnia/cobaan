class mahasiswa{
    constructor(nama,jurusan){
    this._nama=nama;
    this._jurusan= jurusan;
    }
    get nama(){
        return this._nama;

    }
    set nama(namabaru){
        if(typeof namabaru==='string'){
            this._nama=namabaru;
        }
        else{
            console.log('nama harus berupa string');
        }

    }
    tampilinfo(){
        console.log('nama :${this._nama"}, jurusan :${this._jurusan}');
    }
}
