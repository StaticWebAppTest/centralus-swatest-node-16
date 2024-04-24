module.exports = async function (context, req) {
  const date = "2024-04-24T02:19:36.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

