# visosim

1. Preinstallation

    - Ubuntu 20.04 (just check)

    ```
    gcc --version #9.3.0
    cmake --version #3.16.3
    python --version #2.7.18rc1
    ```
    - Normal server
    ```
    source /cvmfs/larsoft.opensciencegrid.org/products/setup
    setup python   v3_7_2 -f Linux64bit+3.10-2.17
    #ups list -aK+  cmake
    setup cmake v3_17_3 -f Linux64bit+3.10-2.17
    #ups list -aK+  gcc
    setup gcc v8_2_0 -f Linux64bit+3.10-2.17
    ups active
    ```
    - Oxford pplxint11 server (done)

2. Installation (follow https://emscripten.org/docs/getting_started/downloads.html) 
    - Ubuntu 20.04 and normal servers
    ```
    git clone https://github.com/emscripten-core/emsdk.git #in a directory you choose
    cd emsdk
  
    #use fixed versions
    git checkout 1.39.2 #important! Only this version works
    ./emsdk install --build=Release sdk-1.38.31-64bit binaryen-tag-1.38.31-64bit
    ./emsdk activate --build=Release sdk-1.38.31-64bit binaryen-tag-1.38.31-64bit

    source ./emsdk_env.sh --build=Release
    mkdir test; cd test
    cat <<EOF > hello.c 
    #include <stdio.h>

    int main(int argc, char ** argv) {
      printf("Hello World\n");
    }
    EOF
    emcc hello.c -o hello.html
    ```
    - Oxford pplxint11 server (done)

3. Setup
    - Ubuntu 20.04 and normal servers
    ```
    source /cvmfs/larsoft.opensciencegrid.org/products/setup
    setup python   v3_7_2 -f Linux64bit+3.10-2.17
    #ups list -aK+  cmake
    setup cmake v3_17_3 -f Linux64bit+3.10-2.17
    #ups list -aK+  gcc
    setup gcc v8_2_0 -f Linux64bit+3.10-2.17
    setup root v6_18_04d -q e19:prof #need ROOT here!
    ups active

    source <some_path_where_emsdk_was_creaetd>/emsdk_env.sh --build=Release
    ```
    - Oxford pplxint11 server
    ```
    ssh -Y <your_user_name>@pplxint11.physics.ox.ac.uk
    module load gcc/9.2.0
    export PATH=/data/t2k/xlu/software/CMake/cmake-3.16.0-rc3/bin:$PATH
    source /data/t2k/xlu/software/emsdk/emsdk_env.sh --build=Release
    ```
    
4. Run
    ```
    git clone git@github.com:luxianguo/visosim.git #to a directory you choose
    cd visosim; source setup.sh

    mkdir test #in a directory you choose
    cd test
    wget http://webhome.phy.duke.edu/~raw22/public/Prob3++/Prob3++.20181221.tar.gz
    tar -xvzf Prob3++.20181221.tar.gz; ln -s Prob3++.20181221 Prob3++; cd Prob3++
    make clean; emmake make emptyrule #most important step! can't just use make to build;
    ln -s libThreeProb_3.10.a libThreeProb.a
    ln -s $VISOSIM/src/visosim.cpp 
    emcc --bind visosim.cpp -L. -lThreeProb -o visosim.js  -I. -Wall  # -I. is also important
    ```
    The output files are visosim.{js,wasm}. Can diff with the official files in $VISOSIM/html/im/. Depending on the SDK version, there can be difference in the files, but VISOSim should not affected.



