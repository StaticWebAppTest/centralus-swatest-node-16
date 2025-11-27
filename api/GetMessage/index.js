module.exports = async function (context, req) {
  const date = "2025-11-27T23:12:53.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

