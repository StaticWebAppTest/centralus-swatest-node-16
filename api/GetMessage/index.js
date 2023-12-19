module.exports = async function (context, req) {
  const date = "2023-12-19T19:06:02.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

