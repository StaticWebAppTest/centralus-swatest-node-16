module.exports = async function (context, req) {
  const date = "2025-05-20T21:12:24.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

