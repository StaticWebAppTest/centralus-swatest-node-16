module.exports = async function (context, req) {
  const date = "2025-12-20T12:26:13.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

