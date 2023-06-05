module.exports = async function (context, req) {
  const date = "2023-06-05T07:08:52.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

