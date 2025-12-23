module.exports = async function (context, req) {
  const date = "2025-12-23T10:16:13.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

