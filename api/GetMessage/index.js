module.exports = async function (context, req) {
  const date = "2024-07-16T10:09:14.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

