module.exports = async function (context, req) {
  const date = "2024-04-20T04:12:53.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

