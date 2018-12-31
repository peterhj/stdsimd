#![feature(abi_ptx)]
//#![feature(core_intrinsics)]
#![feature(no_core)]
#![feature(stdsimd)]
#![no_core]
//#![no_std]

extern crate coresimd;

use coresimd::arch::nvptx::*;

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__syncthreads() {
  _syncthreads();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__block_dim_x() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _block_dim_x();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__block_dim_y() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _block_dim_y();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__block_dim_z() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _block_dim_z();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__block_idx_x() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _block_idx_x();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__block_idx_y() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _block_idx_y();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__block_idx_z() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _block_idx_z();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__grid_dim_x() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _grid_dim_x();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__grid_dim_y() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _grid_dim_y();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__grid_dim_z() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _grid_dim_z();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__thread_idx_x() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _thread_idx_x();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__thread_idx_y() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _thread_idx_y();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel__thread_idx_z() {
  let mut p: *mut i32 = 4096 as *mut i32;
  *p = _thread_idx_z();
}

#[no_mangle]
pub unsafe extern "ptx-kernel" fn _stdsimd_nvptx_test_kernel_trap() {
  trap();
}
