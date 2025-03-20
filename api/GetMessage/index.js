module.exports = async function (context, req) {
  const date = "2025-03-20T20:13:42.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

