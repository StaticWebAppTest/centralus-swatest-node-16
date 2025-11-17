module.exports = async function (context, req) {
  const date = "2025-11-17T21:12:31.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

