module.exports = async function (context, req) {
  const date = "2025-12-04T12:31:05.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

