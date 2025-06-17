module.exports = async function (context, req) {
  const date = "2025-06-17T13:28:05.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

