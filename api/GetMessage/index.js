module.exports = async function (context, req) {
  const date = "2024-04-19T22:08:18.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

