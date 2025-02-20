module.exports = async function (context, req) {
  const date = "2025-02-20T12:23:13.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

