module.exports = async function (context, req) {
  const date = "2025-05-15T12:26:36.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

