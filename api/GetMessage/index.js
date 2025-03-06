module.exports = async function (context, req) {
  const date = "2025-03-06T13:20:34.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

