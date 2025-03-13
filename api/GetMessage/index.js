module.exports = async function (context, req) {
  const date = "2025-03-13T05:12:37.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

