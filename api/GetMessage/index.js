module.exports = async function (context, req) {
  const date = "2024-01-27T00:41:20.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

