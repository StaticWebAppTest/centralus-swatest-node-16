module.exports = async function (context, req) {
  const date = "2023-01-26T12:19:15.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

