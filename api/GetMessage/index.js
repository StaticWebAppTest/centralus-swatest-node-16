module.exports = async function (context, req) {
  const date = "2024-03-07T11:07:52.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

