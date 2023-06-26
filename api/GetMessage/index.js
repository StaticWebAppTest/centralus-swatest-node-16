module.exports = async function (context, req) {
  const date = "2023-06-26T04:12:51.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

