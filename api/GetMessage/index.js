module.exports = async function (context, req) {
  const date = "2024-06-01T15:08:56.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

