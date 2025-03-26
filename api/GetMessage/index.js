module.exports = async function (context, req) {
  const date = "2025-03-26T17:11:31.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

