module.exports = async function (context, req) {
  const date = "2025-06-25T09:16:26.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

