module.exports = async function (context, req) {
  const date = "2025-02-10T15:12:37.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

