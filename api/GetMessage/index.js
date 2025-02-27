module.exports = async function (context, req) {
  const date = "2025-02-27T13:20:47.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

