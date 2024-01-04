module.exports = async function (context, req) {
  const date = "2024-01-04T21:08:34.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

