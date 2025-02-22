module.exports = async function (context, req) {
  const date = "2025-02-22T15:10:21.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

