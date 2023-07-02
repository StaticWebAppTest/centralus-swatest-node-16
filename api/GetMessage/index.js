module.exports = async function (context, req) {
  const date = "2023-07-02T11:07:50.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

