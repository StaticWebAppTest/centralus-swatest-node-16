module.exports = async function (context, req) {
  const date = "2025-09-27T10:11:33.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

