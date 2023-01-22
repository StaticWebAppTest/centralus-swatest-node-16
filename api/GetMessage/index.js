module.exports = async function (context, req) {
  const date = "2023-01-22T12:16:14.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

