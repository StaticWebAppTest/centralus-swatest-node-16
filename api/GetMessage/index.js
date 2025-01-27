module.exports = async function (context, req) {
  const date = "2025-01-27T16:14:48.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

