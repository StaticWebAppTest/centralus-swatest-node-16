module.exports = async function (context, req) {
  const date = "2025-02-14T18:15:35.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

