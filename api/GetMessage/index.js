module.exports = async function (context, req) {
  const date = "2025-11-27T13:27:16.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

