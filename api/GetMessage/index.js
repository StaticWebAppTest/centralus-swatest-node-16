module.exports = async function (context, req) {
  const date = "2025-11-20T09:14:58.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

