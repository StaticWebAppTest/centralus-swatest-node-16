module.exports = async function (context, req) {
  const date = "2025-02-25T19:09:58.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

