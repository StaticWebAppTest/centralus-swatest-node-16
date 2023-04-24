module.exports = async function (context, req) {
  const date = "2023-04-24T02:02:52.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

