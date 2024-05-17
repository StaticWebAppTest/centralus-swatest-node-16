module.exports = async function (context, req) {
  const date = "2024-05-17T12:17:16.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

