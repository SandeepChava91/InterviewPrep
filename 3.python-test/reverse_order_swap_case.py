def reverse_words_order_and_swap_cases(sentence):

    output = sentence.split()
    arr_len = len(output)

    outstring = ""
    
    while ((arr_len-1) > -1 ):
        outstring = outstring + " " + output[arr_len-1].swapcase()
        arr_len = arr_len-1

    print(outstring.strip())

    # return output


reverse_words_order_and_swap_cases("aWESOME is cODING")