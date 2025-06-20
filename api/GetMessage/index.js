module.exports = async function (context, req) {
  const date = "2025-06-20T09:14:31.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

