module.exports = async function (context, req) {
  const date = "2025-04-06T09:11:35.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

