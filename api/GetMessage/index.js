module.exports = async function (context, req) {
  const date = "2025-03-14T12:23:13.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

