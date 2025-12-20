module.exports = async function (context, req) {
  const date = "2025-12-20T14:12:48.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

