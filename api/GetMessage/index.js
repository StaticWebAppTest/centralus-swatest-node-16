module.exports = async function (context, req) {
  const date = "2025-06-23T20:15:30.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

