module.exports = async function (context, req) {
  const date = "2023-11-22T21:08:16.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

