module.exports = async function (context, req) {
  const date = "2025-08-15T18:19:58.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

