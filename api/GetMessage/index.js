module.exports = async function (context, req) {
  const date = "2022-12-07T16:13:24.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

