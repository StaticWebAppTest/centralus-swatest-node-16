module.exports = async function (context, req) {
  const date = "2025-04-23T23:12:46.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

