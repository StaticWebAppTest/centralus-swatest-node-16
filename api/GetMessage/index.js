module.exports = async function (context, req) {
  const date = "2025-09-22T12:27:04.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

