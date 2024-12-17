module.exports = async function (context, req) {
  const date = "2024-12-17T21:09:48.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

