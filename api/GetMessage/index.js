module.exports = async function (context, req) {
  const date = "2025-11-30T12:25:39.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

