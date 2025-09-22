module.exports = async function (context, req) {
  const date = "2025-09-22T09:15:53.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

