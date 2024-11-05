module.exports = async function (context, req) {
  const date = "2024-11-05T17:11:49.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

