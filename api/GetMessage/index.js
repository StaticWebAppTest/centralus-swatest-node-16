module.exports = async function (context, req) {
  const date = "2024-04-04T01:43:37.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

