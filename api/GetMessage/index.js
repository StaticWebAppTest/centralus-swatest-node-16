module.exports = async function (context, req) {
  const date = "2023-02-22T22:08:21.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

