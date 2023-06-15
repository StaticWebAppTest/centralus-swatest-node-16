module.exports = async function (context, req) {
  const date = "2023-06-15T03:09:29.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

