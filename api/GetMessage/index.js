module.exports = async function (context, req) {
  const date = "2024-03-05T01:40:24.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

