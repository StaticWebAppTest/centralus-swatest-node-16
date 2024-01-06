module.exports = async function (context, req) {
  const date = "2024-01-06T19:06:54.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

