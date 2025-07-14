module.exports = async function (context, req) {
  const date = "2025-07-14T07:18:20.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

