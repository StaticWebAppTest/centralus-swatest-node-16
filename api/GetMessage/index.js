module.exports = async function (context, req) {
  const date = "2025-08-13T08:19:31.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

