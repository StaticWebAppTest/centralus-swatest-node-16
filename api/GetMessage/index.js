module.exports = async function (context, req) {
  const date = "2025-02-26T23:11:54.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

