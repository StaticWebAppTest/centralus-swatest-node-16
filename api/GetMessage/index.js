module.exports = async function (context, req) {
  const date = "2024-09-15T03:17:20.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

