module.exports = async function (context, req) {
  const date = "2025-03-11T14:12:48.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

