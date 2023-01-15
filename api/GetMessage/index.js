module.exports = async function (context, req) {
  const date = "2023-01-15T03:10:29.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

