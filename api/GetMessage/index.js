module.exports = async function (context, req) {
  const date = "2024-11-17T12:20:58.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

