module.exports = async function (context, req) {
  const date = "2024-01-22T01:57:18.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

