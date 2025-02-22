module.exports = async function (context, req) {
  const date = "2025-02-22T02:10:35.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

