module.exports = async function (context, req) {
  const date = "2025-02-09T10:11:51.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

