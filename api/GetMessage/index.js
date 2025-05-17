module.exports = async function (context, req) {
  const date = "2025-05-17T10:13:34.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

