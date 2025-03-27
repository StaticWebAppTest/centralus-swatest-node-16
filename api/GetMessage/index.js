module.exports = async function (context, req) {
  const date = "2025-03-27T23:12:30.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

