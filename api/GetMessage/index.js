module.exports = async function (context, req) {
  const date = "2024-04-04T13:09:12.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

