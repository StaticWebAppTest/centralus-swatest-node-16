module.exports = async function (context, req) {
  const date = "2025-08-25T12:27:49.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

