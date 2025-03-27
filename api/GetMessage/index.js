module.exports = async function (context, req) {
  const date = "2025-03-27T14:12:35.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

