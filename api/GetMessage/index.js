module.exports = async function (context, req) {
  const date = "2024-04-12T06:12:37.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

