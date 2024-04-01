module.exports = async function (context, req) {
  const date = "2024-04-01T06:12:41.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

