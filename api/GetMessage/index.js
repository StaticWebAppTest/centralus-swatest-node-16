module.exports = async function (context, req) {
  const date = "2022-06-27T19:08:36.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

