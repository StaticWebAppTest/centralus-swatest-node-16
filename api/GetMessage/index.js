module.exports = async function (context, req) {
  const date = "2024-01-15T10:10:49.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

