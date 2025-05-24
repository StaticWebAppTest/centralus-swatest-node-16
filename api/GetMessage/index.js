module.exports = async function (context, req) {
  const date = "2025-05-24T06:17:06.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

