module.exports = async function (context, req) {
  const date = "2025-10-27T12:28:17.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

