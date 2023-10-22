module.exports = async function (context, req) {
  const date = "2023-10-22T21:06:59.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

