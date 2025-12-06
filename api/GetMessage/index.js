module.exports = async function (context, req) {
  const date = "2025-12-06T10:13:25.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

