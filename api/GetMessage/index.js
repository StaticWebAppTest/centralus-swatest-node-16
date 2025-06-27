module.exports = async function (context, req) {
  const date = "2025-06-27T17:11:56.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

