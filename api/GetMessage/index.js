module.exports = async function (context, req) {
  const date = "2025-03-13T12:24:34.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

