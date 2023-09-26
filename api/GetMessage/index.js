module.exports = async function (context, req) {
  const date = "2023-09-26T13:12:34.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

