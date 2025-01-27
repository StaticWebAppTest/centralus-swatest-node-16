module.exports = async function (context, req) {
  const date = "2025-01-27T02:13:15.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

