module.exports = async function (context, req) {
  const date = "2025-01-13T17:10:42.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

