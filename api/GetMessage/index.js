module.exports = async function (context, req) {
  const date = "2025-04-14T10:14:28.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

