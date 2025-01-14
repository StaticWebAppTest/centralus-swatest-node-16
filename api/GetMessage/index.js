module.exports = async function (context, req) {
  const date = "2025-01-14T18:15:18.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

