module.exports = async function (context, req) {
  const date = "2024-04-27T00:42:29.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

