module.exports = async function (context, req) {
  const date = "2024-11-13T10:12:41.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

