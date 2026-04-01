## Webdev Lab Notebook - Setup Instructions

### Git & VS Code Installation

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Download [VS Code](https://code.visualstudio.com/) as your code editor.

   - Set Up VS Code to [launch from the command line](https://code.visualstudio.com/docs/editor/command-line#_launching-from-command-line).

   - Install the following extensions:
     - Live Server
     - Git Lens
     - Prettier

3. Sign up for a GitHub account and the [GitHub Student Pack](https://education.github.com/pack).

4. Set up [SSH keys for GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh).

### Setting up the Lab Notebook Repo (with SSH)

1. Navigate to your preferred folder and clone the repo. Use any folder name for <folder-name>. 

```console
$ git clone git@github.com:caterinasworld/webdev-lab-notebook.git <folder-name>

Cloning into '<folder-name>'...
remote: Enumerating objects: 163, done.
remote: Counting objects: 100% (163/163), done.
remote: Compressing objects: 100% (93/93), done.
remote: Total 163 (delta 80), reused 136 (delta 61), pack-reused 0
Receiving objects: 100% (163/163), 68.15 KiB | 2.20 MiB/s, done.
Resolving deltas: 100% (80/80), done.

```

2. Navigate into the newly created `<folder-name>` folder and rename the remote.

```console
$ cd <folder-name>/

$ git remote -v
origin   git@github.com:caterinasworld/webdev-lab-notebook.git (fetch)
origin   git@github.com:caterinasworld/webdev-lab-notebook.git (push)

$ git remote rename origin labs

$ git remote -v
labs    git@github.com:caterinasworld/webdev-lab-notebook.git (fetch)
labs    git@github.com:caterinasworld/webdev-lab-notebook.git (push)
```

3. Navigate to your GitHub account and create a new **public repo**, i.e. student-webdev-labs.

   Important: Do not create a README file. There’s already one in the repository you have cloned.

4. Add the public GitHub repository you created as a remote.

```console
$ git remote add origin git@github.com:student-username/student-webdev-labs.git

$ git remote -v
labs    git@github.com:caterinasworld/webdev-lab-notebook.git (fetch)
labs    git@github.com:caterinasworld/webdev-lab-notebook.git (push)
origin   git@github.com:student-username/student-webdev-labs.git (fetch)
origin   git@github.com:student-username/student-webdev-labs.git (push)
```

5. Push the files you cloned into the newly created private remote repository.

```console
$ git push -u origin main
Enumerating objects: 163, done.
Counting objects: 100% (163/163), done.
Delta compression using up to 4 threads
Compressing objects: 100% (74/74), done.
Writing objects: 100% (163/163), 68.15 KiB | 13.63 MiB/s, done.
Total 163 (delta 80), reused 163 (delta 80), pack-reused 0
remote: Resolving deltas: 100% (80/80), done.
To github.com:student-username/student-webdev-labs.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

6. Once 'main' is set up to track the remote origin, you can push changes with the following command.

```console
$ git push
```

7. When there are updates to the homework starter files, pull the new updates from the ‘homework’ remote.

```console
$ git pull labs main
```
