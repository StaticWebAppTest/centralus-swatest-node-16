module.exports = async function (context, req) {
  const date = "2025-01-15T02:11:08.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

