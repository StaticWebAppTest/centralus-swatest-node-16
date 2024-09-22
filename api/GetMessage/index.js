module.exports = async function (context, req) {
  const date = "2024-09-22T16:12:34.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

