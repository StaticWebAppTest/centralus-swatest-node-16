module.exports = async function (context, req) {
  const date = "2023-06-01T07:08:45.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

