module.exports = async function (context, req) {
  const date = "2025-01-14T13:17:07.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

