module.exports = async function (context, req) {
  const date = "2024-11-26T01:00:13.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

