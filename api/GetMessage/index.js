module.exports = async function (context, req) {
  const date = "2025-02-14T09:12:32.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

