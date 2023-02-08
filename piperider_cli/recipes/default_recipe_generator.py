import os
from pathlib import Path

from jsonschema.exceptions import ValidationError
from rich.console import Console
from rich.syntax import Syntax

from piperider_cli.recipes import DEFAULT_RECIPE_PATH, RecipeConfiguration, RecipeModel, RecipeDbtField, \
    RecipePiperiderField
from piperider_cli.recipes.utils import git_branch

console = Console()


def _create_base_recipe(is_dbt: bool = False, options: dict = None) -> RecipeModel:
    """
    Create the base recipe
    """
    base = RecipeModel()

    if git_branch() is not None:
        base.branch = 'main'

    if is_dbt:
        base.dbt = RecipeDbtField({
            'commands': [
                'dbt deps',
                'dbt test'
            ]
        })

    base.piperider = RecipePiperiderField({
        'commands': [
            'piperider run'
        ]
    })
    return base


def _create_target_recipe(is_dbt: bool = False, options: dict = None) -> RecipeModel:
    """
    Create the target recipe
    """
    target = RecipeModel()

    current_branch = git_branch()
    if current_branch is not None and current_branch != 'main':
        target.branch = current_branch

    if is_dbt:
        target.dbt = RecipeDbtField({
            'commands': [
                'dbt deps',
                'dbt build'
            ]
        })

    target.piperider = RecipePiperiderField({
        'commands': [
            'piperider run'
        ]
    })
    return target


def generate_default_recipe(overwrite_existing: bool = False,
                            is_dbt: bool = False, options: dict = None):
    """
    Generate the default recipe
    """
    recipe_path = DEFAULT_RECIPE_PATH
    if overwrite_existing is False and os.path.exists(recipe_path):
        console.print('[bold green]Piperider default recipe already exist[/bold green]')
        return 0

    base = _create_base_recipe(is_dbt)
    target = _create_target_recipe(is_dbt)
    recipe = RecipeConfiguration(base=base, target=target)

    try:
        Path(recipe_path).parent.mkdir(parents=True, exist_ok=True)
        recipe.dump(recipe_path)
    except ValidationError as e:
        console.print(f'[[bold red]Error[/bold red]] Recipe syntax error: {e}')
        return 1
    except Exception as e:
        console.print(f'[[bold red]Error[/bold red]] {e}')
        return 1

    return 0


def show_recipe_content(recipe_path=DEFAULT_RECIPE_PATH):
    """
    Display the recipe content
    """

    with open(recipe_path, 'r') as f:
        console.rule(f'Recipe: {os.path.basename(recipe_path)}')
        yaml_output = Syntax(f.read(), 'yaml', theme='monokai', line_numbers=True)
        console.print(yaml_output)
        console.rule('End of Recipe')


if __name__ == '__main__':
    generate_default_recipe(overwrite_existing=True)
