module.exports = async function (context, req) {
  const date = "2025-05-20T06:19:49.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

