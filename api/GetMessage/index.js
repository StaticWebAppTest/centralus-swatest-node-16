module.exports = async function (context, req) {
  const date = "2025-03-23T17:09:55.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

