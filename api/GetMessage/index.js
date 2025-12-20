module.exports = async function (context, req) {
  const date = "2025-12-20T11:11:14.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

