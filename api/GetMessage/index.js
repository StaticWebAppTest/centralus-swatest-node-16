module.exports = async function (context, req) {
  const date = "2025-04-13T09:13:46.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

