module.exports = async function (context, req) {
  const date = "2025-12-27T04:27:00.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

