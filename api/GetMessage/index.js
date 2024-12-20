module.exports = async function (context, req) {
  const date = "2024-12-20T10:12:31.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

