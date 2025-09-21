module.exports = async function (context, req) {
  const date = "2025-09-21T12:23:23.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

