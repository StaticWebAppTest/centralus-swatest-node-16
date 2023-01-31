module.exports = async function (context, req) {
  const date = "2023-01-31T12:17:46.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

