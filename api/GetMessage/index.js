module.exports = async function (context, req) {
  const date = "2025-11-23T10:13:12.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

