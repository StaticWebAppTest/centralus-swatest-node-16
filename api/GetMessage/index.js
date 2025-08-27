module.exports = async function (context, req) {
  const date = "2025-08-27T12:27:09.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

