module.exports = async function (context, req) {
  const date = "2023-08-15T02:13:09.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

