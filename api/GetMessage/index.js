module.exports = async function (context, req) {
  const date = "2025-03-06T02:21:27.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

