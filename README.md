# terraform-credentials

This action setups credentials for terraform. Simply it just fills hostname and token in $HOME/.terraformrc file.

## Inputs

### `tf-api-token`

**Required** TFC API TOKEN.

### `tf-api-hostname`

**Required** TFC API HOSTNAME.

## Outputs

## Example usage

```bash
uses: mmomont/action-terraform-credentials@v1
with:
  tf-api-token: 'your-token'
```
