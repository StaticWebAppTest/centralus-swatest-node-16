module.exports = async function (context, req) {
  const date = "2025-03-20T11:10:36.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

