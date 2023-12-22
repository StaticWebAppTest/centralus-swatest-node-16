module.exports = async function (context, req) {
  const date = "2023-12-22T02:20:34.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

