module.exports = async function (context, req) {
  const date = "2024-01-18T22:08:39.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

