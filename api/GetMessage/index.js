module.exports = async function (context, req) {
  const date = "2025-03-27T17:11:09.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

