module.exports = async function (context, req) {
  const date = "2025-05-21T13:26:22.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

