module.exports = async function (context, req) {
  const date = "2025-12-13T10:13:30.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

