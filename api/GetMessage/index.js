module.exports = async function (context, req) {
  const date = "2025-11-17T08:20:48.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

