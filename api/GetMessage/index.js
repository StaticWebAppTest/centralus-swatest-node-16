module.exports = async function (context, req) {
  const date = "2025-05-15T11:11:38.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

