module.exports = async function (context, req) {
  const date = "2024-01-01T23:09:21.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

