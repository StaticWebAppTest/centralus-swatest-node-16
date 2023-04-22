module.exports = async function (context, req) {
  const date = "2023-04-22T15:08:12.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

