module.exports = async function (context, req) {
  const date = "2025-12-21T12:27:06.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

