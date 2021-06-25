@testset "testing size" begin
    for i in 1:10
        x = rand(10:30)
        y = rand(10:30)
        z = rand(10:30)
        rad = rand(20:100.0, x,y,z)
        for j in 1:rand(1:20)
            rad[rand(1:x),rand(1:y),rand(1:z)] = NaN
        end
        clouds = rand(1:30, x,y,z)
        mask = rand(0:1,x,y)
        @test size(bias_correction_datacube(rad,clouds,mask)) == (x,y,z)
    end
end
