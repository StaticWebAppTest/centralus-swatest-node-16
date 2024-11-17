module.exports = async function (context, req) {
  const date = "2024-11-17T13:17:48.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

