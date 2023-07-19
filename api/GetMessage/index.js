module.exports = async function (context, req) {
  const date = "2023-07-19T23:08:33.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

