module.exports = async function (context, req) {
  const date = "2023-07-20T09:08:55.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

