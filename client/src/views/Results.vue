<template>
  <div class="posts">
    <div id="header">
      <div id="header-content">
        <div id="title">
          <h1>Posts</h1>
        </div>
        <div id="link">
          <router-link v-bind:to="{ name: 'Practice Sheets' }">Return Home</router-link>
        </div>
      </div>
    </div>
    <div id="container">
      <div id="paper">
        <div id="page">
          <div v-if="posts.length > 0">
            <table>
              <tr class="header">
                <th>
                  <h3>Piece</h3>
                </th>
                <th>
                  <h3>Composer</h3>
                </th>
                <th>
                  <h3>Delete</h3>
                </th>
              </tr>
              <tr v-for="post in posts" :key="post.id">
                <td>{{ post.piece }}</td>
                <td>{{ post.composer }}</td>
                <td>
                  <a href="#" @click="deletePost(post._id)">❌</a>
                </td>
              </tr>
            </table>
          </div>
          <div v-else>
            There are no posts.. Lets add one now
            <br>
            <br>
            <router-link v-bind:to="{ name: 'Practice Sheets' }" class="button">Add Post</router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <h2>Download CSV File</h2>
      <ul class="link-list">
        <li>
          <a @click="downloadCSV()" class="button">data.CSV</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//  Importing PostsService to reteive posts
import PostsService from "@/services/PostsService";

export default {
  name: "posts",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data.posts;
    },
    async deletePost(id) {
      await PostsService.deletePost(id);
      this.$router.push({ name: "Results" });
    },
    async exportCSV(fields) {
      await PostsService.exportCSV(fields);
      this.$router.push({ name: "Results" });
    },
    //  CSV Download Methods
    objectToCSV(data) {
      //  Create Array to push data to
      const csvRows = [];

      //  Get Headers
      const headers = Object.keys(data[0]);
      csvRows.push(headers.join(","));

      //  Loop rows
      for (const row of data) {
        const values = headers.map(header => {
          const escaped = ("" + row[header]).replace(/"/g, '\\"');
          return `"${escaped}"`;
        });
        csvRows.push(values.join(","));
      }
      return csvRows.join("\n");
    },
    download(data) {
      const blob = new Blob([data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("hidden", "");
      a.setAttribute("href", url);
      a.setAttribute("download", "data.csv");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    async downloadCSV() {
      const jsonUrl = "https://radiant-beyond-76022.herokuapp.com/posts";
      const res = await fetch(jsonUrl);
      const json = await res.json();

      const data = json.posts.map(row => ({
        piece: row.piece,
        composer: row.composer,
        email: row.email
      }));

      const csvData = this.objectToCSV(data);
      this.download(csvData);
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i|Oswald|Source+Serif+Pro");
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

body {
  font-family: "Source Serif Pro", serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
h1 {
  font-family: "Oswald", "Montserrat", sans-serif;
  font-size: 3rem;
  color: $primary-color;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 0.75rem;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  margin-bottom: 5px;
}
h4 {
  font-size: 1rem;
}
h5 {
  font-size: 1rem;
  margin-top: 1rem;
}
h6 {
  font-family: "Source Serif Pro", serif;
  font-size: 1rem;
  font-style: italic;
  color: $secondary-color;
}
p {
  font-size: 1rem;
}
.inner-cell {
  color: rgba($black, 0.25);
  font-size: 0.75rem;
  font-weight: 700;
  font-style: italic;
}
a {
  text-decoration: none;

  &.button,
  &.router-link-active {
    display: inline-block;
    font-family: "Montserrat", sans-serif;
    background: $primary-color;
    color: white;
    padding: 20px 40px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 3px;
    cursor: pointer;
    transition: background 0.25s;
    &:hover {
      background: darken($primary-color, 10%);
    }
  }
}

/* Layout */
#messages {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 320px;

  .message {
    display: grid;
    grid-template-columns: 1fr 40px;
    padding: 20px;
    margin-top: 10px;
    box-shadow: 0 5px 20px rgb(100, 100, 100);
    font-style: italic;

    p {
      align-self: center;
      justify-self: center;
    }
    .button {
      padding: 10px;
      background: rgba(0, 0, 0, 0.2);
      color: white;
      border: 0;
      margin-left: 10px;
      align-self: center;
      justify-self: center;
    }

    &.alert {
      background: rgb(253, 251, 147);
      color: black;
    }
    &.error {
      background: rgb(131, 38, 38);
      color: white;
    }
    &.success {
      background: rgb(36, 126, 76);
      color: white;
    }
  }
}
#header {
  #header-content {
    background: white;
    display: grid;
    grid-template-columns: auto auto;
    padding: 20px;

    #title {
    }
    #link {
      text-align: right;
      padding: 20px 0;
    }
  }
}

#container {
  background: rgb(210, 210, 210);
  padding: 32px 0 72px;
}

#paper {
  background: white;
  box-shadow: 0 15px 50px rgb(100, 100, 100);
  margin: 0 200px;

  #page {
    padding: 20px;

    table {
      width: 100%;
      tr {
        th {
          text-align: left;
          border-bottom: 1px solid black;
          padding: 5px 5px 0;
        }
        td {
          padding: 10px 5px;
        }
      }
    }
  }
}

#footer {
  background: rgb(21, 21, 21);
  padding: 20px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: rgb(210, 210, 210);
  }
  ul.link-list {
    li {
      padding: 5px 0;
    }
  }
}
</style>