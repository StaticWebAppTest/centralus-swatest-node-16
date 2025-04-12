module.exports = async function (context, req) {
  const date = "2025-04-12T13:18:06.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

