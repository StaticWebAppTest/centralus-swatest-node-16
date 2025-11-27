module.exports = async function (context, req) {
  const date = "2025-11-27T17:11:36.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

