module.exports = async function (context, req) {
  const date = "2025-05-13T17:12:24.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

