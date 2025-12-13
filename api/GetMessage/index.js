module.exports = async function (context, req) {
  const date = "2025-12-13T04:19:43.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

