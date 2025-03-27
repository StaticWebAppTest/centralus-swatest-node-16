module.exports = async function (context, req) {
  const date = "2025-03-27T09:13:51.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

