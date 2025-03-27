module.exports = async function (context, req) {
  const date = "2025-03-27T19:09:52.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

