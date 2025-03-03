module.exports = async function (context, req) {
  const date = "2025-03-03T13:20:47.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

