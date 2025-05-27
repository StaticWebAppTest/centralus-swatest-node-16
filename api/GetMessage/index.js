module.exports = async function (context, req) {
  const date = "2025-05-27T23:12:26.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

