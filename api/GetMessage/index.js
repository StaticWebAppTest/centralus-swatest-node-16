module.exports = async function (context, req) {
  const date = "2025-03-02T18:15:12.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

