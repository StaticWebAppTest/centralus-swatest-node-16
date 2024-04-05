module.exports = async function (context, req) {
  const date = "2024-04-05T17:07:46.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

