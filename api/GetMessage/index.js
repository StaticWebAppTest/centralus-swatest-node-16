module.exports = async function (context, req) {
  const date = "2025-08-23T11:09:43.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

