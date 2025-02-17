module.exports = async function (context, req) {
  const date = "2025-02-17T06:17:41.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

