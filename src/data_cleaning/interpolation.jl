#Modifying impute function from https://github.com/invenia/Impute.jl/blob/master/src/imputors/interp.jl 

function forecast_interp(arr)
    R"""
    library(forecast)
    RInterp <- function(x) {
        return<-na.interp(x)

    }"""
    array =copy(arr)
    #Applies na.interp from Rob Hyndman's package forecast in R
    return convert(Array{Float16},rcall(:RInterp,array))
end

"""
Uses linear interpolation to fill for missing values. Missing and NaN are used interchangeably.  
# Example: 
```
julia> x = rand(1:10.0, 10)
julia> x[5] = NaN
julia> linear_interpolation(x)
```
"""
function linear_interpolation(array)
    if counter_nan(array)>50
        return zero(1:length(array))
    end
    data = copy(array)
    i = findfirst(!isnan, data) + 1
    while i < length(data)
        if isnan(data[i])
            prev_idx = i - 1
            next_idx = findnext(!isnan, data, i + 1)
            if next_idx !== nothing
                gap_sz = (next_idx - prev_idx) - 1

                diff = data[next_idx] - data[prev_idx]
                incr = diff / (gap_sz + 1)
                val = data[prev_idx] + incr
                for j in i:(next_idx - 1)
                    data[j] = val
                    val += incr
                end
                i = next_idx
            else
                break
            end
        end
        i += 1
    end
    if counter_nan(data)>0 
        data = forecast_interp(data)
    end
    return data
end