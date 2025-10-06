module.exports = async function (context, req) {
  const date = "2025-10-06T22:11:36.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

