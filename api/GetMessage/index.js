module.exports = async function (context, req) {
  const date = "2025-01-14T09:12:06.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

