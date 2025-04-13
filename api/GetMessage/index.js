module.exports = async function (context, req) {
  const date = "2025-04-13T15:12:31.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

