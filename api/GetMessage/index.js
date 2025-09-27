module.exports = async function (context, req) {
  const date = "2025-09-27T09:11:29.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

