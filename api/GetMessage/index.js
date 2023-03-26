module.exports = async function (context, req) {
  const date = "2023-03-26T03:09:51.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

