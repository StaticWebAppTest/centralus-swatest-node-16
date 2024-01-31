module.exports = async function (context, req) {
  const date = "2024-01-31T10:09:20.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

