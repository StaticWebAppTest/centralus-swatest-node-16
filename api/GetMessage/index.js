module.exports = async function (context, req) {
  const date = "2024-06-17T03:12:34.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

