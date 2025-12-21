module.exports = async function (context, req) {
  const date = "2025-12-21T10:13:54.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

