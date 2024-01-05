module.exports = async function (context, req) {
  const date = "2024-01-05T10:09:51.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

