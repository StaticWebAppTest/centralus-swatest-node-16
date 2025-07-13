module.exports = async function (context, req) {
  const date = "2025-07-13T13:23:57.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

