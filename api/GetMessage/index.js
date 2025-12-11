module.exports = async function (context, req) {
  const date = "2025-12-11T10:16:38.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

