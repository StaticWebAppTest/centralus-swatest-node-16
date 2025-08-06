module.exports = async function (context, req) {
  const date = "2025-08-06T12:31:12.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

