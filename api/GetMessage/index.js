module.exports = async function (context, req) {
  const date = "2024-07-24T10:12:29.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

