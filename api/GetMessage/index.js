module.exports = async function (context, req) {
  const date = "2025-03-15T10:11:47.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

