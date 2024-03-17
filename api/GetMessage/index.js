module.exports = async function (context, req) {
  const date = "2024-03-17T21:09:41.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

