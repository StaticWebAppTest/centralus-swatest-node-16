module.exports = async function (context, req) {
  const date = "2024-04-19T10:15:44.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

