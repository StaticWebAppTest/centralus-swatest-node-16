module.exports = async function (context, req) {
  const date = "2024-06-22T20:09:28.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

