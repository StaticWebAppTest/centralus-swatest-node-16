module.exports = async function (context, req) {
  const date = "2023-09-02T11:06:26.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

