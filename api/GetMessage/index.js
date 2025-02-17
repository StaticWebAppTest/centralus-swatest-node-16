module.exports = async function (context, req) {
  const date = "2025-02-17T15:12:44.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

