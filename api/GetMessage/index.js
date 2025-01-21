module.exports = async function (context, req) {
  const date = "2025-01-21T11:09:37.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

