module.exports = async function (context, req) {
  const date = "2024-02-03T02:12:34.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

