module.exports = async function (context, req) {
  const date = "2023-05-15T12:17:28.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

