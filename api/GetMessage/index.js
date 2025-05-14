module.exports = async function (context, req) {
  const date = "2025-05-14T13:25:48.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

