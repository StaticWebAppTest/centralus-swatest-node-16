module.exports = async function (context, req) {
  const date = "2024-05-22T11:08:34.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

