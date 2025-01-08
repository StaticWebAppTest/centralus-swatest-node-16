module.exports = async function (context, req) {
  const date = "2025-01-08T21:11:08.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

