module.exports = async function (context, req) {
  const date = "2025-01-13T14:11:45.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

