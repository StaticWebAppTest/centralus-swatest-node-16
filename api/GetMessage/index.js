module.exports = async function (context, req) {
  const date = "2025-08-27T20:14:09.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

