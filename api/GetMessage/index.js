module.exports = async function (context, req) {
  const date = "2024-07-12T06:14:27.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

