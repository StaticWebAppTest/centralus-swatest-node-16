module.exports = async function (context, req) {
  const date = "2025-08-12T10:15:12.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

