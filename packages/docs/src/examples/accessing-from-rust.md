# Accessing from Rust

When the [`ManagerExt`](https://docs.rs/tauri-plugin-pinia/latest/tauri_plugin_pinia/trait.ManagerExt.html) trait is in scope, you can access your stores from any type that implements the [Manager](https://docs.rs/tauri/2.0.0-rc/tauri/trait.Manager.html) trait (e.g. [`AppHandle`](https://docs.rs/tauri/2.0.0-rc/tauri/struct.AppHandle.html), [`Window`](https://docs.rs/tauri/2.0.0-rc/tauri/window/struct.Window.html), [`WebviewWindow`](https://docs.rs/tauri/2.0.0-rc/tauri/window/struct.Window.html)).

Note that all values are stored as [`serde_json::Value`](https://docs.rs/serde_json/latest/serde_json/enum.Value.html), so you will need to convert them to the desired type when accessing from Rust. You can check the [serde_json documentation](https://docs.rs/serde_json/latest/serde_json/) for more information.

A list of all available methods for the stores can be found [here](https://docs.rs/tauri-plugin-pinia/latest/tauri_plugin_pinia/struct.Store.html).

```rust
use tauri_plugin_pinia::ManagerExt;

#[tauri::command]
async fn get_counter(app: AppHandle) -> Option<String> {
  app
    .with_store("store", |store| {
      let counter = store
        .get("counter")
        .and_then(|it| it.as_str())
        .map(ToOwned::to_owned);

      Ok(counter)
    })
    .unwrap()
}
```