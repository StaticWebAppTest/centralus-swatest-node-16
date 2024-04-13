module.exports = async function (context, req) {
  const date = "2024-04-13T19:06:29.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

