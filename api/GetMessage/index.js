module.exports = async function (context, req) {
  const date = "2023-10-26T14:08:20.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

