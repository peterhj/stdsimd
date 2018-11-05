var N = null;var searchIndex = {};
searchIndex["coresimd"]={"doc":"SIMD and vendor intrinsics support library.","items":[[0,"arch","coresimd","Platform dependent vendor intrinsics.",N,N],[0,"powerpc64","coresimd::arch","Platform-specific intrinsics for the `PowerPC64` platform.",N,N],[3,"vector_signed_char","coresimd::arch::powerpc64","PowerPC-specific 128-bit wide vector of sixteen packed `i8`",N,N],[3,"vector_unsigned_char","","PowerPC-specific 128-bit wide vector of sixteen packed `u8`",N,N],[3,"vector_bool_char","","PowerPC-specific 128-bit wide vector mask of sixteen packed elements",N,N],[3,"vector_signed_short","","PowerPC-specific 128-bit wide vector of eight packed `i16`",N,N],[3,"vector_unsigned_short","","PowerPC-specific 128-bit wide vector of eight packed `u16`",N,N],[3,"vector_bool_short","","PowerPC-specific 128-bit wide vector mask of eight packed elements",N,N],[3,"vector_signed_int","","PowerPC-specific 128-bit wide vector of four packed `i32`",N,N],[3,"vector_unsigned_int","","PowerPC-specific 128-bit wide vector of four packed `u32`",N,N],[3,"vector_bool_int","","PowerPC-specific 128-bit wide vector mask of four packed elements",N,N],[3,"vector_float","","PowerPC-specific 128-bit wide vector of four packed `f32`",N,N],[3,"vector_signed_long","","PowerPC-specific 128-bit wide vector of two packed `i64`",N,N],[3,"vector_unsigned_long","","PowerPC-specific 128-bit wide vector of two packed `u64`",N,N],[3,"vector_bool_long","","PowerPC-specific 128-bit wide vector mask of two elements",N,N],[3,"vector_double","","PowerPC-specific 128-bit wide vector of two packed `f64`",N,N],[5,"vec_add","","Vector add.",N,N],[5,"vec_madds","","Vector Multiply Add Saturated",N,[[["vector_signed_short"],["vector_signed_short"],["vector_signed_short"]],["vector_signed_short"]]],[5,"vec_mladd","","Vector Multiply Low and Add Unsigned Half Word",N,N],[5,"vec_mradds","","Vector Multiply Round and Add Saturated",N,[[["vector_signed_short"],["vector_signed_short"],["vector_signed_short"]],["vector_signed_short"]]],[5,"vec_msum","","Vector Multiply Sum",N,[[["t"],["b"],["u"]],["u"]]],[5,"vec_msums","","Vector Multiply Sum Saturated",N,[[["t"],["t"],["u"]],["u"]]],[5,"vec_madd","","Vector Multiply Add",N,[[["vector_float"],["vector_float"],["vector_float"]],["vector_float"]]],[5,"vec_nmsub","","Vector Negative Multiply Subtract",N,[[["vector_float"],["vector_float"],["vector_float"]],["vector_float"]]],[5,"vec_sum4s","","Vector Sum Across Partial (1/4) Saturated",N,[[["t"],["u"]],["u"]]],[5,"vec_perm","","Vector permute.",N,[[["t"],["t"],["vector_unsigned_char"]],["t"]]],[5,"vec_sum2s","","Vector Sum Across Partial (1/2) Saturated",N,[[["vector_signed_int"],["vector_signed_int"]],["vector_signed_int"]]],[5,"vec_mule","","Vector Multiply Even",N,[[["t"],["t"]],["u"]]],[5,"vec_mulo","","Vector Multiply Odd",N,[[["t"],["t"]],["u"]]],[5,"vec_xxpermdi","","Vector permute.",N,[[["t"],["t"],["u8"]],["t"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"clone","","",0,[[["self"]],["vector_signed_char"]]],[11,"clone","","",1,[[["self"]],["vector_unsigned_char"]]],[11,"clone","","",2,[[["self"]],["vector_bool_char"]]],[11,"clone","","",3,[[["self"]],["vector_signed_short"]]],[11,"clone","","",4,[[["self"]],["vector_unsigned_short"]]],[11,"clone","","",5,[[["self"]],["vector_bool_short"]]],[11,"clone","","",6,[[["self"]],["vector_signed_int"]]],[11,"clone","","",7,[[["self"]],["vector_unsigned_int"]]],[11,"clone","","",8,[[["self"]],["vector_bool_int"]]],[11,"clone","","",9,[[["self"]],["vector_float"]]],[11,"clone","","",10,[[["self"]],["vector_signed_long"]]],[11,"clone","","",11,[[["self"]],["vector_unsigned_long"]]],[11,"clone","","",12,[[["self"]],["vector_bool_long"]]],[11,"clone","","",13,[[["self"]],["vector_double"]]]],"paths":[[3,"vector_signed_char"],[3,"vector_unsigned_char"],[3,"vector_bool_char"],[3,"vector_signed_short"],[3,"vector_unsigned_short"],[3,"vector_bool_short"],[3,"vector_signed_int"],[3,"vector_unsigned_int"],[3,"vector_bool_int"],[3,"vector_float"],[3,"vector_signed_long"],[3,"vector_unsigned_long"],[3,"vector_bool_long"],[3,"vector_double"]]};
searchIndex["stdsimd"]={"doc":"SIMD and vendor intrinsics support library.","items":[[0,"arch","stdsimd","SIMD and vendor intrinsics module.",N,N],[0,"powerpc64","stdsimd::arch","Platform-specific intrinsics for the `PowerPC64` platform.",N,N],[5,"vec_sum2s","stdsimd::arch::powerpc64","Vector Sum Across Partial (1/2) Saturated",N,[[["vector_signed_int"],["vector_signed_int"]],["vector_signed_int"]]],[5,"vec_mulo","","Vector Multiply Odd",N,[[["t"],["t"]],["u"]]],[3,"vector_float","","PowerPC-specific 128-bit wide vector of four packed `f32`",N,N],[5,"vec_mladd","","Vector Multiply Low and Add Unsigned Half Word",N,N],[3,"vector_unsigned_short","","PowerPC-specific 128-bit wide vector of eight packed `u16`",N,N],[5,"vec_add","","Vector add.",N,N],[3,"vector_unsigned_long","","PowerPC-specific 128-bit wide vector of two packed `u64`",N,N],[3,"vector_bool_short","","PowerPC-specific 128-bit wide vector mask of eight packed elements",N,N],[5,"vec_sum4s","","Vector Sum Across Partial (1/4) Saturated",N,[[["t"],["u"]],["u"]]],[5,"vec_perm","","Vector permute.",N,[[["t"],["t"],["vector_unsigned_char"]],["t"]]],[5,"vec_msum","","Vector Multiply Sum",N,[[["t"],["b"],["u"]],["u"]]],[3,"vector_unsigned_int","","PowerPC-specific 128-bit wide vector of four packed `u32`",N,N],[5,"vec_xxpermdi","","Vector permute.",N,[[["t"],["t"],["u8"]],["t"]]],[3,"vector_bool_int","","PowerPC-specific 128-bit wide vector mask of four packed elements",N,N],[3,"vector_double","","PowerPC-specific 128-bit wide vector of two packed `f64`",N,N],[5,"vec_nmsub","","Vector Negative Multiply Subtract",N,[[["vector_float"],["vector_float"],["vector_float"]],["vector_float"]]],[3,"vector_signed_long","","PowerPC-specific 128-bit wide vector of two packed `i64`",N,N],[5,"vec_madds","","Vector Multiply Add Saturated",N,[[["vector_signed_short"],["vector_signed_short"],["vector_signed_short"]],["vector_signed_short"]]],[3,"vector_unsigned_char","","PowerPC-specific 128-bit wide vector of sixteen packed `u8`",N,N],[3,"vector_signed_char","","PowerPC-specific 128-bit wide vector of sixteen packed `i8`",N,N],[5,"vec_mule","","Vector Multiply Even",N,[[["t"],["t"]],["u"]]],[5,"vec_madd","","Vector Multiply Add",N,[[["vector_float"],["vector_float"],["vector_float"]],["vector_float"]]],[3,"vector_signed_int","","PowerPC-specific 128-bit wide vector of four packed `i32`",N,N],[3,"vector_bool_long","","PowerPC-specific 128-bit wide vector mask of two elements",N,N],[5,"vec_mradds","","Vector Multiply Round and Add Saturated",N,[[["vector_signed_short"],["vector_signed_short"],["vector_signed_short"]],["vector_signed_short"]]],[3,"vector_bool_char","","PowerPC-specific 128-bit wide vector mask of sixteen packed elements",N,N],[5,"vec_msums","","Vector Multiply Sum Saturated",N,[[["t"],["t"],["u"]],["u"]]],[3,"vector_signed_short","","PowerPC-specific 128-bit wide vector of eight packed `i16`",N,N],[14,"is_x86_feature_detected","stdsimd","",N,N],[14,"is_arm_feature_detected","","",N,N],[14,"is_aarch64_feature_detected","","",N,N],[14,"is_powerpc_feature_detected","","",N,N],[14,"is_mips_feature_detected","","",N,N],[14,"is_mips64_feature_detected","","",N,N],[14,"is_powerpc64_feature_detected","","",N,N],[11,"from","stdsimd::arch::powerpc64","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,N],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",13,[[["t"]],["t"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,N],[11,"fmt","","",13,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result",["error"]]]],[11,"clone","","",10,[[["self"]],["vector_signed_int"]]],[11,"clone","","",6,[[["self"]],["vector_double"]]],[11,"clone","","",0,[[["self"]],["vector_float"]]],[11,"clone","","",1,[[["self"]],["vector_unsigned_short"]]],[11,"clone","","",11,[[["self"]],["vector_bool_long"]]],[11,"clone","","",4,[[["self"]],["vector_unsigned_int"]]],[11,"clone","","",12,[[["self"]],["vector_bool_char"]]],[11,"clone","","",13,[[["self"]],["vector_signed_short"]]],[11,"clone","","",7,[[["self"]],["vector_signed_long"]]],[11,"clone","","",3,[[["self"]],["vector_bool_short"]]],[11,"clone","","",8,[[["self"]],["vector_unsigned_char"]]],[11,"clone","","",5,[[["self"]],["vector_bool_int"]]],[11,"clone","","",9,[[["self"]],["vector_signed_char"]]],[11,"clone","","",2,[[["self"]],["vector_unsigned_long"]]]],"paths":[[3,"vector_float"],[3,"vector_unsigned_short"],[3,"vector_unsigned_long"],[3,"vector_bool_short"],[3,"vector_unsigned_int"],[3,"vector_bool_int"],[3,"vector_double"],[3,"vector_signed_long"],[3,"vector_unsigned_char"],[3,"vector_signed_char"],[3,"vector_signed_int"],[3,"vector_bool_long"],[3,"vector_bool_char"],[3,"vector_signed_short"]]};
initSearch(searchIndex);
