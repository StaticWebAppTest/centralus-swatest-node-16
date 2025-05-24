module.exports = async function (context, req) {
  const date = "2025-05-24T21:11:13.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

