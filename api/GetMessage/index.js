module.exports = async function (context, req) {
  const date = "2024-06-07T01:56:45.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

