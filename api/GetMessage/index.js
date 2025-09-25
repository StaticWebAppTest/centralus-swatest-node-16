module.exports = async function (context, req) {
  const date = "2025-09-25T22:09:56.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

