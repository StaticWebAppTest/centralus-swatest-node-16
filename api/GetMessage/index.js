module.exports = async function (context, req) {
  const date = "2023-03-27T21:08:13.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

