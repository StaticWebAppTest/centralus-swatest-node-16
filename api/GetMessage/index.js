module.exports = async function (context, req) {
  const date = "2025-02-22T10:11:03.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

