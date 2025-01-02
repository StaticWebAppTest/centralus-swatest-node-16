module.exports = async function (context, req) {
  const date = "2025-01-02T14:10:40.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

