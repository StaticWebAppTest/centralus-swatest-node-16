module.exports = async function (context, req) {
  const date = "2025-07-14T23:13:50.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

