module.exports = async function (context, req) {
  const date = "2025-09-20T09:11:54.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

