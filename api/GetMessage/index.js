module.exports = async function (context, req) {
  const date = "2024-08-02T16:12:47.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

